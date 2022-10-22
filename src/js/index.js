import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import $ from "jquery"
import _ from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";

import "../css/style.css"
import "../css/reponsive.css"

import { products } from "./db";


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
 
//  $(".list-product").html( products.map(
//     (p) => `
//       <div class="col-md-3 col-6 position-relative">
//         <a href="product-detail.html" class="home-product-item">
//           <div class="thumbnails">
//               <img src="${p.img}" alt="${p.name}" class="product-img">
//               <img src="${p.img_hover}" alt="" class="product-img-hover">
//           </div>
//           <div class="product-content ">
//               <h3 class="product-content-title text-center mt-2 mb-1 fw-bold">${p.name}</h3>
//               <div class="product-content-footer d-flex justify-content-around align-items-center">
//                   <div class="price">${p.price}đ</div>
//                   <div class="rating">
//                       <img src="./src/image/star.png" alt="" />
//                       <img src="./src/image/star.png" alt="" />
//                       <img src="./src/image/star.png" alt="" />
//                       <img src="./src/image/star.png" alt="" />
//                       <img src="./src/image/star.png" alt="" />
//                   </div>
//               </div>
//           </div>
//           </a>
//           <div class="add-cart"><i class="bi bi-cart-plus"></i></div>
//       </div>
//     `
//   ).join('')
//  )

// add to cart
const addToCart = (event) => {
  event.preventDefault();

  const cart = JSON.parse(localStorage.getItem("carts")) || [];

  const item = _.find(cart, { product: event.data.id });

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantity: 1,
    });
  }

  localStorage.setItem("carts", JSON.stringify(cart));
  alert("Thêm thành công sản phẩm vào giỏ hàng");
};

// render product
$(function () {
  const productTemplate = $("#product").html();
  const product = _.template(productTemplate); // compile

  $(".list-product").append(
    _.map(products, (pr) => {
      const dom = $(product(pr));

      dom.find(".add-cart").on("click", pr, addToCart);

      return dom;
    })
  );
  $(".product").append(
    _.map(products, (pr) => {
      const dom = $(product(pr));

      // dom.find(".add-cart").on("click", pr, addToCart);

      return dom;
    })
  );
});