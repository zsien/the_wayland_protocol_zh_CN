import{_ as e,c as a,o,d}from"./app.9965651d.js";const h=JSON.parse('{"title":"Linux dmabuf","description":"","frontmatter":{},"headers":[{"level":2,"title":"但我真的想要知道内部实现","slug":"但我真的想要知道内部实现","link":"#但我真的想要知道内部实现","children":[]},{"level":2,"title":"对于服务端","slug":"对于服务端","link":"#对于服务端","children":[]}],"relativePath":"6-surfaces/dmabuf.md","lastUpdated":1674200399000}'),l={name:"6-surfaces/dmabuf.md"},c=d('<h1 id="linux-dmabuf" tabindex="-1">Linux dmabuf <a class="header-anchor" href="#linux-dmabuf" aria-hidden="true">#</a></h1><p>大多数 Wayland 混成器在 GPU 上进行渲染，而许多 Wayland 客户端也同样在 GPU 上进行渲染。在这种情况下，使用共享内存的方法，从客户端向混成器发送缓冲区是非常低效的。 因为客户端必须将它们的数据从 GPU 读到 CPU，然后混成器必须将其从 CPU 中读回 GPU 以进行渲染。</p><p>Linux 上的 DRM (直接渲染管理器 Direct Rendering Manager) 接口（在一些 BSD 中也有实现）为我们提供了一种向 GPU 资源暴露句柄的方法。Mesa 是用户态 Linux 图形驱动的主要实现方式，它实现了一个协议，允许 EGL 用户将 GPU 缓冲区的句柄从客户端传输到混成器上进行渲染，而无需将数据复制到 GPU 上 <em>（原文此处写成 GPU，也可以理解为从 GPU 到 CPU 再到 GPU，这一二次传递过程，总的来说是省略了多余的 GPU 通信过程）</em><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>。</p><p>这个协议的内部工作原理不在本书讨论范围内，那些专注于 Mesa 或 Linux DRM 的资源更适合进一步学习。然而，我们也可以提供一个关于使用的简短总结：</p><ol><li>将 <code>eglGetPlatformDisplayEXT</code> 和 <code>EGL_PLATFORM_WAYLAND_KHR</code> 一起使用来创建一个 EGL 显示。</li><li>照常配置显示，选择一个适合自己情况的配置，将 EGL_SURFACE_TYPE 设置成 <code>EGL_WINDOW_BIT</code>。</li><li>使用 <code>wl_egl_window_create</code> 来为一个给定的 <code>wl_surface</code> 创建一个 <code>wl_egl_window</code>。</li><li>使用 <code>eglCreatePlatformWindowSurfaceEXT</code> 为 <code>wl_egl_window</code> 创建一个 <code>EGLSurface</code>。</li><li>照常使用 EGL，例如，使用 <code>eglMakeCurrent</code> 让表面的 EGL 上下文处于当前状态，使用 <code>eglSwapBuffers</code> 向混成器发送最新的缓冲区并提交表面内容。</li></ol><p>如果你之后需要改变 <code>wl_egl_window</code> 的大小，可以使用 <code>wl_egl_window_resize</code> 来实现。</p><h2 id="但我真的想要知道内部实现" tabindex="-1">但我真的想要知道内部实现 <a class="header-anchor" href="#但我真的想要知道内部实现" aria-hidden="true">#</a></h2><p>一些不使用 <code>libwayland</code> 的 Wayland 程序员抱怨说，这种方法将 Mesa 和 libwayland 捆绑在一起，诚然如此。然而，解偶也并非不能——它只是需要你自己以 linux-dmabuf 的形式做大量的实现。关于协议的细节请参考 Wayland 扩展的 XML，以及 Mesa 在 <code>src/egl/drivers/dri2/platform_wayland.c</code> 的实现（在撰写本文时的文件路径）。祝你好运！</p><h2 id="对于服务端" tabindex="-1">对于服务端 <a class="header-anchor" href="#对于服务端" aria-hidden="true">#</a></h2><p>不幸的是，混成器的细节既复杂又超出了本书的范围。不过我可以给你指出正确的方向：<code>wlroots</code> 的实现很简单<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>，应该可以让你走上正确的道路。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>感谢 quininer 老师对此处翻译细节的指正 <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>截至写作时，应该可以在 <code>types/wlr_linux_dmabuf_v1.c</code> 中找到 <a href="#fnref2" class="footnote-backref">↩︎</a></p></li></ol></section>',12),i=[c];function n(t,s,r,f,_,u){return o(),a("div",null,i)}const m=e(l,[["render",n]]);export{h as __pageData,m as default};
