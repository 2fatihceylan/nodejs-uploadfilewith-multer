const express = require('express');

const app = express();

const path =require('path');

app.use(express.json());

const multer =require('multer');






const storage = multer.diskStorage({
    destination: (request, file, callback)=>{
        callback(null, './Images')
    },

    filename: (request, file, callback)=>{
        console.log(file);
        callback(null, Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})


app.post('/upload',upload.single('image'), (request, response)=>{
    response.json({message: "img uploaded"});
})






app.listen('5000',()=>{
    console.log('Server started...');
})