import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import $ from "jquery"

import "../css/style.css"
import "../css/reponsive.css"

let menuMobile=document.querySelector('.menu-mb .menu-mb-icon');
let headerNav=document.querySelector('.nav-mb');
let menuClose=document.querySelector('.mb-close i');
let overflow=document.querySelector('.over');

 
$(function () {
  let cart = JSON.parse(localStorage.getItem("carts")) || [];

  $(".amont-cart").text(cart.length);
});



menuMobile.onclick = function(){
  console.log('test');
  headerNav.classList.add('open')
  overflow.classList.add('open')
 }
menuClose.onclick = function(){
    headerNav.classList.remove('open');
     overflow.classList.remove('open');
 }