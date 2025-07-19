const removeBtn = document.querySelectorAll('.remove');
const toggle = document.querySelectorAll('.toggle')
const activeLink = document.getElementById('active');
const inactiveLink = document.getElementById('inactive');
const allLink = document.getElementById('all');
const filterLinks = document.querySelectorAll('.filters li');
const extensions = document.querySelectorAll('.extension');


filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        filterLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');


        if (link.id === 'active') {
            extensions.forEach(extension => {
                if (extension.classList.contains('favorite')){
                    extension.style.display = '';

                } else {
                    extension.style.display = 'none';
                }
            });
        } else if (link.id === 'inactive') {
            extensions.forEach(extension => {
                if (!extension.classList.contains('favorite')){
                    extension.style.display = '';
                } else {
                    extension.style.display = 'none';
                }
            });

        } else if (link.id === 'all') {
            extensions.forEach(extension => {
                extension.style.display = '';
            });
        }
    });
});

removeBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const extensionContainer = e.target.closest('.extension');

        if (extensionContainer) {
            extensionContainer.remove();
        }
    })
})


toggle.forEach(toggle => {
    toggle.addEventListener('click', (t) => {
        if (toggle.textContent === '⭒') {
            toggle.textContent = '⭑';
            const extensionContainer = t.target.closest('.extension');
            if (extensionContainer) {
                extensionContainer.classList.add('favorite');
            }
        } else {
            toggle.textContent = '⭒';
            const extensionContainer = t.target.closest('.extension');
            if (extensionContainer) {
            extensionContainer.classList.remove('favorite');
            }
        }

    });
});

