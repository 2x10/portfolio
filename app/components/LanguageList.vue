<script setup lang="ts">
    defineProps<
    {
        items: 
        {
            href: string,
            image: string,
            alt?: string
        }[]
    }>()
</script>

<template>
    <div class="lang-list"> 
        <a v-for="item in items" :href=item.href target="_blank" rel="noreferrer"> <img :src=item.image class="grow"/> </a> 
    </div>
</template>

<style scoop>
.lang-list
{
    border: 1px solid #ffffff11;
    border-left:none;
    border-right:none;
    padding:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 8px;   
}

.lang-list img 
{
    width: 40px;
    height: 40px
}
</style>