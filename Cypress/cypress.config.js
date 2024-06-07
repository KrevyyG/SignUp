const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, //Faz com que o modo interativo não execute os testes após salvar algum arquivo
    baseUrl: "https://sign-up-eight-rho.vercel.app/",
  },
});
