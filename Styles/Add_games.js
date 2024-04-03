document.addEventListener("DOMContentLoaded", function () {
    const addGameBtn = document.getElementById("addGameBtn");
    const gameList = document.getElementById("GameList");

    addGameBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const gameNameInput = document.getElementById("GameName");
        const gameDateInput = document.getElementById("GameDate");
        const gameConsoleInput = document.getElementById("GameConsole");
        const gameRatingInput = document.getElementById("gameRating"); // Adicionando a referência ao campo de entrada do rating

        const gameName = gameNameInput.value;
        const gameDate = gameDateInput.value;
        const gameConsole = gameConsoleInput.value;
        const gameRating = gameRatingInput.value; // Obtendo o valor do campo de entrada do rating

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td class="td game2-col">${gameName}</td>
            <td class="td date-col">${gameDate}</td>
            <td class="td console-col">${gameConsole}</td>
            <td class="td state2-col">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                </div>
            </td>
            <td class="td rating-col">${gameRating}</td>
            <td class="actions-col">
                <button type="button" class="btn btn-sm btn-outline-primary edit-Game-btn" data-bs-toggle="modal" data-bs-target="#editGameModal">Edit</button>
            </td>
        `;

        gameList.appendChild(newRow);

        // Limpar os campos de entrada após adicionar o jogo
        gameNameInput.value = "";
        gameDateInput.value = "";
        gameConsoleInput.value = "";
        gameRatingInput.value = ""; // Limpar também o campo de entrada do rating

        // Fechar o modal
        const newGameModal = bootstrap.Modal.getInstance(document.getElementById('newGameModal'));
        newGameModal.hide();
    });
});
