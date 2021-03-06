const express=require('express');
const app=express();
const path=require('path')

app.listen(3030)
app.get('/',function(req,res){
    let file=path.resolve('./index.html');
    res.sendFile(file)
})
app.get('/register',function(req,res){
    let file=path.resolve('public/register.html');
    res.sendFile(file)
})
app.get('/login',function(req,res){
    let file=path.resolve('public/login.html');
    res.sendFile(file)
})
app.get('*',function(req,res){
    if(req.url.includes('.')){
        let file=path.resolve('public'+req.url)
        return res.sendFile(file)
    }
    res.send('Not found')
})