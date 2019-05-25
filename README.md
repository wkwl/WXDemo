微信小程序学习:
<h2>1.小程序官网：https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/getstart.html#></h2>

<h2>2.小程序开发工具下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html</h2>

<h2>3.小程序代码构成：</h2>
1).json 后缀的 JSON 配置文件
2).wxml 后缀的 WXML 模板文件
3).wxss 后缀的 WXSS 样式文件
4).js 后缀的 JS 脚本逻辑文件

app.json 是当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等.

工具配置 project.config.json
通常大家在使用一个工具的时候，都会针对各自喜好做一些个性化配置，例如界面颜色、编译配置等等

页面配置 page.json
这里的 page.json 其实用来表示 pages/logs 目录下的 logs.json 这类和小程序页面相关的配置。

如果你整个小程序的风格是蓝色调，那么你可以在 app.json 里边声明顶部颜色是蓝色即可。实际情况可能不是这样，可能你小程序里边的每个页面都有不一样的色调来区分不同功能模块，因此我们提供了 page.json，让开发者可以独立定义每个页面的一些属性，例如刚刚说的顶部颜色、是否允许下拉刷新等等。

WXSS 样式
WXSS 具有 CSS 大部分的特性，小程序在 WXSS 也做了一些扩充和修改。
a.新增了尺寸单位。在写 CSS 样式时，开发者需要考虑到手机设备的屏幕会有不同的宽度和设备像素比，采用一些技巧来换算一些像素单位。WXSS 在底层支持新的尺寸单位 rpx ，开发者可以免去换算的烦恼，

b.提供了全局的样式和局部样式。和前边 app.json, page.json 的概念相同，你可以写一个 app.wxss 作为全局样式，会作用于当前小程序的所有页面，局部页面样式 page.wxss 仅对当前页面生效。

c.此外 WXSS 仅支持部分 CSS 选择器

<h2>4.小程序可以跳转外部链接</h2>
   <p><b>需要配置业务域名并上传验证文件： 校验文件需要放在你要跳转到的网站的根目录下面才可以！！！也就是说你想跳转到别人网站网页里面 需要得到别人的同意！！</b></p>
<h3>那你想跳转到自己的网站中就需要配置域名、下载校验文件。（ 个人类型与海外类型的小程序暂不支持使用web-view）

进入到小程序后台 https://developers.weixin.qq.com   设置-开发设置 -业务域名</h3>
<image src="https://img-blog.csdn.net/20181017134927353?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTEzNjI5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"/>
<image src="https://img-blog.csdn.net/20181017135019447?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTEzNjI5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" />
