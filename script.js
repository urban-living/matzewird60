const t=new Date('2026-10-10T17:00:00');
function u(){let d=t-new Date();if(d<0)return;
let days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);
countdown.textContent=`${days} Tage ${h} Std ${m} Min ${s} Sek`;}
setInterval(u,1000);u();