!function(){"use strict";const t=document.getElementById("lienzo"),e=t.getContext("2d",{alpha:!1}),n=document.createElement("canvas"),o=n.getContext("2d"),a=2*Math.PI,l={ancho:0,alto:0,imgAncho:0,imgAlto:0},c={},i=document.getElementById("byn"),g=document.getElementById("pepas"),h=document.getElementById("cambiar"),m=document.getElementById("colorear");let s,d=[];function r(){l.ancho=t.width=n.width=window.innerWidth/1.5|0,l.alto=t.height=n.height=window.innerHeight/1.5|0,c.columnas=l.ancho/15|0,c.filas=l.alto/15|0,c.total=c.columnas*c.filas,async function(){const t=await fetch(`https://picsum.photos/${l.ancho}/${l.alto}`),n=new Image;n.crossOrigin="Anonymous",n.onload=()=>{l.imgAncho=n.naturalWidth,l.imgAlto=n.naturalHeight,o.drawImage(n,0,0),e.drawImage(n,0,0),s=o.getImageData(0,0,l.ancho,l.alto),d=s.data},n.src=t.url}()}window.onresize=r,r(),i.onclick=()=>{if(d.length){for(let t=0;t<d.length;t+=4){const e=(d[t]+d[t+1]+d[t+2])/3;d[t]=e,d[t+1]=e,d[t+2]=e}e.putImageData(s,0,0)}},g.onclick=()=>{if(d.length){const t={x:7.5,y:7.5};e.clearRect(0,0,l.ancho,l.alto);for(let n=0;n<c.columnas;n++){const l=15*n;for(let n=0;n<c.filas;n++){const c=15*n,i=o.getImageData(l,c,15,15).data,g=i.length/4;let h=[0,0,0];for(let t=0;t<i.length;t+=4){const e=i[t],n=i[t+1],o=i[t+2];h[0]+=e,h[1]+=n,h[2]+=o}h[0]=h[0]/g|0,h[1]=h[1]/g|0,h[2]=h[2]/g|0,e.fillStyle=`rgb(${h.join(",")})`,e.beginPath(),e.arc(l+t.x,c+t.y,t.x,0,a),e.fill()}}}},h.onclick=()=>{if(d.length){for(let t=0;t<d.length;t+=4){const e=d[t],n=d[t+1],o=d[t+2];d[t]=o,d[t+1]=n,d[t+2]=e}e.putImageData(s,0,0)}},m.onclick=()=>{if(d.length){for(let t=0;t<d.length;t+=4){const e=d[t],n=d[t+1],o=d[t+2];n<120&&e<120&&o<120?(d[t]=46,d[t+1]=48,d[t+2]=47):o>=120?(d[t]=0,d[t+1]=105,d[t+2]=207):e>=120?(d[t]=255,d[t+1]=55,d[t+2]=57):n>=120&&(d[t]=200,d[t+1]=155,d[t+2]=0)}e.putImageData(s,0,0)}}}();