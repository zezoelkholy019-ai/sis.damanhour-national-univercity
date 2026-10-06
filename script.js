function colorchange(){

 document.body.classList.toggle('dark');

const btn =document.getElementById('darkbtn');
const icon=darkbtn.querySelector('i');

if(document.body.classList.contains('dark')){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
}






}

const menubtn = document.getElementById('menubtn');
const menu = document.getElementById('menu');

menubtn.addEventListener('click',function(){
menu.classList.toggle('active');



});

