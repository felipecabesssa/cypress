adopet frontend - https://adopet-frontend-cypress.vercel.app/
adopet backend - https://adopet-api-i8qu.onrender.com/adotante/

Referencias:

- https://www.cypress.io/
- https://talkingabouttesting.com/

Rodar cypress no terminal

- npx cypress run

para rodar um unico teste, podemos especificar ele da forma abaixo:

- npx cypress run --spec ".\cypress\e2e\login-correto.cy.js"

Gerar relatório html e/ou JSON com mochawesome:

- com o mochawesome instalado e configurado no cypress.config rodar:

npx cypress run --reporter mochawesome