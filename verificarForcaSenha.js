function verificarForcaSenha(senha) {
  const criterios = {
    tamanhoMinimo: senha.length >= 8,
    maiuscula: /[A-Z]/.test(senha),
    minuscula: /[a-z]/.test(senha),
    numero: /[0-9]/.test(senha),
    especial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
  };

  const pontos = Object.values(criterios).filter(v => v).length;

  let classificacao;
  if (pontos <= 2) {
    classificacao = "Fraca";
  } else if (pontos === 3 || pontos === 4) {
    classificacao = "Média";
  } else {
    classificacao = "Forte";
  }

  return { criterios, pontos, classificacao };
}

function testarSenha() {
  const senha = document.getElementById("senha").value;
  const resultado = verificarForcaSenha(senha);

  const div = document.getElementById("forcaSenha");
  let corClasse = "";

  if (resultado.classificacao === "Fraca") corClasse = "fraca";
  else if (resultado.classificacao === "Média") corClasse = "media";
  else corClasse = "forte";

  div.innerHTML = `
    <p class="${corClasse}">Força da senha: <strong>${resultado.classificacao}</strong></p>
    <ul>
      <li>${resultado.criterios.tamanhoMinimo ? "✔" : "❌"} Pelo menos 8 caracteres</li>
      <li>${resultado.criterios.maiuscula ? "✔" : "❌"} Contém letra maiúscula</li>
      <li>${resultado.criterios.minuscula ? "✔" : "❌"} Contém letra minúscula</li>
      <li>${resultado.criterios.numero ? "✔" : "❌"} Contém número</li>
      <li>${resultado.criterios.especial ? "✔" : "❌"} Contém caractere especial</li>
    </ul>
  `;
}
