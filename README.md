# Documentação Simples - Galeria de Imagens com Pixabay

## O que é uma API?
API (Interface de Programação de Aplicações) é um conjunto de regras e definições que permite que diferentes sistemas e aplicações se comuniquem entre si. No contexto deste projeto, a API do Pixabay fornece acesso a um banco de imagens gratuito, permitindo buscar e exibir fotos de acordo com palavras-chave.

## Sobre a API do Pixabay
- **URL Base:** https://pixabay.com/api/
- **Chave de API:** É necessário um código (API Key) para autenticar as requisições. No projeto, a chave já está configurada.
- **Como funciona:** Ao enviar uma palavra para a API, ela retorna imagens relacionadas em formato JSON (um formato leve e padrão para troca de dados entre sistemas), que podem ser exibidas na galeria.

## Funções mais importantes do projeto

### buscarImagens()
- **Descrição:** Função principal responsável por buscar imagens na API do Pixabay com base no termo digitado pelo usuário.
- **Como funciona:**
  1. Lê o valor do campo de pesquisa.
  2. Monta a URL da requisição para a API.
  3. Faz a requisição e recebe os dados das imagens.
  4. Exibe as imagens na galeria ou uma mensagem caso não encontre resultados.

### Evento de Enter no campo de pesquisa
- **Descrição:** Permite que o usuário pressione Enter para buscar imagens, tornando a experiência mais fluida.
- **Como funciona:**
  - Adiciona um ouvinte de evento ao campo de pesquisa que chama a função `buscarImagens()` ao pressionar Enter.

### Ampliação de Imagem
- **Descrição:** Ao clicar em uma imagem, ela é ampliada com uma animação e um fundo escurecido (overlay).
- **Como funciona:**
  - Cria um overlay escuro.
  - Aplica uma classe de animação na imagem.
  - Permite fechar a visualização clicando fora ou na própria imagem ampliada.

---

**Resumo:**
Este projeto utiliza a API do Pixabay para buscar e exibir imagens de forma dinâmica, com uma interface moderna e responsiva. O código é simples, focado em usabilidade e boas práticas de front-end.
