var score,roundscore,activeplayer,gamming;
init();
document.querySelector(".btn-roll").addEventListener("click",function(){
if(gamming)
{
var domdice=document.querySelector(".dice");
domdice.style.display="block";
var randomnumber=Math.random()*6+1;
var numbrdice=parseInt(randomnumber);
domdice.src="dice-six-faces-"+numbrdice+".png";
if(numbrdice!==1)
{roundscore+=numbrdice;
document.getElementById("current-"+activeplayer).textContent=roundscore;
}
else
{
nextplayer();
}
}
});
//btn hold
document.querySelector(".btn-hold").addEventListener("click",function(){
if(gamming)
{
score[activeplayer]+=roundscore;
document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
//winner
if(score[activeplayer]>=20)
{
gamming=false;
document.getElementById("name-"+activeplayer).textContent="winner!";
document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
document.querySelector(".dice").style.display="none";
document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");
}
else{
nextplayer();
}
}
});
function nextplayer()
{
roundscore=0;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;
activeplayer===0?activeplayer=1:activeplayer=0;
document.querySelector(".player-0-panel").classList.toggle("active");
document.querySelector(".player-1-panel").classList.toggle("active");
document.querySelector(".dice").style.display="none";
}
document.querySelector(".btn-new").addEventListener("click",init);
function init()
{
score=[0,0];
roundscore=0;
activeplayer=0;
gamming=true;
document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.getElementById("name-0").textContent='player1';
document.getElementById("name-1").textContent='player2';
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}
