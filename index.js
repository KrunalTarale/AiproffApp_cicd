const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());

const connectToDatabase = require('./module/conn.module')
connectToDatabase();

app.use(express.json());

require('dotenv').config();

app.use(express.static(path.join(__dirname, '/frontend/dist')));

const get_countries = require('./controller/get_countries.route')
app.use(get_countries)
const get_states = require('./controller/get_states.route')
app.use(get_states)
const get_cities = require('./controller/get_cities.route')
app.use(get_cities)
const get_topics = require('./controller/get_topic.route')
app.use(get_topics)
const add_inquiry = require('./controller/add_inquiry.route')
app.use(add_inquiry)
const Subscriber = require('./controller/subscribe_user.route')
app.use(Subscriber)
const UpdateSubscriber = require('./controller/update_subscribed_user.route')
app.use(UpdateSubscriber)
const Send_result = require('./controller/send_result.route')
app.use(Send_result)
const SignUp = require('./controller/signup.route');
app.use(SignUp);
const Login = require('./controller/login.route');
app.use(Login);
const update_article = require('./controller/update_article.route');
app.use(update_article);
const get_user_article = require('./controller/get_user_article.route');
app.use(get_user_article);
const forgetpassword = require('./controller/forgetpassword.route');
app.use(forgetpassword);
const updatepassword = require('./controller/updatepassword.route');
app.use(updatepassword);
const delete_user_Article = require('./controller/delete_user_Article.route');
app.use(delete_user_Article);
const webhook = require('./controller/webhook.route');
app.use(webhook);
const whatsapp_webhook = require('./controller/whatsapp_webhook.route');
app.use(whatsapp_webhook);
const getWhatsAppdata = require('./controller/getWhatsAppdata.route');
app.use(getWhatsAppdata);
const getwhatsappuserbyid = require('./controller/get_whatsappuserbyid.route');
app.use(getwhatsappuserbyid);
const sendwhatsAppMessages = require('./controller/sendwhatsAppMessages.route');
app.use(sendwhatsAppMessages);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
})

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 1338');
})