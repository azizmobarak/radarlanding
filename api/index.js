const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 9900;
const app = express();
const msql = require('mysql');
const nodemailer = require("nodemailer");

const cors = require('cors')
app.use(bodyparser.json());
app.use(bodyparser.text());
app.use(cors());

//const cors = require("cors");
app.get('/api', (req, res) => {
    res.send('working here')
})

app.post('/api', cors(), async(req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "68.65.122.160",
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'contact@getintohome.store', // generated ethereal user
            pass: 'xxxxxx', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'contact@getintohome.store', // sender address
        to: "elgoujilimorad@gmail.com", // list of receivers
        subject: "from radar page : " + req.body.subject + "", // Subject line
        text: "from " + req.body.from + "\n" + "Message : " + req.body.text + "", // plain text body
        //html: "<b>Hello world?</b>", // html body
    }, );

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    res.send({ status: 'OK' });
});


app.listen(port, () => {
    console.log(port);
})