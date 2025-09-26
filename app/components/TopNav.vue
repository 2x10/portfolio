<script setup lang="ts">
    const { selectedLocale, t } = useI18nHelper()

    defineProps<{
        items: 
        {
            href: string,
            label: string
        }[]
    }>()
</script>

<template>
    <div class="top-div">
        <div class="top-div-main">
            <div class="nav-left">
                <a v-for="item in items" :href="item.href">
                    <button>{{ item.label }}</button>
                </a>
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
</template>

<style lang="scss" scoped>
@use "~/assets/css/variables.scss" as *;

.top-div 
{
    position: fixed;
    top: 0;
    z-index: 200;

    display: grid;
    border-bottom: 1px solid #000000;

    height: 55px;
    width: 100%;

    background-color: #111111;

    overflow-x: auto;        
    overflow-y: hidden;     
    scrollbar-width: thin;    
}

.top-div button 
{
    z-index: 100;
    position:relative;
    margin-left:3px;
    margin-right:3px;
    
    height: 100%;
    width: 200px;
    background-color: #111;
    border: 2px solid #ffffff56;
    border-top: none;
    border-bottom: none;
    color: white;
    cursor: pointer;
    font-size: 14px;
}


.top-div select 
{
    font-size: 14px;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif; 
    width: 200px;
    background-color: #111;
    border-radius: 0px;
    border: 2px solid #ffffff56;
    border-top: none;
    border-bottom: none;
    color: white;
    cursor: pointer;
    text-align: center;

    transition: all .2s ease-in-out;
}


.nav-left 
{
    height: 100%;
    display: flex;
    gap: 10px;
}

.nav-center 
{
    height: 100%;
    position: absolute;
}

.nav-right 
{
    height: 100%;
    display: flex;
}

.top-div button:hover
{
    background-color:#ffffff15;
}

.top-div-main
{
    box-shadow: rgba(255, 255, 255, 0.247) 0px 7px 29px 0px;
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    height: 100%;
    border: none;
    width: 100%;
    margin: left;
}

@media (min-width: $bp-large) 
{
    .top-div-main 
    {
        border: 1px #FFF solid;
        border-top: none;
        width:75%;
        margin: 0 auto;
    }
}
</style>