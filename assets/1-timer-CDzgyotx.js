import{f as p,i as S}from"./vendor-DHwbnsIA.js";const n=document.querySelector("[data-start]");n?n.disabled=!0:console.error("Start button not found");const a=document.getElementById("#datetime-picker"),o={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d=null,l=null;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(n.disabled=!0,S.warning({title:"Warning",message:"Please choose a date in the future",position:"topRight"})):(d=t,n.disabled=!1)}};p(a,b);n.addEventListener("click",()=>{d&&(n.disabled=!0,a.disabled=!0,l=setInterval(()=>{const t=d-new Date;if(t<=0){clearInterval(l),m(0),a.disabled=!1;return}m(t)},1e3))});function s(e){return String(e).padStart(2,"0")}function r(e){const f=Math.floor(e/864e5),h=Math.floor(e%864e5/36e5),y=Math.floor(e%36e5/6e4),g=Math.floor(e%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:g}}function m(e){const{days:t,hours:c,minutes:u,seconds:i}=r(e);o.days.textContent=s(t),o.hours.textContent=s(c),o.minutes.textContent=s(u),o.seconds.textContent=s(i)}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=1-timer-CDzgyotx.js.map
