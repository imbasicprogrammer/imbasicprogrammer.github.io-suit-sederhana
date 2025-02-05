function getPilihanComputer() {
  let computer = Math.random();
  if (computer < 0.35) return "scissors";
  if (computer >= 0.35 && computer < 0.65) return "paper";
  return "rock";
}

function getHasil(compt, player) {
  if (compt === player) return "Seri";
  if (compt === "scissors") return player === "rock" ? "Player Menang" : "Computer Menang";
  if (compt === "paper") return player === "scissors" ? "Player Menang" : "Computer Menang";
  if (compt === "rock") return player === "paper" ? "Player Menang" : "Computer Menang";
}

//fungsi Untuk Scissors
const pScissors = document.querySelector(".scissors");
pScissors.addEventListener("click", function () {
  const pilCompt = getPilihanComputer();
  const pilPlayer = pScissors.classList[1];
  const Hasil = getHasil(pilCompt, pilPlayer);

  const imgComputer = document.querySelector(".img-computer");
  imgComputer.setAttribute("src", "/img/" + pilCompt + ".png");

  const info = document.querySelector(".bar-info");
  info.innerHTML = Hasil;

  console.log("compt : " + pilCompt);
  console.log("player : " + pilPlayer);
  console.log(Hasil);
  console.log("      ");
});

//Fungsi untuk Paper
const pPaper = document.querySelector(".paper");
pPaper.addEventListener("click", function () {
  const pilCompt = getPilihanComputer();
  const pilPlayer = pPaper.classList[1];
  const Hasil = getHasil(pilCompt, pilPlayer);

  const imgComputer = document.querySelector(".img-computer");
  imgComputer.setAttribute("src", "/img/" + pilCompt + ".png");

  const info = document.querySelector(".bar-info");
  info.innerHTML = Hasil;

  console.log("compt : " + pilCompt);
  console.log("player : " + pilPlayer);
  console.log(Hasil);
  console.log("      ");
});

//fungsi untuk ROCK
const pRock = document.querySelector(".rock");
pRock.addEventListener("click", function () {
  const pilCompt = getPilihanComputer();
  const pilPlayer = pRock.classList[1];
  const Hasil = getHasil(pilCompt, pilPlayer);

  const imgComputer = document.querySelector(".img-computer");
  imgComputer.setAttribute("src", "/img/" + pilCompt + ".png");

  const info = document.querySelector(".bar-info");
  info.innerHTML = Hasil;

  console.log("compt : " + pilCompt);
  console.log("player : " + pilPlayer);
  console.log(Hasil);
  console.log("      ");
});
