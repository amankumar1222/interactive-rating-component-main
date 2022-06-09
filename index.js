console.log('life is easy and a game');

let subBtn = document.getElementById('btn');

const breakdownButton = document.querySelectorAll('.name');
breakdownButton.forEach(function(btn) {
  btn.addEventListener('click', function() {
   
 console.log(`${btn.innerHTML}`);

 if(btn.innerHTML == btn.innerHTML ){
   btn.classList.add('active')
   let html = `
   <p>You selected ${btn.id} out of 5</p>
   `
   let rating = document.querySelector('.show')
   rating.innerHTML = html;
   
 }
 

 else {
     console.log('two');
     btn.classList.remove('active')


 }
 
 
  
    


  });
});





subBtn.addEventListener('click', function(){
    let container = document.getElementById('trun')
    let secontainer = document.getElementById('aasan')
    container.style.display = 'none';
    secontainer.style.display = 'block';

})



   