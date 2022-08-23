<template>
    <div class="css-bx">
        <ul>
            <li>css 加载会不会阻塞 js 的加载？（不会）</li>
            <li>css 加载会不会阻塞 js 的执行？（会）</li>
            <li>css 加载会不会阻塞 DOM 的解析？（不会）</li>
            <li>css 加载会不会阻塞 DOM 的渲染？（会）</li>
            <li>js 加载会不会阻塞 DOM 的解析？（会）</li>
            <li>js 加载会不会阻塞 DOM 的渲染？（会）</li>
            <li>js 执行会不会阻塞 DOM 的解析？（会）</li>
            <li>js 执行会不会阻塞 DOM 的渲染？（会）</li>
        </ul>
        &nbsp;
        <div>优化核心： 提高css加载速度</div>
        &nbsp;
        <div>关于 css，js 的阻塞问题，都跟浏览器的渲染进程有关。而渲染进程又是多线程的。理清各个线程的职责及相互之间的合作关系，就能窥探其原理。</div>
        &nbsp;
        <ol>
            <li>JS 引擎线程（单线程）：负责解析 Javascript 脚本，运行代码</li>
            <li>GUI 渲染线程：负责渲染浏览器界面，解析 HTML，CSS，构建 DOM Tree，Style Tree 和 Render Tree，布局和绘制等</li>
        </ol>
        &nbsp;
        <div>注意：GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起，所以当 JS 加载和执行时，会阻塞住 DOM 的解析和渲染，导致白屏时间很长</div>
        &nbsp;
        <h3>浏览器渲染流程</h3>
        <ul>
            <li>解析 HTML 生成 DOM Tree</li>
            <li>解析 CSS 生成 Style Tree</li>
            <li>将 DOM Tree 与 Style Tree 合并在一起生成 Render Tree</li>
            <li>遍历 Render Tree 开始布局，计算每个节点的位置大小信息（Layout）</li>
            <li>绘制 Render Tree，绘制页面的像素信息（Painting），显示到屏幕上（Display）</li>
        </ul>
        &nbsp;
        <div>DOM Tree 和 Style Tree 是并行构建的，所以 CSS 加载不会阻塞 DOM 的解析</div>
        <div>由于 Render Tree 是依赖于 DOM Tree 和 Style Tree 的，因此，css 加载会阻塞 Dom 的渲染</div>
        <h4>GUI 渲染线程与 JS 引擎线程是互斥的，加载解析 css 时，JS 引擎会被挂起，所以 css 会阻塞 js 的执行</h4>
        &nbsp;&nbsp;
        <h3>回流和重绘</h3>
        <div>回流必将引起重绘，重绘不一定会引起回流</div>
        <div>回流： 当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时,浏览器重新渲染部分或全部文档的过程称为回流</div>
        <div>重绘(Repaint)：当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等）,浏览器会将新样式赋予给元素并重新绘制它,这个过程称为重绘</div>
        
        &nbsp;
        <h3>资源加载优先级</h3>
        <div>我们知道资源加载本身不存在互相阻塞的问题，但浏览器依然会按照资源默认的优先级确定加载顺序</div>
        <ol>
            <li>html 、 css 、 font 这三种类型的资源优先级最高</li>
            <li>然后 script 、 xhr 请求</li>
            <li>接着是图片、语音、视频</li>
        </ol>
        &nbsp;
        <div>然而，有些资源我们知道很重要，想优先加载；有些资源无关紧要，想延后加载，那么如何手动控制浏览器加载优先级呢？</div>
        <ul>
            <li>preload 预加载（提升优先级）：通知浏览器接下来马上就会用到的资源，并尽快开始加载资源</li>
            <li>prefetch 预获取（最低优先级）：通知浏览器这是稍后可能需要用到的东西，可以延迟加载（在带宽空闲(idle)时再加载）</li>
            <li>asnyc 异步获取（降低优先级）：资源可以异步加载，加载完即可执行（乱序执行）</li>
            <li>defer 异步获取（降低优先级）：资源可以异步加载，但需要按照资源加载顺序执行（按序执行）</li>
        </ul>
    </div>
</template>
<style lang="scss">
.css-bx{
    padding: 40px 30px 50px;
}
</style>