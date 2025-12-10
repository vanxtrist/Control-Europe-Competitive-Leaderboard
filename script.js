fetch("players.json")
    .then(response => response.json())
    .then(players => {
        const container = document.getElementById("player-container");

        players.forEach(player => {
            const card = document.createElement("div");
            card.className = "player-card";

            card.innerHTML = `
                <img src="${player.image}" alt="${player.name}">

                <div class="player-info">
                    <div class="rank-name">${player.rank} - ${player.name}</div>
                    <div class="clan">Clan: ${player.clan}</div>
                    <div class="skill">Skill Rating: ${player.skill}</div>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => console.error("Error loading players.json:", error));
