function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"src",i(t,e.data_src)),t.load()}},b=function(t,e){var n,o,r=e._settings,a=t.tagName,s=m[a];if(s)return s(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=i(t,e.data_src),o=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,i=e?r.callback_loaded:r.callback_error,s=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(s,r.class_loading),h(s,a),d(i,s),f(n,-1)},I=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},k=["IMG","IFRAME","VIDEO"],A=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},L=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){A(t,e),L(t)},n),l(t,o))},z=function(t,e,n){var o=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),h(t,o.class_loading)),b(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t),d(o.callback_set,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?x(t,e):A(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&L(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=["IMG","IFRAME"],C=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return M.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=C(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==N.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),z(t,n))}),this._elements=C(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){A(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(M,window.lazyLoadOptions),M});ll=new LazyLoad({elements_selector:".lazy",load_delay:100,threshold:0});function ready(callback){if(document.readyState!=="loading")callback();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",callback);else document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete")callback()})}ready(function(){videoPreviewsInit();var $showMenu=document.getElementById("show-top-menu");if($showMenu){$showMenu.addEventListener("click",function(){var $sidebar=document.getElementById("ana-nav");if($sidebar){var style=getComputedStyle($sidebar);if(style.left==="0px"){$sidebar.style.left="-100%";document.body.style.overflowY=""}else{$sidebar.style.left="0px";document.body.style.overflowY="hidden"}}})}});function videoPreviewsInit(){var blogPosts=document.getElementsByClassName("item-video");if(blogPosts){for(var i=0;i<blogPosts.length;i++){blogPosts[i].addEventListener("mouseover",function(e){showPreview(this)});blogPosts[i].addEventListener("touchstart",function(e){showPreview(this)},{passive:true});blogPosts[i].addEventListener("mouseleave",function(event){var $videoPreview=this.getElementsByClassName("video_preview")[0];if($videoPreview){$videoPreview.style.display="none"}hideImgPreview(this.getElementsByClassName("img_preview")[0])})}}}function hideByClass(elClass){var elements=document.getElementsByClassName(elClass);if(elements){for(var i=0;i<elements.length;i++){elements[i].style.display="none"}}}function showByClass(elClass){var elements=document.getElementsByClassName(elClass);if(elements){for(var i=0;i<elements.length;i++){elements[i].style.display="block"}}}function hideEl(element){if(element){element.style.display="none"}}function showEl(element){if(element){element.style.display="block"}}function getAttr(element,attr){if(element){return element.getAttribute(attr)}return false}var vpNum=1;function showPreview($this){var $videoImg=$this.getElementsByClassName("video-img")[0];var video=getAttr($videoImg,"data-video");var timer=0;hideByClass("video_preview");var imagePreviews=document.getElementsByClassName("img_preview");if(imagePreviews){for(var i=0;i<imagePreviews.length;i++){hideImgPreview(imagePreviews[i])}}if(typeof video!==typeof undefined&&video!==false&&video){var $videoPreview=$this.getElementsByClassName("video_preview")[0];if($videoPreview){$videoPreview.style.display="block"}else{getVideoHeight(video,function(width,height){var heightClass="";var style="";if(width/height>1.5){heightClass=" height";var margin=(width*200/height-300)/2;style='style="margin-left: -'+Math.round(margin)+'px"'}var divVideo=document.createElement("div");divVideo.className="video_back";divVideo.innerHTML='<video id="vp_'+vpNum+'" autoplay="autoplay" muted="muted" loop="loop" playsinline="" webkit-playsinline="" src="'+video+'" class="video_preview'+heightClass+'" '+style+"></video>";$videoImg.parentElement.parentElement.parentElement.after(divVideo);var videoEl=document.getElementById("vp_"+vpNum);vpNum++;videoEl.onloadeddata=function(){var isTouch="ontouchstart"in window||navigator.msMaxTouchPoints>0;if(!isHover($this)&&!isTouch){hideEl($this.getElementsByClassName("video_preview")[0])}}})}}else{var img=getAttr($videoImg,"data-img");var num=getAttr($videoImg,"data-imgnum");var cnt=1;if(typeof img!==typeof undefined&&img!==false&&img){var $imgPreview=$this.getElementsByClassName("img_preview")[0];if(!$imgPreview){var imageHtml=document.createElement("img");imageHtml.setAttribute("referrerpolicy","no-referrer");if(img.indexOf("{i}")!==-1){imageHtml.src=img.split("{i}").join(1);imageHtml.classList.add("img_preview")}else{imageHtml.src=img+"1.jpg";imageHtml.className="img_preview"}imageHtml.onerror=function(){this.display="none"};$videoImg.parentElement.parentElement.parentElement.after(imageHtml)}else{showEl($this.getElementsByClassName("img_preview")[0])}$imgPreview=$this.getElementsByClassName("img_preview")[0];if($imgPreview){if(!$imgPreview.getAttribute("timer")){timer=window.setInterval(function(){if(cnt>=num){cnt=1}if(img.indexOf("{i}")!==-1){$imgPreview.setAttribute("src",img.split("{i}").join(cnt))}else{$imgPreview.setAttribute("src",img+cnt+".jpg")}cnt=cnt+1},500);$imgPreview.setAttribute("timer",timer)}}}}}function isHover(e){return e.parentElement.querySelector(":hover")===e}function isVisible(ele){if(ele){var style=ele.style;return style.width!=="0"&&style.height!=="0"&&style.opacity!=="0"&&style.display!=="none"&&style.visibility!=="hidden"}else{return false}}function getVideoHeight(url,fnCallback){var video=document.createElement("video");video.src=url;video.style.display="none";video.autoplay=true;video.oncanplay=function(){fnCallback(video.offsetWidth,this.offsetHeight);document.body.removeChild(video)};video.onerror=function(){document.body.removeChild(video)};document.body.appendChild(video)}function hideImgPreview($imgPreview){if($imgPreview){if(!isHover($imgPreview.parentElement.parentElement)){$imgPreview.style.display="none";var timer=$imgPreview.getAttribute("timer");if(timer){window.clearInterval(timer);$imgPreview.removeAttribute("timer")}}}}!function(t,e){"use strict";"initCustomEvent"in e.createEvent("CustomEvent")&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var u=e.createEvent("CustomEvent");return u.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),u},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;l=t.target,i=Date.now(),n=t.touches[0].clientX,u=t.touches[0].clientY,a=0,o=0},!1),e.addEventListener("touchmove",function(t){if(!n||!u)return;var e=t.touches[0].clientX,i=t.touches[0].clientY;a=n-e,o=u-i},!1),e.addEventListener("touchend",function(t){if(l!==t.target)return;var e=parseInt(l.getAttribute("data-swipe-threshold")||"20",10),s=parseInt(l.getAttribute("data-swipe-timeout")||"500",10),r=Date.now()-i,c="";Math.abs(a)>Math.abs(o)?Math.abs(a)>e&&r<s&&(c=a>0?"swiped-left":"swiped-right"):Math.abs(o)>e&&r<s&&(c=o>0?"swiped-up":"swiped-down");""!==c&&(l.dispatchEvent(new CustomEvent(c,{bubbles:!0,cancelable:!0})),console&&console.log&&console.log(c+" fired on "+l.tagName));n=null,u=null,i=null},!1);var n=null,u=null,a=null,o=null,i=null,l=null}(this,document);document.addEventListener("swiped-left",function(e){var $sidebar=document.getElementById("ana-nav");if($sidebar){var style=getComputedStyle($sidebar);if(style.left==="0px"){$sidebar.style.left="-100%";document.body.style.overflowY=""}}});
