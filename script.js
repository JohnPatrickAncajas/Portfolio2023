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

    var navHeight = nav.offsetHeight + 20;

    var header = document.querySelector('.header');
    header.style.marginTop = navHeight + 'px';
};