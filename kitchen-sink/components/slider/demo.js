webpackJsonp([66,300],{16:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(89),o=s(e);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return(0,o["default"])(n)}},35:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,a){return Object.keys(a).some(function(t){return n.target===(0,v.findDOMNode)(a[t])})}function o(n,a){var t=a.min,s=a.max;return n<t||n>s}function p(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0}function l(n,a){var t=a.marks,s=a.step,e=a.min,o=Object.keys(t).map(parseFloat);if(null!==s){var p=Math.round((n-e)/s)*s+e;o.push(p)}var l=o.map(function(a){return Math.abs(n-a)});return o[l.indexOf(Math.min.apply(Math,(0,g["default"])(l)))]}function u(n){var a=n.toString(),t=0;return a.indexOf(".")>=0&&(t=a.length-a.indexOf(".")-1),t}function c(n,a){return n?a.clientY:a.pageX}function i(n,a){return n?a.touches[0].clientY:a.touches[0].pageX}function r(n,a){var t=a.getBoundingClientRect();return n?t.top+.5*t.height:t.left+.5*t.width}function d(n,a){var t=a.max,s=a.min;return n<=s?s:n>=t?t:n}function f(n,a){var t=a.step,s=l(n,a);return null===t?s:parseFloat(s.toFixed(u(t)))}function k(n){n.stopPropagation(),n.preventDefault()}Object.defineProperty(a,"__esModule",{value:!0});var m=t(16),g=s(m);a.isEventFromHandle=e,a.isValueOutOfRange=o,a.isNotTouchEvent=p,a.getClosestPoint=l,a.getPrecision=u,a.getMousePosition=c,a.getTouchPosition=i,a.getHandleCenterPosition=r,a.ensureValueInRange=d,a.ensureValuePrecision=f,a.pauseEvent=k;var v=t(1)},44:function(n,a,t){"use strict";t(341),t(340)},51:function(n,a,t){var s=t(85),e=t(33),o=t(356);n.exports=function(n,a){var t=(e.Object||{})[n]||Object[n],p={};p[n]=a(t),s(s.S+s.F*o(function(){t(1)}),"Object",p)}},66:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(5),o=s(e),p=t(1),l=s(p),u=function(n){var a=n.className,t=n.included,s=n.vertical,e=n.offset,p=n.length,u=n.style,c=s?{bottom:e+"%",height:p+"%"}:{left:e+"%",width:p+"%"},i=(0,o["default"])({visibility:t?"visible":"hidden"},u,c);return l["default"].createElement("div",{className:a,style:i})};a["default"]=u,n.exports=a["default"]},67:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function o(){}function p(n){var a,t;return t=a=function(n){function a(n){(0,k["default"])(this,a);var t=(0,h["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));t.onMouseDown=function(n){if(0===n.button){var a=t.props.vertical,s=W.getMousePosition(a,n);if(W.isEventFromHandle(n,t.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);t.dragOffset=s-e,s=e}else t.dragOffset=0;t.onStart(s),t.addDocumentMouseEvents(),W.pauseEvent(n)}},t.onTouchStart=function(n){if(!W.isNotTouchEvent(n)){var a=t.props.vertical,s=W.getTouchPosition(a,n);if(W.isEventFromHandle(n,t.handlesRefs)){var e=W.getHandleCenterPosition(a,n.target);t.dragOffset=s-e,s=e}else t.dragOffset=0;t.onStart(s),t.addDocumentTouchEvents(),W.pauseEvent(n)}},t.onMouseMove=function(n){if(!t.sliderRef)return void t.onEnd();var a=W.getMousePosition(t.props.vertical,n);t.onMove(n,a-t.dragOffset)},t.onTouchMove=function(n){if(W.isNotTouchEvent(n)||!t.sliderRef)return void t.onEnd();var a=W.getTouchPosition(t.props.vertical,n);t.onMove(n,a-t.dragOffset)},t.saveSlider=function(n){t.sliderRef=n};return t.handlesRefs={},t}return(0,_["default"])(a,n),(0,g["default"])(a,[{key:"componentWillUnmount",value:function(){(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=(0,C["default"])(document,"touchmove",this.onTouchMove),this.onTouchUpListener=(0,C["default"])(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=(0,C["default"])(document,"mousemove",this.onMouseMove),this.onMouseUpListener=(0,C["default"])(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef,a=n.getBoundingClientRect();return this.props.vertical?a.top:a.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,t=a.vertical,s=a.min,e=a.max,o=Math.abs(Math.max(n,0)/this.getSliderLength()),p=t?(1-o)*(e-s)+s:o*(e-s)+s;return p}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart(),t=this.trimAlignValue(this.calcValue(a));return t}},{key:"calcOffset",value:function(n){var a=this.props,t=a.min,s=a.max,e=(n-t)/(s-t);return 100*e}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,t=this.props,s=t.prefixCls,e=t.className,p=t.marks,l=t.dots,u=t.step,c=t.included,r=t.disabled,f=t.vertical,k=t.min,m=t.max,g=t.children,v=t.maximumTrackStyle,h=t.style,y=t.railStyle,x=t.dotStyle,_=t.activeDotStyle,O=(0,b["default"])(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),w=O.tracks,M=O.handles,j=(0,P["default"])(s,(n={},(0,d["default"])(n,s+"-with-marks",Object.keys(p).length),(0,d["default"])(n,s+"-disabled",r),(0,d["default"])(n,s+"-vertical",f),(0,d["default"])(n,e,e),n));return S["default"].createElement("div",{ref:this.saveSlider,className:j,onTouchStart:r?o:this.onTouchStart,onMouseDown:r?o:this.onMouseDown,style:h},S["default"].createElement("div",{className:s+"-rail",style:(0,i["default"])({},v,y)}),w,S["default"].createElement(T["default"],{prefixCls:s,vertical:f,marks:p,dots:l,step:u,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:k,dotStyle:x,activeDotStyle:_}),M,S["default"].createElement(D["default"],{className:s+"-mark",vertical:f,marks:p,included:c,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:m,min:k}),g)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=(0,i["default"])({},n.propTypes,{min:M["default"].number,max:M["default"].number,step:M["default"].number,marks:M["default"].object,included:M["default"].bool,className:M["default"].string,prefixCls:M["default"].string,disabled:M["default"].bool,children:M["default"].any,onBeforeChange:M["default"].func,onChange:M["default"].func,onAfterChange:M["default"].func,handle:M["default"].func,dots:M["default"].bool,vertical:M["default"].bool,style:M["default"].object,minimumTrackStyle:M["default"].object,maximumTrackStyle:M["default"].object,handleStyle:M["default"].oneOfType([M["default"].object,M["default"].arrayOf(M["default"].object)]),trackStyle:M["default"].oneOfType([M["default"].object,M["default"].arrayOf(M["default"].object)]),railStyle:M["default"].object,dotStyle:M["default"].object,activeDotStyle:M["default"].object}),a.defaultProps=(0,i["default"])({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,t=(0,u["default"])(n,["index"]);return delete t.dragging,S["default"].createElement(L["default"],(0,i["default"])({},t,{key:a}))},onBeforeChange:o,onChange:o,onAfterChange:o,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),t}Object.defineProperty(a,"__esModule",{value:!0});var l=t(11),u=e(l),c=t(5),i=e(c),r=t(8),d=e(r),f=t(2),k=e(f),m=t(7),g=e(m),v=t(4),h=e(v),y=t(139),b=e(y),x=t(3),_=e(x);a["default"]=p;var O=t(1),S=e(O),w=t(9),M=e(w),j=t(55),C=e(j),E=t(6),P=e(E),N=t(45),B=(e(N),t(142)),T=e(B),V=t(141),D=e(V),A=t(140),L=e(A),R=t(35),W=s(R);n.exports=a["default"]},86:function(n,a,t){t(346),t(88),n.exports=t(33).Array.from},87:function(n,a,t){"use strict";var s=t(343),e=t(345);n.exports=function(n,a,t){a in n?s.f(n,a,e(0,t)):n[a]=t}},88:function(n,a,t){"use strict";var s=t(344),e=t(85),o=t(93),p=t(351),l=t(350),u=t(347),c=t(87),i=t(348);e(e.S+e.F*!t(352)(function(n){Array.from(n)}),"Array",{from:function(n){var a,t,e,r,d=o(n),f="function"==typeof this?this:Array,k=arguments.length,m=k>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(d);if(g&&(m=s(m,k>2?arguments[2]:void 0,2)),void 0==h||f==Array&&l(h))for(a=u(d.length),t=new f(a);a>v;v++)c(t,v,g?m(d[v],v):d[v]);else for(r=h.call(d),t=new f;!(e=r.next()).done;v++)c(t,v,g?p(r,m,[e.value,v],!0):e.value);return t.length=v,t}})},89:function(n,a,t){n.exports={"default":t(86),__esModule:!0}},123:function(n,a,t){t(125);var s=t(33).Object;n.exports=function(n,a){return s.getOwnPropertyDescriptor(n,a)}},124:function(n,a,t){t(126),n.exports=t(33).Object.getPrototypeOf},125:function(n,a,t){var s=t(353),e=t(361).f;t(51)("getOwnPropertyDescriptor",function(){return function(n,a){return e(s(n),a)}})},126:function(n,a,t){var s=t(93),e=t(363);t(51)("getPrototypeOf",function(){return function(n){return e(s(n))}})},137:function(n,a,t){n.exports={"default":t(123),__esModule:!0}},138:function(n,a,t){n.exports={"default":t(124),__esModule:!0}},139:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(138),o=s(e),p=t(137),l=s(p);a["default"]=function u(n,a,t){null===n&&(n=Function.prototype);var s=(0,l["default"])(n,a);if(void 0===s){var e=(0,o["default"])(n);return null===e?void 0:u(e,a,t)}if("value"in s)return s.value;var p=s.get;if(void 0!==p)return p.call(t)}},140:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(5),o=s(e),p=t(11),l=s(p),u=t(2),c=s(u),i=t(7),r=s(i),d=t(4),f=s(d),k=t(3),m=s(k),g=t(1),v=s(g),h=t(9),y=s(h),b=function(n){function a(){return(0,c["default"])(this,a),(0,f["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return(0,m["default"])(a,n),(0,r["default"])(a,[{key:"render",value:function(){var n=this.props,a=n.className,t=n.vertical,s=n.offset,e=n.style,p=n.disabled,u=n.min,c=n.max,i=n.value,r=(0,l["default"])(n,["className","vertical","offset","style","disabled","min","max","value"]),d=t?{bottom:s+"%"}:{left:s+"%"},f=(0,o["default"])({},e,d),k={};return void 0!==i&&(k=(0,o["default"])({},k,{"aria-valuemin":u,"aria-valuemax":c,"aria-valuenow":i,"aria-disabled":!!p})),v["default"].createElement("div",(0,o["default"])({role:"slider"},k,r,{className:a,style:f}))}}]),a}(v["default"].Component);a["default"]=b,b.propTypes={className:y["default"].string,vertical:y["default"].bool,offset:y["default"].number,style:y["default"].object,disabled:y["default"].bool,min:y["default"].number,max:y["default"].number,value:y["default"].number},n.exports=a["default"]},141:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(5),o=s(e),p=t(26),l=s(p),u=t(8),c=s(u),i=t(1),r=s(i),d=t(6),f=s(d),k=function(n){var a=n.className,t=n.vertical,s=n.marks,e=n.included,p=n.upperBound,u=n.lowerBound,i=n.max,d=n.min,k=Object.keys(s),m=k.length,g=m>1?100/(m-1):100,v=.9*g,h=i-d,y=k.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var i,k=!e&&n===p||e&&n<=p&&n>=u,m=(0,f["default"])((i={},(0,c["default"])(i,a+"-text",!0),(0,c["default"])(i,a+"-text-active",k),i)),g={marginBottom:"-50%",bottom:(n-d)/h*100+"%"},y={width:v+"%",marginLeft:-v/2+"%",left:(n-d)/h*100+"%"},b=t?g:y,x=s[n],_="object"===("undefined"==typeof x?"undefined":(0,l["default"])(x))&&!r["default"].isValidElement(x),O=_?x.label:x,S=_?(0,o["default"])({},b,x.style):b;return r["default"].createElement("span",{className:m,style:S,key:n},O)});return r["default"].createElement("div",{className:a},y)};a["default"]=k,n.exports=a["default"]},142:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(8),o=s(e),p=t(5),l=s(p),u=t(1),c=s(u),i=t(6),r=s(i),d=t(45),f=s(d),k=function(n,a,t,s,e,o){(0,f["default"])(!t||s>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var p=Object.keys(a).map(parseFloat);if(t)for(var l=e;l<=o;l+=s)p.indexOf(l)>=0||p.push(l);return p},m=function(n){var a=n.prefixCls,t=n.vertical,s=n.marks,e=n.dots,p=n.step,u=n.included,i=n.lowerBound,d=n.upperBound,f=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=f-m,y=k(t,s,e,p,m,f).map(function(n){var s,e=Math.abs(n-m)/h*100+"%",p=!u&&n===d||u&&n<=d&&n>=i,f=t?(0,l["default"])({bottom:e},g):(0,l["default"])({left:e},g);p&&(f=(0,l["default"])({},f,v));var k=(0,r["default"])((s={},(0,o["default"])(s,a+"-dot",!0),(0,o["default"])(s,a+"-dot-active",p),s));return c["default"].createElement("span",{className:k,style:f,key:n})});return c["default"].createElement("div",{className:a+"-step"},y)};a["default"]=m,n.exports=a["default"]},250:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=t(2),o=s(e),p=t(4),l=s(p),u=t(3),c=s(u),i=t(1),r=s(i),d=t(255),f=s(d),k=function(n){function a(){return(0,o["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,c["default"])(a,n),a.prototype.render=function(){return r["default"].createElement("div",{className:this.props.prefixCls+"-wrapper"},r["default"].createElement(f["default"],this.props))},a}(r["default"].Component);a["default"]=k,k.defaultProps={prefixCls:"am-slider"},n.exports=a["default"]},255:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var o=t(5),p=e(o),l=t(2),u=e(l),c=t(7),i=e(c),r=t(4),d=e(r),f=t(3),k=e(f),m=t(1),g=e(m),v=t(9),h=e(v),y=t(45),b=(e(y),t(66)),x=e(b),_=t(67),O=e(_),S=t(35),w=s(S),M=function(n){function a(n){(0,u["default"])(this,a);var t=(0,d["default"])(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));t.onEnd=function(){t.setState({dragging:!1}),t.removeDocumentEvents(),t.props.onAfterChange(t.getValue())};var s=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:s;return t.state={value:t.trimAlignValue(e),dragging:!1},t}return(0,k["default"])(a,n),(0,i["default"])(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,t=void 0!==n.value?n.value:a,s=this.trimAlignValue(t,n);s!==a&&(this.setState({value:s}),w.isValueOutOfRange(t,n)&&this.props.onChange(s))}}},{key:"onChange",value:function(n){var a=this.props,t=!("value"in a);t&&this.setState(n);var s=n.value;a.onChange(s)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,t=this.getValue();a.onBeforeChange(t);var s=this.calcValueByPos(n);this.startValue=s,this.startPosition=n,s!==t&&this.onChange({value:s})}},{key:"onMove",value:function(n,a){w.pauseEvent(n);var t=this.state,s=this.calcValueByPos(a),e=t.value;s!==e&&this.onChange({value:s})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,p["default"])({},this.props,a),s=w.ensureValueInRange(n,t);return w.ensureValuePrecision(s,t)}},{key:"render",value:function(){var n=this,a=this.props,t=a.prefixCls,s=a.vertical,e=a.included,o=a.disabled,l=a.minimumTrackStyle,u=a.trackStyle,c=a.handleStyle,i=a.min,r=a.max,d=a.handle,f=this.state,k=f.value,m=f.dragging,v=this.calcOffset(k),h=d({className:t+"-handle",vertical:s,offset:v,value:k,dragging:m,disabled:o,min:i,max:r,style:c[0]||c,ref:function(a){return n.saveHandle(0,a)}}),y=u[0]||u,b=g["default"].createElement(x["default"],{className:t+"-track",vertical:s,included:e,offset:0,length:v,style:(0,p["default"])({},l,y)});return{tracks:b,handles:h}}}]),a}(g["default"].Component);M.propTypes={defaultValue:h["default"].number,value:h["default"].number,disabled:h["default"].bool},a["default"]=(0,O["default"])(M),n.exports=a["default"]},340:function(n,a){},341:function(n,a){},371:function(n,a,t){"use strict";t(44),t(382)},382:function(n,a){},391:function(n,a,t){"use strict";t(44),t(393)},393:function(n,a){},794:function(n,a,t){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider With Customized Color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):a(n,t))}var p=t(1),l=(t(1),t(391),t(90)),u=n(l),c=(t(1289),t(250)),i=n(c),r=(t(371),t(342)),d=n(r),f=function(n){function a(){var t,o,p;s(this,a);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return t=o=e(this,n.call.apply(n,[this].concat(u))),o.log=function(n){return function(a){console.log(n+": "+a)}},p=t,e(o,p)}return o(a,n),a.prototype.render=function(){return p.createElement("div",{className:"am-slider-example"},p.createElement(d["default"],{size:"lg"}),p.createElement(u["default"],{size:"lg"},p.createElement("p",{className:"title"},"Slider"),p.createElement(i["default"],{defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),p.createElement(d["default"],{size:"lg"}),p.createElement(u["default"],{size:"lg"},p.createElement("p",{className:"title"},"Disabled Slider"),p.createElement(i["default"],{defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),p.createElement(d["default"],{size:"lg"}),p.createElement(u["default"],{size:"lg"},p.createElement("p",{className:"title"},"Slider With Customized Color"),p.createElement(i["default"],{defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))},a}(p.Component);return p.createElement(f,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1055:function(n,a,t){n.exports={basic:t(794)}},1140:function(n,a){},1289:function(n,a,t){"use strict";t(1140)}});