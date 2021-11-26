function addarms(i,u,j,parrent){
					let newdiv=document.createElement("div");
					newdiv.classList.add("acrylic2", "shadow");
					newdiv.setAttribute("id", parrent+u.toString());
					document.getElementById(parrent).appendChild(newdiv);
					newdiv.onmouseover=function () {
						alter(garnisone[i][j][u-1][4]+"<br>Подробнее..");
					}
					newdiv.onmouseout=function(){document.getElementById("alter").style.display="none";};


					newdiv.onclick=function(){
						if(lfadd&&(parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="ce"){
								document.getElementById("range").max=garnisone[i][1][u-1][1];
								pereved=[];
								pereved.push(i,u-1,1,parrent,0,"lf",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);
							}
							if(parrent=="rf"){
								document.getElementById("range").max=garnisone[i][2][u-1][1];
								pereved=[];
								pereved.push(i,u-1,2,parrent,0,"lf",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);				
							}
							if(parrent=="lt"){
								document.getElementById("range").max=garnisone[i][3][u-1][1];
								pereved=[];
								pereved.push(i,u-1,3,parrent,0,"lf",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);			
							}
							if(parrent=="ct"){
								document.getElementById("range").max=garnisone[i][4][u-1][1];
								pereved=[];
								pereved.push(i,u-1,4,parrent,0,"lf",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);
							}
							if(parrent=="rt"){
								document.getElementById("range").max=garnisone[i][5][u-1][1];
								pereved=[];
								pereved.push(i,u-1,5,parrent,0,"lf",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,0,"lf",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}

						} else
						if(ceadd&&(parrent=="lf"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="lf"){
								document.getElementById("range").max=garnisone[i][0][u-1][1];
								pereved=[];
								pereved.push(i,u-1,0,parrent,1,"ce",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);
							}
							if(parrent=="rf"){
								document.getElementById("range").max=garnisone[i][2][u-1][1];
								pereved=[];
								pereved.push(i,u-1,2,parrent,1,"ce",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);				
							}
							if(parrent=="lt"){
								document.getElementById("range").max=garnisone[i][3][u-1][1];
								pereved=[];
								pereved.push(i,u-1,3,parrent,1,"ce",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);					
							}
							if(parrent=="ct"){
								document.getElementById("range").max=garnisone[i][4][u-1][1];
								pereved=[];
								pereved.push(i,u-1,4,parrent,1,"ce",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);
							}
							if(parrent=="rt"){
								document.getElementById("range").max=garnisone[i][5][u-1][1];
								pereved=[];
								pereved.push(i,u-1,5,parrent,1,"ce",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,1,"ce",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}
						} else
						if(rfadd&&(parrent=="lf"||parrent=="ce"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="ce"){
								document.getElementById("range").max=garnisone[i][1][u-1][1];
								pereved=[];
								pereved.push(i,u-1,1,parrent,2,"rf",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);
							}
							if(parrent=="lf"){
								document.getElementById("range").max=garnisone[i][0][u-1][1];
								pereved=[];
								pereved.push(i,u-1,0,parrent,2,"rf",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);				
							}
							if(parrent=="lt"){
								document.getElementById("range").max=garnisone[i][3][u-1][1];
								pereved=[];
								pereved.push(i,u-1,3,parrent,2,"rf",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);					
							}
							if(parrent=="ct"){
								document.getElementById("range").max=garnisone[i][4][u-1][1];
								pereved=[];
								pereved.push(i,u-1,4,parrent,2,"rf",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);
							}
							if(parrent=="rt"){
								document.getElementById("range").max=garnisone[i][5][u-1][1];
								pereved=[];
								pereved.push(i,u-1,5,parrent,2,"rf",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,2,"rf",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}
						} else
						if(ltadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="ce"){
								document.getElementById("range").max=garnisone[i][1][u-1][1];
								pereved=[];
								pereved.push(i,u-1,1,parrent,3,"lt",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);
							}
							if(parrent=="rf"){
								document.getElementById("range").max=garnisone[i][2][u-1][1];
								pereved=[];
								pereved.push(i,u-1,2,parrent,3,"lt",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);				
							}
							if(parrent=="lf"){
								document.getElementById("range").max=garnisone[i][0][u-1][1];
								pereved=[];
								pereved.push(i,u-1,0,parrent,3,"lt",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);					
							}
							if(parrent=="ct"){
								document.getElementById("range").max=garnisone[i][4][u-1][1];
								pereved=[];
								pereved.push(i,u-1,4,parrent,3,"lt",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);
							}
							if(parrent=="rt"){
								document.getElementById("range").max=garnisone[i][5][u-1][1];
								pereved=[];
								pereved.push(i,u-1,5,parrent,3,"lt",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,3,"lt",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}
						} else
						if(ctadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="ce"){
								document.getElementById("range").max=garnisone[i][1][u-1][1];
								pereved=[];
								pereved.push(i,u-1,1,parrent,4,"ct",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);
							}
							if(parrent=="rf"){
								document.getElementById("range").max=garnisone[i][2][u-1][1];
								pereved=[];
								pereved.push(i,u-1,2,parrent,4,"ct",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);				
							}
							if(parrent=="lt"){
								document.getElementById("range").max=garnisone[i][3][u-1][1];
								pereved=[];
								pereved.push(i,u-1,3,parrent,4,"ct",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);					
							}
							if(parrent=="lf"){
								document.getElementById("range").max=garnisone[i][0][u-1][1];
								pereved=[];
								pereved.push(i,u-1,0,parrent,4,"ct",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);
							}
							if(parrent=="rt"){
								document.getElementById("range").max=garnisone[i][5][u-1][1];
								pereved=[];
								pereved.push(i,u-1,5,parrent,4,"ct",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,4,"ct",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}
						} else
						if(rtadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							if(parrent=="ce"){
								document.getElementById("range").max=garnisone[i][1][u-1][1];
								pereved=[];
								pereved.push(i,u-1,1,parrent,5,"rt",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);
							}
							if(parrent=="rf"){
								document.getElementById("range").max=garnisone[i][2][u-1][1];
								pereved=[];
								pereved.push(i,u-1,2,parrent,5,"rt",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);				
							}
							if(parrent=="lt"){
								document.getElementById("range").max=garnisone[i][3][u-1][1];
								pereved=[];
								pereved.push(i,u-1,3,parrent,5,"rt",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);					
							}
							if(parrent=="ct"){
								document.getElementById("range").max=garnisone[i][4][u-1][1];
								pereved=[];
								pereved.push(i,u-1,4,parrent,5,"rt",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);
							}
							if(parrent=="lf"){
								document.getElementById("range").max=garnisone[i][0][u-1][1];
								pereved=[];
								pereved.push(i,u-1,0,parrent,5,"rt",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);
							}
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][u-1][1];
								pereved=[];
								pereved.push(i,u-1,6,parrent,5,"rt",garnisone[i][6][u-1][0],0,garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]);
							}
						} else


						if(lfper&&parrent=="lf"){
							document.getElementById("range").max=garnisone[i][0][u-1][1];
							pereved=[];
							pereved.push(i,u-1,0,parrent,0,"",garnisone[i][0][u-1][0],0,garnisone[i][0][u-1][2],garnisone[i][0][u-1][3],garnisone[i][0][u-1][4]);

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
						if(ceper&&parrent=="ce"){
							document.getElementById("range").max=garnisone[i][1][u-1][1];
							pereved=[];
							pereved.push(i,u-1,1,parrent,0,"",garnisone[i][1][u-1][0],0,garnisone[i][1][u-1][2],garnisone[i][1][u-1][3],garnisone[i][1][u-1][4]);

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
						if(rfper&&parrent=="rf"){
							document.getElementById("range").max=garnisone[i][2][u-1][1];
							pereved=[];
							pereved.push(i,u-1,2,parrent,0,"",garnisone[i][2][u-1][0],0,garnisone[i][2][u-1][2],garnisone[i][2][u-1][3],garnisone[i][2][u-1][4]);

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
						if(ltper&&parrent=="lt"){
							document.getElementById("range").max=garnisone[i][3][u-1][1];
							pereved=[];
							pereved.push(i,u-1,3,parrent,0,"",garnisone[i][3][u-1][0],0,garnisone[i][3][u-1][2],garnisone[i][3][u-1][3],garnisone[i][3][u-1][4]);

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
						if(ctper&&parrent=="ct"){
							document.getElementById("range").max=garnisone[i][4][u-1][1];
							pereved=[];
							pereved.push(i,u-1,4,parrent,0,"",garnisone[i][4][u-1][0],0,garnisone[i][4][u-1][2],garnisone[i][4][u-1][3],garnisone[i][4][u-1][4]);

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
						if(rtper&&parrent=="rt"){
							document.getElementById("range").max=garnisone[i][5][u-1][1];
							pereved=[];
							pereved.push(i,u-1,5,parrent,0,"",garnisone[i][5][u-1][0],0,garnisone[i][5][u-1][2],garnisone[i][5][u-1][3],garnisone[i][5][u-1][4]);

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

						if(retren&&parrent=="townreservdiv"){

								document.getElementById("train").style.display="block";
								garnisone[i][8].push([garnisone[i][6][u-1][0],garnisone[i][6][u-1][1],garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]]);
								addarms(i,garnisone[i][7].length,7,"traindiv");
								garnisone[i][6].splice(u-1,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

								deletearm1(i,u,parrent);
						} else
						if(reper&&parrent=="townreservdiv"){

								document.getElementById("obr").style.display="grid";
								document.getElementById("obr").style.marginLeft="846px";

						document.getElementById("obrotd").onclick=function(){
								pereobrf(i,u,15,parrent)
							}

						document.getElementById("obrvsv").onclick=function(){
								if (obrvsv){
									pereobrf(i,u,60,parrent);
							}
						}

						document.getElementById("obrrota").onclick=function(){
								if (obrrota){
									pereobrf(i,u,240,parrent);
							}
						}

						document.getElementById("obrbat").onclick=function(){
								if (obrbat){
									pereobrf(i,u,960,parrent);
							}
						}

						document.getElementById("obrpolk").onclick=function(){
								if (obrpolk){
									pereobrf(i,u,2880,parrent);
							}
						}

						document.getElementById("obrbrig").onclick=function(){
								if (obrbrig){
									pereobrf(i,u,8640,parrent);
							}
						}

						document.getElementById("obrdiv").onclick=function(){
							if (obrdiv){
									pereobrf(i,u,17280,parrent);
							}
						}
								
						} else 
						if(reobj&&parrent=="townreservdiv"){
							if(obj.length==0){
								obj.push(u-1,[garnisone[i][6][u-1][0],garnisone[i][6][u-1][1],garnisone[i][6][u-1][2],garnisone[i][6][u-1][3],garnisone[i][6][u-1][4]]);

								for (k=0; k<garnisone[i][6].length; k++){

									if(obj[1][0]==garnisone[i][6][k][0]&&obj[1][2]==garnisone[i][6][k][2]&&obj[1][3]==garnisone[i][6][k][3]){
										document.getElementById(parrent+(k+1).toString()).style.border="1px solid yellow";
										if (document.getElementById(parrent+(k+1).toString()).classList.contains("acrylic2")){
											document.getElementById(parrent+(k+1).toString()).classList.remove("acrylic2");
											document.getElementById(parrent+(k+1).toString()).classList.add("acrylic")
										}
								}}
							}
							else if (obj.length==2){
								deletearm(i,u,parrent);
							}
						} else{
							document.getElementById("trupe").style.display="grid";
							document.getElementById("arm1").innerHTML=garnisone[i][j][u-1][1];
							document.getElementById("arm2").innerHTML=garnisone[i][j][u-1][2];
							document.getElementById("arm3").innerHTML=garnisone[i][j][u-1][3];
							document.getElementById("arm4").innerHTML=garnisone[i][j][u-1][4];
						}
					}


					newdiv=document.createElement("div");
					newdiv.classList.add("counter","acrylic", "shadow");
					newdiv.setAttribute("id", parrent+u.toString()+"rangob");
					document.getElementById(parrent+u.toString()).appendChild(newdiv);
					newdiv.innerHTML=garnisone[i][j][u-1][2];

					newdiv=document.createElement("div");
					newdiv.classList.add("counter2","acrylic", "shadow");
					newdiv.setAttribute("id", parrent+u.toString()+"chis");
					document.getElementById(parrent+u.toString()).appendChild(newdiv);
					newdiv.innerHTML=garnisone[i][j][u-1][1];

					newdiv=document.createElement("div");
					newdiv.setAttribute("style", "height: 3px; width: 100%; display: grid; grid-template-columns: 33.3% 33.3% 33.3%; margin-top: 25px;");
					newdiv.setAttribute("id", parrent+u.toString()+"level");
					document.getElementById(parrent+u.toString()).appendChild(newdiv);

					if(garnisone[i][j][u-1][3]==0){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==1){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==2){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #2364A9;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==3){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==4){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==5){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #73BFB7;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==6){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==7){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					} else if(garnisone[i][j][u-1][3]==8){
						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);

						newdiv=document.createElement("div");
						newdiv.setAttribute("style", "background-color: #FEC701;");
						document.getElementById(parrent+u.toString()+"level").appendChild(newdiv);
					}      
				}