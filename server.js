// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const nodemailer = require('nodemailer');

// // const app = express();
// // // const port = 587;
// // const port = process.env.PORT || 3001;

// // // app.use(bodyParser.json());
// // app.use(bodyParser.json({ limit: '10mb' })); // To handle large PDF files
// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.post('/send-quotation-email', (req, res) => {
// //     const { to_email, attachment } = req.body;

// //     // Create a Nodemailer transporter
// //     const transporter = nodemailer.createTransport({
// //         // host: 'smtp.gmail.com',
// //         // port: 587,
// //         // secure: false,
// //         service: 'Gmail',
// //         auth: {
// //             user: 'athirahahmadfauzi@gmail.com',
// //             pass: 'Ath!rah123456789'
// //         }
// //     });

// //     // Send email with attachment
// //     transporter.sendMail({
// //         from: 'athirahahmadfauzi@gmail.com',
// //         to: to_email,
// //         subject: 'Quotation for grass',
// //         text: 'Please find attached quotation PDF.',
// //         attachments: [
// //             {
// //                 filename: 'Quotation.pdf',
// //                 content: attachment.split("base64,")[1], // PDF data as ArrayBuffer
// //                 encoding: 'base64' // Specify encoding
// //             }
// //         ]
// //     }, (error, info) => {
// //         if (error) {
// //             console.error('Error sending email:', error);
// //             res.status(500).send('Error sending email');
// //         } else {
// //             console.log('Email sent:', info.response);
// //             res.send('Email sent');
// //         }
// //     });
// // });

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });

// const express = require('express');
// // const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// // const port = 3000;

// // app.use(bodyParser.json({ limit: '10mb' })); // To handle large PDF files
// // app.use(bodyParser.urlencoded({ extended: true }));


//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         // service: 'gmail', // Use your email service
//         host: 'smtp.gmail.com',
//         port: 587,
//         // secure: false,
//         auth: {
//             user: 'athirahahmadfauzi@gmail.com',
//             pass: 'acrh zdxc gxya qran',
//         },
//     });

//     transporter.verify((error, success) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('All works fine, congratz!');
//         }
//       });

//     const app = express();
//     app.use(express.json());

//     app.post('/send', (req, res, next) => {
//         // const name = req.body.name
//         // const email = req.body.email
//         // const message = req.body.messageHtml
      
//         var mail = {
//             from: 'farmelgrass@gmail.com',
//             to: to_email,
//             subject: 'Quotation for grass',
//             text: 'Please find the attached quotation.',
//             attachments: [
//                 {
//                     filename: 'quotation.pdf',
//                     content: pdf.split("base64,")[1],
//                     encoding: 'base64'
//                 }
//             ],
//         }

//     // Set up email data
//     // var mailOptions = {
//     //     from: 'farmelgrass@gmail.com',
//     //     to: to_email,
//     //     subject: 'Quotation for grass',
//     //     text: 'Please find the attached quotation.',
//     //     attachments: [
//     //         {
//     //             filename: 'quotation.pdf',
//     //             content: pdf.split("base64,")[1],
//     //             encoding: 'base64'
//     //         }
//     //     ],
//     // };

//     // transporter.sendMail(mail, (err, data) => {
//     //     if (err) {
//     //       res.json({
//     //         msg: 'fail'
//     //       })
//     //     } else {
//     //       res.json({
//     //         msg: 'success'
//     //       })
//     //     }
//     //   })
//     // });



//     // Send the email
//     transporter.sendMail(mail, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'farmelgrass@gmail.com',
    pass: 'xetz ljhs yivs lrpr', // Use your actual Gmail password or an app-specific password
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Transporter is ready to send emails.');
  }
});

// Handle POST request for sending email
app.post('/send', async (req, res) => {
  try {
    console.log('Received request to send email:', req.body);
    const { to_email, pdf } = req.body.emailData;

    // Construct email options
    const mailOptions = {
      from: 'farmelgrass@gmail.com',
      to: to_email,
      subject: 'Quotation for grass',
      text: 'Dear Mr/Mrs, \nPlease find the attached quotation for the grass.',
      attachments: [
        {
          filename: 'quotation.pdf',
          content: pdf.split('base64,')[1], // Extract base64 content
          encoding: 'base64',
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.status(200).send({ msg: 'success' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ msg: 'fail' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
