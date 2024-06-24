document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const lightList = document.getElementById('lightList');
    const darkList = document.getElementById('darkList');
    const profileImage = document.getElementById('profileImage')

    // Define os modos inicial
    let isDarkMode = false;

    // Função para alternar entre os modos
    function toggleMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.classList.remove('light-mode');
            toggleButton.textContent = 'Minhas Redes ✅';
            lightList.style.display = 'none';
            darkList.style.display = 'block';
            profileImage.src = './assets/avatar.dark.png' // Muda a imagem de perfil para o modo escuro
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            toggleButton.classList.add('light-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.textContent = 'Só para maiores 🔞';
            lightList.style.display = 'block';
            darkList.style.display = 'none';
            profileImage.src = './assets/avatar.png'; // Muda a imagem de perfil para o modo claro
        }
    }

    // Adiciona um ouvinte de evento para o botão
    toggleButton.addEventListener('click', toggleMode);

    // Define o modo inicial (claro)
    body.classList.add('light-mode');
    toggleButton.classList.add('light-mode');
    toggleButton.textContent = 'Só para maiores 🔞';
    lightList.style.display = 'block';
    darkList.style.display = 'none';
});


