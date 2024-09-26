
// Scroll sections

let sections =document.querySelectorAll(section);



window.onscroll = () => {
    const header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 50);
};
