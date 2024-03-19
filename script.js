const mensagemEntrada = document.querySelector('.mensagemEntrada');
const mensagemSaida = document.querySelector('.mensagemSaida');

function criptografar(letra){

    let matrizCripto = [['a' , 'ai'], ['e' , 'enter'], ['i' , 'imes'], ['o'  , 'ober'], ['u' , 'ufat']];
    letra = letra.toLowerCase();

    if (/[^\u0000-\u007F]/.test(letra) || /[^\w\s]/.test(letra)) {
        letra = 'Digite uma frase sem acentos ou caracteres especiais';
    } else {
        let vetorLetra = letra.split('');
        
        for (let i = 0; i < vetorLetra.length; i++) {
            for (let j = 0; j < matrizCripto.length; j++) {
                if (vetorLetra[i] === matrizCripto[j][0]){
                    vetorLetra[i] = matrizCripto[j][1];

                    break;
                }
            }
        }
        letra = vetorLetra.join('');
    }
   return letra;
}

function btnCriptografar() {
    let textoCriptografado = criptografar(mensagemEntrada.value);
    mensagemSaida.value = textoCriptografado;
    mensagemEntrada.value = '';
    tirarImagem();
}

function descriptografar(letra){

    let matrizCripto = [['a' , 'ai'], ['e' , 'enter'], ['i' , 'imes'], ['o'  , 'ober'], ['u' , 'ufat']];
    letra = letra.toLowerCase();

    if (/[^\u0000-\u007F]/.test(letra) || /[^\w\s]/.test(letra)) {
        letra = 'Digite uma frase sem acentos ou caracteres especiais';
    } else {
            for (let i = 0; i < matrizCripto.length; i++) {
                    if (letra.includes(matrizCripto[i][1])){
                        letra = letra.replaceAll(matrizCripto[i][1], matrizCripto[i][0]);
                    }
            }
        }
   return letra;
}

function btnDescriptografar() {
    let textoDescriptografado = descriptografar(mensagemEntrada.value);
        mensagemSaida.value = textoDescriptografado;
        mensagemEntrada.value = '';
        tirarImagem();
}

function btnCopiar() {
    let textoTraduzido = document.querySelector('.mensagemSaida').value;
    navigator.clipboard.writeText(textoTraduzido);
    mensagemSaida.value = '';
    document.querySelector('.msg-nao-encontrada').style.display = 'block';
    document.querySelector('.contem-mensagem').style.display = 'none';
}

function tirarImagem() {
        document.querySelector('.msg-nao-encontrada').style.display = 'none';
        document.querySelector('.contem-mensagem').style.display = 'block';
}
