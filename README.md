# NLW  
Dica do Discord.




Galera, uma dica pra quem gosta de estar sempre levando seu código para o próximo nível rocket 

Quando vocês chegarem aqui (https://youtu.be/XDFlV76UJuA?t=4120) no vídeo, vocês vão reparar que o Diego adiciona as fontes diretamente no index.html.

Essa é a forma mais fácil e rápida para isso, porém não é a mais performática, visto que se você colocar seu site no Google Page Speed (https://developers.google.com/speed/pagespeed/insights/) para checar a performance, irá notar um problema de Render blocking css (https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css).

Nesse caso, a dica é:
- Usem o pacote WebFontLoader (https://github.com/typekit/webfontloader).

Instalando:
yarn add webfontloader
yarn add -D @types/webfontloader


Utilizando no index.tsx
import Webfont from "webfontloader";

Webfont.load({
  google: {
    families: ["Inter: 400, 500, 600", "Rajdhani: 600"],
  },
});



