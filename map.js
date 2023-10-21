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
                const quoteList = data.map(quote => quote.sentence);
                const quoteListElement = document.getElementById("quote-list");
                quoteListElement.innerHTML = ""; // Limpe o conteúdo anterior, se houver
                quoteList.forEach(quoteText => {
                    const li = document.createElement("li");
                    li.textContent = quoteText;
                    quoteListElement.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Ocorreu um erro ao buscar as citações:", error);
            });
    }

    window.addEventListener("load", fetchQuotes);