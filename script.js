// Aguarda o carregamento completo do DOM antes de executar o script
// Isso garante que todos os elementos HTML estejam disponíveis

document.addEventListener('DOMContentLoaded', function() {
  // Chave de acesso à API do Pixabay
  const API_KEY = "35451415-d6948340e8bb47d16935b5c53";

  // Função principal para buscar imagens na API do Pixabay
  async function buscarImagens() {
    // Obtém o termo digitado pelo usuário
    const termo = document.getElementById("inputBusca").value.trim();
    if (!termo) {
      alert("Digite uma palavra para buscar.");
      return;
    }

    //URL da requisição para a API
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(termo)}&image_type=photo&per_page=9`;

    try {
      // Faz a requisição e converte a resposta para JSON
      const resposta = await fetch(url);
      const dados = await resposta.json();

      // Seleciona o container da galeria e limpa resultados anteriores
      const galeria = document.getElementById("galeria");
      galeria.innerHTML = "";

      // Se não encontrar imagens, exibe mensagem
      if (dados.hits.length === 0) {
        galeria.innerHTML = "<p>Nenhuma imagem encontrada.</p>";
        return;
      }

      // Para cada imagem retornada pela API
      dados.hits.forEach(imagem => {
        const img = document.createElement("img");
        img.src = imagem.webformatURL;
        img.alt = imagem.tags;
        img.className = "imagem";
        // Ao clicar na imagem, amplia com overlay
        img.addEventListener('click', function() {
          // Cria overlay escuro
          const overlay = document.createElement('div');
          overlay.className = 'overlay';
          // Ao clicar no overlay, fecha a imagem ampliada
          overlay.addEventListener('click', () => {
            img.classList.remove('ampliada');
            overlay.remove();
          });
          document.body.appendChild(overlay);
          // Aplica classe de animação para ampliar a imagem
          img.classList.add('ampliada');
          // Permite fechar ao clicar na própria imagem ampliada
          img.addEventListener('click', function fechar(e) {
            e.stopPropagation();
            img.classList.remove('ampliada');
            overlay.remove();
            img.removeEventListener('click', fechar);
          });
        });
        galeria.appendChild(img);
      });

    } catch (erro) {
      // Exibe erro caso a requisição falhe
      console.error("Erro ao buscar imagens:", erro);
      alert("Erro ao buscar imagens. Verifique sua conexão ou chave da API.");
    }
  }

  // Permite buscar ao pressionar Enter no input de pesquisa
  document.getElementById('inputBusca').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      buscarImagens();
    }
  });
});
