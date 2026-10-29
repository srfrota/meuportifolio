<script setup>
import { STATS } from '@/constants';
import { scrollToSection } from '@/Composables/scrollToSection';
</script>

<template>
    <section class="hero">
        <div class="hero-grid-bg" aria-hidden="true" />

        <div class="hero-content">
            <p class="eyebrow">// Olá, mundo</p>

            <h1 class="headline">
                Eduardo
                <br />
                <span class="accent">Frota</span><span class="dot">.</span>
            </h1>

            <div class="tagline-row">
                <div class="tagline-bar" />
                <div>
                    <p class="role">Analista de Dados &amp; Desenvolvedor Full Stack</p>
                    <p class="summary">
                        Quase três anos construindo e mantendo sistemas em produção. SQL,
                        Python e Power BI para dados; Laravel 12 e Vue.js para aplicações
                        completas — do banco à interface.
                    </p>
                </div>
            </div>

            <div class="cta-row">
                <button class="btn-primary" @click="scrollToSection('experiencia')">Ver Experiência →</button>
                <button class="btn-secondary" @click="scrollToSection('contato')">Falar comigo</button>
            </div>

            <div class="stats-row">
                <div v-for="(stat, i) in STATS" :key="stat.label" class="stat" :class="{ bordered: i < 3 }">
                    <p class="stat-value">{{ stat.value }}</p>
                    <p class="stat-label">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 24px 60px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.hero-grid-bg {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(#1a1a1a 1px, transparent 1px),
        linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.25;
    pointer-events: none;
}

.hero-content {
    position: relative;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.2em;
    color: #c8ff00;
    text-transform: uppercase;
    margin-bottom: 24px;
}

.headline {
    font-family: var(--font-mono);
    font-size: clamp(48px, 9vw, 120px);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin-bottom: 32px;
    color: #f0f0f0;
}

.headline .accent {
    color: #c8ff00;
}

.headline .dot {
    color: #333;
}

.tagline-row {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    flex-wrap: wrap;
    margin-bottom: 48px;
}

.tagline-bar {
    width: 3px;
    height: 80px;
    background-color: #c8ff00;
    flex-shrink: 0;
    margin-top: 4px;
}

.role {
    font-family: var(--font-mono);
    font-size: clamp(18px, 2.5vw, 28px);
    font-weight: 500;
    color: #a0a0a0;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.summary {
    font-size: 16px;
    color: #606060;
    max-width: 480px;
    line-height: 1.7;
    font-family: var(--font-sans);
}

.cta-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.btn-primary {
    padding: 14px 32px;
    background: #c8ff00;
    color: #0a0a0a;
    border: none;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.15s;
}

.btn-primary:hover {
    opacity: 0.85;
    transform: translateY(-2px);
}

.btn-secondary {
    padding: 14px 32px;
    background: transparent;
    color: #f0f0f0;
    border: 1px solid #333;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
}

.btn-secondary:hover {
    border-color: #c8ff00;
    color: #c8ff00;
    transform: translateY(-2px);
}

.stats-row {
    display: flex;
    gap: 0;
    margin-top: 80px;
    border-top: 1px solid #1a1a1a;
    padding-top: 40px;
    flex-wrap: wrap;
}

.stat {
    flex: 1;
    min-width: 120px;
    padding: 0 32px 0 0;
}

.stat.bordered {
    border-right: 1px solid #1a1a1a;
    margin-right: 32px;
}

.stat-value {
    font-family: var(--font-mono);
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    color: #c8ff00;
    line-height: 1;
    margin-bottom: 6px;
}

.stat-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.15em;
    color: #444;
    text-transform: uppercase;
}
</style>
