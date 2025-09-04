// Navegação móvel
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animação do hambúrguer
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll suave para âncoras
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animação ao rolar (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
const animateElements = document.querySelectorAll('.servico-card, .portfolio-item, .sobre-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Adicionar classe de animação
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Validação e envio do formulário
const form = document.getElementById('contatoForm');
const formInputs = form.querySelectorAll('input, textarea');

// Validação em tempo real
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';

    // Remove mensagem de erro anterior
    removeError(field);

    switch (fieldName) {
        case 'nome':
            if (value.length < 3) {
                isValid = false;
                errorMessage = 'Nome deve ter pelo menos 3 caracteres';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, insira um e-mail válido';
            }
            break;
        case 'telefone':
            const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
            if (!phoneRegex.test(value) && value.length < 10) {
                isValid = false;
                errorMessage = 'Por favor, insira um telefone válido';
            }
            break;
        case 'mensagem':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Mensagem deve ter pelo menos 10 caracteres';
            }
            break;
    }

    if (!isValid) {
        showError(field, errorMessage);
        return false;
    }

    return true;
}

function showError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#e74c3c';
    
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '5px';
    errorElement.style.display = 'block';
    
    field.parentNode.appendChild(errorElement);
}

function removeError(field) {
    field.classList.remove('error');
    field.style.borderColor = '#e0e0e0';
    
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// Máscara para telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }
    
    e.target.value = value;
});

// Envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validar todos os campos
    let isFormValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Simular envio do formulário
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular delay de envio
        setTimeout(() => {
            // Aqui você normalmente enviaria os dados para um servidor
            alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
            
            // Limpar formulário
            form.reset();
            
            // Restaurar botão
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }
});

// Voltar ao topo
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
`;

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Efeito hover nos cards de serviços
const servicoCards = document.querySelectorAll('.servico-card');
servicoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Lazy loading para imagens
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            img.onload = () => {
                img.style.opacity = '1';
            };
            
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => {
    imageObserver.observe(img);
});

// Adicionar classe para animação de números
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        const target = parseInt(number.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current);
        }, 50);
    });
}

// Inicializar animações quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar classe de animação aos elementos
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200);
    });
    
    // Adicionar animação específica para a imagem do hero
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.animation = 'fadeInRight 1s ease-out';
    }
    
    // Adicionar animação para a imagem do sobre
    const sobreImage = document.querySelector('.sobre-img');
    if (sobreImage) {
        sobreImage.style.animation = 'fadeInRight 1s ease-out';
    }
});

// Prevenir comportamento padrão de links vazios
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Adicionar feedback visual para interações
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});