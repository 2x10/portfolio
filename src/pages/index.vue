<script setup>
    import { computed } from 'vue'
    const { t, locale, setLocale } = useI18n()

    const selectedLocale = computed
    ({
        get: () => locale.value,
        set: (val) => setLocale(val)
    })
</script>

<template>
    <section id="About"></section>
    <div class="top-div">
        <div class="top-div-main">
            <div class="nav-left">
                <a href="#About"><button>{{ t('header.about') }}</button></a>
                <a href="#Projects"><button>{{ t('header.projects') }}</button></a>
                <a href="#Contact"><button>{{ t('header.contact') }}</button></a>
            </div>
            <div class="nav-right">
                <select v-model="selectedLocale">
                    <option value="en">{{ t('language.english') }}</option>
                    <option value="de">{{ t('language.german') }}</option>
                </select>
            </div>

            <div class="nav-right"> 
                <button id="clockTime"></button>   
            </div>         
        </div>
    </div>
    <div class="main-div">
        <div class="main-div-content">
            <h1>2x10's Portfolio <img class="id-photo" src="/image/2x10.png"></h1>
            <p> {{t('about.description.p1')}} </p>
            <p> {{t('about.description.p2')}} </p>
            <p> {{t('about.description.p3')}} </p>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=2x10&theme=dark&layout=compact&langs_count=10&title_color=ffffff&bg-color=111111&custom_title=Most%20used%20languages">
            <p class="description">{{t('about.github')}} <a href="https://github.com/2x10" target="_blank" rel="noreferrer">GitHub</a>.</p>
            <h2>{{t('about.familiarities.header')}}</h2>
            <p class="description">{{t('about.familiarities.description')}}</p>
            <div class="lang-list"> 
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" class="language-img grow-1"/> </a> 
                <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" class="language-img grow-1"/> </a> 
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" class="language-img grow-1"/> </a> 
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" class="language-img grow-1"/> </a> 
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" class="language-img grow-1"/> </a> 
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" class="language-img grow-1"/> </a> 
                <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="Docker" class="language-img grow-1"/> </a> 
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="NUXT" class="language-img grow-1"/> </a> 
                <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php"class="language-img grow-1"/> </a> 
                <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" class="language-img grow-1"/> </a> 
                <a href="https://gamemaker.io" target="_blank" rel="noreferrer"> <img src="https://static.wikia.nocookie.net/logopedia/images/2/2b/GameMaker_Icon.svg" alt="gamemaker language" class="language-img grow-1"/> </a> 
                <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" class="language-img grow-1"/> </a> 
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" class="language-img grow-1"/> </a> 
                <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" class="language-img grow-1"/> </a> 
                <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" class="language-img grow-1"/> </a> 
                <a href="https://www.microsoft.com/microsoft-365/microsoft-office" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg" alt="Microsoft 365" class="language-img grow-1"></a>
                <a href="https://vscodium.com/" target="_blank" rel="noreferrer"> <img src="https://vscodium.com/img/codium_cnl.svg" alt="VSCodium/VSCode" class="language-img grow-1"></a>
            </div>

            <div class="big-line">
                <div></div>
                <div></div>
            </div>
            <section id="Projects"></section>
            <h2 class="center">{{t('header.projects')}}</h2>
            <p class="description center">{{t('project.description')}}</p>
            <div class="project-div">
                <div class="project-image-wrapper">
                    <img src="/image/dinosaur.png"> 
                </div>
                <div class="project-content">
                    <h2>Chrome Dinosaur Fork</h2>
                    <p>{{t('project.dinosaur.description')}}</p>
                    <div class="project-lang-wrapper">
                        <p>HTML5</p> 
                        <p>CSS3</p>
                        <p>JavaScript</p>
                    </div>
                    <div class="project-button-wrapper">
                        <a href="https://dinosaur.voidence.cc/" target="_blank" rel="noreferrer"> <button>{{t('project.button.demo')}} <img src="/image/open-new-tab.png"></button></a>
                        <a href="https://github.com/2x10/chrome-dino-cheat/" target="_blank" rel="noreferrer"> <button>{{t('project.button.src')}} <img src="/image/github.png"></button></a>
                    </div>
                </div>
            </div>
            <div class="project-div">
                <div class="project-image-wrapper">
                    <img src="/image/borzoi.png"> 
                </div>
                <div class="project-content">
                    <h2>borzoi-gallery</h2>
                    <p>{{t('project.borzoi.description')}}</p>
                    <div class="project-lang-wrapper">
                        <p>HTML5</p> 
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>jQuery</p>
                    </div>
                    <div class="project-button-wrapper">
                        <a href="https://borzoi.voidence.cc/" target="_blank" rel="noreferrer"> <button>{{t('project.button.demo')}} <img src="/image/open-new-tab.png"></button></a>
                        <a href="https://github.com/2x10/borzoi-gallery" target="_blank" rel="noreferrer"> <button>{{t('project.button.src')}} <img src="/image/github.png"></button></a>
                    </div>
                </div>
            </div>
            <div class="project-div">
                <div class="project-image-wrapper">
                    <img src="/image/honolulu.png"> 
                </div>
                <div class="project-content">
                    <h2>honolulu-elite.club</h2>
                    <p>{{t('project.honolulu.description')}}</p>
                    <div class="project-lang-wrapper">
                        <p>HTML5</p> 
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>jQuery</p>
                    </div>
                    <div class="project-button-wrapper">
                        <a href="https://honolulu.voidence.cc/" target="_blank" rel="noreferrer"> <button>{{t('project.button.demo')}} <img src="/image/open-new-tab.png"></button></a>
                        <a href="https://github.com/2x10/honolulu-elite.club/" target="_blank" rel="noreferrer"> <button>{{t('project.button.src')}} <img src="/image/github.png"></button></a>
                    </div>
                </div>
            </div>
            <div class="project-div">
                <div class="project-image-wrapper">
                    <img src="/image/lucille.png"> 
                </div>
                <div class="project-content">
                    <h2>Lucille</h2>
                    <p>{{t('project.lucille.description')}}</p>
                    <div class="project-lang-wrapper">
                        <p>GameMaker Language</p> 
                    </div>
                    <div class="project-button-wrapper">
                        <a href="https://github.com/Offhead-Games" target="_blank" rel="noreferrer"> <button>{{t('project.button.org')}} <img src="/image/github.png"></button></a>
                    </div>
                </div>
            </div>

            <div class="project-div">
                <div class="project-image-wrapper">
                    <div>
                        <p>:)</p>
                    </div>
                    <div class="noise-div"></div>
                </div>
                <div class="project-content">
                    <h2>Portfolio</h2>
                    <p>{{t('project.portfolio.description')}}</p>
                    <div class="project-lang-wrapper">
                        <p>HTML5</p> 
                        <p>CSS3</p>
                        <p>JavaScript</p>
                        <p>TypeScript</p>
                        <p>NUXT4</p>
                    </div>
                    <div class="project-button-wrapper">
                        <a href="https://dev.voidence.cc/" target="_blank" rel="noreferrer"> <button>{{t('project.button.demo')}} <img src="/image/open-new-tab.png"></button></a>
                        <a href="https://github.com/2x10/portfolio/" target="_blank" rel="noreferrer"> <button>{{t('project.button.src')}} <img src="/image/github.png"></button></a>
                    </div>
                </div>
            </div>
            
            <div class="big-line">
                <div></div>
                <div></div>
            </div>
                <h2 class="center">{{t('header.contact')}}</h2>
                <p class="description center">{{t('contact.description')}}</p>
                <div class="contact">
                    <a href="mailto://contact@voidence.cc"><button><h3>contact@voidence.cc</h3></button></a>
                    <div class="line"></div>
                    <a href="https://github.com/2x10"><button><img src="/image/github.png"></button></a>
            </div>
            <section id="Contact"></section>
        </div>
    </div>
</template>