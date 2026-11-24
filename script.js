// Arquivo reservado para futuras interações dinâmicas do seu portfólio.
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfólio de Gabrielly carregado com sucesso! 🚀");
    
    // Exemplo de microinteração: Mensagem de confirmação ao clicar em links externos
    const githubLink = document.querySelector('a[href*="github.com"]');
    if (githubLink) {
        githubLink.addEventListener("click", () => {
            console.log("Usuário navegando para o GitHub.");
        });
    }
});
