<template>
<div class="lay-body">
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component"
                       v-if="$route.meta?.keepAlive"></component>
        </keep-alive>
        <component :is="Component"
                   v-if="!$route.meta?.keepAlive"></component>
    </router-view>
</div>
</template>

<script setup lang="ts">
    import list from './components/list.vue'
</script>

<style lang="scss" scoped>
.lay-body {
    height: 100%;
    // overflow: scroll;
    // padding-top: 60px;
}
</style>
