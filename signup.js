const username =document.getElementById('username');
const message1 = document.getElementById('message1');
const email1 = document.getElementById('email1');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2')
const btn1 = document.getElementById('btn1');

const regXX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

btn1.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(username.value.trim() == ''){
        message1.innerText = "username is Null";
        message1.style.display = 'block';
    
    }else if(email1.value.trim() == ''){
        message1.innerText = "email is Null";
        message1.style.display = 'block';
    } else if (!email1.value.match(regXX)){
        message1.innerText = "email is not proper"; 
        message1.style.display = 'block';
    }  else if (password1.value.length<8){
        message1.innerText = "Password should be 8 character";
        message1.style.display = 'block'; 
    }  
      else if(password2.value.trim() == '' || password1.value != password2.value){
        message1.innerText = "Password mismatch";
        message1.style.display = 'block'; 
    } else{
        message1.classList.remove('alert-danger');
        message1.classList.add('alert-success')
        message1.innerText = "success";
        message1.style.display = 'block';
        window.location.href = "./index.html";
    }
    
})

