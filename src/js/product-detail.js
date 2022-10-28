import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

import _ from "lodash"
import $ from "jquery"

import "./index.js"
import "./product.js"
import "../css/style.css"
import "../css/reponsive.css"

import { products } from "./db.js"
import { productHome } from "./db.js";

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
      price: event.data.price,
    });
  }

  for (let i = 0; i < cart.length; i++){
    cart[i].total = cart[i].price * cart[i].quantity;
  }

  localStorage.setItem("carts", JSON.stringify(cart));
  alert("Thêm thành công sản phẩm vào giỏ hàng");
  $(".amont-cart").text(cart.length)
};


$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const product = _.find(productHome, { id }) || _.find(products, { id }) ;
  console.log(product);
  $(".non").html(
    `
    <div class="product-detail pt-4 pb-4">
    <div class="container">
        <h2 class="mb-4">Chi tiết sản phẩm</h2>
        <div class="row">
            <div class="col-md-5">
                <div class="product-detail-img">
                    <img src="${product.img}" alt="">
                </div>
            </div>
            <div class="col-md-7">
                <div class="product-detail-warp">
                    <div class="product-warp-header">
                        <h1 class="warp-title">${product.name}</h1>
                        <p class="mt-3">Thương hiệu: Lacoste</p>
                        <div class="size mt-3">
                            <p>Kích thước:</p>
                            <div class="form-size d-flex mt-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                    <label class="form-check-label" for="exampleRadios1">
                                      39
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                      40
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                                    <label class="form-check-label" for="exampleRadios3">
                                      41
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                      42
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                    <label class="form-check-label" for="exampleRadios2">
                                      43
                                    </label>
                                  </div>
                            </div>
                        </div>
                        <p class="price warp-price mt-3">${product.price} đ</p>
                    </div>
                    <div class="product-warp-footer d-flex mt-3">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light btn-down">
                            -
                        </button>
                        <span class="btn quantity">
                            1
                        </span>
                        <button type="button" class="btn btn-light btn-up">
                            +
                        </button>
                      </div>
                        <button type="submit" class="btn-add">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="product-detail-des">
    <div class="container">
        <div class="row">
            <div class="des-heading">Mô tả</div>
            <div class="product-des-wrap mt-4">
                <p>️🔥 Giày Chạy Bộ Nam PEAK Running Ultra Light E222147H</p>
                <p>🎯Chức năng: hấp thụ sốc, chống trượt, chống mài mòn, thoáng khí, thấm mồ hôi, bao bọc, hỗ trợ, cân bằng, chống va đập, nhẹ, tăng, bật</p>
                <p>
                    🎯Cỡ giày: 39 40 41 42 43 44 45</p>
                <p>
                    🎯Màu: Đen, Trắng, Xám</p>
                <p>
                    🎯Địa điểm thích hợp: chạy bộ ngoài trời và trong nhà</p>
            </div>
        </div>
    </div>
</div>
    `
  );
  $(".non").find(".btn-add").on("click",product, addToCart);
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

const url = new URL(location.href);
const id = Number(url.searchParams.get("id"));