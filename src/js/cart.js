import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import $ from "jquery"
import _ from "lodash";
import "./index.js"
import { products } from "./db";

import "../css/style.css"
import "../css/reponsive.css"




 
let cart = JSON.parse(localStorage.getItem("carts")) || []; 

const deleteItem = (event) => {
    if (confirm("Chắc chắn xóa không?")) {
        cart = _.filter(cart, (item) => item.product !== event.data.product.id);

        localStorage.setItem("carts", JSON.stringify(cart));

        event.target.closest(".item").remove();
    }
};

const increment = (event) => {
    const product = _.find(cart, { product: event.data.product.id });

    product.quantity += 1;
    const item = $(event.target.closest(".item"));
    item.find(".quantity").text(product.quantity);

    localStorage.setItem("carts", JSON.stringify(cart));
};

const decrement = (event) => {
    const product = _.find(cart, { product: event.data.product.id });

    if (product.quantity === 1) return;
    else product.quantity -= 1;

    const item = $(event.target.closest(".item"));
    item.find(".quantity").text(product.quantity);

    localStorage.setItem("carts", JSON.stringify(cart));
};

$(function () {
    const items = _.map(_.cloneDeep(cart), (item) => {
        item.product = _.find(products, { id: item.product });
        console.log(item.product)
        return item;
    });

    $(".cart-list").prepend(
        _.map(items, (i) => {
            const itemTemplate = $("#item").html();
            const item = _.template(itemTemplate);
            const dom = $(item(i));

            dom.find(".btn-delete").on("click", i, deleteItem);
            dom.find(".btn-up").on("click", i, increment);
            dom.find(".btn-down").on("click", i, decrement);
            
            return dom;
        })
    );
});
 
// $(function(){
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   if(cart.length === 0){
//     //trống
//   }
//   else{
//     cart = _map(cart, (item) => {
//       item.product = _.find(products, {id: item.product});
//       return item;
//     })
//     console.log("cart");
//   }
// })





let menuMobile=document.querySelector('.menu-mb .menu-mb-icon');
  let headerNav=document.querySelector('.nav-mb');
 let menuClose=document.querySelector('.mb-close i');
 let overflow=document.querySelector('.over');

 
 menuMobile.onclick = function(){
  headerNav.classList.add('open')
  overflow.classList.add('open')
 }
 menuClose.onclick = function(){
    headerNav.classList.remove('open');
     overflow.classList.remove('open');
 }