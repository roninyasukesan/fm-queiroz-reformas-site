https://roninyasukesan.github.io/fm-queiroz-reformas-site/
# FM Queiroz Reformas - Site Profissional

Site profissional para FM Queiroz Reformas, empresa especializada em reformas residenciais e comerciais. Desenvolvido com tecnologias modernas e design responsivo.

## 🏗️ Sobre o Projeto

Este é um site institucional completo para a FM Queiroz Reformas, apresentando serviços, portfólio de trabalhos realizados e formulário de contato. O site foi desenvolvido com foco em:

- **Design Moderno**: Interface limpa e profissional
- **Responsividade**: Totalmente adaptável para dispositivos móveis
- **Performance**: Carregamento rápido e otimizado
- **SEO**: Estrutura otimizada para motores de busca
- **Interatividade**: Animações suaves e experiência de usuário aprimorada

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos modernos com animações e responsividade
- **JavaScript Vanilla**: Interatividade sem dependências externas
- **Font Awesome**: Ícones vetoriais escaláveis
- **Google Fonts**: Tipografia moderna e legível
- **Unsplash**: Imagens de alta qualidade via CDN

## 📁 Estrutura do Projeto

```
fm-queiroz-reformas-site/
├── index.html          # Página principal
├── styles.css          # Estilos e responsividade
├── script.js           # Interatividade e validações
└── README.md          # Documentação do projeto
```

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Hero Section**: Apresentação impactante com call-to-action
- **Navegação Fixa**: Menu responsivo com efeito de scroll
- **Animações Suaves**: Transições elegantes ao rolar a página

### 🔧 Serviços
- **Cards Interativos**: Serviços apresentados de forma visual
- **Hover Effects**: Animações ao passar o mouse
- **Ícones Descritivos**: Visualização clara de cada serviço

### 👥 Sobre Nós
- **Seção de Apresentação**: Informações sobre a empresa
- **Lista de Benefícios**: Destaques do serviço oferecido
- **Imagem Profissional**: Foto da equipe/trabalho

### 🖼️ Portfólio
- **Galeria de Imagens**: Projetos realizados com fotos reais
- **Overlay Interativo**: Informações ao passar o mouse
- **Layout Responsivo**: Adaptação para diferentes tamanhos de tela

### 📞 Contato
- **Formulário Validado**: Campos com validação em tempo real
- **Máscara de Telefone**: Formatação automática (XX) XXXXX-XXXX
- **Feedback Visual**: Indicadores de erro e sucesso
- **Informações de Contato**: Telefone, e-mail e endereço

## 🎨 Design e Experiência

### Paleta de Cores
- **Primária**: `#e74c3c` (Vermelho moderno)
- **Secundária**: `#2c3e50` (Azul escuro)
- **Neutros**: `#f8f9fa`, `#7f8c8d`, `#bdc3c7`

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Tamanhos Responsivos**: Adaptação automática para mobile

### Animações
- **Fade In**: Elementos surgem suavemente ao rolar
- **Hover Effects**: Transições em botões e cards
- **Scroll Suave**: Navegação fluida entre seções

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

### Breakpoints
```css
@media (max-width: 768px) { /* Tablets e Mobiles */ }
@media (max-width: 480px) { /* Mobiles pequenos */ }
```

## 🚀 Como Executar Localmente

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Opções de Execução

#### Opção 1: Servidor Python (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Opção 2: Node.js (Live Server)
```bash
# Instalar globalmente
npm install -g live-server

# Executar
live-server --port=8000
```

#### Opção 3: VS Code Live Server
1. Instalar extensão "Live Server" no VS Code
2. Clique direito no `index.html`
3. Selecione "Open with Live Server"

#### Opção 4: Abrir Diretamente
1. Duplo clique no arquivo `index.html`
2. Ou arraste para o navegador

### Acesso
Após iniciar o servidor, acesse: `http://localhost:8000`

## 📝 Personalização

### Alterar Informações de Contato
Edite as seguintes seções no `index.html`:
```html
<!-- Telefone -->
<p>(11) 9999-8888</p>

<!-- E-mail -->
<p>contato@fmqueirozreformas.com.br</p>

<!-- Endereço -->
<p>São Paulo, SP - Brasil</p>
```

### Adicionar Novos Serviços
1. Localize a seção `.servicos-grid` no HTML
2. Adicione um novo `.servico-card` seguindo o padrão existente
3. Escolha um ícone do Font Awesome para o serviço

### Atualizar Portfólio
1. Substitua as URLs das imagens no `index.html`
2. Use imagens do Unsplash ou suas próprias fotos
3. Mantenha a proporção recomendada (500x300px)

### Alterar Cores
Edite as variáveis CSS no início do `styles.css`:
```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    /* ... outras cores ... */
}
```

## 🔧 Otimizações Implementadas

### Performance
- **Imagens otimizadas**: Uso de CDN com parâmetros de qualidade
- **CSS Minificado**: Estilos eficientes sem código redundante
- **JavaScript Assíncrono**: Carregamento não bloqueante
- **Fontes otimizadas**: Subconjuntos de fontes do Google Fonts

### SEO
- **Meta tags**: Descrição, palavras-chave e viewport
- **Estrutura semântica**: Uso adequado de tags HTML5
- **Imagens com alt**: Descrições para acessibilidade
- **URLs amigáveis**: Links internos otimizados

### Acessibilidade
- **Contraste de cores**: Adequado para leitura
- **Tamanhos de fonte**: Responsivos e legíveis
- **Navegação por teclado**: Todos os elementos acessíveis
- **Labels em formulários**: Descrições claras para cada campo

## 📊 Analytics (Opcional)

Para adicionar Google Analytics, insira o código antes do fechamento da tag `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=SEU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SEU_ID');
</script>
```

## 🆘 Suporte

### Problemas Comuns

#### Imagens não carregam
- Verifique conexão com internet (imagens são carregadas via CDN)
- Certifique-se de que as URLs estão corretas

#### Formulário não funciona
- Verifique se JavaScript está habilitado no navegador
- Confira a validação dos campos

#### Layout quebrado no mobile
- Teste em diferentes navegadores
- Verifique se o viewport meta tag está presente

### Contato
Para suporte técnico ou dúvidas sobre personalização:
- **E-mail**: contato@fmqueirozreformas.com.br
- **Telefone**: (11) 9999-8888

## 📄 Licença

Este projeto está disponível para uso comercial e modificações. As imagens utilizadas são do Unsplash sob licença gratuita.

## 🔄 Atualizações Futuras

- [ ] Integração com WhatsApp Business
- [ ] Galeria de imagens em modal
- [ ] Calculadora de orçamento online
- [ ] Blog com dicas de reforma
- [ ] Integração com Google Maps

---

**Desenvolvido com ❤️ para FM Queiroz Reformas**

Última atualização: Setembro 2024