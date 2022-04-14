const btn = document.getElementById('btn');
const state = document.querySelector('.state');
const main = document.getElementById('main');
let nums = document.querySelectorAll('.num');
let span = document.getElementById('span');

btn.addEventListener('click', function thanks(){
     state.style.display = "none";
     if(state.style.display == "none"){
        state.style.display = "block";
        main.style.display = "none";
     }else{
        state.style.display = "none";
        main.style.display = "block";
     }
   });
     for(let i = 0; i < nums.length; i++){
        nums[i].addEventListener('click', function(){
         nums.value = this.innerHTML
           span.innerHTML = nums.value;
        })
     }