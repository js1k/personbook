<template>
<div class="list-ct">
    <header class="tit flx-ce-sta">
        <div>标题</div>
        <div>日期</div>
        <div>分类</div>
    </header>
    <section class="bd-ct">
        <div class="bd flx-ce-sta"
             v-for="(item, index) in arr"
             :key="index">
            <div class="flx-ce-sta">
                <a :href="item?item.href:''">{{item?item.tit:'xxx'}}</a>
            </div>
            <div class="flx-ce-sta">{{item?item.date:'xxx'}}</div>
            <div class="flx-ce-sta">{{item?item.type:'xxx'}}</div>
        </div>
    </section>
</div>
</template>

<script  lang="ts" setup>
import {ref} from 'vue'
let arr = ref([])
arr.value.length = 1000
arr.value[0] = {
    tit: 'App link',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'Call app'
}

</script>

<style lang="scss" scoped>
.list-ct {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 50px;

    .tit {
        width: 100%;
        font-weight: bold;
        height: 50px;
        border-top: 1px solid #c9c9c9;
        border-bottom: 1px solid #c9c9c9;
        position: absolute;
        left: 0;
        top: 0;

        div {
            width: 33.333%;
            padding-left: 10px;
        }
    }
}

.clm {
    width: 33.3%;
}

.bd-ct {
    width: 100%;
    height: calc(100% - 50px);
    overflow: scroll;

    .bd {
        width: 100%;

        div {
            width: 33.333%;
            height: 40px;
            padding-left: 10px;
        }
    }
}
</style>
