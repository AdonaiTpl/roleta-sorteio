document.getElementById('inscricaoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const instagram = document.getElementById('instagram').value;

  if (nome && email && instagram) {
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('roletaSection').style.display = 'block';
  }
});
