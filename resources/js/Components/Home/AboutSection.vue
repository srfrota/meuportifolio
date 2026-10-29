<script setup>
import { LINKS } from '@/constants';
</script>

<template>
    <section id="sobre" class="about">
        <div class="about-grid">
            <div>
                <p class="eyebrow">// 01 — Sobre mim</p>
                <h2 class="heading">
                    Código com
                    <br />
                    propósito.
                </h2>
                <p class="text">
                    Sou analista de dados e desenvolvedor full stack em Luís Correia – PI.
                    Há quase três anos construo e mantenho sistemas em produção, com foco
                    em bancos de dados SQL, integração de dados, APIs e automação de
                    processos.
                </p>
                <p class="text last">
                    No dia a dia trabalho com Laravel 12 e Vue.js, e com Python e Power BI
                    para análise de dados. A formação em Direito e a vivência em órgão
                    público estadual me ajudam a entender rotinas administrativas e a
                    transformá-las em soluções simples, bem documentadas e fáceis de manter.
                </p>
                <div class="links">
                    <a
                        v-for="link in LINKS"
                        :key="link.label"
                        :href="link.href"
                        :download="link.download ? '' : undefined"
                        :target="link.download ? undefined : '_blank'"
                        rel="noopener"
                        class="link"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>

            <div class="photo-wrap">
                <div class="photo-frame" aria-hidden="true" />
                <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=700&fit=crop&auto=format"
                    alt="Desenvolvedor trabalhando com código em tela"
                    class="photo"
                />
                <div class="photo-fade" aria-hidden="true" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    background-color: #0d0d0d;
    border-top: 1px solid #1a1a1a;
    border-bottom: 1px solid #1a1a1a;
    padding: 100px 24px;
}

.about-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.25em;
    color: #c8ff00;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.heading {
    font-family: var(--font-mono);
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 32px;
    color: #f0f0f0;
}

.text {
    font-size: 16px;
    color: #888;
    line-height: 1.8;
    margin-bottom: 20px;
}

.text.last {
    margin-bottom: 40px;
}

.links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.link {
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #c8ff00;
    text-decoration: none;
    border-bottom: 1px solid #c8ff0055;
    padding-bottom: 2px;
    transition: border-color 0.2s;
}

.link:hover {
    border-color: #c8ff00;
}

.photo-wrap {
    position: relative;
}

.photo-frame {
    position: absolute;
    top: -16px;
    left: -16px;
    right: 16px;
    bottom: 16px;
    border: 1px solid #c8ff0033;
    pointer-events: none;
}

.photo {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    filter: grayscale(20%);
}

.photo-fade {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to top, #0d0d0d, transparent);
    pointer-events: none;
}

@media (max-width: 900px) {
    .about-grid {
        grid-template-columns: 1fr;
    }
}
</style>
