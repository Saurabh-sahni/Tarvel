const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    // show menu
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }
    // hide menu
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
    // hide menu on click
    const navLink = document.querySelectorAll('.nav-link');
    
    function linkAction(){
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click' , linkAction))
    

    //change header
    function scrollHeader(){
        const header = document.getElementById('header');
        if(this.scrollY >= 100) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader)
   

      const videoFile = document.getElementById('video-file'),
            videoButton = document.getElementById('video-btn'),
            videoIcon = document.getElementById('video-btn-icon')

      function playPause() {
          if(videoFile.paused){
              videoFile.play()
              videoIcon.classList.add('ri-pause-line');
              videoIcon.classList.remove('ri-play-line');
          } else {
              videoFile.pause();
              videoIcon.classList.remove('ri-pause-line');
              videoIcon.classList.add('ri-play-line');
          }
      }

    videoButton.addEventListener('click', playPause); 

    function finalVideo() {
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
    }
    videoFile.addEventListener('ended', finalVideo);

    // scroll-up
    
     function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 500) scrollUp.style.display = 'block';
        else scrollUp.style.display = 'none';
    }
    window.addEventListener('scroll', scrollUp)

    //scroll section active link
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop + 500,
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    //----------------dark mode--------------//
    
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })


   