    var materiaInfo = {
	  2018: "https://www.etapa.com.br/etaparesolve/etaparesolve/2018/ITA/FaseUnica_304/correcao/YYY/XXX.pdf",
		2017: "https://www.etapa.com.br/etaparesolve/etaparesolve/2017/ITA/FaseUnica_269/correcao/YYY/XXX.pdf",
		2016: "https://www.etapa.com.br/etaparesolve/etaparesolve/2016/ITA/FaseUnica_244/correcao/YYY/XXX.jpg",
		2015: "https://www.etapa.com.br/etaparesolve/etaparesolve/2015/ITA/FaseUnica_207/correcao/YYY/XXX.gif",
		2014: "https://www.etapa.com.br/etaparesolve/etaparesolve/2014/ITA/FaseUnica_183/correcao/YYY/XXX.gif",
		2013: "https://www.etapa.com.br/etaparesolve/etaparesolve/2013/ITA/FaseUnica_149/correcao/YYY/XXX.gif",
		2012: "https://www.etapa.com.br/etaparesolve/etaparesolve/2012/ITA/FaseUnica_116/correcao/YYY/XXX.gif",
		2011: "https://www.etapa.com.br/etaparesolve/etaparesolve/2011/ITA/FaseUnica_17/correcao/YYY/XXX.gif"
    };
	
  //mat: "https://www.etapa.com.br/etaparesolve/etaparesolve/2016/ITA/FaseUnica_246/correcao/matematica/XXX.gif"
	var materia = "fisica";
	var ano = 2011;
	var questao = 1;
	
	function mostraTudo() {
		var img = document.querySelector("template").content.children[2];
		
		console.log(img);
		
		for (var i = 1; i <= 30; i++) {
			var clon = img.cloneNode(true);
			clon.src = clon.src.replace("XXX", i);
			imgDiv.appendChild(clon);
		}
	}
	function selecionouMateria(ev) {
		var tar = ev.target;
		texto = tar.innerText;
		//arrumacao pra url
		switch (texto) {
  			case "Matemática":
    			materiaSelecionada = "matematica";
    			break;
  			case "Física":
  			  	materiaSelecionada = "fisica";
   			 	break;
  			case "Química":
   			 	materiaSelecionada = "quimica"
   			 	break;
   			case "Inglês":
    			materiaSelecionada = "ingles";
    			break;
  			case "Português":
  			  	materiaSelecionada = "portugues";
   			 	break;
		}
		for (var elem of materiaDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}
		tar.className = "selecionado";
		//limpa ano, questao exibida e selecao de questao:
		imgDiv.innerHTML = "";
		for (var elem of questoesDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}
		for (var elem of anosDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}

	}
	
	function selecionouAno(ev) {
		var tar = ev.target;
		ano = tar.innerText;
		
		for (var elem of anosDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}
		tar.className = "selecionado";
		
		//limpa questao exibida e selecao de questao:
		imgDiv.innerHTML = "";
		for (var elem of questoesDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}
	}
	
	function mostraUma(ev) {
		var tar = ev.target;
		questao = tar.innerText;
		corr = Number(questao);
		if(materiaSelecionada == "portugues"){
			corr = corr + 20;
			questao = corr.toString();
		}
		
		for (var elem of questoesDiv.getElementsByClassName("selecionado")) {
			elem.className = "";
		}
		tar.className = "selecionado";
		
		var url = materiaInfo[ano].replace("XXX", questao);
		var url = url.replace("YYY", materiaSelecionada);

		// switch das excessoes
		switch(ano){
  			case "2018":
    			switch(materiaSelecionada){
    				case "matematica":
    					var url = url.replace("304","306");
    					break;
  					case "fisica":
   			 			break;
  					case "quimica":
   					 	var url = url.replace("304","308");
   						break;
   					case "ingles":
   						var url = url.replace("304","305");
   						break;
   					case "portugues":
   						var url = url.replace("304","305");
   						break;
    			}
    			break;
  			case "2017":
  				switch(materiaSelecionada){
    				case "matematica":
    					var url = url.replace("269","271");
    					break;
  					case "fisica":
   			 			break;
  					case "quimica":
   					 	var url = url.replace("269","273");
   						break;
   					case "ingles":
   						var url = url.replace("269","270");
   						break;
   					case "portugues":
   						var url = url.replace("269","270");
   						break;
    			}
   			 	break;
  			case "2016":
   				switch(materiaSelecionada){
    				case "matematica":
    					var url = url.replace("244","246");
    					var url = url.replace("jpg","gif");
    					break;
  					case "fisica":
   			 			break;
  					case "quimica":
   					 	var url = url.replace("244","247");
   						break;
   					case "ingles":
   						var url = url.replace("244","245");
   						var url = url.replace("jpg","gif");
   						break;
   					case "portugues":
   						var url = url.replace("244","245");
   						var url = url.replace("jpg","gif");
   						break;
    			}
   				break;
   			case "2015":
   				switch(materiaSelecionada){
    				case "matematica":
    					var url = url.replace("207","210");
    					break;
  					case "fisica":
   			 			break;
  					case "quimica":
   					 	var url = url.replace("207","212");
   						break;
   					case "ingles":
   						var url = url.replace("207","209");
   						break;
   					case "portugues":
   						var url = url.replace("207","209");
   						break;
    			}
   				break;
   			default:
   				break;

		}


		//correcao redacao
		if(corr == "41"){
			switch(ano){
				case "2011":
					url = url.replace("41","31");
					break;
				case "2012":
					url = url.replace("41","80");
					break;
				case "2014":
					url = url.replace("41","1");
					break;
			}
			url = url.replace("portugues","redacao");
		}


		if (ano <= 2016) {
			var img = document.createElement("IMG");
			img.style.width = "97vw";
			img.src = url;
			
			imgDiv.innerHTML = "";
			imgDiv.appendChild(img);
		} else {
			var ifra = document.createElement("IFRAME");
			ifra.style.width = "97vw";
			ifra.height = 1400;
			ifra.src = "http://docs.google.com/gview?url=" + url + "&embedded=true";
			
			imgDiv.innerHTML = "";
			imgDiv.appendChild(ifra);
		}
	}
	
	function startup() {
		//monta constantes
		const ano = 2018;
		const materias = ["Matemática","Física","Química","Inglês","Português"];
		const s = materias.length;
		//monta materias:
		for (var i = 1; i <= s ;i++){
			var butt = document.createElement("BUTTON");
			butt.innerText = materias[i-1];
			materiaDiv.appendChild(butt);
		}
		//monta numeros de anos:
		for (var i = 2011; i <= ano ; i++) {
			var butt = document.createElement("BUTTON");
			butt.innerText = i;
			anosDiv.appendChild(butt);
		}
		
		//monta numeros de questoes:
		for (var i = 0; i < 30; i++) {
			var butt = document.createElement("BUTTON");
			butt.innerText = i + 1;
			questoesDiv.appendChild(butt);
			if ((i + 1) % 10 == 0) questoesDiv.appendChild(document.createElement("BR"));
		}
	}
