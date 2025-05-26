// --- PAGE LOADER ---
window.onload = () => {
  let loader = document.querySelector('.loader');
  let container = document.querySelector('.cont');
  setTimeout(function(){
    container.style.visibility = 'hidden';
    container.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
  }, 1200);
}

// --- CUSTOM CURSOR ---
const cursor = document.querySelector('.cursor');
    
document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - -8.5)+"px; left: "+(e.pageX - -2)+"px;")
});

// --- BURGER MENU ---
let icon = document.getElementById("icon");
let links = document.getElementById("links");
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');
const menu3 = document.querySelector('#menu3');
const menu4 = document.querySelector('#menu4');
const menu5 = document.querySelector('#menu5');
const burger = document.querySelector('#burger');

var isOpen = false;

icon.addEventListener('click', () => handleMenuOpen());

let handleMenuOpen = () => {
  if(isOpen) {
    links.classList.remove('isClosed');
    links.classList.add('isOpen');
  } else{
    links.classList.remove('isOpen');  
    links.classList.add('isClosed');
  }
  handleBurgerAnimation();
  isOpen = !isOpen;
}

let handleBurgerAnimation = () => {
  burger.classList.toggle('burger-closed');
  burger.classList.toggle('burger-open');
}

let menus = [menu1, menu2, menu3, menu4, menu5];

menus.forEach(menu => {
  menu.addEventListener('click', () => handleMenuOpen());
});




window.addEventListener('resize', function(){
  if(screen.width > 750){
        contador=0;
        links.classList.remove('isClosed');
        links.className = ('nav__links isOpen');
      }
    });
    


// --- TYPING TEXT ---
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".dotCursor");

const textArray = ["Front-End Developer.  "];
const typingDelay = 80;
const erasingDelay = 70;
const newTextDelay = 2500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


// --- BACK TO TOP ---
const myButton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    myButton.style.display = "flex";
    myButton.style.transition = "all .3s ease-in-out";
  } else {
    myButton.style.display = "none";
    myButton.style.transition = "all .3s ease-in-out";
  }
 };

 function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// EMAIL JS
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   if(campos.name && campos.number && campos.email && campos.subject && campos.message ) {
    btn.value = 'Enviando...';


    const serviceID = 'default_service';
    const templateID = 'template_xnz25fp';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      
    }, (err) => {
      btn.value = '¡Error 😡!';
    });
   } else {
    btn.value = '¡Error 😡!';
    btn.classList.remove('contact__sendBtn');
    btn.classList.add('contact__sendBtnError');
   }
   

   const serviceID = 'default_service';
   const templateID = 'template_xnz25fp';
});


// --- VALIDATION FORMS ---
const $formulario = document.getElementById('form');
const $inputs = document.querySelectorAll('#form [required]');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  number: /^[a-zA-Z0-9_.+-]\d{7,14}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  subject: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
  message:  /^[a-zA-ZÀ-ÿ\s_.+-,]{1,255}$/
}

const campos = {
	name: false,
  number: false,
	email: false,
  subject: false,
  message: false,
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name": 
      if(expresiones.name.test(e.target.value)){
        document.getElementById('name').classList.remove('invalid');
        document.getElementById('name').classList.add('valid');
        campos["name"] = true;
      } else {
        document.getElementById('name').classList.add('invalid');
        document.getElementById('name').classList.remove('valid');
        campos["name"] = false;
      }
    break;
    case "number": 
      if(expresiones.number.test(e.target.value)){
        document.getElementById('number').classList.remove('invalid');
        document.getElementById('number').classList.add('valid');
        campos["number"] = true;
      } else {
        document.getElementById('number').classList.add('invalid');
        document.getElementById('number').classList.remove('valid');
        campos["number"] = false;
      }
    break;
    case "email": 
      if(expresiones.email.test(e.target.value)){
        document.getElementById('email').classList.remove('invalid');
        document.getElementById('email').classList.add('valid');
        campos["email"] = true;
      } else {
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
        campos["email"] = false;
      }
    break;
    case "subject": 
      if(expresiones.subject.test(e.target.value)){
        document.getElementById('subject').classList.remove('invalid');
        document.getElementById('subject').classList.add('valid');
        campos["subject"] = true;
      } else {
        document.getElementById('subject').classList.add('invalid');
        document.getElementById('subject').classList.remove('valid');
        campos["subject"] = false;
      }
    break;
    case "message": 
      if(expresiones.message.test(e.target.value)){
        document.getElementById('message').classList.remove('invalid');
        document.getElementById('message').classList.add('valid');
        campos["message"] = true;
      } else {
        document.getElementById('message').classList.add('invalid');
        document.getElementById('message').classList.remove('valid');
        campos["message"] = false;
      }
    break;
  }
}

$inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

$formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.name && campos.number && campos.email && campos.subject && campos.message ) {
      $formulario.reset();

      document.getElementById('name').classList.remove('invalid');
      document.getElementById('name').classList.remove('valid');
      document.getElementById('number').classList.remove('invalid');
      document.getElementById('number').classList.remove('valid');
      document.getElementById('email').classList.remove('invalid');
      document.getElementById('email').classList.remove('valid');
      document.getElementById('subject').classList.remove('invalid');
      document.getElementById('subject').classList.remove('valid');
      document.getElementById('message').classList.remove('invalid');
      document.getElementById('message').classList.remove('valid');
      btn.value = 'Enviado...';
      setTimeout(() => {
        btn.value = '¡Enviado ✔️!';
      }, 1000);
      setTimeout(() => {
        btn.value = 'Enviar mensaje';
        
      }, 3000);
    } else {
      btn.value = '¡Error 😡!';
      btn.classList.remove('contact__sendBtn');
      btn.classList.add('contact__sendBtnError');
      dotCursor.classList.remove('dotCursor');
      dotCursor.classList.add('dotCursorError');
      setTimeout(() => {
        btn.value = 'Enviar mensaje';
        btn.classList.add('contact__sendBtn');
        btn.classList.remove('contact__sendBtnError');
        dotCursor.classList.add('dotCursor');
        dotCursor.classList.remove('dotCursorError');
      }, 2000);
    }
});

// BACK TO TOP ON RELOAD PAGE
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});