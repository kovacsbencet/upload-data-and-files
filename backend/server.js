const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express(); 

function getFunction(request, response){
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
}

app.use(fileUpload());
app.get("/", getFunction);
app.use("/upload", express.static(`${__dirname}/../frontend/upload`));
app.use("/public", express.static(`${__dirname}/../frontend/public`));


app.post("/", (req, res) => {

    const uploads = path.join(`${__dirname}/../frontend/upload/`);

    const picture = req.files.picture;

    const answer = {}

    
    if(picture){
        console.log(picture)
        picture.mv(`${uploads}${picture.name}`);
    }
    answer.pictureName = picture.name
    res.send(answer)
})


const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`;
app.listen(port, () => {
    console.log(ipAddress)
});