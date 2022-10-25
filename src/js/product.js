import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import $ from "jquery"
import _ from "lodash"
import {productHome} from "./db.js"

import "../css/style.css"
import "../css/reponsive.css"


$(function () {
  const productTemplate = $("#product-home").html();
  const product = _.template(productTemplate); // compile
  console.log("index");

  $(".product").append(
    _.map(productHome, (p) => {
      const dom = $(product(p));
      // dom.find(".add-cart").on("click", p, addToCart);
      return dom;
    })
  );

  $(".filter-checkbox").append(
    _.uniq(productHome.map(({ category }) => category)).map((c) => {
        const categoryTemplate = $("#category-template").html();
        const template = _.template(categoryTemplate);

        const dom = $(template({ category: c }));

        return dom;
    })
  );
  $(".filter-trademark").append(
    _.uniq(productHome.map(({ trademark }) => trademark)).map((t) => {
        const trademarkTemplate = $("#trade-template").html();
        const template = _.template(trademarkTemplate);

        const dom = $(template({ trademark: t }));

        return dom;
    })
  );
});

$(function () {
  let cart = JSON.parse(localStorage.getItem("carts")) || [];

  $(".amont-cart").text(cart.length);
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