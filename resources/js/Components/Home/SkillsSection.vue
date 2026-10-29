<script setup>
import { SKILLS } from '@/constants';
</script>

<template>
    <section id="skills" class="skills">
        <div class="inner">
            <p class="eyebrow">// 03 — Habilidades</p>
            <h2 class="heading">Stack técnica.</h2>

            <div class="grid">
                <div v-for="group in SKILLS" :key="group.category" class="group">
                    <p class="category">{{ group.category }}</p>
                    <ul class="items">
                        <li v-for="item in group.items" :key="item" class="item">
                            <span class="bullet">_</span>{{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills {
    background-color: #0d0d0d;
    border-top: 1px solid #1a1a1a;
    border-bottom: 1px solid #1a1a1a;
    padding: 100px 24px;
}

.inner {
    max-width: 1200px;
    margin: 0 auto;
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
    margin-bottom: 60px;
    line-height: 1.1;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px;
    background-color: #1a1a1a;
}

.group {
    background-color: #0d0d0d;
    padding: 32px;
}

.category {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c8ff00;
    margin-bottom: 24px;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 16px;
}

.items {
    list-style: none;
    padding: 0;
    margin: 0;
}

.item {
    font-family: var(--font-mono);
    font-size: 14px;
    color: #888;
    padding: 8px 0;
    border-bottom: 1px solid #1a1a1a;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.2s;
    cursor: default;
}

.item:hover {
    color: #f0f0f0;
}

.bullet {
    color: #333;
}

@media (max-width: 640px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
