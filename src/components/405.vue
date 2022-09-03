<template>
    <div class="txt-bx">
        <h4>http 405</h4>
        &nbsp;
        <div>背景</div>
        <div>在开发sign in with apple时遇到405，即在apple后台配置了web url当做redirecturl，跳转过来时显示405，刚开始以为是设置不对，
            所以修改了nginx配置兼容405问题，其实不然
        </div>
        &nbsp;
        <div>后面通过一番查找，才发现apple是在login之后发送了post请求到后台配置的redirecturl，以此传递login后的参数。</div>
        &nbsp;
        <div>405表示请求方式不对</div>
        &nbsp;
        <div>而Apache、IIS、Nginx等绝大多数web服务器，都不允许惊天文件响应post请求，所以会返回405</div>
        &nbsp;
        <div>当然，我们也可以修改服务器配置，使其允许post请求，但本问题的根源是应该在apple后台配置redirecturl时配置的是服务端接口，当服务端接收到apple登录成功后传递的参数之后进行302重定向到web 页面url即可</div>
    </div>
</template>