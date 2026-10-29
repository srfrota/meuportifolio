<script setup>
import { PROJECTS } from '@/constants';
</script>

<template>
    <section id="projects" class="projects">
        <div class="inner">
            <div class="header">
                <div>
                    <p class="eyebrow">// 02 — Projetos</p>
                    <h2 class="heading">Trabalhos selecionados.</h2>
                </div>
                <p class="count">{{ PROJECTS.length }} projetos</p>
            </div>

            <div class="grid">
                <a v-for="project in PROJECTS" :key="project.id" :href="project.link" class="card">
                    <div class="card-top">
                        <span class="card-id">{{ project.id }}</span>
                        <span class="card-year">{{ project.year }}</span>
                    </div>

                    <h3 class="card-title">{{ project.title }}</h3>
                    <p class="card-desc">{{ project.description }}</p>
                    <div class="tags">
                        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                    <div class="arrow">→</div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    padding: 100px 24px;
}

.inner {
    max-width: 1200px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 32px;
    flex-wrap: wrap;
    gap: 16px;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.25em;
    color: #c8ff00;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.heading {
    font-family: var(--font-mono);
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: #f0f0f0;
    line-height: 1.1;
}

.count {
    font-family: var(--font-mono);
    font-size: 12px;
    color: #444;
    letter-spacing: 0.1em;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background-color: #1a1a1a;
}

.card {
    display: block;
    background-color: #0a0a0a;
    padding: 40px;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s;
    position: relative;
    overflow: hidden;
}

.card:hover {
    background-color: #111;
}

.card:hover .arrow {
    color: #c8ff00;
    transform: translateX(4px);
}

.card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
}

.card-id {
    font-family: var(--font-mono);
    font-size: 64px;
    font-weight: 800;
    color: #1a1a1a;
    line-height: 1;
    user-select: none;
}

.card-year {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #444;
    letter-spacing: 0.1em;
}

.card-title {
    font-family: var(--font-mono);
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #f0f0f0;
    margin-bottom: 12px;
}

.card-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.7;
    margin-bottom: 24px;
}

.tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #c8ff00;
    border: 1px solid #c8ff0033;
    padding: 3px 10px;
}

.arrow {
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-family: var(--font-mono);
    font-size: 18px;
    color: #333;
    transition: color 0.2s, transform 0.2s;
}

@media (max-width: 900px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
