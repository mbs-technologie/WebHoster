/*!
//Description: //Core scripts to handle the entire theme// This file should be included in all pages
 !**/
 
function swapStyle(o){document.getElementById("whstyle").setAttribute("href",o);var a=o;localStorage.setItem("whColor",a)}if($(document).ready(function(){$(".portlet-widgets .fa-chevron-down, .portlet-widgets .fa-chevron-up").click(function(){$(this).toggleClass("fa-chevron-down fa-chevron-up")}),$(".box-close").click(function(){$(this).closest(".portlet").hide("slow")}),$(function(){$("[data-rel='tooltip']").tooltip()}),$("[data-toggle=popover]").popover({html:!0}),$("#setting-btn").click(function(){$(this).toggleClass("open"),$("#setting-box").toggleClass("open")}),$("#fo-btn").click(function(o){o.preventDefault(),$(".footer-warp").toggleClass("open")}),$(".task-lists li input").on("click",function(){$(this).parent().toggleClass("todo-done")}),$(".collapse").on("show.bs.collapse",function(){var o=$(this).attr("id");$('a[href="#'+o+'"]').closest(".panel-heading").addClass("accordion-active"),$('a[href="#'+o+'"] .panel-title span').html('<i class="fa fa-angle-down bigger-110"></i>')}),$(".collapse").on("hide.bs.collapse",function(){var o=$(this).attr("id");$('a[href="#'+o+'"]').closest(".panel-heading").removeClass("accordion-active"),$('a[href="#'+o+'"] .panel-title span').html('<i class="fa fa-angle-right bigger-110"></i>')}),$(".toggle").on("click",function(){var o=$("#"+$(this).data("toggle"));return o.is(":visible")?o.addClass("hide").removeClass("show"):o.addClass("show").removeClass("hide"),!1}),$("body").on("hide.bs.modal",function(){$(".modal:visible").size()>1&&$("html").hasClass("modal-open")===!1?$("html").addClass("modal-open"):$(".modal:visible").size()<=1&&$("html").removeClass("modal-open")}),$("body").on("show.bs.modal",".modal",function(){$(this).hasClass("modal-scroll")&&$("body").addClass("modal-open-noscroll")}),$("body").on("hide.bs.modal",".modal",function(){$("body").removeClass("modal-open-noscroll")}),$("body").on("hidden.bs.modal",".modal:not(.modal-cached)",function(){$(this).removeData("bs.modal")}),$("body").on("click",".dropdown-menu.hold-on-click",function(o){o.stopPropagation()}),$(function(){$("#btn-loading").click(function(){$(this).button("loading").delay(2e3).queue(function(){$(this).button("reset"),$(this).dequeue()})})}),$("li.dropdown").addClass("show-on-hover"),$(window).scroll(function(){$(this).scrollTop()>50?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").click(function(){return $("body,html").animate({scrollTop:0},800),!1}),$(".label").addClass("arrowed-in-right arrowed-in"),$("#Secondary_Navbar-Account").addClass("user-box-no-images"),$("#Secondary_Navbar-Account .dropdown-menu").addClass("dropdown-user")}),localStorage.getItem("whColor")){var sheet=localStorage.getItem("whColor");$("#whstyle").attr("href",sheet)}var Apps=function(){return{init:function(){handleNavTopBar(),handleNavTopBar2()},initNavTopBar:function(){$(window).scroll(function(){$(".top-navbar").offset().top>50?$("body").addClass("top-nav-collapse"):$("body").removeClass("top-nav-collapse")})},initNavTopBar2:function(){$(window).scroll(function(){$(".top-navbar").offset().top>50?$(".navbar-fixed-top, .navbar-brand").addClass("top-nav-collapse"):$(".navbar-fixed-top, .navbar-brand").removeClass("top-nav-collapse")})}}}();

/*!
//end
 !**/