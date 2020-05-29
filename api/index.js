const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 9900;
const app = express();
const msql = require('mysql');
const cors = require('cors')

app.use(cors());

const con = msql.createConnection({
        database: "landing",
        user: "root",
        password: '',
        port: 222
    })
    //const cors = require("cors");

app.post('/api', cors(), (req, res) => {
    var info = req.body;
    console.log(req.body)
    if (req.body.text !== null) {
        con.query("insert into messages (fromemail,subject,message) values ('" + info.from + "','" + info.subject + "','" + info.text + "')",
            (err, rows, fields) => {
                if (err) console.log(err)
                else {
                    res.send({ status: 'OK' });
                }
            }
        )
    }
})

app.listen(port, () => {
    console.log(port);
})