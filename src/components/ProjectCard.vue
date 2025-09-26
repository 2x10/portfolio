<script setup lang="ts">
    defineProps<{
        title: string
        description: string
        languages: string[]
        demoLink: string
        srcLink: string
        image: string
        orgView?: boolean
    }>()
</script>

<template>
    <div class="project-div">

        <div class="project-image-wrapper">
            <img :src="image"> 
        </div>

        <div class="project-content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>

            <!-- Languages -->
            <div class="project-lang-wrapper">
                  <span v-for="lang in languages">{{ lang }}</span>
            </div>

            <!-- Buttons -->
            <div class="project-button-wrapper">
                <a v-if="orgView" :href="srcLink" target="_blank" rel="noreferrer">
                    <button v-if="orgView">
                        {{ $t('project.button.org') }}
                        <img src='/image/github.png' alt="github icon">
                    </button>
                </a>
                <template v-else>
                    <a :href="demoLink" target="_blank" rel="noreferrer">
                        <button>
                            {{ $t('project.button.demo') }}
                            <img src='/image/open-new-tab.png' alt="demo icon">
                        </button>
                    </a>
                    <a :href="srcLink" target="_blank" rel="noreferrer">
                        <button>
                            {{ $t('project.button.src') }}
                            <img src='/image/github.png' alt="github icon">
                        </button>
                    </a>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/breakpoints.scss" as *;

.project-content
{
    width:100%;
    min-width:250px;
    z-index: 2;
    position:relative;

    padding:1rem 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;   
}

.project-content h2, 
.project-content p 
{
    margin: 0;
    margin-bottom: 10px; 
    line-height: 1.3;
    word-wrap: break-word; 
}

.project-div
{
    margin-bottom: 60px;
    margin-top: 60px;
    position: relative;    
    width: 100%;  
    height: 400px;

    display: flex; 
    overflow: hidden;  
    border: 1px solid white;
    border-radius: 13px;
    box-shadow: rgba(255, 255, 255, 0.247) 0px 7px 29px 0px;

    overflow-x: auto;        
    overflow-y: hidden;     

    scrollbar-width: thin;  
}

.project-image-wrapper 
{
    flex: 0 0 40%; 
    width: 40%;     
    overflow: hidden;
    
    border-right: 1px solid #FFF;
}

.project-image-wrapper img 
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
    transform-origin: left top;
    transform: scale(1.6);
    display: flex;

    -webkit-mask-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);
    mask-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);
}

.project-lang-wrapper 
{
    position:relative;
    height: 20px;

    display:flex;
    flex-wrap: wrap;
    gap: 5px; 
}

.project-lang-wrapper span 
{
    display:flex;
    align-items: center;
    height: 100%;
    font-size: 13+px;
    border: 1px solid green;
    border-radius: 7px;
    padding: 0px 10px
}

.project-button-wrapper
{
    margin-top: auto;
    display:flex;
    justify-content: flex-end;
    width:100%;
    transition: all .2s ease-in-out;
}

.project-button-wrapper button 
{
    cursor: pointer;
    margin: 15px 5px;
    padding: 10px 10px;
    background-color:#3c1e98;
    border: 0px;
    border-radius: 7px;
    float:right;
}

.project-button-wrapper button:hover
{
    background-color: rgba(89, 0, 255, 0.37);
}

.project-button-wrapper img
{
    height: 12px;
    width: 12px;
}

@media (min-width: $bp-large) {
    .project-div 
    {
        height: 270px;
    }
}
</style>