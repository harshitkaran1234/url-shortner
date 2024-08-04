const express = require('express');
const { connectDB } = require('./config');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

connectDB(process.env.DB_STRING);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
