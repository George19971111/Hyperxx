var express = require('express'); 
var mysql = require('mysql'); 
var bodyParser = require('body-parser'); 
var SessionStore = require('express-mysql-session'); 
var connect = require('connect'); 
var router = express.Router(); 
var cookie = require('cookie'); 
var cookieParser = require('cookie-parser'); 
var session = require('express-session'); 
var app = express(); 
var http = require('http'); 
var server = http.createServer(app); 
var rand,mailOptions,host,link,auth;
var nodemailer = require('nodemailer');
var fs = require('fs');


app.set('view engine', 'ejs'); 
app.use('/static', express.static('./static'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false})); 
var options = { 
host: 'localhost', 
user: 'root', 
password: '', 
database: 'diplomdb' 
} 
var sessionStore = new SessionStore(options) 
var cfg; 
app.use(session(cfg ={ 
key : 'session_name', 
secret : 'session_secret', 
resave : true, 
store: sessionStore, 
saveUninitialized: true , 
cookie: { 
} 
})); 
var connection = mysql.createConnection({ 
host: 'localhost', 
user: 'root', 
password: '', 
database: 'diplomdb' 
}); 

connection.connect(function(error) { 
if(error){ 
console.log('Error'); 
} else{ 
console.log('Connected'); 
} 
}); 

var sess; 

app.get('/',function (req, res, next) { 
sess = req.session; 
if(sess.name){ 
res.render('index',{}); 
}else{ 
res.render('index',{}); 
} 
}); 

app.get('/inform', function (req, res,next) { 
res.render('inform', {}); 
}) 

app.get('/user', function (req, res,next) { 
res.render('user', {}); 
}) 


app.post('/registr',function (req, res, next) { 
console.log(req.body.username)
var reqObj = req.body; 
var insertSql = "Insert into userdata SET ?"; 
var insertValues = { 
"login":reqObj.username, 
"password":reqObj.pass,
"mail":reqObj.email
}; 
var query = connection.query(insertSql, insertValues, function (err) { 
if(err){ 
console.log('SQL error' + err); 
}else { 
res.json({message: "Data in database"}) 
} 
}) 
}) 





app.post('/login', function (req, res, next) { 
console.log(req.body)
connection.query('select login, password from userdata where login = "'+req.body.username+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
console.log(rows)
if(rows.length>0) 
{ 
if(req.body.pass == rows[0].password) 
{ 
res.status(200); 
req.session.name = req.body.username; 
res.json({message: 'ok'}); 
} else 
{ 
res.status(418); 
res.json({message: 'Неверный пароль'}); 
} 
} else 
{ 
res.status(202); 
res.json({message: 'Данного пользователя не существует'}); 
} 
} 
}); 
}); 
app.post('/user',function(req,res){
 
sess = req.session; 
 
if(sess.name) { 

res.json({message: sess.name}); 
} else { 
res.status(202); 
res.json({error: 'Вы не вошли (Или от вас воняет)'}); 
} 
}); 
app.get('/logout',function(req,res){ 

var sid = req.session.id; 
req.session.destroy(function(err) { 
if(err) { 
console.log(err); 
} else { 
console.log(sid); 
res.json({message: 'ok'}); 
} 
}); 
}); 




app.get('/computers', function (req, res, next) { 
connection.query('select name,cost,img from computers', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/computerforbuy', function (req, res, next) { 
connection.query('select name,cost,img from computerforbuy', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/monitori', function (req, res, next) { 
connection.query('select name,cost,img from monitori', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 

app.get('/klaviaturimishki', function (req, res, next) { 
connection.query('select name,cost,img from klaviaturimishki', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 




app.post('/proverka123', function (req, res, next) { 
connection.query('select name,cost,img,videocarta,processor,materinskayaplata,opetativnayapamat,zvookovaia,harddisk,blockpit from confcomps  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/prosessor123', function (req, res, next) { 
connection.query('select name,cost,img,information from prossesor  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/zvookoviekarty123', function (req, res, next) { 
connection.query('select name,cost,img,information from zvookoviekarty  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/harddisk123', function (req, res, next) { 
connection.query('select name,cost,img,information from harddisk  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/blockpit123', function (req, res, next) { 
connection.query('select name,cost,img,information from blockpit  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/videocard123', function (req, res, next) { 
connection.query('select name,cost,img,information from videocard  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/operativka123', function (req, res, next) { 
connection.query('select name,cost,img,information from operativka  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/materinskiepl123', function (req, res, next) { 
connection.query('select name,cost,img,information from materinskiepl  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/klaviaturyconf123', function (req, res, next) { 
connection.query('select name,cost,img,information from klaviaturyconf  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

}); 
app.post('/mouseconf123', function (req, res, next) { 
connection.query('select name,cost,img,information from mouseconf  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

});
app.post('/monikiconf123', function (req, res, next) { 
connection.query('select name,cost,img,information from monikiconf  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

});
app.post('/naushnikiconf123', function (req, res, next) { 
connection.query('select name,cost,img,information from naushnikiconf  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

});
app.post('/kovrikydliaconf123', function (req, res, next) { 
connection.query('select name,cost,img,information from kovrikydliaconf  where name = "'+req.body.data+'"', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 

});
app.get('/videocard', function (req, res, next) { 
connection.query('select name,cost,img,information from videocard', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/kovrikydliaconf', function (req, res, next) { 
connection.query('select name,cost,img,information from kovrikydliaconf', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/mouseconf', function (req, res, next) { 
connection.query('select name,cost,img,information from mouseconf', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/klaviaturyconf', function (req, res, next) { 
connection.query('select name,cost,img,information from klaviaturyconf', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/naushnikiconf', function (req, res, next) { 
connection.query('select name,cost,img,information from naushnikiconf', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
});
app.get('/monikiconf', function (req, res, next) { 
connection.query('select name,cost,img,information from monikiconf', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/operativka', function (req, res, next) { 
connection.query('select name,cost,img,information from operativka', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/materinskiepl', function (req, res, next) { 
connection.query('select name,cost,img,information from materinskiepl', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/prossesor', function (req, res, next) { 
connection.query('select name,cost,img,information from prossesor', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/zvookoviekarty', function (req, res, next) { 
connection.query('select name,cost,img,information from zvookoviekarty', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/harddisk', function (req, res, next) { 
connection.query('select name,cost,img,information from harddisk', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 
app.get('/blockpit', function (req, res, next) { 
connection.query('select name,cost,img,information from blockpit', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 





app.post('/sendemail',function(req,res){ 
	console.log(req.body)
 sendMail(req.body.tel);
}); 

app.post('/sendemail02',function(req,res){ 
	console.log(req.body)
 sendMail(req.body.tel,req.body.name_ofc,req.body.mail,req.body.address,req.body.obshce1,req.body.data);
}); 




app.get('/naushniki', function (req, res, next) { 
connection.query('select name,cost,img from naushniki', function (error, rows, fields) { 
if(!!error){ 
console.log('Error in the query'); 
} else 
{ 
	res.json(rows);
} 
}); 
}); 

app.post('/call',function(req,res){ 
sess = req.session; 
if(sess.name) { 
res.json({message: "ok"}); 
} 
}); 

server.listen(1337, function () { 
console.log('Listining port 1337...'); 
});

function sendMail(tel,name_ofc,mail,address,obshce1,data) { 
const file = fs.readFileSync(__dirname + '/static/css/email.css', "utf8"); 
const output =` 
<!DOCTYPE html PUBLIC> 
<head> 
<meta name="viewport" content="width=device-width" /> 

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<title>ZURBemails</title> 



</head> 

<body bgcolor="#FFFFFF"> 
 `+mail+`<br>
 `+tel+`<br>
  `+name_ofc+`<br>
 `+obshce1+`<br> 
 `+data+`<br>
`+address+`<br>
</body> 
</html>` 
let smtpTransport; 
try { 
smtpTransport = nodemailer.createTransport({ 
service: 'gmail', 
secure: false, 
auth: { 
user: 'salihanski@gmail.com', 
pass: 'Qwerty12#$' 
}, 
}); 
} catch (e) { 
return console.log('Error: ' + e.name + ":" + e.message); 
} 

let
 
mailOptions = { 
from: '"От Заказчика" <salihanski@gmail.com>', 
to: 'khionidi1997@gmail.com', 
subject: 'Обращение с сайта ', 
text: 'Это проверочное сообщение', 
html: output 
} 
smtpTransport.sendMail(mailOptions, async function(error, info){ 
if (error) { 
console.log(error); 
} else { 
console.log('Email sent: ' + info.response); 
} 
}); 
}