<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 0,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
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
  上海宜纯环境设备有限公司是一家主营环境设备，项目主要负责:儿童游泳中心、景观水处理、产品中心三个模块；使用响应式布局，HTML5/CSS3新特性完成界面动画及交互；               <br>
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
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              console.log(prevChar)
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }

  * {
    -webkit-transition: all .1s;
    transition: all .1s;
  }
</style>
