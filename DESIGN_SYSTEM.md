# Financial Systems Architect - Design System

## 🎨 Concepto de Diseño

**Dirección estratégica**: Combinar profesionalismo bancario (confianza, precisión, seguridad) con innovación técnica (cloud-native, data-driven, AI).

**Inspiración**: Portfolios de estrategia/consultoría (McKinsey, Accenture) con personalidad tech, evitando el cliché "tech bro portfolio".

**Combinación icónica**: Blue + Gold = instituciones financieras de élite (Visa, PayPal, American Express). Comunica expertise sin gritar "startup tech".

---

## 🎨 Paleta de Colores

### Principal: Deep Navy & Slate
**Uso**: Fondos principales, transmite seriedad bancaria

```css
--color-navy-950: #0a1628  /* Fondo principal oscuro */
--color-navy-900: #102a43
--color-navy-800: #243b53
--color-slate-800: #1e293b  /* Fondos secundarios */
--color-slate-700: #334155
```

### Acento Primario: Electric Blue
**Uso**: CTAs, enlaces, elementos interactivos principales  
**Por qué**: Confianza tech, menos saturado que cyan, profesional

```css
--color-electric-500: #0ea5e9  /* Acento principal */
--color-electric-400: #38bdf8
--color-electric-600: #0284c7
```

### Acento Secundario: Gold/Amber
**Uso**: Certificaciones, logros, elementos premium, badges  
**Por qué**: Exclusividad, diferenciación

```css
--color-gold-500: #f59e0b  /* Acento oro */
--color-gold-400: #fbbf24
--color-gold-600: #d97706
```

### Neutros: Warm Gray
**Uso**: Textos, bordes sutiles

```css
--color-slate-50: #f8fafc   /* Textos principales */
--color-slate-400: #94a3b8  /* Textos secundarios */
--color-slate-600: #475569  /* Bordes */
```

### Semánticos
```css
--color-success-500: #10b981  /* Estados exitosos */
--color-warning-500: #f59e0b  /* Warnings */
--color-error-500: #ef4444    /* Errores críticos */
```

---

## ✍️ Tipografía

### Sistema de Fuentes

**Headings**: `Inter Tight`  
- Sans-serif geométrico, alta legibilidad, moderno pero profesional
- Variable font para micro-transiciones en hover

**Body**: `Inter`  
- Hermano de Inter Tight, optimizado para párrafos
- Excelente legibilidad en pantalla

**Mono/Code**: `JetBrains Mono`  
- Mejor que Fira Code para snippets técnicos
- Ligaduras opcionales

### Escala Tipográfica

```css
H1: 64px (4rem) / tight / weight 700
H2: 40px (2.5rem) / tight / weight 600
H3: 32px (2rem) / snug / weight 600
Body: 18px (1.125rem) / relaxed / weight 400
Small: 16px (1rem) / normal / weight 400
```

### Jerarquía de Pesos

- **Normal**: 400 (Body text)
- **Medium**: 500 (Énfasis sutil)
- **Semibold**: 600 (Subheadings, H2-H3)
- **Bold**: 700 (H1, CTAs principales)

### Truco Profesional

**Variable fonts** para transiciones suaves:
```css
.hover-weight {
  transition: font-variation-settings 200ms;
}
.hover-weight:hover {
  font-variation-settings: 'wght' 600;
}
```

---

## 📐 Grid y Espaciado

### Grid Base

- **Sistema**: 12 columnas
- **Gap desktop**: 24px
- **Gap mobile**: 16px
- **Contenedor máximo**: 1280px (no 1440px → demasiado ancho para lectura)

### Spacing Scale (Base 4px)

```css
4px   → var(--space-1)
8px   → var(--space-2)   /* Padding mínimo */
12px  → var(--space-3)
16px  → var(--space-4)   /* Padding base */
24px  → var(--space-6)   /* Gap estándar */
32px  → var(--space-8)   /* Secciones pequeñas */
48px  → var(--space-12)  /* Secciones medianas */
64px  → var(--space-16)  /* Secciones grandes */
96px  → var(--space-24)  /* Separadores principales */
128px → var(--space-32)  /* Hero spacing */
```

### Vertical Rhythm

**Regla**: Múltiplos de 8px para alineación perfecta

---

## 🎭 Efectos Visuales

### Glass Morphism

**3 niveles de intensidad**:

```css
.glass          /* Sutil: navbar, overlays */
.glass-card     /* Medio: tarjetas principales */
.glass-strong   /* Fuerte: modales, popups */
```

### Glow Effects

**Electric Blue**:
```css
.glow-electric-sm  /* Hover sutil en botones */
.glow-electric     /* CTAs principales */
```

**Gold**:
```css
.glow-gold         /* Certificaciones, badges premium */
```

### Text Gradients

```css
.text-gradient-electric  /* Títulos principales */
.text-gradient-gold      /* Logros, stats destacados */
.text-gradient-fintech   /* Combinación Blue→Gold */
```

---

## 🎯 Iconografía

### Sistema Recomendado: **Phosphor Icons**

**Por qué Phosphor > Heroicons**:
- Más refinado y moderno
- Mejor para contexto fintech
- Mayor variedad de pesos (thin, light, regular, bold)
- Mejor escalabilidad

**Instalación**:
```bash
npm install @phosphor-icons/react
```

**Uso**:
```tsx
import { CloudArrowUp, ShieldCheck, Database } from '@phosphor-icons/react'

<CloudArrowUp size={24} weight="duotone" />
```

### Guía de Iconos por Contexto

| Contexto | Icono Sugerido | Peso |
|----------|----------------|------|
| Cloud Architecture | `CloudArrowUp`, `CloudCheck` | duotone |
| Security/Banking | `ShieldCheck`, `Lock` | bold |
| Data/Analytics | `Database`, `ChartLine` | regular |
| Code/Development | `Code`, `Terminal` | regular |
| Certificates | `Certificate`, `Seal` | fill |
| Success states | `CheckCircle` | fill |

---

## 🖼️ Assets e Ilustraciones

### Mockups de Proyectos

**Recomendación**: Capturas reales de dashboards con:
- Overlay de blur en datos sensibles
- Anotaciones de métricas clave (KPIs)
- Leyendas explicativas

**Evitar**:
- ❌ Generadores AI genéricos
- ❌ Screenshots sin contexto
- ❌ Mockups de stock photos

### Ilustraciones de Arquitectura

**Estilo**: Isométricas sutiles de arquitecturas cloud

**Opciones**:
1. **DIY**: Usa [Excalidraw](https://excalidraw.com/) o [tldraw](https://tldraw.com)
2. **Profesional**: Encargar en Fiverr ($50-100)
3. **Herramientas**: Diagrams.net con tema oscuro

**Colores para diagramas**:
- Azure: `#0ea5e9`
- AWS: `#f59e0b`
- Databases: `#10b981`
- APIs: `#8b5cf6`

---

## 🎬 Animaciones y Transiciones

### Timing Functions

```css
--transition-fast: 150ms    /* Hover simple */
--transition-base: 200ms    /* Interacciones estándar */
--transition-slow: 300ms    /* Transiciones complejas */
--transition-slower: 500ms  /* Modales, overlays */
```

### Animaciones Disponibles

```css
.animate-fade-in       /* Entrada suave */
.animate-fade-up       /* Entrada desde abajo */
.animate-scale-in      /* Escala desde centro */
.animate-slide-in-right /* Deslizar desde derecha */
.animate-float         /* Flotación continua */
.animate-pulse-glow    /* Glow pulsante */
.animate-shimmer       /* Efecto shimmer */
```

### Delays para Cascada

```css
.animation-delay-500
.animation-delay-1000
.animation-delay-1500
.animation-delay-2000
```

**Uso**:
```html
<div class="animate-fade-up animation-delay-500">...</div>
<div class="animate-fade-up animation-delay-1000">...</div>
```

---

## 🎨 Componentes Premium

### Card Interactiva con Border Gradient

```html
<div class="card-interactive hover-lift">
  <!-- Contenido -->
</div>
```

**Características**:
- Border gradient Blue→Gold al hacer hover
- Elevación suave (-4px)
- Sombra premium

### Botones Principales

```html
<!-- CTA Principal -->
<button class="bg-electric-500 hover:bg-electric-600 glow-electric-sm hover-lift">
  Ver proyectos
</button>

<!-- CTA Secundario Gold -->
<button class="bg-gold-500 hover:bg-gold-600 glow-gold hover-scale">
  Ver certificaciones
</button>
```

### Glass Card con Stats

```html
<div class="glass-card p-8 rounded-xl">
  <div class="stats-grid">
    <div>
      <p class="text-4xl font-bold text-gradient-gold">140+</p>
      <p class="text-slate-400">Certificaciones</p>
    </div>
    <div>
      <p class="text-4xl font-bold text-gradient-electric">15+</p>
      <p class="text-slate-400">Años experiencia</p>
    </div>
  </div>
</div>
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
mobile:   < 640px   (base)
tablet:   640px+    (sm)
desktop:  768px+    (md)
large:    1024px+   (lg)
xlarge:   1280px+   (xl)
```

---

## ♿ Accesibilidad

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--color-electric-500);
  outline-offset: 2px;
}
```

### Color Contrast

**Texto principal sobre Navy 950**:
- Slate 50: ✅ AAA (14.2:1)
- Slate 400: ✅ AA (4.8:1)

**Electric Blue sobre Navy 950**:
- Electric 500: ✅ AAA (8.1:1)

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🚀 Mejores Prácticas

### 1. **Jerarquía Visual Clara**
- H1 solo una vez por página
- Usar colores para jerarquizar (Gold para premium, Electric para estándar)

### 2. **Consistencia en Espaciado**
- Usar siempre múltiplos de 8px
- Grid gap consistente (24px desktop, 16px mobile)

### 3. **Efectos con Propósito**
- Glass morphism solo en elementos flotantes/superpuestos
- Glow effects para CTAs y elementos interactivos
- Gradients para destacar logros y stats importantes

### 4. **Performance**
- Usar `will-change` para animaciones complejas
- Preferir `transform` sobre `top/left`
- Variable fonts para reducir HTTP requests

### 5. **Loading States**
- Skeleton screens con `.skeleton`
- Loading dots con `.loading-dots`
- Shimmer effects para contenido dinámico

---

## 📦 Recursos Externos

### Fuentes
- [Inter Tight](https://fonts.google.com/specimen/Inter+Tight)
- [Inter](https://fonts.google.com/specimen/Inter)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

### Iconos
- [Phosphor Icons](https://phosphoricons.com/)
- [Phosphor React](https://github.com/phosphor-icons/react)

### Herramientas
- [Coolors](https://coolors.co/) - Generador de paletas
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Excalidraw](https://excalidraw.com/) - Diagramas de arquitectura

---

## 🎯 Ejemplos de Uso

### Hero Section

```html
<section class="container-professional py-32">
  <div class="hero-layout">
    <div class="hero-left">
      <h1 class="text-gradient-fintech mb-6">
        Financial Systems Architect
      </h1>
      <p class="text-xl text-slate-400 mb-8">
        Cloud-native banking solutions
      </p>
      <button class="bg-electric-500 hover:bg-electric-600 glow-electric-sm">
        Ver proyectos
      </button>
    </div>
    <div class="hero-right">
      <div class="glass-card stats-grid">
        <!-- Stats -->
      </div>
    </div>
  </div>
</section>
```

### Certification Badge

```html
<div class="certification-card card-interactive">
  <div class="p-4 text-center">
    <Certificate size={32} weight="fill" className="text-gold-500 mx-auto mb-2" />
    <p class="text-sm font-semibold">Azure Solutions Architect</p>
  </div>
</div>
```

---

## 📚 Próximos Pasos

1. ✅ Instalar Phosphor Icons
2. ✅ Actualizar componentes con nuevo sistema de colores
3. ✅ Implementar variable fonts
4. ⏳ Crear mockups de proyectos con anotaciones
5. ⏳ Diseñar diagramas de arquitectura isométricos
6. ⏳ Optimizar imágenes y assets
7. ⏳ Audit de accesibilidad completo

---

**Versión**: 1.0.0  
**Última actualización**: Febrero 2026  
**Mantenedor**: Juan Carlos García Arriero
