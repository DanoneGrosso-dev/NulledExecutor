#NulledExecutor
#### Explicação sobre em que consiste esse projeto
Eu estava com tédio, e resolvi  tentar aprender um pouco de Discord.JS, apenas decorar do que aprender não é mesmo? eu tinha em foco, um bot que executasse scripts de python, perl ou shell, do que você quiser, sem enfrentar as dificuldades que é achar uma package que permita você executar comandos ou scripts complexos, porque a maioria por algum motivo não executa scripts complexos :(

Consistindo nisso, fiz um sistema baseado neste problema que assombra alguns desenvolvedores ~~(não sei quais)~~, que junta FS com SHELLJS, o sistema é mais ou menos assim:

o FS escreve o comando que você colocou pra ele escrever num arquivo .sh, por exemplo:
**slowhttptest -u testphp.vulnweb.com**
e após 5 segundos (para não dar o famoso erro que o arquivo foi editado rápido demais, derivado da limitação do Linux) ele usa a package shelljs para executar esse .sh, porque, se você for tentar fazer o shelljs executar esse comando inteiro, você não vai obter êxito.

Logo após criar esse sisteminha, eu observei que seria inútil sem a presença de ARGS, e logo incluí um sistema args caso o utilizador do código precise.

#### Depedências
Discord.js
Shelljs
FS
#### Dando a real
Tudo isso foi com a ajuda de algumas pessoas no LabNegro, sem elas, eu não teria conseguido, eu só quis fazer este projeto, para adquirir conhecimento e ir contra essas pessoas que vendem este tipo de projeto, mas com o intuito de transformar-los em uma forma de ataque a sites ou sistemas, eu completamente repúdio atutides como essa, e resolvi soltar este projeto, que vários bots desse cunho usam.

**Este projeto é completamente é destinado a uso educativo**
