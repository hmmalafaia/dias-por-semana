function calculaDiaSemana(){
    var tempoInicio = Date.now();
    var dataInicialTexto = document.getElementById("DataInicial").value;
    var dataFinalTexto = document.getElementById("DataFinal").value;
    var dataInicial = trataStringDate(dataInicialTexto);
    var dataFinal = trataStringDate(dataFinalTexto);
    var aux;
    if(dataInicial>dataFinal){
      aux = dataInicial;
      dataInicial = dataFinal;
      dataFinal = aux;
    }
      calcula(dataInicial, dataFinal);
      var tempoFim = Date.now();
      delta = tempoFim - tempoInicio;
      console.log("Tempo de execução: " + ( delta/1000) + " segundos");
  }

  function calcula(dataInicio, dataFim){
  var dom = 0;
  var seg = 0;
  var ter = 0;
  var qua = 0;
  var qui = 0;
  var sex = 0;
  var sab = 0;
    while(dataInicio <= dataFim){
      switch(dataInicio.getDay()){
        case 0:
          dom += 1;
          break;
        case 1:
          seg += 1;
          break;
        case 2:
          ter += 1;
          break;
        case 3:
          qua += 1;
          break;
        case 4:
          qui += 1;
          break;
        case 5:
          sex += 1;
          break;
        case 6:
          sab += 1;
          break;
      }
      dataInicio.setDate(dataInicio.getDate() +1);
    }
    atualizaTabela(dom,seg,ter,qua,qui,sex,sab);
  }

  function atualizaTabela(dom,seg,ter,qua,qui,sex,sab){
    document.getElementById("dom").innerHTML = dom;
    document.getElementById("seg").innerHTML = seg;
    document.getElementById("ter").innerHTML = ter;
    document.getElementById("qua").innerHTML = qua;
    document.getElementById("qui").innerHTML = qui;
    document.getElementById("sex").innerHTML = sex;
    document.getElementById("sab").innerHTML = sab;
  }

  function trataStringDate(dataString){
    var aux = dataString.split("-");
    var data = new Date(aux[0], aux[1] - 1, aux[2]); //Mês vai de 0..11
    return data;
  }
