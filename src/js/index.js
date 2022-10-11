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

$('.multiple-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000
  });