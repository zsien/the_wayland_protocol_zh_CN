import{_ as a,c as e,o as t,d as r}from"./app.9965651d.js";const n="/assets/banner.251a0ad5.png",u=JSON.parse('{"title":"绪论","description":"","frontmatter":{},"headers":[{"level":2,"title":"关于翻译","slug":"关于翻译","link":"#关于翻译","children":[]},{"level":2,"title":"关于原版","slug":"关于原版","link":"#关于原版","children":[]},{"level":2,"title":"关于作者","slug":"关于作者","link":"#关于作者","children":[]}],"relativePath":"1-introduction/index.md","lastUpdated":1674211406000}'),o={name:"1-introduction/index.md"},l=r('<p><img src="'+n+'" alt="banner"></p><h1 id="绪论" tabindex="-1">绪论 <a class="header-anchor" href="#绪论" aria-hidden="true">#</a></h1><p>Wayland 是 <em>类 Unix</em> 操作系统的新一代图像显示服务。该项目由经典 Xorg 的原班人马打造，是将应用程序的图形化界面（GUI）显示到用户屏幕的最佳选择。之前使用过 X11 的读者会对 Wayland 的改进感到惊喜，而之前未接触过 Unix 图形学的新人，也会发现 Wayland 在构建 GUI 显示方面的强大、灵活之处。</p><p>这本书将会帮助您深入理解 Wayland 的概念、设计和实现，并为您提供构建构建 Wayland 客户端 和 Wayland 合成器所需的工具。随着阅读的进行，我们会建立起 Wayland 的理论架构及其设计理念。在书中，你会恍然大悟，因为 Wayland 的直观的设计特别清晰，然后被吸引着继续看下去。欢迎探索开源图形学的未来！</p><div class="info custom-block"><p class="custom-block-title">注意</p><p>这还是个草稿，1-10 章基本完善，不过会有后续更新，11 章后很多内容有待撰写。</p></div><details class="details custom-block"><summary>TODO</summary><ul><li>Expand on resource lifetimes and avoiding race conditions in chapter 2.4</li><li>Move linux-dmabuf details to the appendix, add note about wl_drm &amp; Mesa</li><li>Rewrite the introduction text</li><li>Add example code for interactive move, to demonstrate the use of serials</li><li>Use — instead of - where appropriate</li><li>Prepare PDFs and EPUBs</li></ul></details><h2 id="关于翻译" tabindex="-1">关于翻译 <a class="header-anchor" href="#关于翻译" aria-hidden="true">#</a></h2><p>译者翻译水平有限，疑问请自寻原书解答，许可同源<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>。</p><p>在线阅读 <a href="https://wayland.axionl.me" target="_blank" rel="noreferrer">wayland.axionl.me</a><br> 项目地址 <a href="https://github.com/axionl/the_wayland_protocol_zh_CN" target="_blank" rel="noreferrer">github.com/axionl/the_wayland_protocol_zh_CN</a></p><h2 id="关于原版" tabindex="-1">关于原版 <a class="header-anchor" href="#关于原版" aria-hidden="true">#</a></h2><p>在线阅读 <a href="https://wayland-book.com" target="_blank" rel="noreferrer">wayland-book.com</a><br> 项目地址 <a href="https://git.sr.ht/~sircmpwn/wayland-book" target="_blank" rel="noreferrer">git.sr.ht/~sircmpwn/wayland-book</a></p><h2 id="关于作者" tabindex="-1">关于作者 <a class="header-anchor" href="#关于作者" aria-hidden="true">#</a></h2><p>用 Drew 的密切合作者 Preston Carpenter 的话来说：</p><p>从 sway 的建造开始，Drew DeVault 进入到 Wayland 的世界。sway 是最受欢迎的平铺式窗口管理器 i3wm 在 Wayland 的克隆，从任何角度来说，包括用户、开发提交数量和影响力，sway 都是目前 Wayland 下最受欢迎的平铺式窗口管理器。随着 sway 的成功，Drew 回馈 Wayland 社区 - 开启项目 wlroots：用于构建 Wayland 合成器的高定制化、组件化模块包。现今，已有数十个不同的混成器在 wlroots 基础之上而构造，而 Drew 也成为 Wayland 领域的重要专家之一。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">http://creativecommons.org/licenses/by-sa/4.0/</a> <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',16),s=[l];function i(d,c,p,h,f,_){return t(),e("div",null,s)}const y=a(o,[["render",i]]);export{u as __pageData,y as default};
