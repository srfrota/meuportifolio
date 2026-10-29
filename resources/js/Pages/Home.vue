<script setup>
import { Head } from '@inertiajs/vue3';
import NavBar from '@/Components/Home/NavBar.vue';
import HeroSection from '@/Components/Home/HeroSection.vue';
import AboutSection from '@/Components/Home/AboutSection.vue';
import ExperienceSection from '@/Components/Home/ExperienceSection.vue';
import SkillsSection from '@/Components/Home/SkillsSection.vue';
import EducationSection from '@/Components/Home/EducationSection.vue';
import ContactSection from '@/Components/Home/ContactSection.vue';
import FooterSection from '@/Components/Home/FooterSection.vue';
</script>

<template>
    <Head title="Eduardo Frota — Analista de Dados e Desenvolvedor">
        <meta
            name="description"
            content="Portfólio de Eduardo Frota: analista de dados e desenvolvedor full stack com quase três anos de experiência em SQL, Python, Power BI, Laravel e Vue.js."
        />
    </Head>

    <div class="page">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <FooterSection />
    </div>
</template>

<style scoped>
.page {
    min-height: 100vh;
    background-color: #0a0a0a;
    color: #f0f0f0;
}
</style>
