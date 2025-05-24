document.getElementById('sorteioForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Inscrição enviada com sucesso! Você já está participando da roleta.");
  this.reset();
});
