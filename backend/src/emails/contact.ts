export const contactText = (name: string): string => {
	return `
  Cześć ${name},

Dziękuję za wiadomość! Otrzymałem ją i wkrótce się z Tobą skontaktuję.
Zazwyczaj odpowiadam w ciągu 24-48 godzin.

Jeśli sprawa jest pilna, możesz skontaktować się ze mną również przez LinkedIn:
https://www.linkedin.com/in/jakub-kret-925865263

---

Hi ${name},

Thank you for your message! I have received it and will get back to you soon.
I usually reply within 24-48 hours.

If your matter is urgent, you can also reach me via LinkedIn:
https://www.linkedin.com/in/jakub-kret-925865263

Pozdrawiam / Best regards,  
Jakub Kret 
https://kretostan.com]
`;
};

export const contactHtml = (name: string): string => {
	return `
  <h2>Cześć ${name},</h2>
<p>Dziękuję za wiadomość! Otrzymałem ją i wkrótce się z Tobą skontaktuję.<br>
Zazwyczaj odpowiadam w ciągu <strong>24 godzin</strong>.</p>
<p>Jeśli sprawa jest pilna, możesz skontaktować się ze mną również przez
<a href="https://www.linkedin.com/in/jakub-kret-925865263" target="_blank">LinkedIn</a>.</p>

<hr>

<h2>Hi ${name},</h2>
<p>Thank you for your message! 
I have received it and will get back to you soon.<br>
I usually reply within <strong>24 hours</strong>.</p>
<p>If your matter is urgent, you can also reach me via
<a href="https://www.linkedin.com/in/jakub-kret-925865263" target="_blank">LinkedIn</a>.</p>

<br>
<p>Pozdrawiam / Best regards,<br>
<strong>Jakub Kret</strong><br>
<a href="https://kretostan.com" target="_blank">Kretostan.com</a></p>
`;
};
