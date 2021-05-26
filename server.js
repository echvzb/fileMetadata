'use strict';

var express = require('express');
var cors = require('cors');

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'),function(req, res){
  try {
    const {file} = req;
    res.json({name:file.originalname,type:file.mimetype,size:file.size});
  }catch(err) {
    res.send(400);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
