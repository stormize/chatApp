var socket=io.connect('http://127.0.0.1:4000');


var message = document.getElementById('message');
    handle = document.getElementById('handle'),
     btn = document.getElementById('send'),
     output= document.getElementById('output'),
     feedback=document.getElementById('feedback');


//emit events
message.addEventListener('keypress',function(){
  socket.emit('feedback',handle.value);
});

btn.addEventListener('click',function(){
  socket.emit('chat',{
    'handle':handle.value,
    'message':message.value
    });
    message.value="";
});
socket.on('chat',function(data){

  output.innerHTML +='<p><strong>'+data.handle+':</strong>'+data.message+'</p>';
});
socket.on('feedback',function(data){
  feedback.innerHTML="";
  feedback.innerHTML='<p>'+data+'is writing.... </p>';
});
