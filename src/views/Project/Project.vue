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
                  <i-row class="project-list">
                    <i-col class="project-item" :class="{thumb: item.img}" v-for="item in data.projectData" :key="item.index">
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
                      <div class="project-thumb" v-if="item.img"></div>
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
            img: '',
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
            img: '',
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
            img: 'img',
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
            img: 'img',
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
            img: 'img',
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
          }
        ]
      }
    }
  },
  created () {
    var self = this
    self.$loadingBar.finish()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout {
    min-width: 800px;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .w1200 {
    margin: 0 auto;
    width: 1200px;
  }
  .content {
    margin-bottom: 50px;
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
          height: 350px;
          background: #eee;
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
