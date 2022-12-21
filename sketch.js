//LINK DOS VIDEOS: 
//video demostrando o funcionamento do jogo: https://youtu.be/C0qOAM5wvSo
//Criando minhas variáveis:
var xpaubrasilFalso=[], ypaubrasilFalso=[],indiopegaPauBrasilFalso=[], qtd;
var openScreen, tela, yRect,opcao, istrucoespraJogar, musica, resumoDoJogo;
var imgFase1, imgFase2, imgFase3, imgFase4;
var imgPersonagem, personagem2,personagem3, personagem4, xb, yb, yChao,pulo;
var imgPauBrasil, xpaubrasil, ypaubrasil, indiopegaPauBrasil, velocidadePauBrasil, velocidadeItemsFalsos, efeitoSonoro1, marcoDeTouros, marcoDeTourosFalso;
var mapaRn,flecha, fortalezaDosReisMagos, frances;
var estado, openScreen, efcoBrookshireRegular;
var efeitoSonoro2;
var score, vidas, gameOver, xGaOver, yGaOver, telaVitoria,telaVitoriaFase2, telaCreditos;
//Função preload que carrega arquivos nesta função
function preload(){
  openScreen = loadImage("Banco_de_Imagens_Usadas/capa jogo rn.png");
  efcoBrookshireRegular = loadFont("EFCO Brookshire Regular.ttf");
  resumoDoJogo = loadImage("Banco_de_Imagens_Usadas/resumo.png");
  imgFase1 = loadImage("Banco_de_Imagens_Usadas/tela-fase1.png");
  imgFase2 = loadImage("Banco_de_Imagens_Usadas/img-da-fase2.png");
  imgFase3 = loadImage("Banco_de_Imagens_Usadas/img-da-fase3.png");
  imgFase4 = loadImage("Banco_de_Imagens_Usadas/img-da-fase4.png");
  istrucoespraJogar = loadImage("Banco_de_Imagens_Usadas/Intrucoes-jogo.png");
  imgPersonagem = loadImage("Banco_de_Imagens_Usadas/indio.png");
  imgPauBrasil = loadImage("Banco_de_Imagens_Usadas/pau-brasil.png");
  pauBrasilFalso = loadImage("Banco_de_Imagens_Usadas/Arvore-seca.png");
  pauBrasilFalso2 = loadImage("Banco_de_Imagens_Usadas/Arvore-seca.png");
  personagem2 = loadImage("Banco_de_Imagens_Usadas/portugueses-navio.png");
  marcoDeTouros = loadImage("Banco_de_Imagens_Usadas/Marco-de-Touros.png");
  marcoDeTourosFalso = loadImage("Banco_de_Imagens_Usadas/pedra.png");
  personagem3 = loadImage("Banco_de_Imagens_Usadas/colonizador portugues.png");
  mapaRn = loadImage("Banco_de_Imagens_Usadas/mapaRn.png");
  flecha = loadImage("Banco_de_Imagens_Usadas/flechaa.png");
  personagem4 = loadImage("Banco_de_Imagens_Usadas/portugues construtor.png");
  fortalezaDosReisMagos = loadImage("Banco_de_Imagens_Usadas/fortalezaDosReisMagos.png");
  frances = loadImage("Banco_de_Imagens_Usadas/frances.png");
  gameOver = loadImage("Banco_de_Imagens_Usadas/Game-over.png");
  telaVitoria = loadImage("Banco_de_Imagens_Usadas/telaVitoria.png");
  telaVitoriaFase2 = loadImage("Banco_de_Imagens_Usadas/telaVitoriaFase2.png");
  telaVitoriaFase3 = loadImage("Banco_de_Imagens_Usadas/telaVitoriaFase3.png");
  telaCreditos = loadImage("Banco_de_Imagens_Usadas/creditos-1.png");
  musica = loadSound('Kings_Feast.mp3', playSound);
  efeitoSonoro1 = loadSound('spell3.mp3');
  efeitoSonoro2 = loadSound('Horror-Hit.mp3');
}
//função de configuração, declarar valores iniciais(se precisar)
function setup() {
  createCanvas(500, 500);
  tela=0;
  yRect = height / 2-45;
  opcao=1;
  xb = -35;
  yb = 371;
  yChao=yb;
  pulo=false;
  xpaubrasil = 200;
  ypaubrasil = 200;
  velocidadePauBrasil = 2;
  velocidadeItemsFalsos=2;
  qtd=5;
  indiopegaPauBrasil = false;
  //Iniciando valores com for neste vetor
  for(i=0;i<qtd;i++){
    xpaubrasilFalso[i] = 350;
    ypaubrasilFalso[i] = height / 2+(i+50);
    indiopegaPauBrasilFalso[i] = false;
  }
  score = 0;
  vidas = 50;
  xGaOver = 100;
  yGaOver = 499;
  estado = 0;
}
//Função draw com if e elses pra transição das telas
function draw() {
  //mudança de telas:
  if (estado == 0) {
    opening();
  }
  if (estado == 11) {
    resumo();
  }
  if(estado == 1){
    fase1();
    qtd=2;
  }
  if (estado == 2) {
    fase2();
    qtd=3;
  }
  if (estado == 3) {
    fase3();
    qtd=5;
  }
  if (estado == 4) {
    fase4();
    qtd=3;
  }
  if(estado == 5){
    instrucoes();
  }
  if(estado == 6){
    creditos();
  }
  if(estado==7){
    teladeVitoria();
  }
  if(estado==8){
    telaDeVitoriaFase2();
  }
  if(estado==9){
    telaDeVitoriaFase3();
  }
}
//Função do Som
function playSound() {
  musica.loop();
}
//tela do resumo
function resumo(){
  background(resumoDoJogo);
  fill("#4D2105");
    textSize(30);
    text("'c' pra continuar...", width / 2 - 130, height / 2+230);
}
//Tela Inicial do Jogo
function opening() {
  background(openScreen);
  textFont(efcoBrookshireRegular);
  textSize(30);
  fill("#EFB46B");
  rect(width / 2 - 80, height / 2-45, 176, 40, 20);
  fill("#EFB46B");
  rect(width / 2 - 80, height / 2+1, 176, 40, 20);
  fill("#EFB46B");
  rect(width / 2 - 80, height / 2+46, 176, 40, 20);
  fill("#FFEBD3");
  rect(width / 2 - 80, yRect, 176, 40, 20);
  fill("#4D2105");
  text("Jogar", width / 2 - 30, height / 2-17);
  text("Instruções", width / 2 - 50, height / 2 +32);
  text("Créditos", width / 2 - 38, height / 2 + 75);
  textSize(20);
  fill("#EFB46B");
  rect(width / 2 +60, height / 2+190, 187, 54, 20);
  fill("#4D2105");
  text("Use 'Enter' e as 'Setas' \n pra entrar nas opcões", width / 2+62, height / 2+215);
  //para saber onde está o mouse nas posições x e y
  /*  push();
  fill(255);
  textSize(20);
  text(mouseX + ":" + mouseY, 30, 20);
  pop();*/
}
//Tela de Instrucoes
function instrucoes() {
  playSound();
  background(istrucoespraJogar);
  textFont(efcoBrookshireRegular);
  fill("#4D2105");
  textSize(30);
  text("'Esc' pra voltar", width / 2 - 100, height / 2+200);
  text("'Z' pra jogar", width / 2 - 80, height / 2+230);
  tela=2;
}
//Tela de creditos
function creditos() {
    background(telaCreditos);
    fill("#4D2105");
    textSize(30);
    text("'Esc' pra voltar", width / 2 - 100, height / 2+230);
    tela=3;
}
//Telas de vitorias
function teladeVitoria(){
   background(telaVitoria);
    tela=4;
}
function telaDeVitoriaFase2(){
  background(telaVitoriaFase2);
  tela=5;
}
function telaDeVitoriaFase3(){
  background(telaVitoriaFase3);
  tela=6;
}
//Função para movimentação dos objetos em tela, e do game over
function movimentacaoPontosVidasGameOverEncerrar(){
  image(gameOver, xGaOver, yGaOver, 300, 300);
  moverPersonagem();
  moverPauBrasil();
  moverpaubrasilFalso();
  checarIndioPegouPauBrasil();
  checarIndioPegoupaubrasilFalso();
  textSize(30);
  text("Pontos: " + score, 340, 29);
  text("Vidas: " + vidas, 10, 29);
  finish();
}
//Tela fase 1
function fase1() {
  background(imgFase1);
  image(imgPersonagem, xb, yb, 120, 70);
  image(imgPauBrasil, xpaubrasil, ypaubrasil, 100, 70);
  for(i=0;i<qtd;i++){
    image(pauBrasilFalso, xpaubrasilFalso[i], ypaubrasilFalso[i], 100, 70);
  }
  movimentacaoPontosVidasGameOverEncerrar();
}
//Tela fase 2
function fase2(){
  background(imgFase2);
  image(personagem2, xb, yb, 120, 70);
  image(marcoDeTouros, xpaubrasil, ypaubrasil, 100, 70);
  for(i=0;i<qtd;i++){
    image(marcoDeTourosFalso, xpaubrasilFalso[i], ypaubrasilFalso[i], 80, 70);
  }
  movimentacaoPontosVidasGameOverEncerrar();
}
//Tela fase 3
function fase3(){
    background(imgFase3);
  image(personagem3, xb, yb, 110, 110);
  image(mapaRn, xpaubrasil, ypaubrasil, 100, 70);
  for(i=0;i<qtd;i++){
    image(flecha, xpaubrasilFalso[i], ypaubrasilFalso[i], 100, 70);
  }
  movimentacaoPontosVidasGameOverEncerrar();
}
//Tela fase 4
function fase4(){
    background(imgFase4);
  image(personagem4, xb, yb, 80, 90);
  image(fortalezaDosReisMagos, xpaubrasil, ypaubrasil, 100, 70);
  for(i=0;i<qtd;i++){
    image(frances, xpaubrasilFalso[i], ypaubrasilFalso[i], 100, 70);
  }
  movimentacaoPontosVidasGameOverEncerrar();
}
//Movimentação do seu personagem
function moverPersonagem() {
  if(keyIsDown(RIGHT_ARROW)){
    xb = xb+6;
  }
  if(keyIsDown(LEFT_ARROW)){
    xb = xb-6;
  }
  if (keyIsDown(UP_ARROW) && !pulo) {
    yb = yChao - 320;
    pulo=true;
  }
  if(pulo){
    if(yb < yChao){
      yb = yb + 12;
    }else{
      pulo=false;
      yb = yChao;
    }
  }
  //mover pra baixo(descer)
 if (keyIsDown(DOWN_ARROW) && yb < 370) {
   yb = 370;
  }
  //para o personagem não sair da tela
  if(xb>425){
      xb=-35;
  }
  if(xb<-35){
    xb=425;
  }
}
//movimentação do(s) objeto(s) a se pegar
function moverPauBrasil() {
  //mover objeto pra esquerda
  xpaubrasil = xpaubrasil - velocidadePauBrasil;
  if (xpaubrasil < -40) {
    xpaubrasil = 430;
    ypaubrasil = random(20, 365);
  }
  //Velocidade aumenta para dificuldade tambem aumentar
  if (score > 20) {
    velocidadePauBrasil = 3;
  }
  if (score >= 100) {
    velocidadePauBrasil = 6;
  }
  if (score >= 200) {
    velocidadePauBrasil = 7;
  }
  if (score >= 300) {
    velocidadePauBrasil = 8;
  }
}
//movimentação dos objetos falso que deve-se evitar
function moverpaubrasilFalso() {
    for(i=0;i<qtd;i++){//xpaubrasilFalso
      xpaubrasilFalso[i] = xpaubrasilFalso[i] - velocidadeItemsFalsos; 
      if (xpaubrasilFalso[i] < -45) {
        xpaubrasilFalso[i] = 430;
        ypaubrasilFalso[i] = random(20, 365);
    }
//Velocidade do objeto falso aumenta para dificuldade tambem aumentar
    if (score >= 100) {
      velocidadeItemsFalsos = 3;
  }
    if (score >= 200) {
      velocidadeItemsFalsos = 3.5;
  }
    if (score >= 300) {
      velocidadeItemsFalsos = 4;
  }
  }
}
//Checar se houve colisão entre seu personagem e objeto certo a...
//...Se pegar, ganhando pontuação quando pega
function checarIndioPegouPauBrasil() {
  indiopegaPauBrasil = collideRectRect(
    xb,
    yb,
    50,
    100,
    xpaubrasil,
    ypaubrasil,
    45,
    35
  );
  if (indiopegaPauBrasil == true) {
    score = score + 10;
    xpaubrasil = 430;
    ypaubrasil = random(20, 365);
    efeitoSonoroItemCerto();
  }
}
//efeito sonoro quando seu personagem pega objeto correto
function efeitoSonoroItemCerto(){
  efeitoSonoro1.play();
}
//Checar se houve colisão entre seu personagem e objeto falso que...
//...Deve-se evitar, perde vidas quando se pega obj. falso
function checarIndioPegoupaubrasilFalso() {
  for(i=0;i<qtd;i++){
    indiopegaPauBrasilFalso[i] = collideRectRect(xb,yb,50,90,
    xpaubrasilFalso[i],
    ypaubrasilFalso[i],45,35);
  //indiopegaPauBrasilFalso2 = collideRectRect(xb,yb,50,100,xpaubrasilFalso2,ypaubrasilFalso2,45,35);
  if (indiopegaPauBrasilFalso[i]) {
    vidas=vidas-6;
    xpaubrasilFalso[i] = 430;
    ypaubrasilFalso[i] = random(18, 365);
    yb=370;
    efeitoSonoroItemErrado();
  }
  }
  if (vidas < 0) {
    vidas = 0;
  }
}
//efeito sonoro quando seu personagem pega o objeto(s) errado
function efeitoSonoroItemErrado(){
  efeitoSonoro2.play();
}
//Sumir com todos os objetos que aparecem na tela
function objetosSumirdaTela(){
    xpaubrasil = 700;
    for(i=0;i<qtd;i++){
    xpaubrasilFalso[i] = 700; 
    }
    yb = yb + 4;
}
//Encerrando o jogo
function finish() {
  //game over aparecer, demais objetos da tela somem
  if (vidas <= 0) {
    yGaOver--;
    objetosSumirdaTela()  
  }
  if (yGaOver < -150) {
    yGaOver = 420;
  }
  //Quando se vence... tela da vitoria 1, 2 e 3
  if (score >= 100 && (estado == 1)) {
    estado = 7;
    objetosSumirdaTela();
  }
  if (score >= 200 && (estado==2)) {
    estado=8;
    objetosSumirdaTela();
  }
  if (score >= 300 && (estado==3)) {
    estado=9;
    objetosSumirdaTela();
  }//tela de creditos(venceu o jogo(zerou))
  if (score >= 400 && (estado==4)) {
    creditos();
    objetosSumirdaTela();
  }
}
//Verificar quando tecla foi digitada, função que é chamada uma vez por clique das teclas.
function keyPressed() {
  //menu do jogo funcionamento das setas(cima/baixo)
  if(keyIsDown(UP_ARROW) && yRect>228){
    yRect = yRect-45;
    opcao= opcao-1;
  }
  if(keyIsDown(DOWN_ARROW) && yRect<280){
    yRect = yRect+45;
    opcao=opcao+1;
  }
  //resumo do jogo
  if ((keyCode === ENTER) && opcao==1) {
    estado = 11;
  }//fase 1 (jogar)
  //67 ----> c
  if(keyCode === 67 && (estado==11)){
    estado=1;
  }
  //instrucoes
  if ((keyCode === ENTER) && opcao==2) {
    estado = 5;
  }//voltar pro menu
  if (keyCode === ESCAPE && tela==2){
    estado=0;
  }
  //Nas instrucoes se apertar z vai pro jogo
  if (keyCode === 90 && estado == 5) {
    estado = 1;
  }
  //creditos
  if ((keyCode === ENTER) && opcao==3) {
    estado = 6;
  }//voltar pro menu
  if (keyCode === ESCAPE && tela==3){
    estado=0;
  }
  //Enter pra fase 2,3 e 4
  if (keyCode === ENTER && tela==4) {
    estado = 2;
  }
  if (keyCode === ENTER && tela==5) {
    estado = 3;
  }
  if (keyCode === ENTER && tela==6) {
    estado = 4;
  }//Se morrer(vida<=0) volta as variaveis pro valor inicial
  //ou se os pontos(score) for maior igual a 200 acontece o mesmo
  if ((keyCode === ESCAPE && vidas <= 0) || (keyCode === ESCAPE && score >= 400)) {
    estado = 0;
    score = 0;
    vidas = 50;
    xb = -35;
    yb = 370;
    xGaOver = 100;
    yGaOver = 499;
  }
}