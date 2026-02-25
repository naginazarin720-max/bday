document.getElementById("turnPage").onclick = function() {
  document.getElementById("newspaper").classList.add("hidden");
  document.getElementById("readyPage").classList.remove("hidden");
}

function celebrate() {
  document.getElementById("readyPage").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");
}

function noOption() {
  document.getElementById("response").innerText =
  "Shit! Not an option sweety.";
  setTimeout(celebrate, 1500);
}

function showCake() {
  document.getElementById("celebration").classList.add("hidden");
  document.getElementById("cakePage").classList.remove("hidden");
}

function burstConfetti() {
  alert("Confetti burst!");
  document.getElementById("blowBtn").classList.remove("hidden");
}

function blowCandle() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("cakePage").classList.add("hidden");
  document.getElementById("letterPage").classList.remove("hidden");
}

function openLetter() {
  document.querySelector(".envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}
