const express=require('express'),http=require('http'),path=require('path');
const {Server}=require('socket.io');const app=express();const server=http.createServer(app);
const io=new Server(server);app.use(express.static(path.join(__dirname,'..','client')));
io.on('connection',()=>{});server.listen(3000,()=>console.log('Running on 3000'));