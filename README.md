# RhythmGroove

  Este projeto é um jogo de dança com tapete para captação das entradas do jogador. O objetivo é ele pisar no tapete nas setas corretas de acordo com as setas que vão aparecendo na tela.

  Para isso, usamos:
  - HTML
  - CSS
  - JavaScript
  - p5js
  - C++ (Arduino)
  - Sensores infravermelhos

  **O fluxo é:** Infravermelho detecta mudança de estado -> Envia uma letra correspondente a uma seta através da comunicação serial -> Website recebe por meio da Web Serial API -> Compara com o valor armazenado na lista de setas criadas -> Valida resposta

## Circuito
  Componentes: Arduino Uno, quatro sensores infravermelhos HW-870 e protoboard.

  O circuito foi montado no Tinkercad utilizando botôes para simular os sensores (não tem o componente exato no simulador, mas como a ideia era testar o uso das portas digitais, adaptamos).

  Usamos as entradas D0 dos sensores conectando nas portas digitais indicadas. E as conexões com o 5V e GND também foram feitas da mesma forma que foi mostrado.



## Como usar o projeto:
  Primeiramente, monte o circuito como indicado.

  Faça upload do código para o arduino usando o Arduino IDE.

  Clone o repositório usando `git clone` ou baixe o arquivo zip do projeto e descompacte-o.

  Rode o website usando o Live Server (extensão do VS Code) ou abrindo a pasta do projeto no explorador de arquivos e clicando no `rhythm_groove.html`.

  Siga o fluxo da aplicação (botão iniciar -> escolha de música -> conexão com o arduino).
