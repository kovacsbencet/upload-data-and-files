const express = require("express");
const { appendFile } = require("fs");
const path = require("path");
const app = express(); 

function getFunction(request, response){
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
}

app.get("/", getFunction);
app.use("/public", express.static(`${__dirname}/../frontend/public`));

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`;
app.listen(port, () => {
    console.log(ipAddress)
});