const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/', (req, res) => {
    res.send('SUPINFO Portfolio API is running...');
});

// Contact API
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'tekengyvan2@gmail.com', // User's email
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully from ${email}`);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message.' });
    }
});

// Blog API (Mock)
app.get('/api/blog', (req, res) => {
    const articles = [
        { id: 1, title: 'Comment fonctionne React', content: '...', tags: ['React', 'Frontend'] },
        { id: 2, title: 'Comment concevoir une API Node.js', content: '...', tags: ['Node.js', 'Backend'] },
        { id: 3, title: 'Introduction aux bases de données', content: '...', tags: ['SQL', 'PostgreSQL'] },
    ];
    res.json(articles);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
