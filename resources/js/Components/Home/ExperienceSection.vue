<script setup>
import { EXPERIENCE } from '@/constants';
</script>

<template>
    <section id="experiencia" class="experience">
        <div class="inner">
            <div class="header">
                <div>
                    <p class="eyebrow">// 02 — Experiência</p>
                    <h2 class="heading">Onde construí.</h2>
                </div>
                <p class="count">{{ EXPERIENCE.length }} posições</p>
            </div>

            <ol class="timeline">
                <li v-for="job in EXPERIENCE" :key="job.company" class="job">
                    <div class="job-meta">
                        <p class="period">{{ job.period }}</p>
                        <p class="location">{{ job.location }}</p>
                        <span v-if="job.current" class="badge">atual</span>
                    </div>

                    <div class="job-body">
                        <h3 class="company">{{ job.company }}</h3>
                        <p class="role">
                            {{ job.role }}
                            <span class="stack">— {{ job.stack }}</span>
                        </p>
                        <ul class="highlights">
                            <li v-for="item in job.highlights" :key="item" class="highlight">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>

<style scoped>
.experience {
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
    margin-bottom: 24px;
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

.timeline {
    list-style: none;
    margin: 0;
    padding: 0;
}

.job {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 32px;
    padding: 48px 0;
    border-bottom: 1px solid #1a1a1a;
    position: relative;
}

.job::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 2px;
    background-color: #c8ff00;
}

.job:last-child {
    border-bottom: none;
}

.job-meta {
    padding-top: 4px;
}

.period {
    font-family: var(--font-mono);
    font-size: 13px;
    color: #f0f0f0;
    letter-spacing: -0.01em;
    margin-bottom: 6px;
}

.location {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #555;
    letter-spacing: 0.05em;
}

.badge {
    display: inline-block;
    margin-top: 12px;
    padding: 3px 10px;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #c8ff00;
    border: 1px solid #c8ff0033;
}

.company {
    font-family: var(--font-mono);
    font-size: clamp(20px, 2.2vw, 26px);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #f0f0f0;
    margin-bottom: 6px;
}

.role {
    font-size: 15px;
    color: #a0a0a0;
    margin-bottom: 20px;
}

.stack {
    font-family: var(--font-mono);
    font-size: 12px;
    color: #555;
}

.highlights {
    list-style: none;
    margin: 0;
    padding: 0;
}

.highlight {
    font-size: 14px;
    color: #777;
    line-height: 1.8;
    padding-left: 20px;
    position: relative;
    margin-bottom: 8px;
}

.highlight::before {
    content: '›';
    position: absolute;
    left: 0;
    color: #c8ff00;
    font-family: var(--font-mono);
}

@media (max-width: 900px) {
    .job {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 40px 0;
    }
}
</style>
