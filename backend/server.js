const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configure Nodemailer with your email service provider details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshitmehrotra28@gmail.com',
    pass: 'akshitmvn',
  },
});
app.get('/', async (req, res) => {
  res.send('hi')
});
// Define an endpoint to handle email sending
app.post('/', async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  try {
    // Send the email
    await transporter.sendMail({
      from: 'akshitmehrotra28@gmail.com',
      to: recipientEmail,
      subject,
      text: message,
    });

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
