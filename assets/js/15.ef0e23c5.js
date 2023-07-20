(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{634:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("你可能会问，现在写作平台都这么多了，还有必要自己折腾博客么？")]),t._v(" "),e("p",[t._v("一开始我遇到这个问题，总觉得自己弄个博客，太麻烦了，也不一定坚持写下去，直接在平台上写得了。于是 CSDN、简书、知乎上开始写。")]),t._v(" "),e("p",[t._v("写着写着，我就发现他们有一些缺点。")]),t._v(" "),e("h2",{attrs:{id:"为什么需要博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要博客"}},[t._v("#")]),t._v(" 为什么需要博客")]),t._v(" "),e("p",[t._v("CSDN 上的广告太多，简书虽然广告比较少，但是一旦出现公众号或一些涉及到 ID 推广的，直接就限制只有自己可见了，知乎更严格，最开始有几篇文章放了公众号的二维码，未及时修改，直接永久禁言了。看来这些内容平台都很害怕公众号，生怕公众号引流，凡涉及公众号引流的，都会被提示违规，公众号平台目前是我非常满意的，但是没有评论功能，一天只能发一篇，而且修改文章内容受到限制，只能改 20 个字。")]),t._v(" "),e("p",[t._v("在平台上写文章，就好像在别人家的地盘上耕种，总有一种受各种约束的感觉，于是我还是决定自己搞个博客。需求就是简洁、优雅、能评论、能检索、有标签。")]),t._v(" "),e("p",[t._v("一开始我找到了用 django 开发博客系统的开源项目，就在本地部署用了下，还不错，但是如果要真正用起来，还需要购买服务器，维护起来有一定的成本，于是就放弃了动态博客，转而尝试着静态博客，先试了下 hexo，虽然也还行，但是我就是觉得不太美观，然后尝试了 VuePress，最终对 VuePress 的简约风格特别满意，目前我的博客「somenzz.github.io」使用的就是基于 VuePress 一款主题：vuepress-theme-reco。可以先瞄一下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gn3rohvl7kj31e70u07wh.jpg",alt:"首页"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gn3rpinhdrj31hi0u078t.jpg",alt:"文章"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gn3sw164enj31a00u03yz.jpg",alt:"评论"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gn3sx66eqsj30hs0zmq4m.jpg",alt:"标签"}})]),t._v(" "),e("p",[t._v("很多样式是可以自定义的，比如说这个博客：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gn3t08qtflj31cq0u040w.jpg",alt:""}})]),t._v(" "),e("p",[t._v("如果你心动了，想建一个属于自己的静态博客，那么请跟着我继续向下看吧，非常简单易上手。")]),t._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),e("p",[t._v("1、你需要会使用 Git 和 GitHub 的基本功能，比如拉取，提交，推送，创建分支，如果不会，请去这个"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),e("OutboundLink")],1),t._v("学习。")]),t._v(" "),e("p",[t._v("2、你的电脑已经安装 Node.js，还没有安装的，请去"),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("安装。")]),t._v(" "),e("h2",{attrs:{id:"直接使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接使用"}},[t._v("#")]),t._v(" 直接使用")]),t._v(" "),e("p",[t._v("主题 vuepress-theme-reco 也提供了快速生成博客的模版，但是没有配置评论、阅读量、SEO 等设置，我这里直接全部配置好，你直接从我的仓库 fork，然后 clone 代码到本地，替换一些配置文件的文本内容，还有自己的一些图片，就可以快速生成属于自己的静态博客。")]),t._v(" "),e("p",[t._v("基于这个仓库进行 "),e("a",{attrs:{href:"https://github.com/somenzz/blog-template.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/somenzz/blog-template.git"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("以下是操作步骤，非常简单。")]),t._v(" "),e("ol",[e("li",[t._v("克隆仓库到本地。")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/somenzz/blog-template.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("运行看效果，修改成自己满意的配置。")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("配置文件位于为 "),e("code",[t._v("docs/.vuepress")]),t._v("，请逐行检查，把博客名称，描述，图片位置，颜色配置等，改成自己满意的的即可。")]),t._v(" "),e("p",[t._v("评论取的 appId、appKey 见 "),e("code",[t._v("docs/.vuepress/config/theme/index.js")]),t._v(" 文件，请先去 "),e("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("valine"),e("OutboundLink")],1),t._v("，申请自己的 appId 及 appKey。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("写博客。")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" docs/blog/2021/blog.md\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生成静态文件，一般在 public 目录下，该目录可以部署到服务器，使用 nginx 驱动")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("提交到自己的 xxx.github.io 仓库。")])]),t._v(" "),e("p",[t._v("先在 github 上创建一个 xxx.github.io 仓库")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blog-template/public\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add article"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force https://github.com/xxx/xxx.github.io.git master "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以强制提交，这个仓库仅保留静态文件")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("push 之后去 xxx.github.io 仓库的设置页面，设置 githup pages 指定 master 分支的 root 路径即可。")]),t._v(" "),e("p",[t._v("看到一些人会使用同一个仓库设置两个分支，比如说 master 用于些博客，gh-pages 用于保存静态资源。")]),t._v(" "),e("p",[t._v("我反对这种做法，因为这违背了 github 分支的用途，一般 master 分支不够用的时候，我们创建 develop 分支，用于开发时，修改任何代码不会影响 master 分支，开发、测试完成，形成稳定版本，再将 develop 分支合并到 master 分支，其实 master 和 develop 就是同一个仓库的两个指针，指向不同的时间点，所谓的合并就是将 master 的指针指向 develop 的位置。")]),t._v(" "),e("p",[t._v("而本应用中 master 存放些博客的脚手架，如 md 文件，VuePress 等配置信息，gh-pages 只存放静态文件，两个仓库的文件没有任何共同之处，应该使用两个仓库，而不是两个分支。而且就算用，这两个分支也永远没有合并的可能，何况这样做相当麻烦，每次提交到 gh-pages 你都需要先切换到 gh-pages 分支，然后将 master 分支下的 "),e("code",[t._v(".git")]),t._v(" 文件夹先移走，提交完在移动回来。")]),t._v(" "),e("p",[t._v("博客生成的 public 目录，也可以再部署到 gitee pages，或自己的服务器，也可以同时部署。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[e("p",[t._v("访问自己的博客，比如 https://somenzz.github.io")])]),t._v(" "),e("li",[e("p",[t._v("如果需要提交 GitHub 后自动部署，请参考我的文章 "),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/5lDtNppd3foWGHUJ1_RrDg?scene=156&subScene=10008",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions入门教程：自动化部署静态博客"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),e("p",[t._v("静态博客部署是 0 成本，高效率，无需担心网络安全等问题，值得每一个写作者尝试，省下的精力可以专心写做，此外，你也可以申请一个个性的域名直接指向 xxx.github.io 这个网站，比如我的 https://somenzz.cn 。")]),t._v(" "),e("p",[t._v("如果觉得本文不错，欢迎关注我的公众号「Python七号」，有任何问题，都可以公众号聊天界面直接咨询哦，我会第一时间回复。")])])}),[],!1,null,null,null);s.default=n.exports}}]);