// api/sendEmail.js
import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.VUE_APP_RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'website@pontis-it.com',
          to: 'lukasjohannesmoeller@protonmail.com',
          subject: subject,
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`
        })
      });

      const data = await response.json();

      if (response.ok) {
        res.status(200).json({ success: true, message: "Email sent successfully" });
      } else {
        res.status(response.status).json({ success: false, message: data.message });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
