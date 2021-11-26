function garnisadd(){
lfadd=ceadd=rfadd=ltadd=ctadd=rtadd=false;
lfper=ceper=rfper=ltper=ctper=rtper=false;
retren=reper=false; reobj=false;

let newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "lfadd");
document.getElementById("lf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=true;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;

document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "lfper");
document.getElementById("lf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=true;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "lfmore");
document.getElementById("lf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("lfmore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";




newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ceadd");
document.getElementById("ce").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=true;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ceper");
document.getElementById("ce").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=true;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "cemore");
document.getElementById("ce").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("cemore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";



newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rfadd");
document.getElementById("rf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=true;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rfper");
document.getElementById("rf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=true;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rfmore");
document.getElementById("rf").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("rfmore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";



newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ltadd");
document.getElementById("lt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=true;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ltper");
document.getElementById("lt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=true;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ltmore");
document.getElementById("lt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("ltmore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";




newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ctadd");
document.getElementById("ct").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=true;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ctper");
document.getElementById("ct").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=true;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "ctmore");
document.getElementById("ct").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("ctmore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";




newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rtadd");
document.getElementById("rt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Добавить");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=true;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rtper");
document.getElementById("rt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 5; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Перевести");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=true;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "rtmore");
document.getElementById("rt").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 6; grid-row-start: 3; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("rtmore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";




newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "renajm");
document.getElementById("townreservdiv").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 14; grid-row-start: 1; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Нанять");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "retren");
document.getElementById("townreservdiv").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 14; grid-row-start: 2; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Тренировать");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=true;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "reper");
document.getElementById("townreservdiv").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 14; grid-row-start: 3; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Переформировать в образование");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=true;
reobj=false;
document.getElementById('trupe').style.display='none';
}


newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "reobj");
document.getElementById("townreservdiv").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 14; grid-row-start: 4; background: white; opacity: 0.4;");
newdiv.onmouseover=function(){
	alter("Объеденить войска одного типа");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=true;
document.getElementById('trupe').style.display='none';
}


newdiv=document.createElement("div");
newdiv.classList.add("acrylic1", "shadow");
newdiv.setAttribute("id", "remore");
document.getElementById("townreservdiv").appendChild(newdiv);
newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 15; grid-row-start: 5; background: white; opacity: 0.4; padding: 0; font-size: x-small;");
newdiv.onmouseover=function(){
	alter("Показать больше");
}
newdiv.onmouseout=function(){
	document.getElementById("alter").style.display="none";
}
newdiv.onclick=function(){
	lfadd=false;
	ceadd=false;
	rfadd=false;
	ltadd=false;
	ctadd=false;
	rtadd=false;

	lfper=false;
	ceper=false;
	rfper=false;
	ltper=false;
	ctper=false;
	rtper=false;

retren=false;
reper=false;
reobj=false;
document.getElementById('trupe').style.display='none';
}

newdiv=document.createElement("div");
document.getElementById("remore").appendChild(newdiv);
newdiv.setAttribute("style", "margin-top: -8px; font-size: small;");
newdiv.innerHTML="...";
} 