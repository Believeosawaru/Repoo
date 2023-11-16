document.querySelector('.bars').addEventListener('click', () => {
   document.querySelector('.navlist').classList.add('show');
   
   document.querySelector('.bars').classList.add('bars-remove');
   
   document.querySelector('.exit').classList.add('exit-show')
});

document.querySelector('.exit').addEventListener('click', () => {
   document.querySelector('.navlist').classList.remove('show');
  
   document.querySelector('.exit').classList.remove('exit-show');
   
  document.querySelector('.bars').classList.remove('bars-remove');
})