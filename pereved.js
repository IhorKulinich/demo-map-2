function pereobrf(i, u, k, parrent){
								
								if (Math.trunc(garnisone[i][6][u-1][1]/k)>0){
									document.getElementById("pereobr").style.display="block";
									garnisone[i][8].push([garnisone[i][6][u-1][0],Math.trunc(garnisone[i][6][u-1][1]/k)*k,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]]);
									addarms(i,garnisone[i][8].length,8,"pereobrdiv");

									if (garnisone[i][6][u-1][1]-Math.trunc(garnisone[i][6][u-1][1]/k)*k==0){
										garnisone[i][6].splice(u-1,1);
										document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

										deletearm1(i,u,parrent);
								} else {
									document.getElementById(parrent+u.toString()+"chis").innerHTML=garnisone[i][6][u-1][1]-Math.trunc(garnisone[i][6][u-1][1]/k)*k;
									garnisone[i][6][u-1][1]+=-Math.trunc(garnisone[i][6][u-1][1]/k)*k;
								}
							}
}


document.getElementById("perevvse").onclick=function () {
pereved[7]=garnisone[pereved[0]][pereved[2]][pereved[1]][1];
garnisone[pereved[0]][pereved[4]].push([pereved[6],pereved[7],pereved[8],pereved[9],pereved[10]]);
if (document.getElementById(pereved[5]+"pusto")){
	document.getElementById(pereved[5]).removeChild(document.getElementById(pereved[5]+"pusto"));
}
addarms(pereved[0],garnisone[pereved[0]][pereved[4]].length,pereved[4],pereved[5]);
garnisone[pereved[0]][pereved[2]].splice(pereved[1],1);
document.getElementById(pereved[3]).removeChild(document.getElementById(pereved[3]+(pereved[1]+1).toString()));
if (garnisone[pereved[0]][pereved[2]].length==0){
	if(pereved[3]=="townreservdiv"){
	let newdiv=document.createElement("div");
	newdiv.classList.add("acrylic2", "shadow");
	newdiv.setAttribute("id", pereved[3]+"pusto");
	document.getElementById(pereved[3]).appendChild(newdiv);
	newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 14; grid-row-start: 1; padding: 0; font-size: small;");
	newdiv.innerHTML="Пусто";
	} else {
	let newdiv=document.createElement("div");
	newdiv.classList.add("acrylic2", "shadow");
	newdiv.setAttribute("id", pereved[3]+"pusto");
	document.getElementById(pereved[3]).appendChild(newdiv);
	newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
	newdiv.innerHTML="Пусто";
}}
if (garnisone[pereved[0]][pereved[2]].length!=0){
	if (pereved[1]+2<=garnisone[pereved[0]][pereved[2]].length+1){
	for (k=pereved[1]+2; k<=garnisone[pereved[0]][pereved[2]].length+1; k++){
		document.getElementById(pereved[3]+k.toString()).id=pereved[3]+(k-1).toString();
		document.getElementById(pereved[3]+k.toString()+"rangob").id=pereved[3]+(k-1).toString()+"rangob";
		document.getElementById(pereved[3]+k.toString()+"chis").id=pereved[3]+(k-1).toString()+"chis";
		document.getElementById(pereved[3]+k.toString()+"level").id=pereved[3]+(k-1).toString()+"level";

		let a1=pereved[0],a2=pereved[2],a3=pereved[3];

					document.getElementById(pereved[3]+(k-1).toString()).onmouseover=function () {
						alter(garnisone[a1][a2][k-3][4]+"<br>Подробнее..");
					}
					document.getElementById(pereved[3]+(k-1).toString()).onmouseout=function(){document.getElementById("alter").style.display="none";};


					document.getElementById(pereved[3]+(k-1).toString()).onclick=function(){
						if(lfadd&&(a3=="ce"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,0,"lf",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,0,"lf",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,0,"lf",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);			
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,0,"lf",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,0,"lf",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,0,"lf",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}

						} else
						if(ceadd&&(a3=="lf"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,1,"ce",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,1,"ce",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,1,"ce",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,1,"ce",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,1,"ce",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,1,"ce",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(rfadd&&(a3=="lf"||a3=="ce"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,2,"rf",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,2,"rf",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,2,"rf",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,2,"rf",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,2,"rf",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,2,"rf",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(ltadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,3,"lt",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,3,"lt",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,3,"lt",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,3,"lt",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,3,"lt",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,3,"lt",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(ctadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="lt"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,4,"ct",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,4,"ct",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,4,"ct",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,4,"ct",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,4,"ct",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,4,"ct",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(rtadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,5,"rt",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,5,"rt",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,5,"rt",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,5,"rt",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,5,"rt",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,5,"rt",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						}












						 else


						if(lfper&&a3=="lf"){
							document.getElementById("range").max=garnisone[a1][0][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,0,a3,0,"",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.setAttribute("style", "font-size: x-small;");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.setAttribute("style", "font-size: x-small;");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ceper&&a3=="ce"){
							document.getElementById("range").max=garnisone[a1][1][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,1,a3,0,"",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);

							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в левый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в правый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(rfper&&a3=="rf"){
							document.getElementById("range").max=garnisone[a1][2][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,2,a3,0,"",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в левый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ltper&&a3=="lt"){
							document.getElementById("range").max=garnisone[a1][3][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,3,a3,0,"",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в центральный фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ctper&&a3=="ct"){
							document.getElementById("range").max=garnisone[a1][4][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,4,a3,0,"",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(rtper&&a3=="rt"){
							document.getElementById("range").max=garnisone[a1][5][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,5,a3,0,"",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в центральный фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в правый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
							}
						} else
						if(retren&&a3=="townreservdiv"){

								document.getElementById("train").style.display="block";
								garnisone[a1][8].push([garnisone[a1][6][k-3][0],garnisone[a1][6][k-3][1],garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]]);
								addarms(a1,garnisone[a1][7].length,7,"traindiv");
								garnisone[a1][6].splice(k-3,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(a3+(k-2).toString()));

								deletearm1(a1,k-2,a3);
						} else
						if(reper&&a3=="townreservdiv"){

								document.getElementById("obr").style.display="block";
								document.getElementById("obr").style.marginLeft="846";

						document.getElementById("obrotd").onclick=function(){
								pereobrf(a1,k-2,15,a3)
							}

						document.getElementById("obrvsv").onclick=function(){
								if (obrvsv){
									pereobrf(a1,k-2,60,a3);
							}
						}

						document.getElementById("obrrota").onclick=function(){
								if (obrrota){
									pereobrf(a1,k-2,240,a3);
							}
						}

						document.getElementById("obrbat").onclick=function(){
								if (obrbat){
									pereobrf(a1,k-2,960,a3);
							}
						}

						document.getElementById("obrpolk").onclick=function(){
								if (obrpolk){
									pereobrf(a1,k-2,2880,a3);
							}
						}

						document.getElementById("obrbrig").onclick=function(){
								if (obrbrig){
									pereobrf(a1,k-2,8640,a3);
							}
						}

						document.getElementById("obrdiv").onclick=function(){
							if (obrdiv){
									pereobrf(a1,k-2,17280,a3);
							}
						}
								
						} else 
						if(reobj&&a3=="townreservdiv"){
							if(obj.length==0){
								obj.push(k-3,[garnisone[a1][6][k-3][0],garnisone[a1][6][k-3][1],garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]]);

								for (j=0; j<garnisone[a1][6].length; j++){

									if(obj[1][0]==garnisone[a1][6][j][0]&&obj[1][2]==garnisone[a1][6][j][2]&&obj[1][3]==garnisone[a1][6][j][3]){
										document.getElementById(a3+(j+1).toString()).style.border="1px solid yellow";
										if (document.getElementById(a3+(j+1).toString()).classList.contains("acrylic2")){
											document.getElementById(a3+(j+1).toString()).classList.remove("acrylic2");
											document.getElementById(a3+(j+1).toString()).classList.add("acrylic")
										}
								}}
							}
							else if (obj.length==2){
								deletearm(a1,k-2,a3);
							}
						} else{
							document.getElementById("trupe").style.display="grid";
							document.getElementById("arm1").innerHTML=garnisone[a1][a2][k-3][1];
							document.getElementById("arm2").innerHTML=garnisone[a1][a2][k-3][2];
							document.getElementById("arm3").innerHTML=garnisone[a1][a2][k-3][3];
							document.getElementById("arm4").innerHTML=garnisone[a1][a2][k-3][4];
						}
	}}
}}

























































lfadd=ceadd=rfadd=ltadd=ctadd=rtadd=false;
lfper=ceper=rfper=ltper=ctper=rtper=false;
retren=reper=false; reobj=false;
pereved=[];
document.getElementById("ranger").style.display="none";
document.getElementById("obr").style.display="none";
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
}


document.getElementById("perev").onclick=function () {
pereved[7]=parseInt(document.getElementById("range").value);
garnisone[pereved[0]][pereved[4]].push([pereved[6],pereved[7],pereved[8],pereved[9],pereved[10]]);
if (document.getElementById(pereved[5]+"pusto")){
	document.getElementById(pereved[5]).removeChild(document.getElementById(pereved[5]+"pusto"));
}
addarms(pereved[0],garnisone[pereved[0]][pereved[4]].length,pereved[4],pereved[5]);

if(pereved[7]==garnisone[pereved[0]][pereved[2]][pereved[1]][1]){
garnisone[pereved[0]][pereved[2]].splice(pereved[1],1);
document.getElementById(pereved[3]).removeChild(document.getElementById(pereved[3]+(pereved[1]+1).toString()));
if (garnisone[pereved[0]][pereved[2]].length!=0){
	if (pereved[1]+2<=garnisone[pereved[0]][pereved[2]].length+1){
	for (k=pereved[1]+2; k<=garnisone[pereved[0]][pereved[2]].length+1; k++){
		document.getElementById(pereved[3]+k.toString()).id=pereved[3]+(k-1).toString();
		document.getElementById(pereved[3]+k.toString()+"rangob").id=pereved[3]+(k-1).toString()+"rangob";
		document.getElementById(pereved[3]+k.toString()+"chis").id=pereved[3]+(k-1).toString()+"chis";
		document.getElementById(pereved[3]+k.toString()+"level").id=pereved[3]+(k-1).toString()+"level";

		let a1=pereved[0],a2=pereved[2],a3=pereved[3];

					document.getElementById(pereved[3]+(k-1).toString()).onmouseover=function () {
						alter(garnisone[a1][a2][k-3][4]+"<br>Подробнее..");
					}
					document.getElementById(pereved[3]+(k-1).toString()).onmouseout=function(){document.getElementById("alter").style.display="none";};


					document.getElementById(pereved[3]+(k-1).toString()).onclick=function(){
						if(lfadd&&(a3=="ce"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,0,"lf",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,0,"lf",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,0,"lf",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);			
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,0,"lf",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,0,"lf",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,0,"lf",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}

						} else
						if(ceadd&&(a3=="lf"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,1,"ce",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,1,"ce",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,1,"ce",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,1,"ce",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,1,"ce",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,1,"ce",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(rfadd&&(a3=="lf"||a3=="ce"||a3=="lt"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,2,"rf",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,2,"rf",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,2,"rf",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,2,"rf",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,2,"rf",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,2,"rf",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(ltadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="ct"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,3,"lt",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,3,"lt",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,3,"lt",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,3,"lt",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,3,"lt",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,3,"lt",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(ctadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="lt"||a3=="rt"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,4,"ct",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,4,"ct",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,4,"ct",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,4,"ct",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="rt"){
								document.getElementById("range").max=garnisone[a1][5][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,5,a3,4,"ct",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,4,"ct",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						} else
						if(rtadd&&(a3=="lf"||a3=="ce"||a3=="rf"||a3=="lt"||a3=="ct"||a3=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(a3=="ce"){
								document.getElementById("range").max=garnisone[a1][1][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,1,a3,5,"rt",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);
							}
							if(a3=="rf"){
								document.getElementById("range").max=garnisone[a1][2][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,2,a3,5,"rt",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);				
							}
							if(a3=="lt"){
								document.getElementById("range").max=garnisone[a1][3][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,3,a3,5,"rt",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);					
							}
							if(a3=="ct"){
								document.getElementById("range").max=garnisone[a1][4][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,4,a3,5,"rt",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);
							}
							if(a3=="lf"){
								document.getElementById("range").max=garnisone[a1][0][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,0,a3,5,"rt",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);
							}
							if(a3=="townreservdiv"){
								document.getElementById("range").max=garnisone[a1][6][k-3][1];
								pereved=[];
								pereved.push(a1,k-3,6,a3,5,"rt",garnisone[a1][6][k-3][0],0,garnisone[a1][6][k-3][2],garnisone[a1][6][k-3][3],garnisone[a1][6][k-3][4]);
							}
						}



















						 else


						if(lfper&&a3=="lf"){
							document.getElementById("range").max=garnisone[a1][0][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,0,a3,0,"",garnisone[a1][0][k-3][0],0,garnisone[a1][0][k-3][2],garnisone[a1][0][k-3][3],garnisone[a1][0][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ceper&&a3=="ce"){
							document.getElementById("range").max=garnisone[a1][1][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,1,a3,0,"",garnisone[a1][1][k-3][0],0,garnisone[a1][1][k-3][2],garnisone[a1][1][k-3][3],garnisone[a1][1][k-3][4]);

							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в левый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в правый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(rfper&&a3=="rf"){
							document.getElementById("range").max=garnisone[a1][2][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,2,a3,0,"",garnisone[a1][2][k-3][0],0,garnisone[a1][2][k-3][2],garnisone[a1][2][k-3][3],garnisone[a1][2][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в левый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого фланга <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ltper&&a3=="lt"){
							document.getElementById("range").max=garnisone[a1][3][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,3,a3,0,"",garnisone[a1][3][k-3][0],0,garnisone[a1][3][k-3][2],garnisone[a1][3][k-3][3],garnisone[a1][3][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в центральный фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из левого тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(ctper&&a3=="ct"){
							document.getElementById("range").max=garnisone[a1][4][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,4,a3,0,"",garnisone[a1][4][k-3][0],0,garnisone[a1][4][k-3][2],garnisone[a1][4][k-3][3],garnisone[a1][4][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("rtpusto")){
								document.getElementById("rtpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в центральный");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в парвый");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rtadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в правый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=5;
								pereved[5]="rt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из центрального тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("rtpusto")){
									document.getElementById("rtpusto").style.display="block";
								}
								
							}
						} else
						if(rtper&&a3=="rt"){
							document.getElementById("range").max=garnisone[a1][5][k-3][1];
							pereved=[];
							pereved.push(a1,k-3,5,a3,0,"",garnisone[a1][5][k-3][0],0,garnisone[a1][5][k-3][2],garnisone[a1][5][k-3][3],garnisone[a1][5][k-3][4]);

							if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="none";
							}
							if(document.getElementById("rfpusto")){
								document.getElementById("rfpusto").style.display="none";
							}
							if(document.getElementById("ltpusto")){
								document.getElementById("ltpusto").style.display="none";
							}
							if(document.getElementById("ctpusto")){
								document.getElementById("ctpusto").style.display="none";
							}
							if(document.getElementById("lfpusto")){
								document.getElementById("lfpusto").style.display="none";
							}
							if(document.getElementById("townreservdivpusto")){
								document.getElementById("townreservdivpusto").style.display="none";
							}
							let newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ceadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ce").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в центральный фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=1;
								pereved[5]="ce";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "rfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("rf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в правый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=2;
								pereved[5]="rf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ltadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lt").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в левый тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=3;
								pereved[5]="lt";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "ctadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("ct").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в центральный тыл");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=4;
								pereved[5]="ct";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}





							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "lfadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("lf").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в левый фланг");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=0;
								pereved[5]="lf";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								
								if(document.getElementById("townreservdivpusto")){
									document.getElementById("townreservdivpusto").style.display="block";
								}
							}




							newdiv=document.createElement("div");
							newdiv.classList.add("acrylic","shadow");
							newdiv.innerHTML="Перевести";
							newdiv.setAttribute("id", "townreservdivadding");
							newdiv.setAttribute("style", "font-size: x-small;");
							document.getElementById("townreservdiv").appendChild(newdiv);
							newdiv.onmouseover=function(){
								alter("Перевести "+pereved[10]+"<br> из правого тыла <br> в резерв");
							}
							newdiv.onmouseout=function(){
								document.getElementById("alter").style.display="none";
							}
							newdiv.onclick=function(){
								pereved[4]=6;
								pereved[5]="townreservdiv";
								document.getElementById("ranger").style.display="grid";

								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("cepusto")){
								document.getElementById("cepusto").style.display="block";
								}
								if(document.getElementById("rfpusto")){
									document.getElementById("rfpusto").style.display="block";
								}
								if(document.getElementById("ltpusto")){
									document.getElementById("ltpusto").style.display="block";
								}
								if(document.getElementById("ctpusto")){
									document.getElementById("ctpusto").style.display="block";
								}
								if(document.getElementById("lfpusto")){
									document.getElementById("lfpusto").style.display="block";
								}
								
							}
						}
	}
}}}} else {
garnisone[pereved[0]][pereved[2]][pereved[1]][1]=garnisone[pereved[0]][pereved[2]][pereved[1]][1]-pereved[7];
document.getElementById(pereved[3]+(pereved[1]+1).toString()+"chis").innerHTML=garnisone[pereved[0]][pereved[2]][pereved[1]][1];
}
if (garnisone[pereved[0]][pereved[2]].length==0){
	if(pereved[3]=="townreservdiv"){
	let newdiv=document.createElement("div");
	newdiv.classList.add("acrylic2", "shadow");
	newdiv.setAttribute("id", pereved[3]+"pusto");
	document.getElementById(pereved[3]).appendChild(newdiv);
	newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 14; grid-row-start: 1; padding: 0; font-size: small;");
	newdiv.innerHTML="Пусто";
	} else {
	let newdiv=document.createElement("div");
	newdiv.classList.add("acrylic2", "shadow");
	newdiv.setAttribute("id", pereved[3]+"pusto");
	document.getElementById(pereved[3]).appendChild(newdiv);
	newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
	newdiv.innerHTML="Пусто";
}}

lfadd=ceadd=rfadd=ltadd=ctadd=rtadd=false;
lfper=ceper=rfper=ltper=ctper=rtper=false;
retren=reper=false; reobj=false;
pereved=[];
document.getElementById("ranger").style.display="none";
document.getElementById("obr").style.display="none";
document.getElementById("perev").innerHTML="Перевести";
document.getElementById("range").value="1";

								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
}


document.getElementById("perevobr").onclick=function () {
document.getElementById("obr").style.display="grid";
}


document.getElementById("perevotm").onclick=function () {
lfadd=ceadd=rfadd=ltadd=ctadd=rtadd=false;
lfper=ceper=rfper=ltper=ctper=rtper=false;
retren=reper=false; reobj=false;
pereved=[];
document.getElementById("ranger").style.display="none";
document.getElementById("obr").style.display="none";
								if(document.getElementById("lfadding")){
								document.getElementById("lf").removeChild(document.getElementById("lfadding"));
								}
								if(document.getElementById("ceadding")){
								document.getElementById("ce").removeChild(document.getElementById("ceadding"));
								}
								if(document.getElementById("rfadding")){
								document.getElementById("rf").removeChild(document.getElementById("rfadding"));
								}
								if(document.getElementById("ltadding")){
								document.getElementById("lt").removeChild(document.getElementById("ltadding"));
								}
								if(document.getElementById("ctadding")){
								document.getElementById("ct").removeChild(document.getElementById("ctadding"));
								}
								if(document.getElementById("rtadding")){
								document.getElementById("rt").removeChild(document.getElementById("rtadding"));
								}
								if(document.getElementById("townreservdivadding")){
								document.getElementById("townreservdiv").removeChild(document.getElementById("townreservdivadding"));
								}
}
