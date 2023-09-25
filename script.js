const { createApp, onMounted } = Vue;

createApp({
  setup() {
    const updateHeaderMargin = () => {
      let nav = document.querySelector('nav');
      let header = document.querySelector('header');

      setTimeout(() => {
        let navHeightVh = (nav.offsetHeight / window.innerHeight) * 100;
        let navNewHeightVh = navHeightVh + 2;
        header.style.marginTop = `${(navNewHeightVh * window.innerHeight) / 100}px`;
      }, 100);
    };
    
    const updateSchoolHeights = () => {
      let school1 = document.querySelector('#school1');
      let school2 = document.querySelector('#school2');
      let school3 = document.querySelector('#school3');

      school1.style.height = 'auto';
      school2.style.height = 'auto';
      school3.style.height = 'auto';

      setTimeout(() => {
        let school1Height = school1.offsetHeight;
        let school2Height = school2.offsetHeight;
        let school3Height = school3.offsetHeight;

        let maxHeight = Math.max(school1Height, school2Height, school3Height);

        school1.style.height = `${maxHeight}px`;
        school2.style.height = `${maxHeight}px`;
        school3.style.height = `${maxHeight}px`;
      }, 100);
    };

    onMounted(() => {
      updateHeaderMargin();
      updateSchoolHeights();
    });

    window.addEventListener('resize', () => {
      updateHeaderMargin();
      updateSchoolHeights();
    });
  },
}).mount('#app');
