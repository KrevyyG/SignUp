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

**Como** um usuário<br>
**Eu** quero realizar o cadastro no sistema<br>
**Para** ter acesso ao sistema<br>

**Cenário 1: Realizar cadastro com sucesso passando um email com ".com"**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um alert com a mensagem de Sucesso<br>
E os textos de validação de senha devem ficar verdes<br>

**Cenário 2: Realizar cadastro com sucesso passando um email com ".com.br"**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com.br"<br>
E digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um alert com a mensagem de Sucesso<br>
E os textos de validação de senha devem ficar verdes<br>

**Cenário 3: Realizar cadastro passando um email sem "@"**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um erro criticando a falta do @ no campo email logo abaixo do campo "Email"<br>

**Cenário 4: Realizar cadastro sem passar um email**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um erro criticando a falta de um email no campo "Email"<br>

**Cenário 5: Realizar cadastro sem passar a senha**<br>
Dado que acessei a página do sistema em questão<br>
Quando Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um erro criticando a falta de uma senha no campo "Senha"<br>

**Cenário 6: Realizar cadastro sem passar a confirmação de senha**<br>
Dado que acessei a página do sistema em questão<br>
Quando Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um erro criticando a falta de uma senha no campo "Confirmação de Senha"<br>

**Cenário 7: Realizar cadastro passando um email sem ".com" ou ".com.br"**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste"<br>
E digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então deve ser exibido um erro criticando a falta do ".com" ou ".com.br"<br>

**Cenário 8: Realizar cadastro passando uma senha menor que 8 caracteres**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "Senh@"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então a validação de 8 caracteres deve ficar em vermelho enquanto as outras devem ficar em verde<br>

**Cenário 9: Realizar cadastro passando uma senha sem uma letra maiúscula**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então a validação de letra maiúscula deve ficar em vermelho enquanto as outras devem ficar em verde<br>

**Cenário 10: Realizar cadastro passando uma senha sem um caractere especial**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Email" o seguinte valor: "teste@teste.com"<br>
E digitar no campo "Senha" o seguinte valor: "Teste123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar no botão "Sign Up"<br>
Então a validação de caractere especial deve ficar em vermelho enquanto as outras devem ficar em verde<br>

**Cenário 11: Verificar funcionamento dos ícones de exibição/ocultação de senha**<br>
Dado que acessei a página do sistema em questão<br>
Quando digitar no campo "Senha" o seguinte valor: "Teste@123"<br>
E digitar o mesmo valor de "Senha" no campo "Confirmação de Senha"<br>
E clicar nos dois ícones para exibir as senhas<br>
E em seguida clicar novamente nos dois ícones para ocultar as senhas<br>
Então no primeiro clique as senhas devem se tornar visíveis<br>
E no segundo clique as senhas devem se tornar ocultas<br>

**Cenário 12: Verificar referencia ao logo principal**<br>
Dado que acessei a página do sistema em questão<br>
Quando eu clicar no logo principal<br>
Então devo ser redirecionado para o GitHub<br>

**Cenário 13: Verificar referencia ao logo do Cypress**<br>
Dado que acessei a página do sistema em questão<br>
Quando eu clicar no logo do cypress<br>
Então devo ser redirecionado para a página oficial do cypress<br>

**Cenário 14: Verificar funcionamento do dark/light mode**<br>
Dado que acessei a página do sistema em questão<br>
Quando eu clicar no ícone de Lua<br>
E em seguida clicar no ícone de Sol<br>
Então no primeiro clique o sistema deve mudar as cores para cores mais escuras<br>
E no segundo clique o sistema deve mudar as cores para cores mais claras<br>


By [Guilherme Oliveira Souza](https://github.com/KrevyyG).
