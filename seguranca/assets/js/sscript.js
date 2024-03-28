//sscript.js é responsável pela criptografia simples com palavra chave - zettapolar. 

function cripto() {

    // dentro do textarea, tudo que vai ser digitado vai ser transformado em valores dentro do javascript.

    let text = document.getElementById('text').value

    // com esse comando, vamos pegar o texto que foi digitado no id do cripto.html, trazer e transformar em fatias (split). tor= transferencia por comando

    let split = text.split("")

    // com esse comando, vamos fazer uma análise do meu texto, contar quantas letras foram fateadas, quanto mais fateado, mais denso (se referindo a criptografia)

    let chars = split.length

    //função que lê os caracteres

    const pre = ['Z', 'E', 'T', 'T', 'A', 'P', 'O', 'L', 'A', 'R', 'z', 'e', 't', 't', 'a', 'p', 'o', 'l', 'a', 'r']

    //comando que vai contar a criptografia

    const pos = ['P', 'O', 'L', 'A', 'R', 'Z', 'E', 'N', 'I', 'T', 'p', 'o', 'l', 'a', 'r', 'z', 'e', 'n', 'i', 't']

    //o mesmo comando porem invertido

    let rslt = document.getElementById('result')

    for (i = 0; i < chars; i++) {
        //recebe mais um caracter
        let index = pre.indexOf(split[i])
        if (index === -1) {
            split[i] = split[i]
        } else {
            split[i] = pos[index]
        }
        const toString = split.join('')
        //juntou as informações e mandou para a page inicial
        rslt.innerText = toString
    }
}  