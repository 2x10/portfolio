<template>
    <div class="main-div">
        <div class="main-div-content">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style lang="scss" scooped>
@use "~/assets/css/variables.scss" as *;

.main-div 
{
    padding-top: 70px; 
    z-index: 1;
    position: relative;
    box-shadow: rgba(255, 255, 255, 0.247) 0px 7px 29px 0px;
    width: 100%;
    border: none;
    margin: auto;

    background-color:#111111;
}

.main-div-content
{
    margin: auto;
    width:80%;
}

@media (min-width: $bp-large) {
    .main-div 
    {
        width: 75%;
        border: 1px solid white;
        border-bottom: none;
    }
}
</style>