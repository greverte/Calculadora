
function enviar() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const idade = document.getElementById('idade').value;
  const massa = document.getElementById('massa-livre').value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const atividade = document.querySelector('input[name="atividade"]:checked').value;
  const escolhaFormula = document.getElementById('formula').value;

  const form = document.getElementById('form-id');

  var gasto = '';
  var kcal = '';
  var basal = '';
  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh)
  if (escolhaFormula === 'harris') {
    if (sexo === 'masculino') {
      basal = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
      basal = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
  }
  else if (escolhaFormula === 'fao-oms') {
    if (idade < 10) {
      basal = 0
    }
    else if (sexo === 'masculino' && idade >= 10 && idade < 18) {
      basal = (17.686 * peso) + 658.2
    }
    else if (sexo === 'masculino' && idade >= 18 && idade < 30) {
      basal = (15.057 * peso) + 692.2;
    }
    else if (sexo === 'masculino' && idade >= 30 && idade < 60) {
      basal = (11.472 * peso) + 873.1
    }
    else if (sexo === 'masculino' && idade >= 60) {
      basal = (11.711 * peso) + 587.7
    }
    else if (sexo === 'feminino' && idade >= 10 && idade < 18) {
      basal = (13.384 * peso) + 692.6
    }
    else if (sexo === 'feminino' && idade >= 18 && idade < 30) {
      basal = (14.818 * peso) + 486.6;
    }
    else if (sexo === 'feminino' && idade >= 30 && idade < 60) {
      basal = (8.126 * peso) + 845.6
    }
    else if (sexo === 'feminino' && idade >= 60) {
      basal = (9.082 * peso) + 658.5
    }
  }
  else if (escolhaFormula === 'mifflin') {
    if (sexo === 'feminino') {
      basal = (10 * peso) + (6.25 * altura) - (5.0 * idade) - 161
    }
    else if (sexo === 'masculino') {
      basal = (10 * peso) + (6.25 * altura) - (5.0 * idade) + 5
    }
  }
  else if (escolhaFormula === 'cunningham') {
    basal = (22 * massa) + 500
  }
  else if (escolhaFormula === 'tinsleymlg') {
    basal = (25.9 * massa) + 284
  }
  else if (escolhaFormula === 'tinsleyp') {
    basal = (24.8 * peso) + 10
  }


  if (atividade === 'sedentario') {
    gasto = basal * 1.2;
    document.getElementById('resultado-gasto').innerHTML = (Math.round(gasto));
  }
  else if (atividade === 'pouco') {
    gasto = basal * 1.375;
    document.getElementById('resultado-gasto').innerHTML = Math.round(gasto);
  }
  else if (atividade === 'moderado') {
    gasto = basal * 1.55;
    document.getElementById('resultado-gasto').innerHTML = Math.round(gasto);
  }
  else if (atividade === 'muito') {
    gasto = basal * 1.725;
    document.getElementById('resultado-gasto').innerHTML = Math.round(gasto);
  }
  else if (atividade === 'extremamente') {
    gasto = basal * 1.9;
    document.getElementById('resultado-gasto').innerHTML = Math.round(gasto);
  }
  else if (atividade === 'nenhum') {
    gasto = basal;
    document.getElementById('resultado-gasto').innerHTML = Math.round(gasto);
  }

  kcal = document.querySelector('.kcaldia');
  kcal.classList.remove('kcaldia')
  kcal.classList.add('mostrar');

};

function enviar2() {
  const form = document.getElementById('form-id');
  const altura = document.getElementById('altura').value;
  const pescoco = document.getElementById('pescoco').value;
  const cintura = document.getElementById('cintura').value;
  const quadril = document.getElementById('quadril').value;
  const peso = document.getElementById('peso').value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;

  var gordura = '';
  var mlg = '';
  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh)

  if (sexo === 'masculino') {
    gordura = (495 / (1.0324 - (0.19077 * Math.log10(cintura - pescoco)) + (0.15456 * Math.log10(altura)))) - 450
    mlg = peso - ((peso * gordura) / 100)
    document.getElementById('resultado-gordura').innerHTML = (Math.round(gordura));
    document.getElementById('resultado-mlg').innerHTML = (Math.round(mlg));
  }
  else if (sexo === 'feminino') {
    gordura = (495 / (1.29579 - (0.35004 * Math.log10(parseInt(cintura) + parseInt(quadril) - pescoco)) + (0.221 * Math.log10(altura)))) - 450
    mlg = peso - ((peso * gordura) / 100)
    document.getElementById('resultado-gordura').innerHTML = (Math.round(gordura));
    document.getElementById('resultado-mlg').innerHTML = (Math.round(mlg));
  }

  result = document.querySelector('.div-gordura');
  result.classList.remove('div-gordura');
  result.classList.add('mostrar-2');


}

function enviar3() {
  const form = document.getElementById('form-id');
  const peso = document.getElementById('peso').value;
  const basal = document.getElementById('basal-diario').value;
  const objetivo = document.getElementById('objetivo').value;
  const estado = document.querySelector('input[name="estado"]:checked').value;


  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh);




  if (objetivo === 'emagrecer' && estado === 'magrelo') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 3.3)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 3.3) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');

  }
  else if (objetivo === 'emagrecer-agressivo' && estado === 'magrelo') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 2.05)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 2.05) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'manter' && estado === 'magrelo') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 4.57)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 4.57) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-seco' && estado === 'magrelo') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 5.16)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 5.16) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-expressivo' && estado === 'magrelo') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 5.83)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 5.83) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }

  if (objetivo === 'emagrecer' && estado === 'atletico') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.6)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 2.7)) + 'G');
    const total = ((peso * 2.6) * 4) + ((peso * 0.8) * 9) + ((peso * 2.7) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'emagrecer-agressivo' && estado === 'atletico') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.6)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 1.45)) + 'G');
    const total = ((peso * 2.6) * 4) + ((peso * 0.8) * 9) + ((peso * 1.45) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'manter' && estado === 'atletico') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.6)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 3.97)) + 'G');
    const total = ((peso * 2.6) * 4) + ((peso * 0.8) * 9) + ((peso * 3.97) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-seco' && estado === 'atletico') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.6)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 4.56)) + 'G');
    const total = ((peso * 2.6) * 4) + ((peso * 0.8) * 9) + ((peso * 4.56) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-expressivo' && estado === 'atletico') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 5.23)) + 'G');
    const total = ((peso * 2) * 4) + ((peso * 0.8) * 9) + ((peso * 5.23) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  if (objetivo === 'emagrecer' && estado === 'falso') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 3.1)) + 'G');
    const total = ((peso * 2.2) * 4) + ((peso * 0.8) * 9) + ((peso * 3.1) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'emagrecer-agressivo' && estado === 'falso') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 1.85)) + 'G');
    const total = ((peso * 2.2) * 4) + ((peso * 0.8) * 9) + ((peso * 1.85) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'manter' && estado === 'falso') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 4.37)) + 'G');
    const total = ((peso * 2.2) * 4) + ((peso * 0.8) * 9) + ((peso * 4.37) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-seco' && estado === 'falso') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 4.96)) + 'G');
    const total = ((peso * 2.2) * 4) + ((peso * 0.8) * 9) + ((peso * 4.96) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-expressivo' && estado === 'falso') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 2.2)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 5.63)) + 'G');
    const total = ((peso * 2.2) * 4) + ((peso * 0.8) * 9) + ((peso * 5.63) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  if (objetivo === 'emagrecer' && estado === 'acima') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 1.8)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 3.5)) + 'G');
    const total = ((peso * 1.8) * 4) + ((peso * 0.8) * 9) + ((peso * 3.5) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'emagrecer-agressivo' && estado === 'acima') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 1.8)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 2.25)) + 'G');
    const total = ((peso * 1.8) * 4) + ((peso * 0.8) * 9) + ((peso * 2.25) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'manter' && estado === 'acima') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 1.8)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 4.77)) + 'G');
    const total = ((peso * 1.8) * 4) + ((peso * 0.8) * 9) + ((peso * 4.77) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-seco' && estado === 'acima') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 1.8)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 5.36)) + 'G');
    const total = ((peso * 1.8) * 4) + ((peso * 0.8) * 9) + ((peso * 5.36) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
  else if (objetivo === 'ganho-expressivo' && estado === 'acima') {
    document.getElementById('resultado-prot').innerHTML = (Math.round((peso * 1.8)) + 'G');
    document.getElementById('resultado-fat').innerHTML = (Math.round((peso * 0.8)) + 'G');
    document.getElementById('resultado-carb').innerHTML = (Math.round((peso * 6.03)) + 'G');
    const total = ((peso * 1.8) * 4) + ((peso * 0.8) * 9) + ((peso * 6.03) * 4)
    document.getElementById('totaltd').innerHTML = (Math.round(total) + ' ' + 'KCAL / D');
  }
}