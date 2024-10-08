document.addEventListener('DOMContentLoaded', function () {
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
    }

    fetch('http://127.0.0.1:8000/trabalhos/trabalhos_api')
        .then(response => response.json())
        .then(data => {
            const trabalhosList = document.getElementById('trabalhos');
            if (!trabalhosList) {
                console.error('Elemento com id "trabalhos" não encontrado.');
                return;
            }

            trabalhosList.innerHTML = '';

            const trabalhos = data.titulo_trabalhos.map((titulo, index) => ({
                id_trabalhos: data.id_trabalhos[index],
                titulo_trabalhos: titulo,
                descricao_trabalhos: data.descricao_trabalhos[index],
                foto_trabalhos: data.foto_trabalhos[index]
            }));

            trabalhos.forEach(trabalho => {
                // Criação do item de trabalho
                const trabalhoItem = document.createElement('div');
               
               

                // Criação do box do trabalho
                const boxTrabalho = document.createElement('div');

    

                // Criação da imagem do trabalho
                const trabalhoImage = document.createElement('img');
                trabalhoImage.id = 'img-trabalho';
                trabalhoImage.src = `http://127.0.0.1:8000${trabalho.foto_trabalhos}`;
                trabalhoImage.alt = trabalho.titulo_trabalhos;
                
                // Criação do título do trabalho
                const trabalhoTitle = document.createElement('div');
                trabalhoTitle.id = 'titulo-trabalho';
                trabalhoTitle.textContent = trabalho.titulo_trabalhos;
                
                // Criação dos detalhes do trabalho
                const trabalhoDetails = document.createElement('div');
               
                // Descrição do trabalho
                const trabalhoDescription = document.createElement('div');
                trabalhoDescription.id = 'descricao-trabalho';
                trabalhoDescription.textContent = trabalho.descricao_trabalhos;
                
                // Adiciona a descrição ao box do trabalho
                trabalhoDetails.appendChild(trabalhoDescription);

                // Adiciona a imagem e o título ao box do trabalho
                boxTrabalho.appendChild(trabalhoImage);
                boxTrabalho.appendChild(trabalhoTitle);
                boxTrabalho.appendChild(trabalhoDetails);

                // Adiciona o box do trabalho ao item do trabalho
                trabalhoItem.appendChild(boxTrabalho);

                // Adiciona o item do trabalho ao container de trabalhos
                trabalhosList.appendChild(trabalhoItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
