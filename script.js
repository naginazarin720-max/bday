document.getElementById("noBtn")?.addEventListener("click", () => {
  const d = document.getElementById("dramaText");
  d.innerText = "SHIT! NOT AN OPTION, SWEETY!";
  d.style.display = "block";
});

document.getElementById("yesBtn")?.addEventListener("click", () => {
  window.location.href = "cake.html";
});

function sendWish() {
  document.getElementById("sent").style.display = "block";
  document.getElementById("blow").style.display = "inline-block";
}

function blow() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("smoke").style.display = "block";
  setTimeout(()=>window.location.href="letter.html",2000);
}

function openLetter() {
  document.querySelector(".wax").style.display="none";
  document.getElementById("content").style.display="block";
}
