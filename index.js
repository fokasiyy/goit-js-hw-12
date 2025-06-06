import{a as g,S as y,i as u}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const b="https://pixabay.com/api/",L="50347658-285688eb76e59c705e33623f4";async function v(o,r=1){const e={key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};try{return(await g.get(b,{params:e})).data}catch(i){throw console.error("Error fetching images:",i),i}}const m=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=document.querySelector(".load-more");let w=new y(".gallery a");function S(o){const r=o.map(e=>`
    <li class="photo-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${e.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${e.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${e.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${e.downloads}</span>
        </div>
      </div>
    </li>`).join("");m.insertAdjacentHTML("beforeend",r),w.refresh()}function q(){m.innerHTML=""}function C(){a&&a.classList.remove("is-hidden")}function B(){a&&a.classList.add("is-hidden")}function M(){c&&c.classList.remove("is-hidden")}function h(){c&&c.classList.add("is-hidden")}const $=document.querySelector(".form"),P=document.querySelector(".load-more");let n,l=1;const f=15;$.addEventListener("submit",o=>{o.preventDefault(),h(),q(),n=o.target.elements["search-text"].value.trim(),n&&(l=1,p(n))});P.addEventListener("click",o=>{h(),l++,p(n),E()});async function p(o){C();try{const r=await v(o,l,f),e=r.hits;e&&e.length>0?(S(e),l>=Math.ceil(r.totalHits/f)?u.show({title:"ℹ️",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",titleColor:"white",backgroundColor:"#4CAF50",position:"topRight"}):M()):u.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",titleColor:"white",backgroundColor:"#ef4040",position:"topRight"})}catch(r){console.error(r)}finally{B()}}function E(){const o=document.querySelector(".gallery-item");o&&setTimeout(()=>{scrollBy({top:o.getBoundingClientRect().height*2,left:0,behavior:"smooth"})},200)}
//# sourceMappingURL=index.js.map
