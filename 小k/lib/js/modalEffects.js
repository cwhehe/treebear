"use strict";var ModalEffects=function(){var overlays;overlays=document.querySelectorAll(".md-overlay"),[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(el,i){var modal=document.querySelector("#"+el.getAttribute("data-modal")),close=modal.querySelector(".md-close");function removeModalHandler(){var hasPerspective,video;hasPerspective=classie.has(el,"md-setperspective"),(video=$(".md-show video")[0])&&video.load&&video.load(),classie.remove(modal,"md-show"),hasPerspective&&classie.remove(document.documentElement,"md-perspective")}el.addEventListener("click",function(ev){classie.add(modal,"md-show"),overlays.forEach(function(overlay){overlay.removeEventListener("click",removeModalHandler),overlay.addEventListener("click",removeModalHandler)}),classie.has(el,"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)}),close&&close.addEventListener("click",function(ev){ev.stopPropagation(),removeModalHandler()})})}();