					garnisadd();

				if (garnisone[parseInt(townonclicki)][0].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][0].length; u++){
						addarms(parseInt(townonclicki),u,0,"lf");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "lfpusto");
						document.getElementById("lf").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					
				}

				if (garnisone[parseInt(townonclicki)][1].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][1].length; u++){
						addarms(parseInt(townonclicki),u,1,"ce");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "cepusto");
						document.getElementById("ce").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
				
				}

				if (garnisone[parseInt(townonclicki)][2].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][2].length; u++){
						addarms(parseInt(townonclicki),u,2,"rf");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "rfpusto");
						document.getElementById("rf").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					}
				

				if (garnisone[parseInt(townonclicki)][3].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][3].length; u++){
						addarms(parseInt(townonclicki),u,3,"lt");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "ltpusto");
						document.getElementById("lt").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					
				}

				if (garnisone[parseInt(townonclicki)][4].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][4].length; u++){
						addarms(parseInt(townonclicki),u,4,"ct");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "ctpusto");
						document.getElementById("ct").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					
				}

				if (garnisone[parseInt(townonclicki)][5].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][5].length; u++){
						addarms(parseInt(townonclicki),u,5,"rt");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "rtpusto");
						document.getElementById("rt").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 5; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					
				}
				
				if (garnisone[parseInt(townonclicki)][6].length!=0) {
					for (u=1; u<=garnisone[parseInt(townonclicki)][6].length; u++){
						addarms(parseInt(townonclicki),u,6,"townreservdiv");
					}} else {
						let newdiv=document.createElement("div");
						newdiv.classList.add("acrylic2", "shadow");
						newdiv.setAttribute("id", "repusto");
						document.getElementById("townreservdiv").appendChild(newdiv);
						newdiv.setAttribute("style", "grid-column-start: 1; grid-column-end: 14; grid-row-start: 1; padding: 0; font-size: small;");
						newdiv.innerHTML="Пусто";
					}
				