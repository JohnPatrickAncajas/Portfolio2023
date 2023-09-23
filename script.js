const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')

window.addEventListener('resize', function() {

  let nav = document.querySelector('nav');
  let header = document.querySelector('header');
    
  let navHeightVh = (nav.offsetHeight / window.innerHeight) * 100;
  let navNewHeightVh = navHeightVh + 2;
  header.style.marginTop = `${(navNewHeightVh * window.innerHeight) / 100}px`;


  let school1 = document.querySelector('#school1');
  let school2 = document.querySelector('#school2');
  let school3 = document.querySelector('#school3');

  school1.style.height = 'auto';
  school2.style.height = 'auto';
  school3.style.height = 'auto';

  let school1Height = school1.offsetHeight;
  let school2Height = school2.offsetHeight;
  let school3Height = school3.offsetHeight;

  let maxHeight = Math.max(school1Height, school2Height, school3Height);
    
  school1.style.height = `${maxHeight}px`;
  school2.style.height = `${maxHeight}px`;
  school3.style.height = `${maxHeight}px`;
  
});