const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const messageRoutes = require('./components/message/messageRouter');

app.use(cors());
app.use(bodyParser.json());
app.use('/message', messageRoutes);

app.listen(5000, () => {
    console.log("Listening on port 5000");
});