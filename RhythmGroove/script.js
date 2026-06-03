//frameRate(num) -> qtd vzs é pro draw repetir em 1s
//frameCount -> frames do bglh msm
//p5 tem uma funcao keyPressed q detecta se alguma chave foi clicada ou nao. 
//usar mais o setup

//preciso colocar um valor mínimo pro n pq senao chega uma hora que ele fica mto pequeno e o programa crasha


let fundo;
let score = 0;
let erros = 0;
let setas = [];
let n = 300;
let valorMinimo = 80;
let fase = 0;
let contador = 0;
let linha = 350;


function setup() {
  createCanvas(400, 400);
  criarSeta();
}

function draw() {
  image(fundo, 0, 0, width, height);
  
  //linha branca
  fill("white")
  rect(0, 350, 400, 5)
  
  //mostrar score
  textSize(30);
  text(score, 20, 40)
  
  fill("blue");
  textSize(30);
  text(erros, 350, 40)
  
  for (let i=0; i<setas.length; i+=1){
    setas[i].y+=1
    textSize(70);
    text(setas[i].desenho, setas[i].x, setas[i].y)
    
    if(setas[setas.length - 1].y > n){
      criarSeta();
    }

    if(score>10){
      fase = 1;
    }
    if(score > 20){
      fase = 2;
    }
    if (score > 30){
      fase = 3;
    }
    
    switch(fase){
      case 0:
        n = 150;
        break
      case 1:
        n = 100;
        break
      case 2:
        n = 50;
        break
      case 3:
        n = 30;
        break
    }
        
   if(setas[i].y>400){
     setas.splice(i, 1);
     erros+=1
   }
        
  console.log("Tamanho da lista " + setas.length)
      
    console.log(fase);
  }
}

function criarSeta(){
  let [symbol, name] = sorteiaSeta();
  let seta = {
    desenho: symbol,
    nome: name,
    x: Math.floor(Math.random()*300),
    y: 0
  }
  
  setas.push(seta);
}

function sorteiaSeta(){
  let numero = Math.floor(Math.random()*4);
  
  switch(numero){
    case 0:
      return ["⬆️", "ArrowUp"];
    case 1:
      return ["➡️", "ArrowRight"];
    case 2:
      return ["⬇️", "ArrowDown"];
    case 3:
      return ["⬅️", "ArrowLeft"];
    default:
      console.log("Erro no switch");
}}
  
function keyPressed(){
  for (let i=0; i<setas.length; i+=1){
    if(setas[i].y>350 && setas[i].y<380){
      
      if(key === setas[i].nome){
        console.log('Entrou aq')
        score++;
        setas.splice(i, 1);
      } 
      
    }
  } 
}
  
function preload(){
  fundo = loadImage('./fundo.jpg')
}
  
