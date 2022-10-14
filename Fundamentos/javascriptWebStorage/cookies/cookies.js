// Criação de cookies
document.cookie = 'email=isabella@email.com';

// Criação de cookies com data de expiração
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// o parâmetro path, que dirá ao navegador a qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

// Criação de cookies com variaveis
const mycookies = document.cookie;
console.log(mycookies);

// Alteração de cookies
document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// Deletar os cookies
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'