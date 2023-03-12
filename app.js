const express = require('express')
const PORT = process.env.PORT || 5000


const app = express();


app.use(express.json());

app.use(express.urlencoded());

app.use(express.static('public'));




app.get('/form', (req,res) =>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/formPost', (req,res) =>{
   console.log(req.body);
})

app.listen(PORT,() =>{
    console.log(`Server listning at http://localhost:${PORT}`);
});
