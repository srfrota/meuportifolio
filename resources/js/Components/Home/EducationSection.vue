<script setup>
import { CERTIFICATIONS, EDUCATION } from '@/constants';
</script>

<template>
    <section id="formacao" class="education">
        <div class="inner">
            <p class="eyebrow">// 04 — Formação</p>
            <h2 class="heading">Base técnica.</h2>

            <div class="block">
                <h3 class="block-title">Formação acadêmica</h3>
                <ul class="courses">
                    <li v-for="item in EDUCATION" :key="item.course" class="course">
                        <div>
                            <p class="course-name">{{ item.course }}</p>
                            <p class="course-institution">{{ item.institution }}</p>
                        </div>
                        <span class="course-period">{{ item.period }}</span>
                    </li>
                </ul>
            </div>

            <div class="block">
                <h3 class="block-title">
                    Certificações
                    <span class="block-count">{{ CERTIFICATIONS.length }}</span>
                </h3>
                <div class="certs">
                    <component
                        :is="cert.url ? 'a' : 'div'"
                        v-for="cert in CERTIFICATIONS"
                        :key="cert.title"
                        class="cert"
                        :class="{ 'cert-link': cert.url }"
                        :href="cert.url || undefined"
                        :target="cert.url ? '_blank' : undefined"
                        :rel="cert.url ? 'noopener' : undefined"
                    >
                        <div class="cert-top">
                            <span class="cert-hours">{{ cert.hours }}</span>
                            <span class="cert-date">{{ cert.date }}</span>
                        </div>
                        <p class="cert-title">{{ cert.title }}</p>
                        <div class="cert-footer">
                            <p class="cert-issuer">Universidade Estácio de Sá</p>
                            <span v-if="cert.url" class="cert-cta">Ver certificado ↗</span>
                        </div>
                    </component>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.education {
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

.block {
    margin-bottom: 64px;
}

.block:last-child {
    margin-bottom: 0;
}

.block-title {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c8ff00;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 16px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.block-count {
    color: #444;
    letter-spacing: 0.1em;
}

.courses {
    list-style: none;
    margin: 0;
    padding: 0;
}

.course {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    padding: 20px 0;
    border-bottom: 1px solid #1a1a1a;
}

.course-name {
    font-size: 16px;
    color: #e0e0e0;
    margin-bottom: 4px;
}

.course-institution {
    font-family: var(--font-mono);
    font-size: 12px;
    color: #555;
    letter-spacing: 0.05em;
}

.course-period {
    font-family: var(--font-mono);
    font-size: 12px;
    color: #777;
    white-space: nowrap;
}

.certs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background-color: #1a1a1a;
    margin-top: 24px;
}

.cert {
    display: block;
    background-color: #0d0d0d;
    padding: 28px;
    color: inherit;
    text-decoration: none;
    transition: background-color 0.2s;
}

.cert:hover {
    background-color: #111;
}

.cert-link {
    cursor: pointer;
}

.cert-link:focus-visible {
    outline: 2px solid #c8ff00;
    outline-offset: -2px;
}

.cert-link:hover .cert-title,
.cert-link:hover .cert-cta {
    color: #c8ff00;
}

.cert-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.cert-hours {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #c8ff00;
    border: 1px solid #c8ff0033;
    padding: 3px 10px;
}

.cert-date {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #444;
    letter-spacing: 0.05em;
}

.cert-title {
    font-family: var(--font-mono);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0f0f0;
    line-height: 1.4;
    margin-bottom: 8px;
    transition: color 0.2s;
}

.cert-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.cert-issuer {
    font-size: 12px;
    color: #555;
}

.cert-cta {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #444;
    white-space: nowrap;
    transition: color 0.2s;
}

@media (max-width: 900px) {
    .certs {
        grid-template-columns: 1fr;
    }

    .course {
        flex-direction: column;
        gap: 6px;
    }
}
</style>
