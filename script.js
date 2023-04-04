function enviarBasal() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const idade = document.getElementById('idade').value;
  const massa = document.getElementById('massa-livre').value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const atividade = document.querySelector('input[name="atividade"]:checked').value;
  const escolhaFormula = document.getElementById('formula').value;
  const form = document.getElementById('form-id');

  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh)
  var result = ''
  class CalculoBasal {
    constructor(peso, altura, idade, massa) {
      this.peso = peso;
      this.altura = altura;
      this.idade = idade;
      this.massa = massa;
    }
    CalcHarrisF() {
      const basal = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
      return basal;
    }
    CalcHarrisM() {
      const basal = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
      return basal;
    }
    CalcMiffM() {
      const basal = (10 * peso) + (6.25 * altura) - (5.0 * idade) + 5;
      return basal;
    }
    CalcMiffF() {
      const basal = (10 * peso) + (6.25 * altura) - (5.0 * idade) - 161;
      return basal;
    }
    CalcCunn() {
      const basal = (22 * massa) + 500;
      return basal;
    }
  }
  if (escolhaFormula === 'cunningham') result = new CalculoBasal(massa).CalcCunn();
  if (escolhaFormula === 'harris' && sexo === 'masculino') result = new CalculoBasal(peso, altura, idade).CalcHarrisM();
  if (escolhaFormula === 'harris' && sexo === 'feminino') result = new CalculoBasal(peso, altura, idade).CalcHarrisF();
  if (escolhaFormula === 'mifflin' && sexo === 'feminino') result = new CalculoBasal(peso, altura, idade).CalcMiffF();
  if (escolhaFormula === 'mifflin' && sexo === 'masculino') result = new CalculoBasal(peso, altura, idade).CalcMiffM();
  if (atividade === 'sedentario') result *= 1.2;
  else if (atividade === 'pouco') result *= 1.4;
  else if (atividade === 'moderado') result *= 1.6;
  else if (atividade === 'muito') result *= 1.9;
  else if (atividade === 'nenhum') result *= 1;

  document.getElementById('resultado-gasto').innerText = Math.floor(result);

  kcal = document.querySelector('.kcaldia');
  kcal.classList.remove('kcaldia');
  kcal.classList.add('mostrar');


}

function enviarGord() {
  const altura = document.getElementById('altura').value;
  const pescoco = document.getElementById('pescoco').value;
  const cintura = document.getElementById('cintura').value;
  const quadril = document.getElementById('quadril').value;
  const peso = document.getElementById('peso').value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;


  const form = document.getElementById('form-id');
  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh);


  class calculoGord {
    constructor(altura, pescoco, cintura, quadril, peso, sexo) {
      this.altura = altura;
      this.pescoco = pescoco;
      this.cintura = cintura;
      this.quadril = quadril;
      this.peso = peso;
      this.pexo = sexo;
    }
    calcularGordura() {
      if (sexo === 'masculino') {
        const gordura = (495 / (1.0324 - (0.19077 * Math.log10(cintura - pescoco)) + (0.15456 * Math.log10(altura)))) - 450;
        return gordura;
      } else {
        const gordura = (495 / (1.29579 - (0.35004 * Math.log10(parseInt(cintura) + parseInt(quadril) - pescoco)) + (0.221 * Math.log10(altura)))) - 450;
        return gordura;
      }
    }
  }
  const resultado = new calculoGord(altura, pescoco, cintura, quadril, peso, sexo);
  const mlg = peso - ((peso * resultado.calcularGordura()) / 100)
  document.getElementById('resultado-mlg').innerText = Math.floor(mlg);
  document.getElementById('resultado-gordura').innerText = Math.floor(resultado.calcularGordura());

  result = document.querySelector('.div-gordura');
  result.classList.remove('div-gordura');
  result.classList.add('mostrar-2');

};

function enviarDieta() {
  const form = document.getElementById('form-id');
  const peso = document.getElementById('peso').value;
  const basal = document.getElementById('basal-diario').value;
  const objetivo = document.getElementById('objetivo').value;
  const estado = document.querySelector('input[name="estado"]:checked').value;

  function removeRefresh(event) {
    event.preventDefault();
  }
  form.addEventListener('submit', removeRefresh);

  var macro = {}
  var macros = ''
  class calcDieta {
    constructor(peso, estado) {
      this.peso = peso;
      this.estado = estado;
    }
    emagrecer() {
      macro = {
        prot: peso * 2,
        gord: peso * 0.8,
        carb: ''
      }
      if (estado === 'magrelo') {
        macro.carb = peso * 3.3
        return macro
      } else if (estado === 'atletico') {
        macro.carb = peso * 2.7
        return macro
      } else if (estado === 'falso') {
        macro.carb = peso * 3.1
        return macro
      } else if (estado === 'acima') {
        macro.carb = peso * 3.5
        return macro
      }
    }
    agressivo() {
      macro = {
        prot: peso * 2,
        gord: peso * 0.8,
        carb: ''
      }
      if (estado === 'magrelo') {
        macro.carb = peso * 2.05
        return macro
      } else if (estado === 'atletico') {
        macro.carb = peso * 1.45
        return macro
      } else if (estado === 'falso') {
        macro.carb = peso * 1.85
        return macro
      } else if (estado === 'acima') {
        macro.carb = peso * 2.25
        return macro
      }
    }
    manter() {
      macro = {
        prot: peso * 2,
        gord: peso * 0.8,
        carb: ''
      }
      if (estado === 'magrelo') {
        macro.carb = peso * 4.57
        return macro
      } else if (estado === 'atletico') {
        macro.carb = peso * 3.97
        return macro
      } else if (estado === 'falso') {
        macro.carb = peso * 4.37
        return macro
      } else if (estado === 'acima') {
        macro.carb = peso * 4.77
        return macro
      }
    }
    seco() {
      macro = {
        prot: peso * 2,
        gord: peso * 0.8,
        carb: ''
      }
      if (estado === 'magrelo') {
        macro.carb = peso * 5.16
        return macro
      } else if (estado === 'atletico') {
        macro.carb = peso * 4.56
        return macro
      } else if (estado === 'falso') {
        macro.carb = peso * 4.96
        return macro
      } else if (estado === 'acima') {
        macro.carb = peso * 5.36
        return macro
      }
    }
    ganho() {
      macro = {
        prot: peso * 2,
        gord: peso * 0.8,
        carb: ''
      }
      if (estado === 'magrelo') {
        macro.carb = peso * 5.83
        return macro
      } else if (estado === 'atletico') {
        macro.carb = peso * 5.23
        return macro
      } else if (estado === 'falso') {
        macro.carb = peso * 5.63
        return macro
      } else if (estado === 'acima') {
        macro.carb = peso * 6.03
        return macro
      }
    }

  }
  if (objetivo === 'emagrecer') macros = new calcDieta(peso, estado).emagrecer();
  if (objetivo === 'emagrecer-agressivo') macros = new calcDieta(peso, estado).agressivo();
  if (objetivo === 'manter') macros = new calcDieta(peso, estado).manter();
  if (objetivo === 'ganho-seco') macros = new calcDieta(peso, estado).seco();
  if (objetivo === 'ganho-expressivo') macros = new calcDieta(peso, estado).ganho();


  document.getElementById('resultado-prot').innerHTML = Math.floor(macros.prot) + 'G'
  document.getElementById('resultado-fat').innerHTML = Math.floor(macros.gord) + 'G'
  document.getElementById('resultado-carb').innerHTML = Math.floor(macros.carb) + 'G'
  document.getElementById('totaltd').innerHTML = Math.floor((macros.prot * 4) + (macros.gord * 9) + (macros.carb * 4)) + ' ' + 'KCAL / D';
};