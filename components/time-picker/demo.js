webpackJsonp([12,135],{837:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/time-picker/demo/basic.md",id:"components-time-picker-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>time<span class="token punctuation" >,</span> timeString<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>time<span class="token punctuation" >,</span> timeString<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){console.log(n,s)}return c["default"].createElement(e["default"],{onChange:n})}}},838:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u9650\u5236\u9009\u62e9 ",["code","20:30"]," \u5230 ",["code","23:30"]," \u8fd9\u4e2a\u65f6\u95f4\u6bb5\u3002"]],meta:{order:5,title:"\u7981\u6b62\u9009\u9879",filename:"components/time-picker/demo/disable-options.md",id:"components-time-picker-demo-disable-options"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span>start<span class="token punctuation" >,</span> end<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> start<span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> end<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    result<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>i<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> result<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledHours</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> hours <span class="token operator" >=</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  hours<span class="token punctuation" >.</span><span class="token function" >splice</span><span class="token punctuation" >(</span><span class="token number" >20</span><span class="token punctuation" >,</span> <span class="token number" >4</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >return</span> hours<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledMinutes</span><span class="token punctuation" >(</span>h<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >if</span> <span class="token punctuation" >(</span>h <span class="token operator" >===</span> <span class="token number" >20</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >31</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token keyword" >if</span> <span class="token punctuation" >(</span>h <span class="token operator" >===</span> <span class="token number" >23</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >30</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >disabledHours</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledHours<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabledMinutes</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledMinutes<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){for(var a=[],t=n;t<s;t++)a.push(t);return a}function s(){var s=n(0,60);return s.splice(20,4),s}function a(s){return 20===s?n(0,31):23===s?n(30,60):[]}return c["default"].createElement(e["default"],{disabledHours:s,disabledMinutes:a})}}},839:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u7981\u7528\u65f6\u95f4\u9009\u62e9\u3002"]],meta:{order:4,title:"\u7981\u7528",filename:"components/time-picker/demo/disabled.md",id:"components-time-picker-demo-disabled"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12:08:23<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{defaultValue:"12:08:23",disabled:!0})}}},840:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u901a\u8fc7 ",["code","hideDisabledOptions"]," \u5c06\u4e0d\u53ef\u9009\u7684\u9009\u9879\u9690\u85cf\u3002"]],meta:{order:6,title:"\u53ea\u663e\u793a\u90e8\u5206\u9009\u9879",filename:"components/time-picker/demo/hide-options.md",id:"components-time-picker-demo-hide-options"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span>start<span class="token punctuation" >,</span> end<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> start<span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> end<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    result<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>i<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> result<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledMinutes</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>value <span class="token operator" >=</span><span class="token operator" >></span> value <span class="token operator" >%</span> <span class="token number" >10</span> <span class="token operator" >!==</span> <span class="token number" >0</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledSeconds</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>value <span class="token operator" >=</span><span class="token operator" >></span> value <span class="token operator" >%</span> <span class="token number" >30</span> <span class="token operator" >!==</span> <span class="token number" >0</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >disabledMinutes</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledMinutes<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabledSeconds</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledSeconds<span class="token punctuation" >}</span></span> <span class="token attr-name" >hideDisabledOptions</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){for(var a=[],t=n;t<s;t++)a.push(t);return a}function s(){return n(0,60).filter(function(n){return n%10!==0})}function a(){return n(0,60).filter(function(n){return n%30!==0})}return c["default"].createElement(e["default"],{disabledMinutes:s,disabledSeconds:a,hideDisabledOptions:!0})}}},841:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u8f93\u5165\u6846\uff0c\u5927\u7684\u7528\u5728\u8868\u5355\u4e2d\uff0c\u4e2d\u7684\u4e3a\u9ed8\u8ba4\u3002"]],meta:{order:2,title:"\u4e09\u79cd\u5927\u5c0f",filename:"components/time-picker/demo/size.md",id:"components-time-picker-demo-size"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12:08:23<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12:08:23<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12:08:23<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{defaultValue:"12:08:23",size:"large"}),c["default"].createElement(e["default"],{defaultValue:"12:08:23"}),c["default"].createElement(e["default"],{defaultValue:"12:08:23",size:"small"}))}}},842:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","value \u548c onChange \u9700\u8981\u914d\u5408\u4f7f\u7528\u3002"]],meta:{order:1,title:"\u53d7\u63a7\u7ec4\u4ef6",filename:"components/time-picker/demo/value.md",id:"components-time-picker-demo-value"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>time<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>time<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> value<span class="token punctuation" >:</span> time <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >value</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createClass({displayName:"Test",getInitialState:function(){return{value:null}},onChange:function(n){console.log(n),this.setState({value:n})},render:function(){return c["default"].createElement(e["default"],{value:this.state.value,onChange:this.onChange})}});return c["default"].createElement(n,null)}}},843:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(63)),e=t(p),o=a(1),c=t(o),u=a(2);t(u);n.exports={content:[["p","\u4e0d\u5c55\u793a\u79d2\uff0c\u4e5f\u4e0d\u5141\u8bb8\u9009\u62e9\u3002"]],meta:{order:3,title:"\u4e0d\u5c55\u793a\u79d2",filename:"components/time-picker/demo/without-seconds.md",id:"components-time-picker-demo-without-seconds"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12:08:23<span class="token punctuation" >"</span></span> <span class="token attr-name" >format</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>HH:mm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement(e["default"],{defaultValue:"12:08:23",format:"HH:mm"})}}},1033:function(n,s,a){n.exports={basic:a(837),"disable-options":a(838),disabled:a(839),"hide-options":a(840),size:a(841),value:a(842),"without-seconds":a(843)}}});