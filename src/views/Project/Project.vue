<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'project'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>项目集</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row style="padding-bottom: 20px">
                    <i-col>
                      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                        <i-checkbox
                          :indeterminate="data.indeterminate"
                          :value="data.checkAll"
                          @click.prevent.native="handleCheckAll">全选</i-checkbox>
                      </div>
                      <i-checkbox-group v-model="data.checkAllGroup" @on-change="checkAllGroupChange">
                        <i-checkbox label="html"></i-checkbox>
                        <i-checkbox label="css"></i-checkbox>
                        <i-checkbox label="js"></i-checkbox>
                        <i-checkbox label="vue"></i-checkbox>
                        <i-checkbox label="angular"></i-checkbox>
                        <i-checkbox label="element"></i-checkbox>
                        <i-checkbox label="iview"></i-checkbox>
                        <i-checkbox label="vux"></i-checkbox>
                        <i-checkbox label="element-admin"></i-checkbox>
                        <i-checkbox label="weex"></i-checkbox>
                        <i-checkbox label="fuse"></i-checkbox>
                        <i-checkbox label="jsp"></i-checkbox>
                      </i-checkbox-group>
                    </i-col>
                  </i-row>
                  <i-row class="project-list">
                    <i-col class="project-item" :class="{thumb: item.img}" v-for="item in data.projectDataBak" :key="item.index">
                      <div class="project-box">
                        <div class="project-header">
                          <div class="project-title">{{item.title}} <span class="project-label">{{item.label}}</span></div>
                          <div class="project-info">
                            <div class="project-tags">
                              <span :class="'project-tags-' + tag.value" v-for="tag in item.tags" :key="tag.index">{{tag.name}}</span>
                            </div>
                            <div class="project-time">{{item.time}}</div>
                          </div>
                        </div>
                        <div class="project-content" v-html="item.content"></div>
                        <div class="project-link">
                          <a :href="item.link.src">{{item.link.title}}</a>
                        </div>
                      </div>
                      <div class="project-thumb" v-if="item.img">
                        <img :src="require('../../assets/img/project/' + item.img + '.png')" width="350px" :title="item.img" alt="项目展示">
                      </div>
                    </i-col>
                  </i-row>
                  <i-row v-show="data.projectDataBak.length === 0">
                    <i-col>
                      <div class="project-not-found">未匹配到相应项目</div>
                    </i-col>
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
import _ from 'lodash'
import NavBar from '../../components/NavBar.vue' // 引进菜单模板
import Footer from '../../components/Footer.vue' // 引进底部模板
export default {
  name: 'Project',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用底部组件
  },
  data () {
    return {
      data: {
        indeterminate: true,
        checkAll: false,
        checkAllGroup: [],
        projectData: [
          {
            title: '鱼猫金服PC版重构',
            label: '(开发中)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'iView',
                value: 'iview'
              }
            ],
            time: '2019/2 至今',
            img: 'ympcnew',
            content: `<p>使用iView、vue实现官网PC版的重新构建。项目共分为首页、项目、活动、个人中心几个模块。</p>
              <p>本人在项目中担任前端开发。</p>
              <p>在开发过程中，还需要注意IE兼容性的影响。</p>
              <ul>
                <li>使用iView组件实现各页面布局及特效；</li>
                <li>使用vue-baidu-map引入百度地图；</li>
                <li>在vue-router中编写公共方法进行页面置顶及加载效果；</li>
                <li>编写公共组件，进行登录状态判断及展示；</li>
                <li>使用iView组件实现各页面布局及特效；</li>
                <li>使用C3 的animation新特性实现公告滚动效果；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用 PC 访问）',
              src: 'https://www.yumao.fun/refactoring/pc/index.html#/home'
            }
          },
          {
            title: '鱼猫金服微信版官网重构',
            label: '(已上线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'Vux',
                value: 'vux'
              }
            ],
            time: '2018/9 至今',
            img: 'ymwechat',
            content: `<p>使用Vux、Vue实现官网微信版的重新构建。项目共分为首页、项目、活动、个人中心几个模块。</p>
              <p>本人在项目中担任前端开发。</p>
              <ul>
                <li>使用Vux组件实现各页面布局及特效；</li>
                <li>使用fullpage.js实现全屏滚动特效；</li>
                <li>使用Vue.js Clipboard实现一键复制；</li>
                <li>使用Scroller组件实现下拉刷新上拉加载更多；</li>
                <li>使用ifarme嵌入及jQ实现公告详情渲染；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用手机访问）',
              src: 'https://www.yumaomoney.com/refactoring/wechat/index.html#/home'
            }
          },
          {
            title: '鱼猫金服业务推广活动页面',
            label: '(已下线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              }
            ],
            time: '2019/5 至 2019/5',
            img: 'ymbenlai',
            content: `<p>使用Vue、C3实现官网节日宣传活动页面的构建。</p>
              <ul>
                <li>使用mobile-util.js适配移动端；</li>
                <li>使用Animate.css添加页面动效；</li>
                <li>使用原生js实现触发跳动逻辑；</li>
                <li>使用Axios与后台进行数据交互，渲染用户获奖情况；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用手机访问）',
              src: 'https://www.yumao.fun/activity/20190520/app/index.html#/'
            }
          },
          {
            title: '鱼猫金服大转盘活动页面',
            label: '(已下线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              }
            ],
            time: '2019/4 至 2019/4',
            img: 'ymturntable',
            content: `<p>使用Vue、C3动效实现官网节日宣传活动页面的构建。</p>
              <p>活动为大转盘。</p>
              <ul>
                <li>使用mobile-util.js适配移动端；</li>
                <li>使用swapper.js实现轮播效果；</li>
                <li>使用jQ及原生js实现大转盘(老虎机)动效及逻辑；</li>
                <li>使用Axios与后台进行数据交互，渲染用户获奖情况；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用手机访问）',
              src: 'https://www.yumao.fun/activity/20190415/app/index.html#/'
            }
          },
          {
            title: '鱼猫金服新手活动页面重构',
            label: '(已下线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              }
            ],
            time: '2019/1 至 2019/2',
            img: 'ymroad',
            content: `<p>使用Vue、C3动效实现官网节日宣传活动页面的构建。</p>
              <p>活动为大转盘。</p>
              <ul>
                <li>使用mobile-util.js适配移动端；</li>
                <li>使用Animate.css添加页面动效；</li>
                <li>使用Axios与后台进行数据交互，渲染用户获奖情况；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用手机访问）',
              src: 'https://www.yumao.fun/activity/20180824/app/index.html#/'
            }
          },
          {
            title: '鱼猫金服企业端',
            label: '(已上线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'Element',
                value: 'element'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              },
              {
                name: 'JSP',
                value: 'jsp'
              }
            ],
            time: '2018/7 至 2018/10',
            img: 'ymbusiness',
            content: `<p>使用Element UI、Vue、Jsp实现企业端项目。</p>
              <ul>
                <li>使用Element UI组件实现各页面布局及特效；</li>
                <li>使用particles.js实现粒子特效；</li>
                <li>使用script标签方式引入Vue、ElementUI，并实现项目各功能点；</li>
                <li>修改既有功能模块，实现与企业端的融合；</li>
              </ul>`,
            link: {
              title: '在线地址（需使用 PC 访问）',
              src: 'https://www.yumaomoney.com/businessindex.do'
            }
          },
          {
            title: '鱼猫金服PC版日常维护',
            label: '(已上线)',
            tags: [
              {
                name: 'HTML 5',
                value: 'html'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              },
              {
                name: 'JSP',
                value: 'jsp'
              }
            ],
            time: '2018/7 至今',
            img: 'ympc',
            content: `<p>使用html5、css3、原生js、Jsp实现既有官网项目的日常维护。</p>
              <p>在原有的项目基础之上，进行功能模块上的迭代升级，以及bug修复。</p>
              <p>对项目按功能点进行小规模重构，使得代码可维护性得以提升。</p>`,
            link: {
              title: '在线地址（需使用 PC 访问）',
              src: 'https://www.yumaomoney.com/'
            }
          },
          {
            title: '银信长远测评系统',
            label: '',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'Element',
                value: 'element'
              },
              {
                name: 'Vux',
                value: 'vux'
              }
            ],
            time: '2018/6 至 2018/7',
            img: '',
            content: `<p>此项目为后台管理人员月度评测系统，主要分为考勤评测、工作完成度评测、工作服务质量评测3大类。</p>
              <p>主要分为微信企业号及web端管理系统两个组成部分。</p>
              <p>参与项目时，项目处在需求调研阶段，本人担任项目经理与产品经理共同和客户确认需求，梳理并编写工作说明文档、需求文档。</p>
              <p>在需求确认完毕后，会对系统架构进行设计、技术选型以及出原型图。</p>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: '张家口检察院OA管理',
            label: '(内网已上线)',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'vue-element-admin',
                value: 'element-admin'
              },
              {
                name: 'Weex',
                value: 'weex'
              }
            ],
            time: '2018/2 至 2018/6',
            img: 'procuratorate',
            content: `<p>使用Element UI Admin、Vue实现张家口检察院OA管理平台。项目共分为即时通讯、办公应用、辅助工具、辅助学习、系统管理几个模块。</p>
              <p>本人在项目中担任项目经理角色，主要负责对项目进行整体把控，项目初始化及进度推进，项目难点解决方案梳理，公共方法的编写，以及即时通讯的部分子模块、办公应用的部分子模块。</p>
              <ul>
                <li>使用ifarme嵌入即时通讯模块并实现自动登录、跳转联动、样式修改等；</li>
                <li>使用vue2.0-zoom实现图片放大镜效果；</li>
                <li>使用ribbitmq实现消息提醒队列；</li>
                <li>抽离页面内容，编写template实现组件式开发；</li>
              </ul>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: '文献数字化后台管理',
            label: '',
            tags: [
              {
                name: 'Angular.js',
                value: 'angular'
              },
              {
                name: 'Fuse-angular',
                value: 'fuse'
              }
            ],
            time: '2017/12 至 2018/3',
            img: 'document',
            content: `<p>使用Fuse 、AngularJS实现文献数字化OA管理平台。</p>
              <p>项目共分为项目管理、资源管理、工作管理、系统管理、个人中心几个模块。</p>
              <p>本人在项目中担任项目经理角色，主要负责对项目进行整体把控，项目初始化及进度推进，项目难点解决方案梳理，公共方法的编写，以及个人中心、登录模块开发。</p>
              <ul>
                <li>使用Restangula服务器获取数据；</li>
                <li>查找并引入文件上传插件ng-upload编写调用demo；</li>
                <li>编写排序公共方法提供给各模块调用；</li>
                <li>查找并使用获取本机IP地址方法对登录人进行IP地址判断；</li>
                <li>查找并引入弹框插件toaster编写调用demo；</li>
                <li>进行代码审查，对代码进行优化、重构；</li>
              </ul>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: '星路起航微信小游戏后台管理',
            label: '',
            tags: [
              {
                name: 'Angular.js',
                value: 'angular'
              },
              {
                name: 'Fuse-angular',
                value: 'fuse'
              }
            ],
            time: '2017/11 至 2017/12',
            img: '',
            content: `<p>使用Fuse 、AngularJS实现微信小游戏后台管理。</p>
              <p>项目共分为用户管理、星卡管理(游戏卡片)、礼品管理、推荐选手管理、任务管理、题库管理几个模块。</p>
              <p>本人在项目中担任项目经理角色，主要负责对项目进行整体把控，以及星卡管理、礼品管理的模块开发。</p>
              <ul>
                <li>使用Restangula服务器获取数据；</li>
                <li>使用$q(Promise)对异步请求数据进行处理；</li>
                <li>调用Lodash对数据进行快速处理；</li>
                <li>调用moment.js对时间进行格式化处理；</li>
                <li>使用angular-route完成页面路由跳转；</li>
                <li>进行代码审查，对代码进行优化、重构；</li>
                <li>与客户沟通明确需求点，与测试沟通确认问题并提出解决方案；</li>
              </ul>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: '诚轩OA管理系统',
            label: '',
            tags: [
              {
                name: 'Angular.js',
                value: 'angular'
              },
              {
                name: 'Fuse-angular',
                value: 'fuse'
              }
            ],
            time: '2017/7 至 2018/2',
            img: '',
            content: `<p>使用Fuse 、AngularJS实现微信小游戏后台管理。</p>
              <p>项目共分为合同管理、客户管理、个人中心、拍品管理、关联信息管理、拍卖会管理、财务结算、统计分析几个模块。</p>
              <p>本人主要负责客户管理、拍品管理等。</p>
              <ul>
                <li>使用Restangula服务器获取数据；</li>
                <li>使用$q(Promise)对异步请求数据进行处理；</li>
                <li>调用Lodash对数据进行快速处理；</li>
                <li>调用moment.js对时间进行格式化处理；</li>
                <li>使用angular-route完成页面路由跳转；</li>
                <li>进行代码审查，对代码进行优化、重构；</li>
              </ul>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: 'Activity趋势健康',
            label: '',
            tags: [
              {
                name: 'Angular.js',
                value: 'angular'
              },
              {
                name: 'HTML 5',
                value: 'html'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              }
            ],
            time: '2017/5 至 2017/7',
            img: '',
            content: `<p>对activity进行定制开发实现满足客户要求的默认操作、录入。</p>
              <p>使用activity开放Api对部分功能进行定制化增减。</p>`,
            link: {
              title: '',
              src: ''
            }
          },
          {
            title: 'Skillee在线考试',
            label: '',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'HTML 5',
                value: 'html'
              },
              {
                name: 'CSS 3',
                value: 'css'
              },
              {
                name: 'JavaScript',
                value: 'js'
              }
            ],
            time: '2017/4 至 2017/6',
            img: '',
            content: `<p>使用h5、flexbox实现页面弹性布局。</p>
              <p>利用全局变量和事件监听API完成考试倒计时功能。</p>
              <p>利用Axios与后台进行数据交互，渲染题目、选项。</p>`,
            link: {
              title: '',
              src: ''
            }
          }
        ],
        projectDataBak: []
      }
    }
  },
  methods: {
    handleCheckAll () {
      var self = this
      if (self.data.indeterminate) {
        self.data.checkAll = false
      } else {
        self.data.checkAll = !self.data.checkAll
      }
      self.data.indeterminate = false
      if (self.data.checkAll) {
        self.data.checkAllGroup = ['html', 'css', 'js', 'vue', 'angular', 'element', 'iview', 'vux', 'element-admin', 'weex', 'fuse', 'jsp']
      } else {
        self.data.checkAllGroup = []
      }
      self.filter()
    },
    checkAllGroupChange (data) {
      var self = this
      if (data.length === 12) {
        self.data.indeterminate = false
        self.data.checkAll = true
      } else if (data.length > 0) {
        self.data.indeterminate = true
        self.data.checkAll = false
      } else {
        self.data.indeterminate = false
        self.data.checkAll = false
      }
      self.filter()
    },
    /**
     * 筛选项目
     */
    filterData (types) {
      var self = this
      self.data.projectDataBak = _.filter(self.data.projectDataBak, function (data) {
        var type = false
        _.each(data.tags, function (v) {
          if (v.value === types) {
            type = true
          }
        })
        return type
      })
    },
    filter () {
      var self = this
      self.data.projectDataBak = self.data.projectData
      _.each(self.data.checkAllGroup, function (v) {
        self.filterData(v)
      })
    }
  },
  created () {
    var self = this
    self.filter()
    self.$loadingBar.finish()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout {
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
    min-height: 530px;
    background: #fff;
  }
  .content-center {
    padding: 24px;
    background: #fff;
    .project-list {
      .project-item {
        margin-top: 30px;
        padding-top: 40px;
        border-top: 2px dashed #ccc;
        .project-box {
          float: left;
          width: 100%;
          .project-header {
            padding-bottom: 5px;
            .project-title {
              font-size: 18px;
              font-weight: 600;
              .project-label {
                font-size: .8em;
                font-weight: 400;
                color: #888;
              }
            }
            .project-info {
              margin: 5px 0;
              .project-tags {
                float: left;
                span {
                  height: 20px;
                  line-height: 20px;
                  padding: 0 6px;
                  margin-right: 5px;
                  border-radius: 3px;
                  display: inline-block;
                  vertical-align: middle;
                  font-size: .75em;
                  font-family: Lucida Grande,arial;
                  color: #fff;
                }
                .project-tags-html {
                  background: #f60;
                }
                .project-tags-css {
                  background: #f90;
                }
                .project-tags-js {
                  background: #ffda3f;
                  color: #333;
                }
                .project-tags-vue {
                  background: #4fc08d;
                }
                .project-tags-angular {
                  background: #eb5a5c;
                }
                .project-tags-element {
                  background: #409efe;
                }
                .project-tags-iview {
                  background: #2d8cf0;
                }
                .project-tags-vux {
                  background: #35495e;
                }
                .project-tags-element-admin {
                  background: #4caf50;
                }
                .project-tags-weex {
                  background: #3aabf4;
                }
                .project-tags-fuse {
                  background: #2877c1;
                }
                .project-tags-jsp {
                  background: #2952a4;
                }
                .project-tags-node {
                  background: #80bd01;
                }
              }
              .project-time {
                float: right;
              }
            }
            .project-info:after {
              display: block;
              clear: both;
              content: "";
              visibility: hidden;
              height: 0;
            }
          }
          .project-content {
            font-size: 14px;
            color: #333;
          }
          .project-link {
            font-size: 14px;
            text-align: right;
          }
        }
        .project-thumb {
          float: right;
          width: 350px;
          margin-right: -400px;
          margin-left: 50px;
        }
      }
      .project-item:first-child {
        margin-top: 0;
        padding-top: 0;
        border-top: none;
      }
      .project-item.thumb {
        padding-right: 400px;
      }
      .project-item:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
      }
    }
    .project-not-found {
      line-height: 100px;
      height: 100px;
      text-align: center;
    }
  }
</style>
<style lang="less">
  .project-content {
    li {
      list-style: disc;
      margin-left: 1.3em;
    }
  }
</style>
