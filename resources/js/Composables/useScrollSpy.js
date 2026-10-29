import { onMounted, onUnmounted, ref } from 'vue';
import { NAV_LINKS } from '@/constants';

export function useScrollSpy() {
    const active = ref('');

    function handler() {
        const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
        const scrollY = window.scrollY + 120;
        for (let i = sections.length - 1; i >= 0; i--) {
            const el = sections[i];
            if (el && el.offsetTop <= scrollY) {
                active.value = NAV_LINKS[i].id;
                return;
            }
        }
        active.value = '';
    }

    onMounted(() => window.addEventListener('scroll', handler, { passive: true }));
    onUnmounted(() => window.removeEventListener('scroll', handler));

    return { active };
}
