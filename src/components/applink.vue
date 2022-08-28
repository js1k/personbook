<template>
    <div class="txt-bx">
        <h4>deeplink</h4>
        <div>形如 http://xxx 连接形式 点击即可唤起app， 但是一般会有弹窗询问是使用浏览器打开还是使用对应app打开</div>
        &nbsp;
        <div></div>
        &nbsp;
        <h4>scheme</h4>
        &nbsp;
        <div>形如 xs://xxxx 形式的字符串，native注册在APP中，安装后手机系统会读取nativte配置文件，该形式的使用方式主要通过location.href = xs://xxxx 形式执行 或将其生成短链进行使用</div>
        &nbsp;
        &nbsp;
        <h4>applink</h4>
        &nbsp;
        <div>形如 https://www.baidu.com 形式的url链接 配置在native的配置文件中</div>
        &nbsp;
        <div style="color:red; font-weight: bold">applink 需要web端支持放置文件进行校验。 IOS 及 Android平台验证文件有所不同</div>
        &nbsp;
        <div>安卓验证： &nbsp;  需要在该url域名根服务器下放置 .well-known/assetlinks.json   &nbsp;  内容为app签名生成的内容</div>
        &nbsp;
        <div>IOS验证： &nbsp;  需要在该url域名根服务器目录下放置 apple-app-site-association文件   &nbsp;  内容为app签名生成的内容</div>
        &nbsp;

        <div>同时需要在域名根目录下放置 robots.txt 文件允许爬虫爬取校验文件  内容为  User-agent: *    Allow: /</div>
        &nbsp;
        <div>当用户安装app时会自动抓取该applink对应域名服务器下的assetlinks.json 或 apple-app-site-association 内容进行校验，校验成功则该applink生效，在该手机任何地方打开该applink都会无弹窗的唤起app</div>
    </div>
</template>
