window.addEventListener('load', function () {
    function loadContent() {
        const hash = window.location.hash.slice(1);
        const content = document.getElementById('content');

        if (hash === 'about') {
            content.innerHTML = `
      <section class="about-section">
      <h2>About Me</h2>
    </section>
    `;

        } else if (hash === 'gallery') {
            loadGallery();
        } else if (hash === 'admin') {
            if (isLoggedIn()) {
                loadAdmin();
            } else {
                showLoginForm();
            }
        } else {
            content.innerHTML = '<h1>Welcome</h1><p>This is the homepage.</p>';
        }
    }


    // Показать форму входа
    function showLoginForm() {
        const content = document.getElementById('content');
        content.innerHTML = `
      <h1>Admin Login</h1>
      <form id="loginForm">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Log In</button>
      </form>
    `;

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = loginForm.elements.username;
            const passwordInput = loginForm.elements.password;

            if (login(usernameInput.value, passwordInput.value)) {
                loadAdmin();
            } else {
                alert('Invalid username or password');
            }

            usernameInput.value = '';
            passwordInput.value = '';
        });
    }

    // Проверка авторизации
    function isLoggedIn() {
        return localStorage.getItem('loggedIn') === 'true';
    }

    // Вход в систему
    function login(username, password) {
        // Простая проверка, здесь нужно использовать безопасный механизм аутентификации
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            return true;
        }

        return false;
    }

    // Выход из системы
    function logout() {
        localStorage.setItem('loggedIn', 'false');
        window.location.hash = '';
    }

    // Загрузка страницы Admin
    function loadAdmin() {
        const content = document.getElementById('content');
        content.innerHTML = `
        <h1>Admin</h1>
        `;
  }

    // Обработка изменений хэша в URL
    window.addEventListener('hashchange', loadContent);

    // Инициализация загрузки контента
    loadContent();
});

// Загрузка страницы с галереей
function loadGallery() {
        const content = document.getElementById('content');
        let galleryHTML = '<h2>Gallery</h2>';
        galleryHTML += '<div class="gallery-row">';
      
          galleryHTML += `
            <div class="photo">
              <img src="" alt="">
              <h2>Hola coder!</h2>
              <p>Esto podría ser su publicidad)))</p>
            </div>
          `;
          
        galleryHTML += '</div>';
  
        content.innerHTML = galleryHTML;
}