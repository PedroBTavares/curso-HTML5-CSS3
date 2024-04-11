const h2 = []
const div = []
let i = -1
do {
    i++
    h2.push(document.getElementsByTagName('h2')[i])
    div.push(document.getElementsByTagName('div')[i])
    if (h2[i] == null) {
        h2.pop()
        div.pop()
    }
} while (h2[i] != null)

for(pos in h2){
    h2[pos].addEventListener('click', clicar)

    const h = h2[pos]
    const hp = h2.indexOf(h)
    // pegando o indice dos valores dos vetores

    function clicar(){
        if (getComputedStyle(div[hp]).display == 'none'){
            div[hp].style.display = 'block'
        } else {
            div[hp].style.display = 'none'
        }
    }
}
// faz com que o texto apareça e desapareça com o click