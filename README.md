# Testes automatizados

Repositório destinado ao estudo e aplicações de diferentes tipos de testes automatizados

## Aplicação

A aplicação testada é definida por um formulário básico de cadastro.

Campos: 
- Email 
- Senha
- Confirmação de Senha

Validações: 
- Email válido -> com @ e sufixo (.com ou .com.br)
- Senha -> mínimo de 8 caracteres, 1 letra maiúscula, 1 caractere especial e a confirmação de senha deve ser igual a senha

Componentes:
- Dark mode/Light mode
- Logo referenciado à este perfil do github
- Ícone de exibição/ocultação de senha nos campos "Senha" e "Confirmação de Senha"
- Validações reativas que evidenciam regras atendidas/não atendidas dependendo da senha utilizada
- Botão "Sign Up" que realiza o submit do formulário
- Logo do Cypress referenciado à página official do framework

## Casos de Teste

**Como** um usuário
**Eu** quero realizar o cadastro no sistema
**Para** ter acesso ao sistema

**Cenário 1: Realizar cadastro com sucesso passando um email com ".com"**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um alert com a mensagem de Sucesso
E os textos de validação de senha devem ficar verdes

**Cenário 2: Realizar cadastro com sucesso passando um email com ".com.br"**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com.br"
E digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um alert com a mensagem de Sucesso
E os textos de validação de senha devem ficar verdes

**Cenário 3: Realizar cadastro passando um email sem "@"**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste.com"
E digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um erro criticando a falta do @ no campo email logo abaixo do campo "Email"

**Cenário 4: Realizar cadastro sem passar um email**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um erro criticando a falta de um email no campo "Email"

**Cenário 5: Realizar cadastro sem passar a senha**
Dado que acessei a página do sistema em questão
Quando Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um erro criticando a falta de uma senha no campo "Senha"

**Cenário 6: Realizar cadastro sem passar a confirmação de senha**
Dado que acessei a página do sistema em questão
Quando Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar no campo "Senha" o seguinte valor: "Teste@123"
E clicar no botão "Sign Up"
Então deve ser exibido um erro criticando a falta de uma senha no campo "Confirmação de Senha"

**Cenário 7: Realizar cadastro passando um email sem ".com" ou ".com.br"**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste"
E digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então deve ser exibido um erro criticando a falta do ".com" ou ".com.br"

**Cenário 8: Realizar cadastro passando uma senha menor que 8 caracteres**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar no campo "Senha" o seguinte valor: "Senh@"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então a validação de 8 caracteres deve ficar em vermelho enquanto as outras devem ficar em verde

**Cenário 9: Realizar cadastro passando uma senha sem uma letra maiúscula**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar no campo "Senha" o seguinte valor: "teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então a validação de letra maiúscula deve ficar em vermelho enquanto as outras devem ficar em verde

**Cenário 10: Realizar cadastro passando uma senha sem um caractere especial**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"
E digitar no campo "Senha" o seguinte valor: "Teste123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar no botão "Sign Up"
Então a validação de caractere especial deve ficar em vermelho enquanto as outras devem ficar em verde

**Cenário 11: Verificar funcionamento dos ícones de exibição/ocultação de senha**
Dado que acessei a página do sistema em questão
Quando digitar no campo "Senha" o seguinte valor: "Teste@123"
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"
E clicar nos dois ícones para exibir as senhas
E em seguida clicar novamente nos dois ícones para ocultar as senhas
Então no primeiro clique as senhas devem se tornar visíveis
E no segundo clique as senhas devem se tornar ocultas

**Cenário 12: Verificar referencia ao logo principal**
Dado que acessei a página do sistema em questão
Quando eu clicar no logo principal
Então devo ser redirecionado para o GitHub

**Cenário 13: Verificar referencia ao logo do Cypress**
Dado que acessei a página do sistema em questão
Quando eu clicar no logo do cypress
Então devo ser redirecionado para a página oficial do cypress

**Cenário 14: Verificar funcionamento do dark/light mode**
Dado que acessei a página do sistema em questão
Quando eu clicar no ícone de Lua
E em seguida clicar no ícone de Sol
Então no primeiro clique o sistema deve mudar as cores para cores mais escuras
E no segundo clique o sistema deve mudar as cores para cores mais claras


By [Guilherme Oliveira Souza](https://github.com/KrevyyG).
