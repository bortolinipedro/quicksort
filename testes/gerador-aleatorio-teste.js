const fs = require("fs");

const numLinhas = 1;
const numerosPorLinha = 1000;

let linhas = [];
for (let i = 0; i < numLinhas; i++) {
  const array = Array.from({ length: numerosPorLinha }, () =>
    Math.floor(Math.random() * 200) + 1
  );
  linhas.push(array.join(","));
}

fs.writeFileSync("valores-aleatorios.csv", linhas.join("\n"));

console.log(`Arquivo valores-aleatorios.csv criado com ${numLinhas} linhas.`);
