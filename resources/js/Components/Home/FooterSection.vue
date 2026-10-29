<script setup>
import { PROFILE } from '@/constants';

const SOCIALS = [
    { label: 'GitHub', href: PROFILE.github },
    { label: 'LinkedIn', href: PROFILE.linkedin },
    { label: 'E-mail', href: `mailto:${PROFILE.email}` },
    { label: 'Currículo', href: PROFILE.resume, download: true },
];
</script>

<template>
    <footer class="site-footer">
        <div class="inner">
            <span class="logo">&lt;EF /&gt;</span>
            <p class="copyright">© 2026 Eduardo Frota — Feito com Laravel + Inertia + Vue</p>
            <div class="socials">
                <a
                    v-for="social in SOCIALS"
                    :key="social.label"
                    :href="social.href"
                    :download="social.download ? '' : undefined"
                    :target="social.download ? undefined : '_blank'"
                    rel="noopener"
                    class="social-link"
                >
                    {{ social.label }}
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    border-top: 1px solid #1a1a1a;
    padding: 32px 24px;
}

.inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
}

.logo {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 800;
    color: #c8ff00;
}

.copyright {
    font-family: var(--font-mono);
    font-size: 11px;
    color: #333;
    letter-spacing: 0.1em;
}

.socials {
    display: flex;
    gap: 24px;
}

.social-link {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #444;
    text-decoration: none;
    transition: color 0.2s;
}

.social-link:hover {
    color: #c8ff00;
}
</style>
