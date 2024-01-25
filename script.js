const message = document.getElementById('message');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

  const regX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

btn.addEventListener('click',(e)=>{
 
  e.preventDefault();
 
  if(email.value.trim() == ''){
    message.innerText = "email is Null";
    message.style.display = 'block';
  }
  else if (!email.value.match(regX)){
    message.innerText = "email is not proper"; 
    message.style.display = 'block';
  }
  else if (password.value.length<8){
    message.innerText = "Password should be 8 character";
    message.style.display = 'block'; 
  }
  else{
    
    message.classList.remove('alert-danger');
    message.classList.add('alert-success')
    message.innerText = "success";
    message.style.display = 'block';
    window.location.href = "./index.html";
  }
})