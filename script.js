const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')

window.onload = function() {
    
  var nav = document.querySelector('nav');

  var header = document.querySelector('header');

  var navHeight = nav.offsetHeight;

  var navHeightVh = (navHeight / window.innerHeight) * 100;

  var navNewHeightVh = navHeightVh + 2;

  header.style.marginTop = (navNewHeightVh * window.innerHeight) / 100 + "px";
};