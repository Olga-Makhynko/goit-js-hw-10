import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{f as S,i as u}from"./assets/vendor-njWUcVeN.js";const o=document.querySelector("[data-start]"),a=document.getElementById("datetime-picker"),n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d=null,l=null;!o||!a||!n.days||!n.hours||!n.minutes||!n.seconds?console.error("Some required elements were not found"):o.disabled=!0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];if(!t||t<=new Date){if(o.disabled=!0,toastInstance)try{u.hide({transitionOut:"fade"})}catch(r){console.error("Error while hiding toast:",r)}return toastInstance=u.warning({title:"Warning",message:"Please choose a date in the future",position:"topRight"}),!1}else d=t,o.disabled=!1}};S(a,b);o.addEventListener("click",()=>{if(!d){console.error("User has not selected a date!");return}o.disabled=!0,a.disabled=!0,l=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(l),m(0),a.disabled=!1,o.disabled=!0;return}m(t)},1e3)});function s(e){return String(e).padStart(2,"0")}function g(e){const h=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),y=Math.floor(e%36e5/6e4),p=Math.floor(e%6e4/1e3);return{days:h,hours:f,minutes:y,seconds:p}}function m(e){const{days:t,hours:r,minutes:i,seconds:c}=g(e);n.days.textContent=s(t),n.hours.textContent=s(r),n.minutes.textContent=s(i),n.seconds.textContent=s(c)}
//# sourceMappingURL=1-timer.js.map
