var msg=document.querySelector('#publishmsg')
if(msg){
    msg.innerHTML="post - {{}} is published ";
    document.querySelector('form input[type="submit"]').onclick=function(){
    setTimeout(function(){
        msg.style.opacity="1";
    },100)
    setTimeout(function(){
    msg.style.opacity="0"
    },1000)
    }
}





window.onload=function(){
    var users=[];
localStorage.setItem('users',this.users);
console.log("suers :"+users)
}


