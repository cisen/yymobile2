webpackJsonp([84,282],{8:function(n,a,s){"use strict";s(36),s(35)},12:function(n,a,s){"use strict";s(67)},35:function(n,a){},36:function(n,a){},49:function(n,a,s){"use strict";s(8),s(87)},67:function(n,a){},87:function(n,a){},251:function(n,a){},316:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(5),p=t(e),o=s(2),c=t(o),l=s(4),i=t(l),u=s(3),r=t(u),k=s(1),d=t(k),m=s(1),f=t(m),h=function(n){function a(){(0,c["default"])(this,a);var s=(0,i["default"])(this,n.apply(this,arguments));return s.state={animatedWidth:0,overflowWidth:0},s}return(0,r["default"])(a,n),a.prototype.componentDidMount=function(){this._measureText(),this._startAnimation()},a.prototype.componentDidUpdate=function(){this._measureText(),this._marqueeTimer||this._startAnimation()},a.prototype.componentWillUnmount=function(){clearTimeout(this._marqueeTimer)},a.prototype.render=function(){var n=this,a=this.props,s=a.prefixCls,t=a.className,e=a.text,o=(0,p["default"])({position:"relative",right:this.state.animatedWidth,whiteSpace:"nowrap",display:"inline-block"},this.props.style);return d["default"].createElement("div",{className:s+"-marquee-wrap "+t,style:{overflow:"hidden"},role:"marquee"},d["default"].createElement("div",{ref:function(a){return n.textRef=a},className:s+"-marquee",style:o},e," "))},a.prototype._startAnimation=function(){var n=this;this._marqueeTimer&&clearTimeout(this._marqueeTimer);var a=this.props.fps,s=1/a*1e3,t=0===this.state.animatedWidth,e=t?this.props.leading:s,p=function o(){var a=n.state.overflowWidth,t=n.state.animatedWidth+1,e=t>a;if(e){if(!n.props.loop)return;t=0}e&&n.props.trailing?n._marqueeTimer=setTimeout(function(){n.setState({animatedWidth:t}),n._marqueeTimer=setTimeout(o,s)},n.props.trailing):(n.setState({animatedWidth:t}),n._marqueeTimer=setTimeout(o,s))};0!==this.state.overflowWidth&&(this._marqueeTimer=setTimeout(p,e))},a.prototype._measureText=function(){var n=f["default"].findDOMNode(this),a=this.textRef;if(n&&a){var s=n.offsetWidth,t=a.offsetWidth,e=t-s;e!==this.state.overflowWidth&&this.setState({overflowWidth:e})}},a}(d["default"].Component);a["default"]=h,h.defaultProps={text:"",loop:!1,leading:500,trailing:800,fps:40,className:""},n.exports=a["default"]},317:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(5),p=t(e),o=s(2),c=t(o),l=s(4),i=t(l),u=s(3),r=t(u),k=s(1),d=t(k),m=s(6),f=t(m),h=s(15),g=t(h),v=s(316),y=t(v),N=function(n,a){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(s[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)a.indexOf(t[e])<0&&(s[t[e]]=n[t[e]]);return s},b=function(n){function a(s){(0,c["default"])(this,a);var t=(0,i["default"])(this,n.call(this,s));return t.onClick=function(){var n=t.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&t.setState({show:!1})},t.state={show:!0},t}return(0,r["default"])(a,n),a.prototype.render=function(){var n=this.props,a=n.mode,s=n.icon,t=n.onClick,e=n.children,o=n.className,c=n.prefixCls,l=n.marqueeProps,i=N(n,["mode","icon","onClick","children","className","prefixCls","marqueeProps"]),u={},r=null;"closable"===a?r=d["default"].createElement("div",{className:c+"-operation",onClick:this.onClick,role:"button","aria-label":"close"},d["default"].createElement(g["default"],{type:"cross",size:"md"})):("link"===a&&(r=d["default"].createElement("div",{className:c+"-operation",role:"button","aria-label":"go to detail"},d["default"].createElement(g["default"],{type:"right",size:"md"}))),u.onClick=t);var k=(0,f["default"])(c,o);return this.state.show?d["default"].createElement("div",(0,p["default"])({className:k},i,u,{role:"alert"}),s&&d["default"].createElement("div",{className:c+"-icon","aria-hidden":"true"}," ",s," "),d["default"].createElement("div",{className:c+"-content"},d["default"].createElement(y["default"],(0,p["default"])({prefixCls:c,text:e},l))),r):null},a}(d["default"].Component);a["default"]=b,b.defaultProps={prefixCls:"am-notice-bar",mode:"",icon:d["default"].createElement(g["default"],{type:"voice",size:"xxs"}),onClick:function(){}},n.exports=a["default"]},318:function(n,a,s){"use strict";s(8),s(12),s(251)},707:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"en-US":"Notice Bar","zh-CN":"\u901a\u544a\u680f"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">marqueeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 7.5px\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Remove the <span class="token keyword">default</span> icon<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xxs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Customized icon<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var a=s(1),t=(s(1),s(12),s(15)),e=n(t),p=(s(318),s(317)),o=n(p),c=(s(49),s(107)),l=n(c),i=function(){return a.createElement("div",null,a.createElement(l["default"],{size:"lg"}),a.createElement(o["default"],{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(l["default"],{size:"lg"}),a.createElement(o["default"],{mode:"link",onClick:function(){return alert("1")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),a.createElement(l["default"],{size:"lg"}),a.createElement(o["default"],{mode:"closable",icon:null},"Remove the default icon."),a.createElement(l["default"],{size:"lg"}),a.createElement(o["default"],{mode:"closable",icon:a.createElement(e["default"],{type:"check-circle-o",size:"xxs"})},"Customized icon."))};return a.createElement(i,null)}}},972:function(n,a,s){n.exports={basic:s(707)}}});