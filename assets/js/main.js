const   menu_btn = document.querySelector('.hamburger'),
        mobile_menu = document.querySelector('.mobile-menu');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})
// FAQ
const faq = document.querySelectorAll('.kotak-pertanyaan');
faq.forEach((faq)=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('di-jawab');
	});
});

// Appear On Scroll
const observer = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => {
        console.log(entry)
		if (entry.isIntersecting) {
            entry.target.classList.add('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Dark Mode
const 	mode_btn = document.getElementById('dark-mode'),
        body = document.body;

mode_btn.addEventListener('click', () => {
    body.classList.toggle('dark');
});