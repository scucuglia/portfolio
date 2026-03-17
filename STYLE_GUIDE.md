# Style Guide — Júlia Scucuglia Portfolio

> Fonte da verdade para design e código.
> Tokens definidos em `design/tokens.css`, importados em `app/globals.css`.

---

## Colors

| Token                  | Valor     | Uso                                  |
|------------------------|-----------|--------------------------------------|
| `--color-bg`           | `#FAF8F5` | Background da página                 |
| `--color-card`         | `#F2EFE9` | Superfície dos cards                 |
| `--color-divider`      | `#E8E4DE` | Bordas, divisores, linhas            |
| `--color-accent`       | `#7B6EE8` | Roxo primário — CTAs, hover, links   |
| `--color-accent-hover` | `#6558D4` | Roxo escurecido no hover             |
| `--color-text`         | `#111`    | Texto principal                      |
| `--color-muted`        | `#aaa`    | Labels, eyebrow, texto secundário    |
| `--color-subtle`       | `#ccc`    | Copyright, tags, UI desativado       |

---

## Typography

### Famílias

| Token          | Família           | Uso                                       |
|----------------|-------------------|-------------------------------------------|
| `--font-sans`  | DM Sans           | Todo o UI — nav, body, botões, subtítulos |
| `--font-serif` | Libre Baskerville  | Italic display — hero title, footer CTA, logo |

### Pesos

| Token               | Valor | Nome       |
|---------------------|-------|------------|
| `--weight-extralight` | 200 | ExtraLight |
| `--weight-light`      | 300 | Light      |
| `--weight-regular`    | 400 | Regular    |

### Escala de tipo

| Token              | Valor                      | Uso                          |
|--------------------|----------------------------|------------------------------|
| `--text-label`     | `0.65rem`                  | Tags, copyright, localização |
| `--text-nav`       | `0.72rem`                  | Nav links, section labels, eyebrow |
| `--text-btn`       | `0.78rem`                  | Botão outline                |
| `--text-btn-fill`  | `0.82rem`                  | Botão filled                 |
| `--text-body`      | `0.95rem`                  | Corpo de texto, pub titles   |
| `--text-hero`      | `clamp(2.2rem, 5vw, 4rem)` | Hero h1                      |
| `--text-footer-cta`| `clamp(1.4rem, 3.5vw, 2.4rem)` | Footer CTA serif         |

---

## Spacing & Layout

| Token           | Valor                    | Uso                         |
|-----------------|--------------------------|-----------------------------|
| `--side`        | `clamp(40px, 5vw, 40px)` | Padding horizontal da página|
| `--max-content` | `1200px`                 | Largura máxima do conteúdo  |

**Breakpoint mobile:** `768px`
**Classe de container:** `.wrap` (definida em `globals.css`)

---

## Border Radius

| Token          | Valor  | Uso                     |
|----------------|--------|-------------------------|
| `--radius-pill`| `2rem` | Botões                  |
| `--radius-card`| `24px` | Project cards           |
| `--radius-icon`| `50%`  | Botão LinkedIn (círculo)|

---

## Motion

| Token          | Valor                                      | Uso                          |
|----------------|--------------------------------------------|------------------------------|
| `--ease-default` | `0.25s ease`                             | Hover em links, cores        |
| `--ease-card`    | `0.5s cubic-bezier(0.25,0.46,0.45,0.94)` | Zoom da imagem no card       |
| `--ease-menu`    | `0.38s cubic-bezier(0.32,0.72,0,1)`      | Slide do menu mobile         |

---

## Components

### Button — Filled (`btnFilled`)
- Fundo: `--color-accent` → hover: `--color-accent-hover`
- Texto: branco, `--text-btn-fill`, uppercase, `letter-spacing: 0.1em`
- Padding: `0.8rem 1.6rem` · Radius: `--radius-pill`
- Usado em: Hero, Footer

### Button — Outline (`btnOutline`)
- Borda: `1.5px solid --color-accent`
- Texto: `--color-accent` → hover: branco sobre fundo accent
- Padding: `0.55rem 1.3rem` · Radius: `--radius-pill`
- Usado em: Nav (desktop), Nav mobile

### Nav Link (`navText`)
- Fonte: `--font-sans`, light, uppercase, `--text-nav`
- Underline animado no hover (largura 0 → 100%, cor accent)

### Section Label
- Fonte: `--font-sans`, `--weight-light`, `--text-nav`, uppercase
- Cor: `--color-muted`, `letter-spacing: 0.12em`

### Project Card (`case-card-big`)
- Aspect ratio: `3/2` desktop, `4/3` mobile
- Imagem com zoom `scale(1.04)` no hover (`--ease-card`)
- Label bar: glassmorphism (`backdrop-filter: blur(20px)`)
- Título muda para accent, chevron translada `+3px` no hover

### Publication Item
- Borda superior: `--color-divider`
- Tag: `--text-label`, `--color-subtle`
- Título: `--text-body`, `--weight-light`
- Link "Read →": underline animado igual ao navText

### StarIcon
- SVG reutilizável — props: `size`, `color`
- Aparece no nav logo (16px) e no hero (36px)

---

## Patterns

### Underline animado
```css
position: relative; padding-bottom: 3px;
::after { width: 0; height: 1px; background: var(--accent); transition: width 0.25s ease; }
:hover::after { width: 100%; }
```

### Glassmorphism (card label)
```css
backdrop-filter: blur(20px) saturate(200%) brightness(1.05);
background: rgba(242,239,233,0.82);
border-top: 1px solid rgba(255,255,255,0.75);
```

### Container padrão
```tsx
<div className="wrap">
  <section>…</section>
</div>
```

### Mouse trail (canvas)
- Hook: `hooks/useTrailCanvas.ts`
- Dots roxos (accent), alpha fade + radius shrink por frame
- Ativo somente no Hero

---

## File Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx          ← metadata, fonts
│   ├── page.tsx            ← composição das sections
│   └── globals.css         ← reset + aliases dos tokens
├── components/
│   ├── Nav.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── WorkSection.tsx / .module.css
│   ├── PublicationsSection.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   └── StarIcon.tsx
├── data/
│   ├── projects.ts         ← adicionar/editar projetos aqui
│   └── publications.ts     ← adicionar/editar publicações aqui
├── design/
│   └── tokens.css          ← ÚNICA fonte de verdade dos tokens
├── hooks/
│   └── useTrailCanvas.ts
└── public/
    └── snapshots.pdf
```
