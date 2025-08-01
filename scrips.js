document.querySelectorAll('.item_menu').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 300; // Deslocamento desejado
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });