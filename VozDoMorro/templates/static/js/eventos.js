document.addEventListener('DOMContentLoaded', function () {
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString();
    }

    fetch('http://127.0.0.1:8000/eventos/eventos_api')
        .then(response => response.json())
        .then(data => {
            const eventosList = document.getElementById('eventos');
            eventosList.innerHTML = '';

            const eventos = data.titulo_eventos.map((titulo, index) => ({
                id_eventos: data.id_eventos[index],
                titulo_eventos: titulo,
                descricao_eventos: data.descricao_eventos[index],
                local_eventos: data.local_eventos[index],
                data_eventos: data.data_eventos[index],
                foto_eventos: data.foto_eventos[index]
            }));

            eventos.forEach(evento => {
                // Criação do item do evento
                const eventItem = document.createElement('div');
                eventItem.className = 'col-fluid';
                eventItem.style.Width = '100%';

                // Criação do box do evento
                const boxEvento = document.createElement('div');
                boxEvento.style.borderRadius = '10px';
                boxEvento.style.margin = '2vw';
                boxEvento.style.padding = '2vw';
                boxEvento.style.border = '1px '; // Exemplo de borda

                // Criação do título do evento
                const eventTitle = document.createElement('h1');
                eventTitle.style.fontSize = '50px';
                eventTitle.style.fontWeight = '1000';
                eventTitle.textContent = evento.titulo_eventos;

                // Criação da imagem do evento
                const eventImage = document.createElement('img');
                eventImage.src = `http://127.0.0.1:8000${evento.foto_eventos}`;
                eventImage.alt = evento.titulo_eventos;

                // Criação dos detalhes do evento
                const eventDetails = document.createElement('div');
                eventDetails.style.textAlign = 'center';

                // Descrição do evento
                const eventDescription = document.createElement('div');
                eventDescription.style.fontSize = '25px';
                eventDescription.style.fontWeight = '600';
                eventDescription.style.textAlign = 'justify';
                eventDescription.textContent = evento.descricao_eventos;

                // Data do evento
                const eventDate = document.createElement('div');
                eventDate.style.fontSize = '20px';
                eventDate.style.fontWeight = '400';
                eventDate.style.padding = '1vw';
                eventDate.textContent = `Data: ${formatDate(evento.data_eventos)}`;

                // Local do evento
                const eventLocation = document.createElement('div');
                eventLocation.style.fontSize = '20px';
                eventLocation.style.fontWeight = '400';
                eventLocation.style.padding = '1vw';
                eventLocation.textContent = `Local: ${evento.local_eventos}`;

                // Adiciona os detalhes ao box do evento
                eventDetails.appendChild(eventDescription);
                eventDetails.appendChild(eventDate);
                eventDetails.appendChild(eventLocation);

                // Adiciona o título e a imagem ao box do evento
                boxEvento.appendChild(eventTitle);
                boxEvento.appendChild(eventImage);
                boxEvento.appendChild(eventDetails);

                // Adiciona o box do evento ao item do evento
                eventItem.appendChild(boxEvento);

                // Adiciona o item do evento ao container de eventos
                eventosList.appendChild(eventItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
