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
arr.value = [{
    tit: 'App link',
    href: 'http://www.baidu.com',
    date: '2022.08.13',
    type: 'Call app'
},{
    tit: 'Call app',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'Call app'
},{
    tit: 'performance',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '性能'
},{
    tit: 'userAgent',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '浏览器'
},{
    tit: 'fetch',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '请求'
},{
    tit: '1px',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '上报'
},{
    tit: '错误捕获',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '错误捕获'
},{
    tit: 'nodejs koa ssr',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'ssr'
},{
    tit: 'FP & FCP',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '性能'
},{
    tit: 'LCP',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '性能'
},{
    tit: '性能优化',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '性能'
},{
    tit: '开发 JS SDK',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'SDK'
},{
    tit: '本地缓存',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '优化'
},{
    tit: 'uuid',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '浏览器唯一识别'
},{
    tit: 'lzString',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '数据压缩'
},{
    tit: 'app缓存',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'H5优化'
},{
    tit: '图片压缩',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: 'H5优化'
},{
    tit: 'DNS优化',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '优化'
},{
    tit: '图片预加载',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '优化'
},{
    tit: 'dom监听',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '功能'
},{
    tit: 'web数据链路',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '数据'
},{
    tit: '302',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '功能'
},{
    tit: '迈过低估，光明将至',
    href: 'http://www.baidu.com',
    date: '2022.08.14',
    type: '心路'
}]

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
            a{
                text-decoration: none;
            }
        }
    }
}
</style>
