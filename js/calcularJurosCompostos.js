  function calcular() {
        const valor = parseFloat(document.getElementById('valor').value);
        const taxa = parseFloat(document.getElementById('taxa').value) / 100;
        const periodos = parseInt(document.getElementById('periodos').value);

        if (isNaN(valor) || isNaN(taxa) || isNaN(periodos)) {
            document.getElementById('resultado').innerText = "Preencha todos os campos corretamente.";
            return;
        }

        const montante = valor * Math.pow((1 + taxa), periodos);
        document.getElementById('resultado').innerText = `Montante: R$ ${montante.toFixed(2)}`;
    }