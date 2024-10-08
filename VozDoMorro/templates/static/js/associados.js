document.addEventListener('DOMContentLoaded', function () {
    fetch('http://127.0.0.1:8000/associados/associados_api')
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data); // Verifique a estrutura dos dados no console

            const associadosList = document.getElementById('associados');
            if (!associadosList) {
                console.error('Elemento com id "associados" não encontrado.');
                return;
            }

            associadosList.innerHTML = '';

            // Verifique se a estrutura dos dados é a esperada
            if (!data || !Array.isArray(data.nome_associados)) {
                console.error('Dados da API estão no formato incorreto.');
                return;
            }

            const associados = data.nome_associados.map((nome, index) => ({
                id_associados: data.id_associados[index],
                nome_associados: nome,
                foto_associados: data.foto_associados[index]
            }));

            associados.forEach(associado => {
                // Criação do item de associado
                const associadoItem = document.createElement('div');
                associadoItem.style.marginTop = '1vw';
                associadoItem.style.flex = '1 1 23%'; // Define a largura da coluna para garantir 4 itens por linha
                associadoItem.style.boxSizing = 'border-box'; // Inclui padding e border na largura total
                associadoItem.style.padding = '10px'; // Padding ao redor de cada item
                associadoItem.style.display = 'flex';
                associadoItem.style.flexDirection = 'column'; // Organiza o conteúdo verticalmente
                associadoItem.style.alignItems = 'center'; // Centraliza o conteúdo horizontalmente

                // Criação da imagem do associado
                const associadoImage = document.createElement('img');
                associadoImage.style.borderRadius = '50%'; // Bordas arredondadas para uma imagem circular
                associadoImage.style.width = '100px'; // Largura da imagem
                associadoImage.style.height = '100px'; // Altura da imagem
                associadoImage.style.marginBottom = '1vw';
                associadoImage.style.objectFit = 'cover'; // Ajusta a imagem para preencher o espaço
                associadoImage.src = `http://127.0.0.1:8000${associado.foto_associados}`;
                associadoImage.alt = associado.nome_associados;

                // Criação do nome do associado
                const nomeAssociado = document.createElement('h4');
                nomeAssociado.textContent = associado.nome_associados;

                // Adiciona a imagem e o nome ao item do associado
                associadoItem.appendChild(associadoImage);
                associadoItem.appendChild(nomeAssociado);

                // Adiciona o item do associado ao container de associados
                associadosList.appendChild(associadoItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
