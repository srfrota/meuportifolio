<script setup>
import { ref } from 'vue';
import { NAV_LINKS } from '@/constants';
import { scrollToSection } from '@/Composables/scrollToSection';
import { useScrollSpy } from '@/Composables/useScrollSpy';

const { active } = useScrollSpy();
const menuOpen = ref(false);

function go(id) {
    scrollToSection(id);
    menuOpen.value = false;
}
</script>

<template>
    <nav class="site-nav">
        <div class="nav-inner">
            <span class="logo">&lt;EF /&gt;</span>

            <div class="nav-links desktop-only">
                <button
                    v-for="link in NAV_LINKS"
                    :key="link.id"
                    class="nav-link"
                    :class="{ 'is-active': active === link.id }"
                    @click="go(link.id)"
                >
                    {{ link.label }}
                </button>
                <button class="hire-btn" @click="go('contato')">Contratar</button>
            </div>

            <button class="hamburger mobile-only" aria-label="Menu" @click="menuOpen = !menuOpen">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <template v-if="menuOpen">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </template>
                    <template v-else>
                        <line x1="3" y1="7" x2="21" y2="7" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="17" x2="21" y2="17" />
                    </template>
                </svg>
            </button>
        </div>

        <div v-if="menuOpen" class="mobile-menu">
            <button
                v-for="link in NAV_LINKS"
                :key="link.id"
                class="mobile-link"
                :class="{ 'is-active': active === link.id }"
                @click="go(link.id)"
            >
                {{ link.label }}
            </button>
        </div>
    </nav>
</template>

<style scoped>
.site-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background-color: #0a0a0acc;
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #222;
}

.nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
}

.logo {
    font-family: var(--font-mono);
    font-weight: 800;
    font-size: 18px;
    color: #c8ff00;
    letter-spacing: -0.03em;
}

.nav-links {
    display: flex;
    gap: 8px;
    align-items: center;
}

.nav-link {
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px 14px;
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.05em;
    color: #a0a0a0;
    text-transform: uppercase;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #f0f0f0;
}

.nav-link.is-active {
    color: #c8ff00;
}

.nav-link.is-active:hover {
    color: #c8ff00;
}

.hire-btn {
    margin-left: 8px;
    padding: 8px 20px;
    background: #c8ff00;
    color: #0a0a0a;
    border: none;
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s;
}

.hire-btn:hover {
    opacity: 0.85;
}

.hamburger {
    background: none;
    border: none;
    cursor: pointer;
    color: #f0f0f0;
    padding: 8px;
    display: none;
}

.mobile-menu {
    border-top: 1px solid #222;
    background-color: #0a0a0a;
    padding: 16px 24px;
}

.mobile-link {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 12px 0;
    font-family: var(--font-mono);
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #a0a0a0;
    text-transform: uppercase;
    border-bottom: 1px solid #1a1a1a;
}

.mobile-link.is-active {
    color: #c8ff00;
}

@media (max-width: 900px) {
    .desktop-only {
        display: none !important;
    }
    .mobile-only {
        display: flex !important;
    }
}
</style>
