function deletearm(i,u,parrent){
									for (k=0; k<garnisone[i][6].length; k++){
									if(obj[1][0]==garnisone[i][6][k][0]&&obj[1][2]==garnisone[i][6][k][2]&&obj[1][3]==garnisone[i][6][k][3]){
										document.getElementById(parrent+(k+1).toString()).style.border="1px solid white";
										if (document.getElementById(parrent+(k+1).toString()).classList.contains("acrylic")){
											document.getElementById(parrent+(k+1).toString()).classList.remove("acrylic");
											document.getElementById(parrent+(k+1).toString()).classList.add("acrylic2")
										}
								}}

								if (obj[1][0]==garnisone[i][6][u-1][0]&&obj[1][2]==garnisone[i][6][u-1][2]&&obj[1][3]==garnisone[i][6][u-1][3]){
								if (obj[0]<u-1){
									document.getElementById(parrent+(obj[0]+1).toString()+"chis").innerHTML=garnisone[i][6][obj[0]][1]+garnisone[i][6][u-1][1];
									garnisone[i][6][obj[0]][1]+=garnisone[i][6][u-1][1];
									garnisone[i][6].splice(u-1,1);
									document.getElementById(parrent).removeChild(document.getElementById(parrent+u.toString()));

									let a1=obj[0];

									if (garnisone[i][6].length!=0){

										if (a1+2<=garnisone[i][6].length+1){
										for (k=a1+2; k<=garnisone[i][6].length+1; k++){
											document.getElementById(parrent+k.toString()).id=parrent+(k-1).toString();
											document.getElementById(parrent+k.toString()+"rangob").id=parrent+(k-1).toString()+"rangob";
											document.getElementById(parrent+k.toString()+"chis").id=parrent+(k-1).toString()+"chis";
											document.getElementById(parrent+k.toString()+"level").id=parrent+(k-1).toString()+"level";

											

					document.getElementById(parrent+(k-1).toString()).onmouseover=function () {
						alter(garnisone[i][6][k-3][4]+"<br>Подробнее..");
					}
					document.getElementById(parrent+(k-1).toString()).onmouseout=function(){document.getElementById("alter").style.display="none";};


					document.getElementById(parrent+(k-1).toString()).onclick=function(){
						if(lfadd&&(parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,0,"lf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}

						} else
						if(ceadd&&(parrent=="lf"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,1,"ce",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rfadd&&(parrent=="lf"||parrent=="ce"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,2,"rf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ltadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,3,"lt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ctadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,4,"ct",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rtadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,5,"rt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else

						if(retren&&parrent=="townreservdiv"){

						} else
						if(reper&&parrent=="townreservdiv"){

						} else 
						if(reobj&&parrent=="townreservdiv"){
							if(obj.length==0){
								obj.push(k-3,[garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);

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
							document.getElementById("arm1").innerHTML=garnisone[i][j][k-3][1];
							document.getElementById("arm2").innerHTML=garnisone[i][j][k-3][2];
							document.getElementById("arm3").innerHTML=garnisone[i][j][k-3][3];
							document.getElementById("arm4").innerHTML=garnisone[i][j][k-3][4];
						}
					}}}}

											obj=[];

								} else if (obj[0]>u-1){
									document.getElementById(parrent+u.toString()+"chis").innerHTML=garnisone[i][6][obj[0]][1]+garnisone[i][6][u-1][1];
									garnisone[i][6][u-1][1]+=garnisone[i][6][obj[0]][1];
									garnisone[i][6].splice(obj[0],1);
									document.getElementById(parrent).removeChild(document.getElementById(parrent+(obj[0]+1).toString()));

																		let a1=obj[0];

									if (garnisone[i][6].length!=0){

										if (a1+2<=garnisone[i][6].length+1){
										for (k=a1+2; k<=garnisone[i][6].length+1; k++){
											document.getElementById(parrent+k.toString()).id=parrent+(k-1).toString();
											document.getElementById(parrent+k.toString()+"rangob").id=parrent+(k-1).toString()+"rangob";
											document.getElementById(parrent+k.toString()+"chis").id=parrent+(k-1).toString()+"chis";
											document.getElementById(parrent+k.toString()+"level").id=parrent+(k-1).toString()+"level";

											

					document.getElementById(parrent+(k-1).toString()).onmouseover=function () {
						alter(garnisone[i][6][k-3][4]+"<br>Подробнее..");
					}
					document.getElementById(parrent+(k-1).toString()).onmouseout=function(){document.getElementById("alter").style.display="none";};


					document.getElementById(parrent+(k-1).toString()).onclick=function(){
						if(lfadd&&(parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,0,"lf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}

						} else
						if(ceadd&&(parrent=="lf"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,1,"ce",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rfadd&&(parrent=="lf"||parrent=="ce"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,2,"rf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ltadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,3,"lt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ctadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,4,"ct",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rtadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,5,"rt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else

						if(retren&&parrent=="townreservdiv"){


								document.getElementById("train").style.display="block";
								garnisone[i][7].push([garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);
								addarms(i,garnisone[i][7].length,7,"traindiv");
								garnisone[i][6].splice(k-3,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

								deletearm1(i,k-2,parrent);
						} else
						if(reper&&parrent=="townreservdiv"){

								document.getElementById("pereobr").style.display="block";
								garnisone[i][8].push([garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);
								addarms(i,garnisone[i][8].length,8,"pereobrdiv");
								garnisone[i][6].splice(k-3,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

								deletearm1(i,k-2,parrent);

						} else 
						if(reobj&&parrent=="townreservdiv"){
							if(obj.length==0){
								obj.push(k-3,[garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);

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
							document.getElementById("arm1").innerHTML=garnisone[i][j][k-3][1];
							document.getElementById("arm2").innerHTML=garnisone[i][j][k-3][2];
							document.getElementById("arm3").innerHTML=garnisone[i][j][k-3][3];
							document.getElementById("arm4").innerHTML=garnisone[i][j][k-3][4];
						}
					}}}}

											obj=[];
									
								} else { 
									alter("ВЫберете второе образование для объеденения");
									setTimeout(document.getElementById("alter").style.display="none", 5000); 
								}
							}
}


function deletearm1(i,u,parrent){
									if (u+1<=garnisone[i][6].length+1){
								for (k=u+1; k<=garnisone[i][6].length+1; k++){
									document.getElementById(parrent+k.toString()).id=parrent+(k-1).toString();
									document.getElementById(parrent+k.toString()+"rangob").id=parrent+(k-1).toString()+"rangob";
									document.getElementById(parrent+k.toString()+"chis").id=parrent+(k-1).toString()+"chis";
									document.getElementById(parrent+k.toString()+"level").id=parrent+(k-1).toString()+"level";

														document.getElementById(parrent+(k-1).toString()).onmouseover=function () {
						alter(garnisone[i][6][k-3][4]+"<br>Подробнее..");
					}
					document.getElementById(parrent+(k-1).toString()).onmouseout=function(){document.getElementById("alter").style.display="none";};


					document.getElementById(parrent+(k-1).toString()).onclick=function(){
						if(lfadd&&(parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,0,"lf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}

						} else
						if(ceadd&&(parrent=="lf"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,1,"ce",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rfadd&&(parrent=="lf"||parrent=="ce"||parrent=="lt"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";

							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,2,"rf",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ltadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="ct"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,3,"lt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(ctadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="rt"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,4,"ct",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else
						if(rtadd&&(parrent=="lf"||parrent=="ce"||parrent=="rf"||parrent=="lt"||parrent=="ct"||parrent=="townreservdiv")){
							document.getElementById("ranger").style.display="grid";
							
							if(parrent=="townreservdiv"){
								document.getElementById("range").max=garnisone[i][6][k-3][1];
								pereved=[];
								pereved.push(i,k-3,6,parrent,5,"rt",garnisone[i][6][k-3][0],0,garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]);
							}
						} else

						if(retren&&parrent=="townreservdiv"){

								document.getElementById("train").style.display="block";
								garnisone[i][7].push([garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);
								addarms(i,garnisone[i][7].length,7,"traindiv");
								garnisone[i][6].splice(k-3,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

								deletearm1(i,k-2,parrent);

						} else
						if(reper&&parrent=="townreservdiv"){

								document.getElementById("pereobr").style.display="block";
								garnisone[i][8].push([garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);
								addarms(i,garnisone[i][8].length,8,"pereobrdiv");
								garnisone[i][6].splice(k-3,1);
								document.getElementById("townreservdiv").removeChild(document.getElementById(parrent+u.toString()));

								deletearm1(i,k-2,parrent);

						} else 
						if(reobj&&parrent=="townreservdiv"){
							if(obj.length==0){
								obj.push(k-3,[garnisone[i][6][k-3][0],garnisone[i][6][k-3][1],garnisone[i][6][k-3][2],garnisone[i][6][k-3][3],garnisone[i][6][k-3][4]]);

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
							document.getElementById("arm1").innerHTML=garnisone[i][j][k-3][1];
							document.getElementById("arm2").innerHTML=garnisone[i][j][k-3][2];
							document.getElementById("arm3").innerHTML=garnisone[i][j][k-3][3];
							document.getElementById("arm4").innerHTML=garnisone[i][j][k-3][4];
						}
					}}
								}}
