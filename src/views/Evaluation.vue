<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'evaluation'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>自我评价</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row>
                    <i-col class="content-text ">{{data.passage1.content}}</i-col>
                    <i-col class="content-text">{{data.passage2.content}}</i-col>
                    <i-col class="content-text">{{data.passage3.content}}</i-col>
                    <i-col class="content-text">{{data.passage4.content}}{{data.passage5.content}}</i-col>
                    <i-col class="content-text">{{data.passage6.content}}</i-col>
                    <i-col class="content-text">{{data.passage7.content}}{{data.passage8.content}}</i-col>
                    <i-col class="content-text">{{data.passage9.content}}</i-col>
                  </i-row>
                </i-content>
              </i-layout>
            </i-content>
          </i-row>
        </i-layout>
      </i-col>
    </i-row>
    <i-row>
      <i-col>
        <Footer></Footer>
      </i-col>
    </i-row>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue' // 引进菜单模板
import Footer from '../components/Footer.vue' // 引进底部模板
export default {
  name: 'Evaluation',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用底部组件
  },
  data () {
    return {
      data: {
        passage1: {
          msg: '我是个为人诚恳，乐观开朗的人，在工作之中，和同事相处融洽。',
          content: ''
        },
        passage2: {
          msg: '沟通是我的一个强项，我相信在工作中，沟通是十分重要的，俗话说方向对了努力才有意义，沟通不畅往往会导致工作朝着错误的方向展开。',
          content: ''
        },
        passage3: {
          msg: '我的个性相对来说算是比较有进取心和责任心的，有着较强的适应力，以及团队精神，在工作之中能做到自信但不自负，不会以自我为中心，懂得换位思考。',
          content: ''
        },
        passage4: {
          msg: '对于新事物、新技术有着较为强烈的好奇心和求知欲。',
          content: ''
        },
        passage5: {
          msg: '在工作之余，会尽可能的通过技术博客，官方文档，学习类网站等渠道进行自我的技术积累，并在Gitbook上，加以记录整理。',
          content: ''
        },
        passage6: {
          msg: '可以熟练使用npm、以及shell的常用命令，这些会帮助我提升日常开发的效率。',
          content: ''
        },
        passage7: {
          msg: '截止今日，我已经有三年前端开发，以及一年左右的前端团队管理经验了。',
          content: ''
        },
        passage8: {
          msg: '具备良好的分析解决问题能力，能独立承担任务并有一定程度的系统进度把控能力。',
          content: ''
        },
        passage9: {
          msg: '我相信技术是管理的基石，在技术达到一定程度时，管理才能做到相得益彰。',
          content: ''
        }
      }
    }
  },
  methods: {
    /**
     * 模仿书写
     * @param type 段落
     * @param millis 段落间延时毫秒数
     */
    writing (type, millis) {
      var self = this
      var index = 0
      var data = self.data['passage' + type]
      var ID = setInterval(function () {
        data.content += data.msg[index]
        index++
        if (index === data.msg.length) {
          clearInterval(ID)
          if (type < Object.keys(self.data).length) {
            setTimeout(function () {
              self.writing(type + 1, millis)
            }, millis)
          }
        }
      }, 100)
    }
  },
  created () {
    var self = this
    self.$loadingBar.finish()
    self.writing(1, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout{
    min-width: 800px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .w1200 {
    margin: 0 auto 50px;
    width: 1200px;
  }
  .content {
    min-height: 600px;
    background: #fff;
  }
  .content-center {
    padding: 24px;
    background: #fff;
    .content-text {
      font-size: 18px;
      line-height: 3em;
      text-indent: 2em
    }
  }
</style>
