import nodemailer from "nodemailer";

const auth = {
	user: process.env.EMAIL,
	pass: process.env.EMAIL_PASS,
};

const transporter = nodemailer.createTransport(
	process.env.NODE_ENV === "production"
		? {
				host: "ssl0.ovh.net",
				port: 465,
				secure: true,
				auth,
			}
		: {
				host: "smtp.ethereal.email",
				port: 587,
				auth,
			},
);

export default transporter;
