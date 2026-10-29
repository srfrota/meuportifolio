<script setup>
import { reactive, ref } from 'vue';
import { PROFILE } from '@/constants';

const INFO = [
    { label: 'E-mail', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: 'Telefone', value: PROFILE.phone, href: `tel:+5586981781184` },
    { label: 'GitHub', value: 'github.com/srfrota', href: PROFILE.github },
    { label: 'Localização', value: PROFILE.location },
    { label: 'Disponibilidade', value: 'Aberto a oportunidades' },
];

const formData = reactive({ name: '', email: '', message: '' });
const sent = ref(false);

function handleSubmit() {
    sent.value = true;
    setTimeout(() => (sent.value = false), 3000);
    formData.name = '';
    formData.email = '';
    formData.message = '';
}
</script>

<template>
    <section id="contato" class="contact">
        <div class="grid">
            <div>
                <p class="eyebrow">// 05 — Contato</p>
                <h2 class="heading">
                    Vamos
                    <br />
                    trabalhar
                    <br />
                    juntos?
                </h2>
                <p class="text">
                    Estou aberto a oportunidades em dados e desenvolvimento — de análise
                    de dados a aplicações completas em Laravel e Vue.js. Me manda uma
                    mensagem que respondo rápido.
                </p>

                <div class="info-list">
                    <div v-for="item in INFO" :key="item.label" class="info-row">
                        <span class="info-label">{{ item.label }}</span>
                        <a v-if="item.href" :href="item.href" class="info-value info-link">{{ item.value }}</a>
                        <span v-else class="info-value">{{ item.value }}</span>
                    </div>
                </div>
            </div>

            <form class="form" @submit.prevent="handleSubmit">
                <div class="field">
                    <label for="name" class="field-label">Nome</label>
                    <input id="name" v-model="formData.name" type="text" placeholder="Seu nome" required class="field-input" />
                </div>

                <div class="field">
                    <label for="email" class="field-label">E-mail</label>
                    <input id="email" v-model="formData.email" type="email" placeholder="seu@email.com" required class="field-input" />
                </div>

                <div class="field">
                    <label for="message" class="field-label">Mensagem</label>
                    <textarea
                        id="message"
                        v-model="formData.message"
                        placeholder="Descreva seu projeto..."
                        rows="6"
                        required
                        class="field-input textarea"
                    />
                </div>

                <button type="submit" class="submit-btn" :class="{ sent }">
                    {{ sent ? '✓ Mensagem enviada!' : 'Enviar mensagem →' }}
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped>
.contact {
    padding: 100px 24px;
}

.grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: flex-start;
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
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 24px;
    color: #f0f0f0;
}

.text {
    font-size: 16px;
    color: #666;
    line-height: 1.7;
    margin-bottom: 40px;
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.info-row {
    display: flex;
    gap: 16px;
    align-items: baseline;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 16px;
}

.info-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.15em;
    color: #444;
    text-transform: uppercase;
    min-width: 100px;
}

.info-value {
    font-family: var(--font-mono);
    font-size: 14px;
    color: #a0a0a0;
}

.info-link {
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color 0.2s, border-color 0.2s;
}

.info-link:hover {
    color: #c8ff00;
    border-color: #c8ff0055;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.field-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 8px;
}

.field-input {
    width: 100%;
    background-color: #111;
    border: 1px solid #222;
    color: #f0f0f0;
    padding: 14px 16px;
    font-family: var(--font-mono);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}

.field-input:focus {
    border-color: #c8ff00;
}

.textarea {
    resize: vertical;
}

.submit-btn {
    padding: 16px 32px;
    background: #c8ff00;
    color: #0a0a0a;
    border: none;
    font-family: var(--font-mono);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    align-self: flex-start;
}

.submit-btn.sent {
    background: #1a1a1a;
    color: #c8ff00;
    border: 1px solid #c8ff0044;
}

@media (max-width: 900px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
