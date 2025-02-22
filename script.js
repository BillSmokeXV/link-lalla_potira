document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    const lightList = document.getElementById('lightList');
    const darkList = document.getElementById('darkList');
    const profileImage = document.getElementById('profileImage');

    // Verifica a preferência do usuário no localStorage
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Função para alternar entre os modos
    function toggleMode() {
        isDarkMode = !isDarkMode;

        // Alterna as classes do body e do botão
        body.classList.toggle('dark-mode', isDarkMode);
        body.classList.toggle('light-mode', !isDarkMode);
        toggleButton.classList.toggle('dark-mode', isDarkMode);
        toggleButton.classList.toggle('light-mode', !isDarkMode);

        // Muda o texto do botão
        toggleButton.textContent = isDarkMode ? 'Minhas Redes ✅' : 'Só para maiores 🔞';

        // Mostra a lista correspondente
        lightList.style.display = isDarkMode ? 'none' : 'block';
        darkList.style.display = isDarkMode ? 'block' : 'none';

        // Muda a imagem de perfil
        profileImage.src = isDarkMode ? './assets/avatar.dark.png' : './assets/avatar.png';

        // Armazena a preferência no localStorage
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Função para confirmar idade específica para os elementos que contêm "🔞"
    function confirmarIdade(event) {
        const targetElement = event.target;
        if (targetElement.textContent.includes('🔞')) {
            const confirmacao = confirm('Este conteúdo é para maiores de 18 anos. Confirma que você tem mais de 18 anos?');
            if (!confirmacao) {
                event.preventDefault(); // Cancela o evento de clique se não confirmado
            }
        }
    }

    // Adiciona um ouvinte de evento para o botão de alternar modo
    toggleButton.addEventListener('click', toggleMode);

    // Adiciona um ouvinte de evento para cada link na lista de modos claro
    if (lightList) {
        lightList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', confirmarIdade);
        });
    }

    // Adiciona um ouvinte de evento para cada link na lista de modos escuro
    if (darkList) {
        darkList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', confirmarIdade);
        });
    }

    // Define o modo inicial (carrega a preferência armazenada no localStorage)
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Minhas Redes ✅';
        lightList.style.display = 'none';
        darkList.style.display = 'block';
        profileImage.src = './assets/avatar.dark.png';
    } else {
        body.classList.add('light-mode');
        toggleButton.classList.add('light-mode');
        toggleButton.textContent = 'Só para maiores 🔞';
        lightList.style.display = 'block';
        darkList.style.display = 'none';
        profileImage.src = './assets/avatar.png';
    }
});
