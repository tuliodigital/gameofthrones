function fetchQuotes() {
    const apiUrl = "https://api.gameofthronesquotes.xyz/v1/random/5";
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro na solicitação da API");
        }
        return response.json();
      })
      .then(data => {
        const quoteListElement = document.getElementById("quote-list");
        quoteListElement.innerHTML = ""; // Limpe o conteúdo anterior, se houver
        data.forEach(quote => {
          const character = quote.character.name; // Acesse o nome do personagem corretamente
          const quoteText = quote.sentence;
  
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${character}:</strong> ${quoteText}`; // Use <strong> para deixar o nome em negrito
          quoteListElement.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao buscar as citações:", error);
      });
  }
  
  window.addEventListener("load", fetchQuotes);
  