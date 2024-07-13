// api/sendEmail.js
import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const sendEmail = async (to, subject, html) => {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.VUE_APP_RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'website@pontis-it.com',
            to: to,
            subject: subject,
            html: html
          })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Failed to send email');
        }

        return data;
      };

      // Send email to site owner
      await sendEmail(
        'lukasjohannesmoeller@protonmail.com',
        subject,
        `<p>Name: ${name}</p>
         <p>Email: ${email}</p>
         <p>Message: ${message}</p>`
      );

      // Send confirmation email to the sender
      const confirmationSubject = 'Bestätigung Ihrer Anfrage';
      const confirmationMessage = `
        <p>Hallo ${name},</p>
        <p>Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
        <p>Hier eine Kopie Ihrer Nachricht:</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
        <p>Mit freundlichen Grüßen,<br>Pontis IT-Consulting</p>
      `;

      await sendEmail(email, confirmationSubject, confirmationMessage);

      res.status(200).json({ success: true, message: "Emails sent successfully" });

    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
