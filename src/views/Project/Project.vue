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
                    <i-col class="project-item" v-for="item in data.projectData" :key="item.index">
                      <div class="project-box">
                        <div class="project-header">
                          <div class="project-title">{{item.title}}<span class="project-label">{{item.label}}</span></div>
                          <div class="project-info">
                            <div class="project-tags">
                              <span :class="'project-tags-' + tag.value" v-for="tag in item.tags" :key="tag.index">{{tag.name}}</span>
                            </div>
                            <div class="project-time">{{item.time}}</div>
                          </div>
                        </div>
                        <div class="project-content" v-html="item.content"></div>
                      </div>
                    </i-col>
                    <i-col class="project-item project-thumb">
                      <div class="project-box">
                        <div class="project-header">
                          <div class="project-title">贝聊旗下微信小程序</div>
                          <div class="project-info">
                            <div class="project-tags">
                              <span class="project-tags-html">HTML 5</span>
                              <span class="project-tags-css">CSS 3</span>
                              <span class="project-tags-javascript">JavaScript</span>
                            </div>
                            <div class="project-time">2018/1 至 2018/9</div>
                          </div>
                        </div>
                        <div class="project-content">
                          <p>参与了「幼儿园招生帮手」和「贝聊家长圈」两个小程序的开发，均使用了 WePY 框架。</p>
                          <p>其中两个较为通用的功能——图片上传与富文本（HTML）渲染，均已封装为组件并开源。</p>
                        </div>
                      </div>
                      <div class="project-thumb-box"></div>
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
            title: '网校平台重构',
            label: '',
            tags: [
              {
                name: 'vue.js',
                value: 'vue'
              },
              {
                name: 'node.js',
                value: 'node'
              }
            ],
            time: '2019/2 至今',
            content: `<p>基于 Nuxt.js 重构网校平台，具备单页应用体验的同时，也能兼顾 SEO。实现细节包括：</p>
              <p>根据 User-Agent 调用 PC 端或移动端组件，实现设备适配。</p>
              <p>以插件形式实现兼容前后端相对路径请求的 axios。</p>
              <p>构建时把静态资源上传到阿里云 OSS，并使用独立域名访问。</p>`
          },
          {
            title: 'JRaiser & Bowljs',
            label: '(开源项目)',
            tags: [
              {
                name: 'JavaScript',
                value: 'javascript'
              },
              {
                name: 'node.js',
                value: 'node'
              }
            ],
            time: '2012/6 至今',
            content: `<p>基于 CMD 规范的模块化类库，包含加载器和一些通用性强的基础模块（DOM、AJAX、Cookie、Promise 等）、UI 组件（拖动、分页条、月历等）。此外还有配套的 CLI 工具，可用于构建代码和生成 API 文档。</p>
              <p>后来又把加载器拆分为 Bowl.js 项目，CLI 工具也拆分为 Bowljs-CLI。</p>
              <p>本类库先后应用于 56 网、美黛拉 Web 端产品和贝聊 Web 端产品。</p>`
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
            padding-bottom: 3px;
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
              .project-tags {
                float: left;
                span {
                  height: 24px;
                  line-height: 24px;
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
                .project-tags-javascript {
                  background: #ffda3f;
                  color: #333;
                }
                .project-tags-vue {
                  background: #4fc08d;
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
        }
        .project-thumb-box {
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
      .project-item.project-thumb {
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
