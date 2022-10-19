import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from "jquery"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";

import "../css/style.css"
import "../css/reponsive.css"


$('.multiple-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  let menuMobile=document.querySelector('.menu-mb .menu-mb-icon');
  let headerNav=document.querySelector('.nav-mb');
 let menuClose=document.querySelector('.mb-close i');
 let overflow=document.querySelector('.over');

 
 menuMobile.onclick = function(){
  console.log('test');
  headerNav.classList.add('open')
  overflow.classList.add('open')
 }
 menuClose.onclick = function(){
  headerNav.classList.remove('open');
     overflow.classList.remove('open');
 }
 

 // function hidemenu(){
 //     headerNav.classList.remove('open');
 //     overflow.classList.remove('open');
 // }
 // menuClose.addEventListener('click',hidemenu)       