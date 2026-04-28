const express = require('express');
const router = require('./express');

const app = express();
app.use(router);

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});