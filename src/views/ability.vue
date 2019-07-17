<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'ability'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>专业技能</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row>
                    <i-col>
                      <i-row>
                        <i-col span="6">
                          <div id="htmlChart"></div>
                        </i-col>
                        <i-col span="6">
                          <div id="cssChart"></div>
                        </i-col>
                        <i-col span="6">
                          <div id="jsChart"></div>
                        </i-col>
                        <i-col span="6">
                          <div id="ajaxChart"></div>
                        </i-col>
                      </i-row>
                    </i-col>
                    <i-col>坐标系图</i-col>
                    <i-col>技术栈</i-col>
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
  name: 'Ability',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用菜单组件
  },
  data () {
    return {
      msg: 'Ability',
      htmlChart: null,
      cssChart: null,
      data: {
        html: 92,
        css: 91,
        js: 85,
        ajax: 83
      }
    }
  },
  methods: {
    /**
     * 绘制图表
     */
    drawChart () {
      var self = this
      self.htmlChart = self.$echarts.init(document.getElementById('htmlChart'))
      self.cssChart = self.$echarts.init(document.getElementById('cssChart'))
      self.jsChart = self.$echarts.init(document.getElementById('jsChart'))
      self.ajaxChart = self.$echarts.init(document.getElementById('ajaxChart'))
      self.initChart()
    },
    /**
     * 格式化数据
     */
    initChart () {
      var self = this
      // html能力
      self.htmlOption = {
        title: [
          {
            text: 'HTML',
            textAlign: 'center',
            left: '50%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.html,
            textAlign: 'center',
            left: '50%',
            top: '50%',
            textStyle: {
              fontSize: 16,
              color: '#666'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a}'
        },
        series: [
          {
            name: 'html能力',
            type: 'pie',
            radius: ['30%', '50%'],
            clockWise: false,
            center: ['50%', '50%'],
            color: ['#fafafa', '#fbd75e'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            minAngle: 30, // 最小占比
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: (100 - self.data.html)},
              {value: self.data.html}
            ]
          }
        ]
      }
      // css能力
      self.cssOption = {
        title: [
          {
            text: 'CSS',
            textAlign: 'center',
            left: '50%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.css,
            textAlign: 'center',
            left: '50%',
            top: '50%',
            textStyle: {
              fontSize: 16,
              color: '#666'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a}'
        },
        series: [
          {
            name: 'css能力',
            type: 'pie',
            radius: ['30%', '50%'],
            clockWise: false,
            center: ['50%', '50%'],
            color: ['#fafafa', '#f8a05b'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            minAngle: 30, // 最小占比
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: (100 - self.data.css)},
              {value: self.data.css}
            ]
          }
        ]
      }
      // js能力
      self.jsOption = {
        title: [
          {
            text: 'JS',
            textAlign: 'center',
            left: '50%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.js,
            textAlign: 'center',
            left: '50%',
            top: '50%',
            textStyle: {
              fontSize: 16,
              color: '#666'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a}'
        },
        series: [
          {
            name: 'js能力',
            type: 'pie',
            radius: ['30%', '50%'],
            clockWise: false,
            center: ['50%', '50%'],
            color: ['#fafafa', '#f78070'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            minAngle: 30, // 最小占比
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: (100 - self.data.js)},
              {value: self.data.js}
            ]
          }
        ]
      }
      // ajax能力
      self.ajaxOption = {
        title: [
          {
            text: 'AJAX',
            textAlign: 'center',
            left: '50%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.ajax,
            textAlign: 'center',
            left: '50%',
            top: '50%',
            textStyle: {
              fontSize: 16,
              color: '#666'
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a}'
        },
        series: [
          {
            name: 'ajax能力',
            type: 'pie',
            radius: ['30%', '50%'],
            clockWise: false,
            center: ['50%', '50%'],
            color: ['#fafafa', '#6e6eff'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            minAngle: 30, // 最小占比
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: (100 - self.data.ajax)},
              {value: self.data.ajax}
            ]
          }
        ]
      }
      self.htmlChart.setOption(self.htmlOption)
      self.cssChart.setOption(self.cssOption)
      self.jsChart.setOption(self.jsOption)
      self.ajaxChart.setOption(self.ajaxOption)
    }
  },
  mounted () {
    var self = this
    self.drawChart()
  },
  created () {
    var self = this
    self.$loadingBar.finish()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout{
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
    #htmlChart {
      width: 288px;
      height: 350px;
    }
    #cssChart {
      width: 288px;
      height: 350px;
    }
    #jsChart {
      width: 288px;
      height: 350px;
    }
    #ajaxChart {
      width: 288px;
      height: 350px;
    }
  }
</style>
