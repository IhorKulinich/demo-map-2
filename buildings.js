let builderqing = function(i,u,buprog,butype,buname){
	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString());
	newbu.classList.add("acrylic","shadow");

	if (u==1){
		newbu.setAttribute("style", "display: grid; grid-template-columns: 30px auto; grid-auto-rows: 26px; padding: 0; grid-row-gap: 5px; opacity: 0.82; font-size: x-small; text-align: center; opacity: 0.5; margin-top: 23px;");
	} else {
		newbu.setAttribute("style", "display: grid; grid-template-columns: 30px auto; grid-auto-rows: 26px; padding: 0; grid-row-gap: 5px; opacity: 0.82; font-size: x-small; text-align: center; opacity: 0.5; margin-top: 5px;");
	}

	
	document.getElementById('buildermenu').appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"o");
	newbu.classList.add("acrylic","shadow");
	document.getElementById(i.toString()+"builderq"+u.toString()).appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"n");
	newbu.classList.add("counter","acrylic","shadow");
	newbu.innerHTML=ourbuildings[i][butype][buname]+"+1";
	document.getElementById(i.toString()+"builderq"+u.toString()+"o").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"p");
	newbu.setAttribute("style", "display: grid; grid-auto-rows: 10px 10px; padding: 0; grid-row-gap: 5px;");
	document.getElementById(i.toString()+"builderq"+u.toString()).appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"name");
	newbu.classList.add("counter3","acrylic","shadow");
	newbu.innerHTML=buidingsname[butype][buname];
	document.getElementById(i.toString()+"builderq"+u.toString()+"p").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"pr");
	newbu.classList.add("counter3","acrylic","shadow");
	prog1=buprog*100/bucost[butype][buname];
	prog2=0;
	prog3=100;
	if (prog1+prog2>100){
		newbu.setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
	} else {
		newbu.setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
	}

	document.getElementById(i.toString()+"builderq"+u.toString()+"p").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #2364A9;");
	document.getElementById(i.toString()+"builderq"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #73BFB7;");
	document.getElementById(i.toString()+"builderq"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #FEC701;");
	document.getElementById(i.toString()+"builderq"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builderq"+u.toString()+"done");
	newbu.setAttribute("style", "grid-column-start: 1; grid-column-end: 4; margin-top: -10px;");
	newbu.innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
	document.getElementById(i.toString()+"builderq"+u.toString()+"pr").appendChild(newbu);
}

let bpclick = function(i,u){
	if (builderar[i][0]>1) {
		if (fixedbu[i].indexOf(u) === -1) {
			fixedbu[i].push(u);
		}
		if(pplus === undefined) {
			pplus=0;
		}
		if(pminus === undefined){
			pminus=0;
		}
		if(pplus == 0) {
			pplus=builderar[i][u][3]/10;
		}
		if(pminus == 0){
			pminus=pplus/builderar[i][0];
		}
		for (j=1; j<=builderar[i][0]; j++){

			if (j==u){
				builderar[i][j][3]=builderar[i][j][3]+pplus;
				prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
				prog2=builderar[i][j][3]*100/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
				prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

				prog1=prog1.toFixed(2);
				prog2=prog2.toFixed(2);
				prog3=prog3.toFixed(2);

				if (prog1+prog2>100){
					document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
				} else {
					document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
				}
				document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
				}

			if (fixedbu[i].indexOf(j)===-1){
					builderar[i][j][3]=builderar[i][j][3]-pminus;
					prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
					prog2=100*builderar[i][j][3]/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
					prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

					prog1=prog1.toFixed(2);
					prog2=prog2.toFixed(2);
					prog3=prog3.toFixed(2);

					if (prog1+prog2>100){
						document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
					} else {
						document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
					}

					document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
								
			}
		}
	}
}

let bmclick = function(i,u){
	if (builderar[i][0]>1) {
		if (fixedbu[i].indexOf(u) === -1) {
			fixedbu[i].push(u);
		}
		if(mminus === undefined) {
			mminus=0;
		}
		if(mplus === undefined) {
			mplus=0;
		}
		if(mminus ==0) {
			mminus=builderar[i][u][3]/10;
		}
		if(mplus ==0) {
			mplus=mminus/builderar[i][0];
		}
		for (j=1; j<=builderar[i][0]; j++){

			if (j==u){
				builderar[i][j][3]=builderar[i][j][3]-mminus;
				prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
				prog2=builderar[i][j][3]*100/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
				prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

				prog1=prog1.toFixed(2);
				prog2=prog2.toFixed(2);
				prog3=prog3.toFixed(2);

				if (prog1+prog2>100){
					document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
				} else {
					document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
				}
				document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
			}

			if (fixedbu[i].indexOf(j)===-1){

					builderar[i][j][3]=builderar[i][j][3]+mplus;
					prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
					prog2=100*builderar[i][j][3]/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
					prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

					prog1=prog1.toFixed(2);
					prog2=prog2.toFixed(2);
					prog3=prog3.toFixed(2);

					if (prog1+prog2>100){
						document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
					} else {
						document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
					}

					document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
			}				
		}
	}
}



let buildering = function(i,u,buprog,butype,buname){
	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString());
	newbu.classList.add("acrylic","shadow");
	newbu.setAttribute("style", "display: grid; grid-template-columns: 30px auto 30px 30px 15px; grid-auto-rows: 26px; padding: 0; grid-row-gap: 5px; opacity: 0.82; font-size: x-small; text-align: center; opacity: 0.5; margin-top: 5px;");

				if (document.getElementById("que"+i.toString())){
					document.getElementById('buildermenu').insertBefore(newbu,document.getElementById("que"+i.toString()));
				} else {
					document.getElementById('buildermenu').appendChild(newbu);
				}

	

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"o");
	newbu.classList.add("acrylic","shadow");
	document.getElementById(i.toString()+"builder"+u.toString()).appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"n");
	newbu.classList.add("counter","acrylic","shadow");
	document.getElementById(i.toString()+"builder"+u.toString()+"o").appendChild(newbu);
	newbu.innerHTML=ourbuildings[i][butype][buname]+"+1";
	

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"p");
	newbu.setAttribute("style", "display: grid; grid-auto-rows: 10px 10px; padding: 0; grid-row-gap: 5px;");
	document.getElementById(i.toString()+"builder"+u.toString()).appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"name");
	newbu.classList.add("counter3","acrylic","shadow");
	newbu.innerHTML=buidingsname[butype][buname];
	document.getElementById(i.toString()+"builder"+u.toString()+"p").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"pr");
	newbu.classList.add("counter3","acrylic","shadow");
	prog1=buprog*100/bucost[butype][buname];
	prog2=builderar[i][u][3]*100/(bucost[butype][buname]);
	prog3=100*(bucost[butype][buname]-buprog-builderar[i][u][3])/bucost[butype][buname];

	prog1=prog1.toFixed(2);
	prog2=prog2.toFixed(2);
	prog3=prog3.toFixed(2);

	if (prog1+prog2>100){
		newbu.setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
	} else {
		newbu.setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
	}

	document.getElementById(i.toString()+"builder"+u.toString()+"p").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #2364A9;");
	document.getElementById(i.toString()+"builder"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #73BFB7;");
	document.getElementById(i.toString()+"builder"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("style", "background-color: #FEC701;");
	document.getElementById(i.toString()+"builder"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"done");
	newbu.setAttribute("style", "grid-column-start: 1; grid-column-end: 4; margin-top: -10px;");
	newbu.innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
	document.getElementById(i.toString()+"builder"+u.toString()+"pr").appendChild(newbu);

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"+");
	newbu.classList.add("acrylic","shadow");
	newbu.innerHTML="+";
	document.getElementById(i.toString()+"builder"+u.toString()).appendChild(newbu);

	newbu.onmouseover=function(){
			if (builderar[i][0]>1) {
				alter('Задать больший приоритет строительства');
			} else {
				alter('Задать больший приоритет строительства невозможно');
			}};
		newbu.onmouseout=function(){document.getElementById("alter").style.display="none"};
		newbu.onclick=function(){bpclick(i,u)};
	

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"-");
	newbu.classList.add("acrylic","shadow");
	newbu.innerHTML="-";
	document.getElementById(i.toString()+"builder"+u.toString()).appendChild(newbu);


		newbu.onmouseover=function(){
			if (builderar[i][0]>1) {
				alter('Задать меньший приоритет строительства');
			} else {
				alter('Задать меньший приоритет строительства невозможно');
			}};
		newbu.onmouseout=function(){document.getElementById("alter").style.display="none"};
		newbu.onclick=function(){bmclick(i,u)};

	newbu = document.createElement("div");
	newbu.setAttribute("id", i.toString()+"builder"+u.toString()+"x");
	newbu.classList.add("acrylic","shadow");
	newbu.innerHTML="x";
	document.getElementById(i.toString()+"builder"+u.toString()).appendChild(newbu);

function deletebu(i, u){

			document.getElementById("buildermenu").style.overflowY="hidden";
			document.getElementById("buildermenu").style.overflowX="hidden";

			if (u==0) u=1;
			builderar[i].splice(u, 1);
			builderar[i][0]=builderar[i][0]-1;


			document.getElementById("buildermenu").removeChild(document.getElementById(i.toString()+"builder"+u.toString()));


			for (j=u+1; j<=builderar[i][0]+1; j++){
				document.getElementById(i.toString()+"builder"+j.toString()).id=i.toString()+"builder"+(j-1).toString();
				document.getElementById(i.toString()+"builder"+j.toString()+"o").id=i.toString()+"builder"+(j-1).toString()+"o";
				document.getElementById(i.toString()+"builder"+j.toString()+"n").id=i.toString()+"builder"+(j-1).toString()+"n";
				document.getElementById(i.toString()+"builder"+j.toString()+"p").id=i.toString()+"builder"+(j-1).toString()+"p";
				document.getElementById(i.toString()+"builder"+j.toString()+"name").id=i.toString()+"builder"+(j-1).toString()+"name";
				document.getElementById(i.toString()+"builder"+j.toString()+"pr").id=i.toString()+"builder"+(j-1).toString()+"pr";
				document.getElementById(i.toString()+"builder"+j.toString()+"done").id=i.toString()+"builder"+(j-1).toString()+"done";
				document.getElementById(i.toString()+"builder"+j.toString()+"+").id=i.toString()+"builder"+(j-1).toString()+"+";
				document.getElementById(i.toString()+"builder"+(j-1).toString()+"+").onclick=function(){bpclick(i,j-1)};
				document.getElementById(i.toString()+"builder"+j.toString()+"-").id=i.toString()+"builder"+(j-1).toString()+"-";
				document.getElementById(i.toString()+"builder"+(j-1).toString()+"-").onclick=function(){bmclick(i,j-1)};
				document.getElementById(i.toString()+"builder"+j.toString()+"x").id=i.toString()+"builder"+(j-1).toString()+"x";
				document.getElementById(i.toString()+"builder"+(j-1).toString()+"x").onclick=function(){deletebu(i,j-1);};
			}

			for (j=1; j<=builderar[i][0]; j++){
			if (fixedbu[i].indexOf(j)===-1){
			builderar[i][j][3]=ourparamstown[i][14]/builderar[i][0];
			prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
			prog2=builderar[i][j][3]*100/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
			prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

			prog1=prog1.toFixed(2);
			prog2=prog2.toFixed(2);
			prog3=prog3.toFixed(2);


			if (prog1+prog2>100){
				document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
			} else {
			document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
			}

			document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
		}}

		if (builderqar[i].length-1>=1)
		{

			builderar[i][0]+=1;

			for (j=1; j<builderar[i][0]; j++){
			if (fixedbu[i].indexOf(j)===-1){
			builderar[i][j][3]=ourparamstown[i][14]/builderar[i][0];
			prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
			prog2=builderar[i][j][3]*100/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
			prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

			prog1=prog1.toFixed(2);
			prog2=prog2.toFixed(2);
			prog3=prog3.toFixed(2);


			if (prog1+prog2>100){
				document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
			} else {
			document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
			}

			document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
				}}


			builderar[i].push([builderqar[i][1][0],builderqar[i][1][1],builderqar[i][1][2],ourparamstown[i][14]/builderar[i][0]]);
			buildering(i,builderar[i][0],builderqar[i][1][2],builderqar[i][1][0],builderqar[i][1][1]);

			builderqar[i].splice(1, 1);
			builderqar[i][0]=builderqar[i][0]-1;

			document.getElementById("buildermenu").removeChild(document.getElementById(i.toString()+"builderq1"));

			
			if(builderqar[i][0]+1>=2){
			for (j=2; j<=builderqar[i][0]+1; j++){
				if (j==2){document.getElementById(i.toString()+"builderq"+j.toString()).setAttribute("style", "display: grid; grid-template-columns: 30px auto; grid-auto-rows: 26px; padding: 0; grid-row-gap: 5px; opacity: 0.82; font-size: x-small; text-align: center; opacity: 0.5; margin-top: 23px;");}
				document.getElementById(i.toString()+"builderq"+j.toString()).id=i.toString()+"builderq"+(j-1).toString();
				document.getElementById(i.toString()+"builderq"+j.toString()+"o").id=i.toString()+"builderq"+(j-1).toString()+"o";
				document.getElementById(i.toString()+"builderq"+j.toString()+"n").id=i.toString()+"builderq"+(j-1).toString()+"n";
				document.getElementById(i.toString()+"builderq"+j.toString()+"p").id=i.toString()+"builderq"+(j-1).toString()+"p";
				document.getElementById(i.toString()+"builderq"+j.toString()+"name").id=i.toString()+"builderq"+(j-1).toString()+"name";
				document.getElementById(i.toString()+"builderq"+j.toString()+"pr").id=i.toString()+"builderq"+(j-1).toString()+"pr";
				document.getElementById(i.toString()+"builderq"+j.toString()+"done").id=i.toString()+"builderq"+(j-1).toString()+"done";
			}}


		}
		/////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
}

		newbu.onmouseover=function(){
			alter('Удалить строительство постройки');
			};
		newbu.onmouseout=function(){document.getElementById("alter").style.display="none"};
		newbu.onclick=function(){deletebu(i, u);};
	
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
let builder = function(i,buprog,butype,buname,is){
	let prog1,prog2,prog3;
	if(builderar[i].length==0){
		builderar[i].push(1);
		builderar[i].push([butype,buname,buprog,ourparamstown[i][14]/builderar[i][0]]);
		buildering(i,builderar[i][0],buprog,butype,buname);
	} else {
		if (builderar[i][0]>=1&&ourparamstown[i][14]*100/((builderar[i][0]+1)*bucost[butype][buname])<5&&is)
		{
			if(builderqar[i].length==0){
			builderqar[i].push(1);
			} else {
				builderqar[i][0]+=1;
			}
				builderqar[i].push([butype,buname,buprog,ourparamstown[i][14]/builderqar[i][0]]);
				if (!document.getElementById("que"+i.toString())){
					newbu = document.createElement("div");
					newbu.setAttribute("id", "que"+i.toString());
					newbu.classList.add("acrylic","shadow","counter3");
					newbu.innerHTML="Очередь строительства";
					newbu.setAttribute("style", "width: 306px; top: 18px; left: 5px;");
					document.getElementById("buildermenu").appendChild(newbu);
				}

				builderqing(i,builderqar[i][0],buprog,butype,buname);
			
		} else {

		builderar[i][0]+=1;


		for (j=1; j<builderar[i][0]; j++){
			if (fixedbu[i].indexOf(j)===-1){
			builderar[i][j][3]=ourparamstown[i][14]/builderar[i][0];
			prog1=builderar[i][j][2]*100/bucost[builderar[i][j][0]][builderar[i][j][1]],
			prog2=builderar[i][j][3]*100/(bucost[builderar[i][j][0]][builderar[i][j][1]]),
			prog3=100*(bucost[builderar[i][j][0]][builderar[i][j][1]]-builderar[i][j][2]-builderar[i][j][3])/bucost[builderar[i][j][0]][builderar[i][j][1]];

			prog1=prog1.toFixed(2);
			prog2=prog2.toFixed(2);
			prog3=prog3.toFixed(2);


			if (prog1+prog2>100){
				document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% auto "+0+"%; grid-auto-rows: 10px; padding: 0;");
			} else {
			document.getElementById(i.toString()+"builder"+j.toString()+"pr").setAttribute("style", "display: grid; grid-template-columns: "+prog1+"% "+prog2+"% "+prog3+"%; grid-auto-rows: 10px; padding: 0;");
			}

			document.getElementById(i.toString()+"builder"+j.toString()+"done").innerHTML="Готовность:"+prog1.toString()+"% (+"+prog2.toString()+"%) / "+prog3.toString()+"%";
		}}
	builderar[i].push([butype,buname,buprog,ourparamstown[i][14]/builderar[i][0]]);

	buildering(i,builderar[i][0],buprog,butype,buname);
}
}
}

let bunum,bun=[],ind=[],idxx,sbun=[],sbunum;

let indexbu = function (n,arr){
	idxx = arr.indexOf(n);
	while (idxx != -1) {
		ind.push(idxx);
 		idxx = arr.indexOf(n, idxx + 1);
	}
	idxx=ind.length;
	ind.splice(0,ind.length);
}
