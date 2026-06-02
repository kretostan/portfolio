import { Request, Response } from "express";

import { contactHtml, contactText } from "../emails/contact";

import transporter from "../util/mailer";

type MailBody = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type MailResponse = {
	success?: boolean;
	message:
		| {
				en: string;
				pl: string;
		  }
		| string;
	isValid?: boolean[] | undefined;
};

export const sendMail = async (
	req: Request<unknown, unknown, MailBody>,
	res: Response<MailResponse>,
) => {
	try {
		const { name, email, subject, message } = req.body;
		if (!name || !email || !subject || !message) {
			return res.status(400).json({
				success: false,
				message: {
					en: "Please fill out all fields!",
					pl: "Proszę wypełnić wszystkie pola!",
				},
				isValid: [!!name, !!email, !!subject, !!message],
			});
		}
		await transporter.sendMail({
			from: `Kretostan Portfolio <${process.env.EMAIL}>`,
			to: `Jakub Kret <${process.env.EMAIL}>`,
			replyTo: `${name} <${email}>`,
			subject: subject,
			text: message,
			html: `
<h1>Kontakt poprzez stronę portfolio:</h1>
<p>${message}</p>`,
		});
		// Auto reply
		await transporter.sendMail({
			from: `Kretostan Portfolio <${process.env.EMAIL}>`,
			to: `${name} <${email}>`,
			replyTo: `Jakub Kret <${process.env.EMAIL}>`,
			subject: "Potwierdzenie / Confirmation",
			text: contactText(name),
			html: contactHtml(name),
		});
		return res.status(200).send({
			success: true,
			message: "Mail sent successfully",
		});
	} catch (error) {
		console.error("Error sending mail: ", error);
		return res.status(500).send({ message: "Failed to send mail" });
	}
};
