webpackJsonp([1,2],{34:function(n,e,t){t(76);var r=t(20)(t(36),t(86),"data-v-685c2ce2",null);n.exports=r.exports},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(40),s=t.n(i),u=t(39),a=t.n(u),l=t(84),c=t.n(l),d=t(83),m=t.n(d),h=t(74);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:0,currentStyle:"",enableHtml:!1,fullStyle:[
          `/*
* 大家好，我是杨大培！
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 背景颜色 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* ok,开始写简历了 */
`,
`
/* 这是 Markdown 格式的，现在翻译成 HTML
 */
`     ,
`
/* 对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: .5em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '♦';
  margin-right: .5em;
  font-size: 16px;
}

.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: 2.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
.resumeEditor p:nth-of-type(1){
  font-size: 40px;
}
p:nth-of-type(2) span:nth-of-type(1){
  margin: 0 9em;
}
p:nth-of-type(2) span:nth-of-type(2){
  margin: 0 10em;
}
p:nth-of-type(2) span:nth-of-type(3){
  margin: 0 5.5em;
}
p:nth-of-type(3) span:nth-of-type(1){
  margin: 0 5em;
}
p:nth-of-type(3) span:nth-of-type(2){
  margin: 0 8em;
}
}
`],
        currentMarkdown: '',
        fullMarkdown: `杨大培
个人资料
----
姓名：杨大培                   <span>性别：女</span>     出生年月：1990.12   </br>
籍贯：河南                     <span>民族：汉</span>     学历：大专  </br>
Tel：156-3754-1672             <span>E-mail： aa838181099@gmail.com   </br>
现住地址：上海
求职意向
----
求职岗位：h5前端开发           <span>工作性质：全职    </span> </br>
期望薪资：面议                 <span>到岗时间：立即到岗</span>    </br>

技能
----
* 熟悉Div+Css布局，熟悉W3C规范，能够写出标签语义化和SEO优化代码；
* 熟悉H5和C3，并使用bootstrap、rem进行响应式页面开发；
* 熟练原生js操作DOM、BOM元素；
* 熟练使用Ajax、Json进行前后端数据交互；
* 使用artTemplate模板实现数据的渲染；
* 了解使用gulp，less技术，预编译css代码，实现代码优化；
* 了解前端框架：AngularJS；
* 了解vue和nodejs；

工作经历
----
2015/3-2017/4上海申盛网络科技有限公司软件工程师
工作描述：
* 主要根据客户需求，设计文档进行页面布局、排版；
* 按照要求实现前端页面的各种特效效果及后台数据交互；
* 与设计师、后台配合，根据需求调整、修改、优化页面；
* 优化前端性能，保证兼容性和执行效率；

项目经验
----
<h3>项目一：</h3>
2016/12-2017/1   宜纯环境 <br>
<h4>项目描述：</h4>
  上海宜纯环境设备有限公司是一家主营环境设备，项目主要负责:儿童游泳中心、景观水处理、产品中心三个模块；使用响应式布局，HTML5/CSS3新特性完成界面动画及交互； <br>
<h4>责任描述：</h4>
* 根据设计图，实现页面布局和公用模块提取；
* 基于CSS3媒体查询和流式布局搭建响应式布局，实现多终端适配结合；
* 利用CSS3的新特性制作小屏和超小屏下的菜单特效；
* 使用Slider.js和touch.js实现页面轮播和触摸滑动效果；
* 通过后台提供的接口，根据产品id获取产品的详细信息动态渲染到页面上；<br>
<h3>项目二：</h3>
2016/10-2016/11  好乐买鞋城
<h4>项目描述：</h4>
 好乐买移动端购物商城网站，项目主要负责功能模块是：首页商品展示、品牌分类、限时购买；此项目使用rem流式布局，使用HTML5/CSS3新特性完成移动端界面动画、交互；
<h4>责任描述：</h4>
* 采用rem流式布局，结合媒体查询，实现多终端适配 ；
* 使用Zerpto实现品牌分类和限时购买模块的页面懒加载 ；
* 使用Swiper.js及iScroll.js实现页面轮播和Tab栏滑动等效果 ；
* 通过Ajax实现与后台的数据对接，达到商品动态渲染用；

链接
----
* [GitHub] https://github.com/Sunshine-rookie   </br>
*个人作品1：https://sunshine-rookie.github.io/fang-WJS/  </br>
*个人作品2：https://sunshine-rookie.github.io/jingxi/  </br>
`
      }
    },created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval,i=function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);var i=(n.currentMarkdown[n.currentMarkdown.length-1],n.currentMarkdown[n.currentMarkdown.length-2]);console.log(i),"\n"===i&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()};i()})}}}},37:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(78),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=.1e5}}}},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(79),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},74:function(n,e){},75:function(n,e){},76:function(n,e){},77:function(n,e){},83:function(n,e,t){t(77);var r=t(20)(t(37),t(87),"data-v-7e72d9d4",null);n.exports=r.exports},84:function(n,e,t){t(75);var r=t(20)(t(38),t(85),"data-v-3696a194",null);n.exports=r.exports},85:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},86:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},87:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},89:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(35),o=t.n(r),i=t(34),s=t.n(i);new o.a({el:"#app",render:function(n){return n(s.a)}})}},[89]);
