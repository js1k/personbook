<template>
    <div class="txt-bx">
        <h4>内嵌H5换存放方案</h4>
        &nbsp;
        <div>1、H5打包后将静态资源提供给native, native将静态资源文件放置在包内，每次请求从本地读取，省去网络请求时间，弊端：H5每次发布，native也要发布，不太现实</div>
        &nbsp;
        <div>2、H5发布之后，将在服务器上的所有资源文件的网络地址提供给native，native通过运控配置，定时或启动app时定时去运控检查是否有更新，有更新则重新拉取静态资源请求在本地，这样加快访问速度</div>
    </div>
</template>