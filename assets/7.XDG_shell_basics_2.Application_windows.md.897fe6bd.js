import{_ as s,c as o,o as a,d as l}from"./app.9965651d.js";const _=JSON.parse('{"title":"应用程序窗口","description":"","frontmatter":{},"headers":[],"relativePath":"7.XDG_shell_basics/2.Application_windows.md","lastUpdated":1673863362000}'),e={name:"7.XDG_shell_basics/2.Application_windows.md"},n=l(`<h1 id="应用程序窗口" tabindex="-1">应用程序窗口 <a class="header-anchor" href="#应用程序窗口" aria-hidden="true">#</a></h1><p>我们历尽艰难终于走到了这里，但现在是时候了：XDG toplevel 是我们最终要来显示一个应用程序的接口。XDG toplevel 接口管理有许多管理应用程序窗口的请求和事件，包括最小化和最大化状态，设置窗口标题等。我们将在以后的章节中详细讨论它的每一部分，因此先让我们来关注最基本的内容。</p><p>基于上一章的知识，我们知道可以从 <code>wl_surface</code> 获得一个 <code>xdg_surface</code>，但这只是第一步：把一个 surface 夹带进 XDG shell。下一步是把 XDG 表面变成一个 XDG toplevel——一个 “顶层” 应用程序窗口，它因最终处于 XDG shell 创建的窗口和弹出菜单的顶层而得名。要创建一个这样的窗口，我们可以使用 <code>xdg_surface</code> 接口来合理请求。</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">get_toplevel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">arg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">interface</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xdg_toplevel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>这个新的 <code>xdg_toplevel</code> 接口为我们提供了许多请求和事件，用于管理应用程序窗口的生命周期。第 10 章深入讨论了这些问题，但我知道你很想先在屏幕上得到一些东西。如果你按照这些的步骤，处理好上一章 XDG 表面的 <code>configure</code> 和 <code>ack_configure</code> 上下文，并将一个 <code>wl_buffer</code> 提交到我们的 <code>wl_surface</code>，一个应用程序窗口就会出现，并向用户展示你的缓冲区内容。下一章将提供这样的示例代码，示例还利用了一个额外的 XDG toplevel 请求，我们目前还没有涉及：</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">set_title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">arg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>不过这应该是不言自明的。还有一个类似的请求我们在示例代码中没有使用，但它可能适合你的应用：</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">set_app_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">arg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">request</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>标题通常显示在窗口装饰，任务栏等地方，而应用 ID 则用于识别你的应用程序或将你的窗口组合到一起。你可以通过将你的窗口标题设置为 &quot;Application windows - The Wayland Protocol - Firefox&quot;，以及将你的应用程序 ID 设为 &quot;firefox&quot; 的方式来使用它。</p><p>总而言之，以下步骤将会带你从零开始创建一个屏幕上的窗口：</p><ol><li>绑定到 <code>wl_compositor</code> 并使用它来创建一个 <code>wl_surface</code></li><li>绑定到 <code>xdg_wm_base</code> 并用它为你的 <code>wl_surface</code> 创建一个 <code>xdg_surface</code></li><li>通过 <code>xdg_surface.get_toplevel</code> 从 <code>xdg_surface</code> 创建一个 <code>xdg_toplevel</code></li><li>为 <code>xdg_surface</code> 创建一个监听器，并且等待 <code>configure</code> 事件的发生。</li><li>绑定到你选择的缓冲区分配机制（如 <code>wl_shm</code>），并分配一个共享缓冲区，然后将你要显示的内容渲染后传入。</li><li>使用 <code>wl_surface.attach</code> 将 <code>wl_buffer</code> 附加到 <code>wl_surface</code> 上。</li><li>使用 <code>xdg_surface.ack_configure</code> 把 <code>configure</code> 的序列信息传给它，确认你已经准备好了一个合适的帧。</li><li>发送一个 <code>wl_surface.commit</code> 请求。</li></ol><p>翻到下一页，可以看到这些步骤的具体操作。</p>`,12),p=[n];function t(c,r,D,F,d,y){return a(),o("div",null,p)}const u=s(e,[["render",t]]);export{_ as __pageData,u as default};
