/**
 * Carrosel de imagens
 * @author Luiz Gustavo de Carvalho Dagnese
 */

let indice = 0 //0,1,2 (3 imagens)

// capturar as tags html idendificadas(id)
const imgs = document.getElementById('imagens')
const imagem = document.querySelectorAll('#imagens img')
const backgrounds = ['url(img/background)','url(img/jogo2.jpg)','url(img/jogo3.jpg)']


function Carrosel() {
    indice++ //somar 1 a variavél indice
    console.log(indice) //a cada 2 segundos vai incrementar
    if (indice >= imagem.length) {
        indice = 0

    }
    //A linha abaixo modifica o estilo CSS das imagens
    //style. modifica o CSS
    //TRANSFORM (deslocamento no exio x) pode transformar de varios jeitos x ou y
    //sempre que usar crase esta concatenando , não usar o + no javascript
    //indice 0 poição inicial  | 1 vai deslocar 512px para esquerda | 2 irá deslocar 1024px para esquerda
    //OBS: 512px (sincronizar o tamanho das imagens definidas no CSS)
    imgs.style.transform = `translateX(${-indice * 512}px)`
}
// a linha abaixo executa a função carrossel a cada 2 s
setInterval(Carrosel, 2000)