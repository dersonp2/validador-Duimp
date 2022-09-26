function validarDuimp() {

            const nuDUimp = document.getElementById("nuDUIMP").value;

            let alerta = document.getElementById("alerta");
            let sucesso = document.getElementById("ok");
            let erro = document.getElementById("erro");

            let msgErro = '';

            if (nuDUimp== null || nuDUimp == ""){
sucesso.style.display = "none";
                erro.style.display = "none";
                alerta.style.display = "block";
                alerta.textContent = "Informe a duimp!";
                return;
            }else if (nuDUimp.length < 15) {
sucesso.style.display = "none";
                erro.style.display = "none";
                alerta.style.display = "block";
                alerta.textContent = "Tamanho da Duimp Inválido!";
                return;
            }

            let ano = nuDUimp.substring(0, 2)
            if (isNaN(ano)) {
                msgErro += 'Ano do registro da Declaração inválido |'
            }

            let pais = nuDUimp.substring(2, 4);
            if (pais.search(/[^a-zA-Z]+/) > -1) {
                msgErro += 'Sigla do país de emissão do documento inválida |'
            }

            let num = nuDUimp.substring(4)
            if (isNaN(num)) {
                msgErro +=  'Número sequencial da Duimp inválido | '
            }

            let multiplicador = 13;
            let resultadoMultiplicao = [];
            // Realiza a multiplicação dos campos
            for (let i = 0; i < nuDUimp.length; i++) {
                //If utilizado para o pais e o digito verificador Não entrar na conta
                if (i != 2 && i != 3 && i != 14) {
                    resultadoMultiplicao.push(nuDUimp[i] * multiplicador);
                    multiplicador--;
                }
            }
            // Operação de soma dos valores multiplicados
            let totalSoma = resultadoMultiplicao.reduce((total, numero) => total + numero, 0);
            // Operação para Obter o resto da divisão
            let resto = totalSoma % 11;

            let digitoVerificador = 0;
            // Se o resto for maior que 1, subtrair com 11 | senao o digitoVerificador fica com 0
            if (resto > 1) {
                digitoVerificador = 11 - resto;
            }
            // verifica se o valor do digito calculado é diferente ao digito verificador da duimp informada
            if (digitoVerificador != nuDUimp[14]) {
                msgErro += ' Dígito Verificador Inválido'
            }

            if (msgErro == ''){
				alerta.style.display = "none";
erro.style.display = "none";
                sucesso.style.display = "block";
                sucesso.textContent = "Duimp Válida!";
            } else {
				alerta.style.display = "none";
sucesso.style.display = "none";
                erro.style.display = "block";
            erro.textContent = "Duimp Inválida: " + msgErro;
            }
        }
