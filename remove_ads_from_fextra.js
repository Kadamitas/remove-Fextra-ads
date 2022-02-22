// ==UserScript==
// @name        Remove Ads from Fextra
// @namespace   Violentmonkey Scripts
// @match       https://*.fextralife.com/*
// @grant       none
// @version     1.0
// @author      - Aron
// @description 2/21/2022
// ==/UserScript==


const removeAds = () => {
        try {
          wrapper = document.getElementById("wrapper");
          wrapper.style.paddingLeft = "0px";

        } catch (e) {}
  
        try {
          sidewrapper = document.getElementById("sidebar-wrapper");
          sidewrapper.parentNode.removeChild(sidewrapper);

        } catch (e) {}

}




(function() {
  removeAds();
    window.addEventListener('resize', () => {
        setTimeout(removeAds, 100);
    });
})();
