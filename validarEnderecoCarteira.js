
    function validarEnderecoCarteira(endereco) {
        const regex = /^(0x)?[a-fA-F0-9]{26,42}$/;
        return regex.test(endereco);
    }

    function validarEndereco() {
        const endereco = document.getElementById('endereco').value.trim();
        const resultado = validarEnderecoCarteira(endereco);

        const div = document.getElementById('validacaoEndereco');
        div.innerText = resultado ? "✅ Endereço válido!" : "❌ Endereço inválido.";
    }

    const transacoes = [
        { id: "tx1", from: "0xabc123abc123abc123abc123abc123abc123abcd", to: "0xdef456def456def456def456def456def456def0", value: 3.2 },
        { id: "tx2", from: "0xaaa111aaa111aaa111aaa111aaa111aaa111aaa1", to: "0xbbb222bbb222bbb222bbb222bbb222bbb222bbb2", value: 1.5 },
        { id: "tx3", from: "0xccc333ccc333ccc333ccc333ccc333ccc333ccc3", to: "0xddd444ddd444ddd444ddd444ddd444ddd444ddd4", value: 5.0 },
    ];

    function ordenarTransacoes(transacoes, ordem = "desc") {
        return transacoes.slice().sort((a, b) => ordem === "asc" ? a.value - b.value : b.value - a.value);
    }

    function mostrarTransacoes() {
        const ordenadas = ordenarTransacoes(transacoes, "desc");

        let html = "<h4>Transações (maior para menor):</h4><ul>";
        ordenadas.forEach(tx => {
            html += `<li><strong>${tx.id}</strong>: R$ ${tx.value.toFixed(2)}<br>De: ${tx.from}<br>Para: ${tx.to}</li><br>`;
        });
        html += "</ul>";

        document.getElementById('transacoesOrdenadas').innerHTML = html;
    }