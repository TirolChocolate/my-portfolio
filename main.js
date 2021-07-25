const a1 = document.getElementById("q1");
const a2 = document.getElementById("q2");
const a3 = document.getElementById("q3");
const a4 = document.getElementById("q4");
const a5 = document.getElementById("q5");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const h5 = document.getElementById("h5");

const Game = document.getElementById("game");
const Train = document.getElementById("training");
const Walk = document.getElementById("walking");
const Karaoke = document.getElementById("karaoke");
const Sewing = document.getElementById("sewing");

Game.onclick = function () {
  a1.textContent = "正解です！";
};
Train.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Walk.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Karaoke.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Sewing.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
h1.onclick = function () {
  a1.textContent = "ヒント:たぶんわかりやすい";
};

const Mole = document.getElementById("mole");
const Lizards = document.getElementById("lizards");
const Owl = document.getElementById("owl");
const Cat = document.getElementById("cat");
const Dog = document.getElementById("dog");

Mole.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Lizards.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Owl.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Dog.onclick = function () {
  a1.textContent = "残念！不正解です！";
};
Cat.onclick = function () {
  a2.textContent = "正解です！";
};
h2.onclick = function () {
  a2.textContent = "ヒント:実家で飼っていました";
};

const Nara = document.getElementById("Nara");
const Aichi = document.getElementById("Aichi");
const Kanagawa = document.getElementById("Kanagawa");
const Hyogo = document.getElementById("Hyogo");
const Tokushima = document.getElementById("Tokushima");

Aichi.onclick = function () {
  a3.textContent = "正解です！";
};
Nara.onclick = function () {
  a3.textContent = "残念！不正解です！";
};
Kanagawa.onclick = function () {
  a3.textContent = "残念！不正解です！";
};
Hyogo.onclick = function () {
  a3.textContent = "残念！不正解です！";
};
Tokushima.onclick = function () {
  a3.textContent = "残念！不正解です！";
};
h3.onclick = function () {
  a3.textContent = "ヒント:大学からは遠いです";
};

const Write = document.getElementById("Write");
const Orchestra = document.getElementById("Orchestra");
const Act = document.getElementById("Act");
const Kendo = document.getElementById("Kendo");
const Wind = document.getElementById("Wind");

Wind.onclick = function () {
  a4.textContent = "正解です！";
};
Kendo.onclick = function () {
  a4.textContent = "残念！不正解です！";
};
Act.onclick = function () {
  a4.textContent = "残念！不正解です！";
};
Orchestra.onclick = function () {
  a4.textContent = "残念！不正解です！";
};
Write.onclick = function () {
  a4.textContent = "残念！不正解です！";
};
h4.onclick = function () {
  a4.textContent = "ヒント:精神的には体育会系";
};

const Cl = document.getElementById("Cl");
const Pf = document.getElementById("Pf");
const Eu = document.getElementById("Eu");
const Rec = document.getElementById("Rec");
const Cello = document.getElementById("Vc");

Cl.onclick = function () {
  a5.textContent = "正解です！";
};
Eu.onclick = function () {
  a5.textContent = "残念！不正解です！";
};
Pf.onclick = function () {
  a5.textContent = "残念！不正解です！";
};
Cello.onclick = function () {
  a5.textContent = "残念！不正解です！";
};
Rec.onclick = function () {
  a5.textContent = "残念！不正解です！";
};
h5.onclick = function () {
  a5.textContent = "ヒント:中学の時は高校の時とは違う部活でした";
};

const finish = document.getElementById("finish");
const FM = document.getElementById("FinishMessage");
finish.onclick = function () {
  FM.textContent = "お疲れ様でした！";
};

// function T(a) {console.log("T");a.textContent = "正解です！";}
// function F(a) {console.log("F");a.textContent = "残念！不正解です！";}

// できたらオブジェクトとしてそれぞれを管理したかった
// let answer = []
// answer[1] = { t: Game, f1: Train, f2: Walk, f3: Karaoke, f4: Sewing }
// answer[2] = { t: Cat, f1: Mole, f2: Lizards, f3: Owl, f4: Dog }
// answer[3] = { t: Aichi, f1: Nara, f2: Kanagawa, f3: Hyogo, f4: Tokushima }
// answer[4] = { t: Wind, f1: Kendo, f2: Act, f3: Orchestra, f4: Write }
// answer[5] = { t: Cl, f1: Eu, f2: Pf, f3: Cello, f4: Rec }
// for(let i = 1;i<=5;i++){
// answer[i].t.onclck=function(){
// console.log("正解です")
// }
// }
