<script setup>
    const { t } = useI18n()
</script>

<template>
    <h2 class="center">{{t('header.contact')}}</h2>
    <p class="description center">{{t('contact.description')}}</p>
    <div class="center">
        <a href="mailto://contact@voidence.cc"><button><h3>contact@voidence.cc</h3></button></a>
        <div class="line"></div>
    </div>
    <div class="contact">
        <a href="https://github.com/2x10"><button><img src="/image/github.png"></button></a>
    </div>
</template>

<style>

.center 
{
    display: grid;
    justify-content: center;
}

.contact 
{
    text-align: center;
    position:relative;
    display: flex;
    justify-content: center; 
    align-items: center;     
    gap: 15px;         
}

.contact button
{
    cursor: pointer;
    border-radius:20px;
    border: 0px;
    height:70px;
    background-color: #00000000;
}

.contact button:hover
{
    background-color: #FFFFFF15;
    color: #3c1e98;
}


.contact img
{
    opacity: .47;
    height: 30px;
    width: 30px;
}
</style>