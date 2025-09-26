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
        <a v-for="item in items" :href=item.href target="_blank" rel="noreferrer"> <img :src=item.image class="language-img grow-1"/> </a> 
    </div>
</template>