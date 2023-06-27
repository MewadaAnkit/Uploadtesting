const express =  require('express');
const app = express();
const Port = process.env.PORT || 3000;
const multer = require('multer');
const Upload = require('./Model/Upload')
const path = require('path')
app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs');
app.set('views',"views")



const storage = multer.diskStorage({
    destination:function (req,file,cb){
        return cb(null,'./public/uploads')
    },
    filename: function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({ storage});
app.get('/',(req,res)=>{
    res.render('form')
})
app.use(express.static(path.resolve('./public')))

const Db = require('./Model/connection');
const exp = require('constants');

app.post('/upload',upload.single('image'),async(req,res)=>{
     const {title} = req.body;
   const uploaded = await Upload.create({
        title,
        image:`/uploads/${req.file.filename}`
    })

    res.send('uploaded successfully')

})
app.get('/images',async(req,res)=>{
   const images = await Upload.find({})
   
   
    res.render('display',{images:images})
})


app.listen(Port,()=>{
     console.log('Server Started Successfully')
})