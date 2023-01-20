import{_ as a,c as e,o as l,d as n}from"./app.9965651d.js";const w=JSON.parse('{"title":"加入一个事件循环","description":"","frontmatter":{},"headers":[{"level":2,"title":"Wayland 服务端事件循环","slug":"wayland-服务端事件循环","link":"#wayland-服务端事件循环","children":[]},{"level":2,"title":"Wayland 客户端事件循环","slug":"wayland-客户端事件循环","link":"#wayland-客户端事件循环","children":[]},{"level":2,"title":"小节","slug":"小节","link":"#小节","children":[]}],"relativePath":"4-wayland-display/event-loop.md","lastUpdated":1674200399000}'),s={name:"4-wayland-display/event-loop.md"},d=n(`<h1 id="加入一个事件循环" tabindex="-1">加入一个事件循环 <a class="header-anchor" href="#加入一个事件循环" aria-hidden="true">#</a></h1><p><code>libwayland</code> 为 Wayland 服务端提供了自己的事件循环实现，但维护者需要知道这是一种设计上的僭越行为。</p><h2 id="wayland-服务端事件循环" tabindex="-1">Wayland 服务端事件循环 <a class="header-anchor" href="#wayland-服务端事件循环" aria-hidden="true">#</a></h2><p>由 <code>libwayland-server</code> 创建的每一个 <code>wl_display</code> 都有一个对应的 <code>wl_event_loop</code>，你可以通过 <code>wl_display_get_event_loop</code> 来获取其引用。如果你正在写一个新的 Wayland 混成器，你很可能想把它作为唯一的事件循环。你可以用 <code>wl_event_loop_add_fd</code> 来添加一个文件描述符，用 <code>wl_event_loop_add_timer</code> 来添加一个计时器。还可以通过 <code>wl_event_loop_add_signal</code> 来处理信号，这可能是非常便捷的做法。</p><p>可以根据你的喜好配置事件循环，以监控混成器所需响应的全部事件。你可以通过调用 <code>wl_display_run</code> 来一次性处理事件和调度 Wayland 客户端。它将处理并陷入事件循环，直到通过 <code>wl_display_terminate</code> 进行终止。大多数 Wayland 混成器从一开始就考虑到 Wayland 的这种用法（而不是从 X11 移植过来）。</p><p>然而，也可以采用轮询的方式将 Wayland 显示服务纳入你自己的事件循环。<code>wl_display</code> 在内部使用事件循环来处理客户端，你可以选择自己监控 Wayland 事件循环，在必要的时候对其进行调度，或者也可以完全忽略，手动处理客户端的更新请求。如果你希望让 Wayland 事件循环自己运行，并将其视作你自己事件循环的附属品，你可以使用 <code>wl_event_loop_get_fd</code> 来过的一个可以回调的文件描述符，然后在该文件描述符发生活动时调用 <code>wl_event_loop_dispatch</code> 来处理事件。当你有数据需要写入客户端时，你也需要调用 <code>wl_display_flush_clients</code>。</p><h2 id="wayland-客户端事件循环" tabindex="-1">Wayland 客户端事件循环 <a class="header-anchor" href="#wayland-客户端事件循环" aria-hidden="true">#</a></h2><p>另一方面，<code>libwayland-client</code> 并没有自己的事件循环。然而，由于通常只有一个文件描述符，所以没有自己的事件循环更容易管理。如果你的程序期望响应唯一的 Wayland 事件，那么这个简单的循环就足够了。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">wl_display_dispatch</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">display</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* This space deliberately left blank */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>然而，如果你有一个更复杂的应用程序，你可以以任何方式建立你自己的事件循环，并通过 <code>wl_display_get_fd</code> 获得 Wayland 显示器的文件描述符。在 POLLIN 事件中调用 <code>wl_display_dispatch</code> 来处理传入的事件。要刷新输出的请求则用 <code>wl_display_flush</code>。</p><h2 id="小节" tabindex="-1">小节 <a class="header-anchor" href="#小节" aria-hidden="true">#</a></h2><p>至此，你已经拥有了所有设置 Wayland 显示器和处理事件和请求的背景知识。剩下的唯一步骤是分配对象，以便与连接的对方通讯。为此，我们使用 registry 注册。在下一章结束时，我们将拥有自己第一个可用的 Wayland 客户端。</p>`,12),o=[d];function c(p,t,i,r,_,y){return l(),e("div",null,o)}const D=a(s,[["render",c]]);export{w as __pageData,D as default};
