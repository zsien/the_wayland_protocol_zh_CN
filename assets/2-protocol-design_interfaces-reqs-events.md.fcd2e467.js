import{_ as e,c as s,o as a,d as n}from"./app.7c3264b1.js";const t="/assets/wl_surface.dececd99.png",C=JSON.parse('{"title":"接口与事件请求","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requests 请求","slug":"requests-请求","link":"#requests-请求","children":[]},{"level":2,"title":"Events 事件","slug":"events-事件","link":"#events-事件","children":[]},{"level":2,"title":"Interfaces 接口","slug":"interfaces-接口","link":"#interfaces-接口","children":[]}],"relativePath":"2-protocol-design/interfaces-reqs-events.md","lastUpdated":1675350507000}'),c={name:"2-protocol-design/interfaces-reqs-events.md"},l=n('<h1 id="接口与事件请求" tabindex="-1">接口与事件请求 <a class="header-anchor" href="#接口与事件请求" aria-hidden="true">#</a></h1><p>Wayland 协议通过发出作用于对象的请求和事件来工作。 每个对象都有自己的接口，定义了可行的请求事件以及对应的签名。 让我们来考虑一个简单的示例接口：<code>wl_surface</code></p><p><img src="'+t+`" alt="wl_surface"></p><h2 id="requests-请求" tabindex="-1">Requests 请求 <a class="header-anchor" href="#requests-请求" aria-hidden="true">#</a></h2><p>Surface 是可以在屏幕上显示的像素区域。 它是我们构建应用程序之类窗口的基本元素之一。 它有个请求名为“damage”（销毁），客户端使用这个请求表示一个 surface 的某些部分发生了变化，需要重绘。 下面是 Wire 中的一个 damage 消息的注释示例（16 进制）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">0000000A    Object ID (10)</span></span>
<span class="line"><span style="color:#A6ACCD;">00180002    Message length (24) and request opcode (2)</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000    X coordinate (int): 0</span></span>
<span class="line"><span style="color:#A6ACCD;">00000000    Y coordinate (int): 0</span></span>
<span class="line"><span style="color:#A6ACCD;">00000100    Width        (int): 256</span></span>
<span class="line"><span style="color:#A6ACCD;">00000100    Height       (int): 256</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这是 session 会话的小片段：本次 surface 提前已分配，它的 ID 为 10。 当服务端收到这条消息后，服务端会查找 ID 为 10 的对象，发现它是一个 <code>wl_surface</code> 实例。 基于此，服务端用请求的 opcode 操作码 <code>2</code> 查找请求的签名。 然后就知道了接下来有四个整型作为参数，这样服务器就能解码这条消息，dispatch 分派内部处理。</p><h2 id="events-事件" tabindex="-1">Events 事件 <a class="header-anchor" href="#events-事件" aria-hidden="true">#</a></h2><p>请求是从客户端发送到服务端，反之，服务端也可以给客户端广播消息，叫做“事件”。 例如，其中一个事件是 <code>wl_surface</code> 的 enter 事件，在 surface 被显示到指定的 output 时，服务端将发送该事件 （客户端可能会响应这一事件，比如为 HiDPI 高分屏调整缩放的比例因数）。 这样一条消息的示例如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">0000000A    Object ID (10)</span></span>
<span class="line"><span style="color:#A6ACCD;">000C0000    Message length (12) and event opcode (0)</span></span>
<span class="line"><span style="color:#A6ACCD;">00000005    Output (object ID): 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这条消息通过 ID 引用了另一对象：<code>wl_output</code>，surface 就先是在这对象上显示。 客户端收到该消息后，行为与服务端类似：查找 ID 为 10 的对象、将其与 <code>wl_surface</code> 接口关联、查找操作码 <code>0</code> 对应事件的签名。 它相应地解码其余信息（查找 ID 为 <code>5</code> 的 <code>wl_output</code>），然后分派内部处理。</p><h2 id="interfaces-接口" tabindex="-1">Interfaces 接口 <a class="header-anchor" href="#interfaces-接口" aria-hidden="true">#</a></h2><p>接口定义了请求和事件的列表清单，操作码、签名与之一一对应，双方事先约定，就用可以解码消息。 欲知后事如何，且听下回分解。</p>`,13),o=[l];function p(r,i,d,u,h,_){return a(),s("div",null,o)}const A=e(c,[["render",p]]);export{C as __pageData,A as default};
