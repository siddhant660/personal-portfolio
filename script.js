    const navIcon = document.querySelector('.nav-icon');
    const homeButton = document.querySelector('.home-button');
    const closeBtn = document.querySelector('.close-btn');

    navIcon.addEventListener('click', () => {
        homeButton.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        homeButton.classList.remove('active');
    });