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
        <div style="color:#000000;font:14px Courier New;">Mit freundlichen Grüßen,</div>
        <div style="color:#000000;font:14px Courier New;">Pontis IT-Consulting</div>
        <table cellpadding="0" style="max-width:570px;border-collapse:collapse;font-size:14px">
          <td style="margin:0.1px;padding:0 0 10px">
            <a href="https://pontis-it.com" target="_blank">
              <img src="https://pontis-it.com/pontis_black.png" width="132" valign="top" alt="photo-logo">
            </a>
          </td>
          <tr>
            <td style="margin:0.1px;padding:0;font:15.1px/19.1px Courier New;">
              <span style="color:#000000;font:bold 15px Courier New;">Pontis IT-Consulting</span>&nbsp;
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:1px 0 0;font:14.1px/17.8px Courier New;">
              <span style="color:#000000;font:14px Courier New;">Inhaber: Johannes Möller</span>&nbsp;
            </td>
          </tr>
          <tr>
            <td style="height:10px;font:1px/1px Courier New;">&nbsp;</td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:0;font-size:13px;line-height:16.5px">
              <table cellpadding="0" style="border-collapse:collapse">
                <tr>
                  <td style="margin:0.1px;padding:0;font:13.1px/16.5px Courier New;">
                    <span style="color:#000000;font:13px Courier New;">Dithmarscher Str. 10</span>&nbsp;
                  </td>
                </tr>
                <tr>
                  <td style="margin:0.1px;padding:0;font:13.1px/16.5px Courier New;">
                    <span style="color:#000000;font:13px Courier New;">24113 Kiel</span>&nbsp;
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:1px 0 0;font:13.1px/16.5px Courier New;">
              <span style="color:#000000;font:bold 13px Courier New;">Tel.</span>&nbsp;
              <a href="tel:+49 176 61336647" style="text-decoration:none;color:#000000;font:13px Courier New;" target="_blank">+49 174 2719685</a>&nbsp;
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:1px 0 0;font:13.1px/16.5px Courier New;">
              <span style="color:#000000;font:bold 13px Courier New;">E-Mail</span>&nbsp;
              <a href="mailto:kontakt@pontis-it.com" style="text-decoration:none;color:#000000;font:13px Courier New;" target="_blank">kontakt@pontis-it.com</a>&nbsp;
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:1px 0 0;font:13.1px/16.5px Courier New;">
              <span style="color:#000000;font:bold 13px Courier New;">Internet</span>&nbsp;
              <a href="https://pontis-it.com/" style="text-decoration:none;color:#000000;font:13px Courier New;" target="_blank">pontis-it.com</a>&nbsp;
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:10px 0 0;">
              <table cellpadding="0" style="border-collapse:collapse">
                <tr>
                  <td style="margin:0.1px;padding:0 5px 0 0">
                    <a href="https://www.linkedin.com/in/lukas-johannes-moeller/" target="_blank" valign="top">
                      <img src="https://pontis-it.com/linkedin.png" width="28" style="display:block" valign="top" alt="linkedin">
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:10px 0 0;line-height:1px;font-size:1px">
              <img src="https://pontis-it.com/banner.png" width="336" alt="banner">
            </td>
          </tr>
          <tr>
            <td style="margin:0.1px;padding:10px 0 0 0;font:13px/16.5px Courier New;color:#000000">
              <div>Sitz: Kiel</div>
              <div>USt. ID-NR.:</div>
              <div>Fianzamt: Finanzamt Kiel</div>
              <div>Rechtsform: Einzelunternehmen</div>
              <div>Gerichtsstand: Amtsgericht Kiel</div>
            </td>
          </tr>
        </table>
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
