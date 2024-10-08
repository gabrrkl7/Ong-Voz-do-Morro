document.addEventListener('DOMContentLoaded', function () {
    fetch('http://127.0.0.1:8000/aulas/aulas_api')
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data); // Verifique a estrutura dos dados no console

            const columnAulas = document.getElementById('column-aulas');
            if (!columnAulas) {
                console.error('Elemento com id "column-aulas" não encontrado.');
                return;
            }

            // Verifique se a estrutura dos dados é a esperada
            if (!data || !Array.isArray(data.titulo_aulas)) {
                console.error('Dados da API estão no formato incorreto.');
                return;
            }

            // Limpa o conteúdo existente
            columnAulas.innerHTML = '';

            // Combina os arrays em um array de objetos
            const aulas = data.titulo_aulas.map((titulo, index) => ({
                id_aulas: data.id_aulas[index],
                titulo_aulas: titulo,
                descricao_aulas: data.descricao_aulas[index],
                foto_aulas: data.foto_aulas[index]
            }));

            aulas.forEach(aula => {
                // Criação do item de aula
                const aulaItem = document.createElement('div');

                const aulaContainer = document.createElement('div');
                aulaContainer.style.position = 'relative'; 
                aulaContainer.style.marginTop = '2vw'; 
      
               
                const aulaImage = document.createElement('img');
                aulaImage.src = `http://127.0.0.1:8000${aula.foto_aulas}`;
                aulaImage.style.borderRadius = "20px";
                aulaImage.style.width = "100%"; 
                aulaImage.style.height = "auto"; 

                // Cria a sobreposição escura
                const overlay = document.createElement('div');
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
                overlay.style.borderRadius = "20px"; 

                
                const aulaContent = document.createElement('div');
                

               
            
                // Criação do título da aula
                const aulaTitulo = document.createElement('h1');
                aulaTitulo.textContent = aula.titulo_aulas;
                aulaTitulo.style.maxHeight = "fit-content"; 

                // Criação da descrição da aula
                const aulaDescricao = document.createElement('h6');
                aulaDescricao.textContent = aula.descricao_aulas;
                aulaDescricao.style.maxHeight = "fit-content"; 


                // Adiciona a imagem e o conteúdo ao item da aula
                aulaContainer.appendChild(aulaImage);
                aulaContainer.appendChild(overlay);
                aulaContainer.appendChild(aulaContent);

                // Adiciona o título e a descrição ao conteúdo
                aulaContent.appendChild(aulaTitulo);
                aulaContent.appendChild(aulaDescricao);

                // Adiciona o item da aula ao contêiner de aulas
                columnAulas.appendChild(aulaContainer);

                // Adiciona o item da aula ao contêiner de aulas
                columnAulas.appendChild(aulaItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
