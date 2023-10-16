// This code deals with header margin, div height and scrolling adjustment

const { createApp, onMounted, ref } = Vue;

createApp({
  setup() {
    const navHeight = ref(0);

    // This part is about responsive top margin of header

    const updateHeaderMargin = () => {
      let nav = document.querySelector('nav');
      let header = document.querySelector('header');

      setTimeout(() => {
        let navHeightVh = (nav.offsetHeight / window.innerHeight) * 100;
        let navNewHeightVh = navHeightVh + 2;
        header.style.marginTop = `${(navNewHeightVh * window.innerHeight) / 100}px`;
      }, 100);
    };
    
    // This part is about responsive and equal height of div

    const updateSchoolHeights = () => {
      let school1 = document.querySelector('#school1');
      let school2 = document.querySelector('#school2');
      let school3 = document.querySelector('#school3');

      let school1Title = document.querySelector('#school1Title');
      let school2Title = document.querySelector('#school2Title');
      let school3Title = document.querySelector('#school3Title');

      school1.style.height = 'auto';
      school2.style.height = 'auto';
      school3.style.height = 'auto';

      school1Title.style.height = 'auto';
      school2Title.style.height = 'auto';
      school3Title.style.height = 'auto';

      setTimeout(() => {
        let school1Height = school1.offsetHeight;
        let school2Height = school2.offsetHeight;
        let school3Height = school3.offsetHeight;

        let school1TitleHeight = school1Title.offsetHeight;
        let school2TitleHeight = school2Title.offsetHeight;
        let school3TitleHeight = school3Title.offsetHeight;

        let schoolMaxHeight = Math.max(school1Height, school2Height, school3Height);

        let schoolTitleMaxHeight = Math.max(school1TitleHeight, school2TitleHeight, school3TitleHeight);

        school1.style.height = `${schoolMaxHeight}px`;
        school2.style.height = `${schoolMaxHeight}px`;
        school3.style.height = `${schoolMaxHeight}px`;

        school1Title.style.height = `${schoolTitleMaxHeight}px`;
        school2Title.style.height = `${schoolTitleMaxHeight}px`;
        school3Title.style.height = `${schoolTitleMaxHeight}px`;
      }, 50);
    };

    // This part is about scrolling adjustment

    const scrollToSection = (sectionId) => {
      let element = document.querySelector(sectionId);
      let navHeight = document.querySelector('nav').offsetHeight;
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top - navHeight,
          behavior: "smooth",
        });
      }
    };

    // This part deals with mounting, event listening (resize) and return value

    onMounted(() => {
      updateHeaderMargin();
      updateSchoolHeights();
    });

    window.addEventListener('resize', () => {
      updateHeaderMargin();
      updateSchoolHeights();
    });

    return {
      scrollToAbout: () => scrollToSection('#about'),
      scrollToExperience: () => scrollToSection('#experience'),
      scrollToEducation: () => scrollToSection('#education'),
    };
  },
}).mount('#app');