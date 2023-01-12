/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',() =>{
      navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click',() =>{
      navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
     skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkill(){
  let itemClass = this.parentNode.className

  for(i=0;i < skillsContent.length;i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
if(itemClass === 'skills__content skills__close'){
  this.parentNode.className = 'skills__content skills__open'
}
skillsHeader.forEach((el) => {
  el.addEventListener('click',toggleSkill)
});

}


/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click',() =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContents => {
      tabContents.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tab.forEach(tab => {
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')

  })
})


/*==================== SERVICES MODAL ====================*/
  const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

  let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
  }

  modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', () => {
      modal(i)
    })
  })

  modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
      modalViews.forEach((modalView) => {
        modalViews.classList.remove('active-modal')
      })
    })
  });

/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new swiper('.portfolio__container',{
  cssMode:true,
  loop:true,

  navigation:{
    nextE1:'.swiper-button-next',
    prevE1:'.swiper-button-prev',
  },
  pagination: {
    el:'.swiper-pagination',
    clickable:true,
  },

});
/*==================== TESTIMONIAL ====================*/

let swiperTensimoial = new swiper('.tensimonial__container',{
  cssMode:true,
  loop:true,
  grabCursor:true,

  pagination: {
    el:'.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },
  breakpoints:{
    568:{
      slidesPerView: 2,
    }
  }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive()
{
  const scrollY = window.pageYoffset

   sections.forEach(current => {
     const sectionHeight = current.offsetHeight
     const sectionTop = current.offsetTop - 50;
     sectionId = current.getAttribute('id')


     if(scrollY > sectionTop && scrollY <= sectionTop  + sectionHeight){
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
   });

}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){

     const nav = document.getElementById('header')
     if(this.scrollY >= 80) nav.classList.add('scroll-header');
     else nav.classList.remove('scroll-header')
}


window.addEventListener('scroll',scrollHeader)


/*==================== SHOW SCROLL UP ====================*/

function scrollup(){
  const scrollup = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollup.classList.add('show-scroll');
  else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

