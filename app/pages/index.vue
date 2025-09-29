<script setup>
const { getArray, t } = useI18nHelper()

const description = getArray('about.description')

const projects = 
[
    {
        title: "Chrome Dinosaur Fork",
        description: t('project.dinosaur.description'),
        languages: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        demoLink: "https://dinosaur.voidence.cc/",
        srcLink: "https://github.com/2x10/chrome-dino-cheat/",
        image: "/image/dinosaur.png"
    },
    {
        title: "borzoi-gallery",
        description: t('project.borzoi.description'),
        languages: ["HTML5", "CSS3", "JavaScript"],
        demoLink: "https://borzoi.voidence.cc/",
        srcLink: "https://github.com/2x10/borzoi-gallery/",
        image: "/image/borzoi.png"
    },
    {
        title: "honolulu-elite.club",
        description: t('project.honolulu.description'),
        languages: ["HTML5", "CSS3", "JavaScript", "jQuery"],
        demoLink: "https://honolulu.voidence.cc/",
        srcLink: "https://github.com/2x10/honolulu-elite.club/",
        image: "/image/honolulu.png"
    },
    {
        title: "Lucille",
        description: t('project.lucille.description'),
        languages: ["GameMaker Language"],
        demoLink: "https://github.com/Offhead-Games",
        srcLink: "https://github.com/Offhead-Games",
        image: "/image/lucille.png",
        orgView: true
    },
    {
        title: "Portfolio",
        description: t('project.portfolio.description'),
        languages: ["vue", "nuxt", "sass", "TypeScript", "Docker"],
        demoLink: "https://dev.voidence.cc",
        srcLink: "https://github.com/2x10/portfolio"
    },   
]

const navItems = 
[
    { label: t('header.about'), href: '#About' },
    { label: t('header.projects'), href: "#Projects" },
    { label: t('header.contact'), href: "#Contact" },
]

const languageList = 
[
    { href: "https://www.w3.org/html/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "HTML5" },
    { href: "https://www.w3schools.com/css/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "CSS3" },
    { href: "https://sass-lang.com/", image: "https://sass-lang.com/assets/img/logos/logo.svg", alt: "SASS"},
    { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { href: "https://www.typescriptlang.org/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { href: "https://nodejs.org", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "NodeJS" },
    { href: "https://nuxtjs.org/", image: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg", alt: "NuxtJS" },
    { href: "https://www.docker.com/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", alt: "Docker" },
    { href: "https://www.php.net", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "PHP" },
    { href: "https://www.w3schools.com/cs/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg", alt: "CSharp" },
    { href: "https://www.python.org", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python" },
    { href: "https://gamemaker.io", image: "https://static.wikia.nocookie.net/logopedia/images/2/2b/GameMaker_Icon.svg", alt: "GameMaker Language" },
    { href: "https://www.arduino.cc/", image: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", alt: "Arduino" },
    { href: "https://git-scm.com/", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git" },
    { href: "https://www.linux.org/", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "Linux" },
    { href: "https://mariadb.org/", image: "https://cdn.worldvectorlogo.com/logos/mariadb.svg", alt: "MariaDB" },
    { href: "https://vscodium.com/", image: "https://vscodium.com/img/codium_cnl.svg", alt: "VSCodium" },
]
</script>

<template>
    <section id="About"></section>
    <TopNav :items="navItems"/>

    <Content>
        <img class="id-photo" src="/image/2x10.png" alt="Profile photo">
        <h1>Arthur's Portfolio</h1> 
        <p v-for="(text) in description">
            {{ text }}
        </p>
        <img :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=2x10&theme=dark&layout=compact&langs_count=10&title_color=ffffff&bg-color=111111&custom_title=${t('about.github.header')}`">
        <p class="description">{{t('about.github.description')}} <a href="https://github.com/2x10" target="_blank" rel="noreferrer">GitHub</a>.</p>
        <h2>{{t('about.familiarities.header')}}</h2>
        <p class="description">{{t('about.familiarities.description')}}</p>
        <LanguageList :items="languageList"/>
        <div class="big-line">
            <div></div>
            <div></div>
        </div>
        
        <section id="Projects"></section>

        <h2 class="center">{{t('header.projects')}}</h2>
        <p class="description center">{{t('project.description')}}</p>
        <ProjectCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
        />

        <div class="big-line">
            <div></div>
            <div></div>
        </div>

    </Content>
    <section id="Contact"></section>
</template>

<style lang="scss" scooped>
@use "~/assets/css/variables.scss" as *;
.id-photo
{
    top: 0;
    opacity: 0;
    width: 0;
    height: auto;
    float: right;

    border: 1px solid white;
    border-radius: 9999px;
}

@media (min-width: $bp-small) 
{
    .id-photo
    {
       width: 8rem;
       opacity: 1;
    }
}

@media (min-width: $bp-medium) 
{
    .id-photo
    {
        width: 15rem;
        opacity: 1
    }
}

@media (min-width: $bp-large) 
{
    .id-photo
    {
        width: 21rem;
        opacity: 1
    }
}

</style>