# AWBot
Alien Worlds TLM Miner front-end project.

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6Imtvb2J6YWFyIiwicmVwbzEiOiJBV0JvdC5pbyIsImluY2x1ZGVMaW50IjpmYWxzZSwiYXV0aG9ySWQiOjI3ODcxLCJpYXQiOjE2MjE0NjgwODd9.Feumu4k59wT0TXduUC7yPyajaLaEYNNAkC25LmDSiIY)](https://www.deepcode.ai/app/gh/koobzaar/AWBot.io/_/dashboard?utm_content=gh%2Fkoobzaar%2FAWBot.io)

#### Visual (sem nenhuma integração de API)
Navbar
- [x] Importação dos respectivos SVG's para cada função

Dashboard
- Parte esquerda da Dashboard (Balanço e Recursos)
- [x] Mostrar o balanço do usuário de TLM
- [x] Mostrar o balanço do usuário em $ (USD)
- [x] Progress bar para cada recurso usado pela WAX
- [x] Total de TLM em Stake
- Parte direita da Dashboard (Sessão de Mineração)
- [ ] Gráficos com o total de TLM minerada e o rate de TLM/hora 
- [x] Listar a land atual do usuário
- [x] Listar o array da bag atual de mineração do usuário
- [x] Exibir o array do log de mineração 
- [x] Mostrar o state do bot (Minerando, Carregando e etc)
- [x] Mostrar qual a configuração de auto-mine e cpu limit definida
- [x] Botão de start mining
- [ ] Alert de erros 

Configurações 
- [x] Mostrar todos as NFTs do usuário
- [x] Selecionar NFTs específicos apenas clicando neles
- [x] Botão para setar NFT
- [x] Definir limite de CPU
- [x] Definir se o auto-mine está ativo ou não
- [x] Definir time out no bot até a próxima mineração

Responsividade
- [x] Criar telas de exibição limitada
- [x] Esconder a parte direita da Dashboard quando ela já não couber responsivamente na tela
- [x] Esconder a navbar quando a presença da mesma for intrusiva ao programa e não mais necessária

#### Lógica
- [x] Linkar todos os states, botões e funções no módulo de comunicação (back-end & front-end)

## Documentação (indev)

## Setup
`yarn install`

Para instalar todos os componentes. Equivalente ao npm install.

`yarn run dev`

Roda o script que inicializa o servidor de desenvolvimento.
