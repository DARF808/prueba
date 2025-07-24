
  const botones = document.querySelectorAll('.bot-login');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  });
