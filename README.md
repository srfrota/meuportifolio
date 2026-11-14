# Portfólio — Eduardo Frota

Portfólio pessoal de página única, construído com **Laravel + Inertia.js + Vue 3**.
O Laravel serve a aplicação e o Inertia renderiza o componente Vue `Home`, que reúne
todas as seções do currículo.

**Site:** analista de dados e desenvolvedor full stack — Luís Correia, PI.

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Backend | PHP 8.3+, Laravel 13 |
| Ponte | Inertia.js 2 (`inertiajs/inertia-laravel`) |
| Frontend | Vue 3 (`<script setup>`) |
| Estilos | CSS *scoped* por componente + Tailwind CSS 3 |
| Build | Vite 8 + `laravel-vite-plugin` |
| Rotas no front | Ziggy |
| Testes | Pest 5 |
| Banco | SQLite (apenas o scaffold padrão do Laravel) |

---

## Estrutura

```
app/
  Http/Middleware/HandleInertiaRequests.php  # root view "app" e props compartilhadas
  Providers/AppServiceProvider.php

routes/web.php                # GET / → Inertia::render('Home')

resources/
  views/app.blade.php         # template HTML raiz
  css/app.css                 # fontes, Tailwind, variáveis e estilos globais
  js/
    app.js                    # bootstrap do Inertia + Ziggy
    constants.js              # ⭐ todo o conteúdo do portfólio
    Composables/
      scrollToSection.js      # scroll suave por id
      useScrollSpy.js         # seção ativa na navbar
    Pages/Home.vue            # monta as seções na ordem da página
    Components/Home/
      NavBar.vue              # menu fixo, responsivo, com scrollspy
      HeroSection.vue         # nome, cargo, resumo, CTAs e estatísticas
      AboutSection.vue        # bio + links (GitHub, LinkedIn, e-mail, currículo)
      ExperienceSection.vue   # timeline de experiências
      SkillsSection.vue       # competências agrupadas por categoria
      EducationSection.vue    # formação acadêmica + certificações
      ContactSection.vue      # dados de contato + formulário
      FooterSection.vue

public/
  curriculo.pdf               # arquivo baixado pelo link "Currículo ↓"
```

### Fluxo de renderização

1. `GET /` → `Inertia::render('Home')`.
2. `resources/views/app.blade.php` carrega `app.js` e o `.vue` da página via `@vite` + `@inertiaHead`.
3. `app.js` inicializa o Inertia e resolve `Pages/*.vue`.
4. `Pages/Home.vue` compõe as seções; toda a interatividade é client-side
   (scroll suave, scrollspy, menu mobile e formulário).

---

## Conteúdo

Praticamente todo o texto vem de **`resources/js/constants.js`**:
`PROFILE`, `NAV_LINKS`, `STATS`, `EXPERIENCE`, `SKILLS`, `EDUCATION`,
`CERTIFICATIONS` e `LINKS`.

Para atualizar dados pessoais, experiências, habilidades, formação ou links,
edite esse arquivo — os componentes apenas consomem esses objetos.

Cada item de `CERTIFICATIONS` aceita um campo opcional `url`. Quando preenchido,
o card do certificado vira um link que abre em nova aba; com `url: null` ele é
renderizado normalmente, sem link.

---

## Rodando localmente

Requisitos: **PHP 8.3+**, **Composer**, **Node.js 20.19+** (ou 22.12+) e **npm**.
O Vite 8 não funciona em versões antigas do Node — se usar `nvm`, rode
`nvm use 24` (ou outra versão LTS atual) antes de instalar/buildar.

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
```

O projeto usa SQLite. O arquivo `database/database.sqlite` já existe; se precisar
recriá-lo:

```bash
touch database/database.sqlite
php artisan migrate
```

### Desenvolvimento

Em um terminal:

```bash
php artisan serve
```

Em outro:

```bash
npm run dev
```

Ou os dois de uma vez (script do Composer):

```bash
composer dev
```

Acesse <http://localhost:8000>.

> Enquanto o `npm run dev` estiver ativo, o Vite cria `public/hot` e o Laravel
> passa a servir os assets do dev server. Ao parar o Vite o arquivo é removido
> automaticamente. `public/hot` está no `.gitignore` e **não deve ir para produção**.

### Build de produção

```bash
npm run build
```

Os assets são gerados em `public/build` (também ignorado pelo Git). Rode o build
sempre que alterar `resources/` antes de publicar.

---

## Testes

```bash
php artisan test
```

ou

```bash
composer test
```

Os testes atuais são apenas os exemplos padrão do Laravel (`tests/Unit` e
`tests/Feature`). A home ainda não possui cobertura.

---

## Observações

- **Formulário de contato:** o envio é apenas visual em `ContactSection.vue` —
  não há rota POST, validação nem envio de e-mail. Para torná-lo funcional, crie
  uma rota/controller no Laravel e use o `useForm` do Inertia.
- **Autenticação:** `laravel/sanctum` e `laravel/breeze` estão instalados, mas
  não há rotas nem telas de autenticação. O modelo `User` e as migrations são
  apenas o scaffold.
- **Foto da seção "Sobre":** carregada de uma URL externa (Unsplash). Para não
  depender de rede/CDN, coloque a imagem em `public/` e referencie o caminho local.
- **Estilos:** as seções usam CSS *scoped* com cores fixas; a paleta do
  `tailwind.config.js` (`primary: #c8ff00`, `background: #0a0a0a`, etc.) serve de
  referência para o tema, mas as classes utilitárias são pouco utilizadas.

---

## Tema

Tema escuro com acento verde-limão, inspirado em terminal:

| Token | Valor |
| --- | --- |
| Fundo | `#0a0a0a` |
| Card / secundário | `#111111` / `#1a1a1a` |
| Texto | `#f0f0f0` |
| Acento (primário) | `#c8ff00` |
| Fonte títulos/labels | JetBrains Mono |
| Fonte corpo | Inter |
