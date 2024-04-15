document.addEventListener("DOMContentLoaded", function () {
  console.log("Document ready");

  const editGameModal = new bootstrap.Modal(document.getElementById('editGameModal'));
  const deleteGameBtn = document.getElementById('deleteGameBtn');
  let currentGameRow; // Armazenar a linha do jogo atualmente sendo editado/deletado

  // Função para preencher o formulário de edição com os detalhes do jogo
  function fillEditForm(gameName, gameDate, gameConsole, gameState, gameRating) {
      console.log("Filling edit form");
      document.getElementById('editGameName').value = gameName;
      document.getElementById('editGameDate').value = gameDate;
      document.getElementById('editGameConsole').value = gameConsole;
      document.getElementById('editGameState').value = gameState;
      document.getElementById('editGameRating').value = gameRating;
  }

  // Evento de clique no botão "Edit"
  document.addEventListener('click', function (event) {
      console.log("Click detected");
      if (event.target.classList.contains('edit-Game-btn')) {
          console.log("Edit button clicked");
          const gameRow = event.target.closest('tr');
          console.log(gameRow);
          const gameName = gameRow.querySelector('.game2-col').innerText;
          const gameDate = gameRow.querySelector('.date-col').innerText;
          const gameConsole = gameRow.querySelector('.console-col').innerText;
          const gameState = gameRow.querySelector('.state2-col').innerText;
          const gameRating = gameRow.querySelector('.rating-col').innerText;

          fillEditForm(gameName, gameDate, gameConsole, gameState, gameRating);
          currentGameRow = gameRow; // Armazenar a linha do jogo atual
          editGameModal.show();
      }
  });

  // Evento de envio do formulário de edição
  document.getElementById('editGameForm').addEventListener('submit', function (event) {
      event.preventDefault();
      console.log("Form submitted");

      // Obter os novos valores do formulário de edição
      const editedGameName = document.getElementById('editGameName').value;
      const editedGameDate = document.getElementById('editGameDate').value;
      const editedGameConsole = document.getElementById('editGameConsole').value;
      const editedGameState = document.getElementById('editGameState').value;
      const editedGameRating = document.getElementById('editGameRating').value;

      // Atualizar os valores do jogo na linha da tabela
      currentGameRow.querySelector('.game2-col').innerText = editedGameName;
      currentGameRow.querySelector('.date-col').innerText = editedGameDate;
      currentGameRow.querySelector('.console-col').innerText = editedGameConsole;
      currentGameRow.querySelector('.state2-col').innerText = editedGameState;
      currentGameRow.querySelector('.rating-col').innerText = editedGameRating;

      // Fechar o modal de edição
      editGameModal.hide();
  });

    // Evento de clique no botão "Delete"
    deleteGameBtn.addEventListener('click', function () {
      currentGameRow.remove(); // Remover a linha da tabela da tarefa atual
      editGameModal.hide(); // Fechar o modal de edição
  });
});