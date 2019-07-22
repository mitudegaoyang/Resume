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
                      <div class="data-title">技术能力</div>
                    </i-col>
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
                    <i-col>
                      <div class="data-title">兴趣能力</div>
                    </i-col>
                    <i-col>
                      <div id="interestChart"></div>
                    </i-col>
                    <i-col>
                      <div class="data-title">综合能力</div>
                    </i-col>
                    <i-col>
                      <div id="abilityChart"></div>
                    </i-col>
                    <i-col>
                      <div class="data-title">技术栈</div>
                    </i-col>
                    <i-col>
                      <div id="skillsChart"></div>
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
      jsChart: null,
      ajaxChart: null,
      interestChart: null,
      abilityChart: null,
      data: {
        html: 85,
        css: 88,
        js: 85,
        ajax: 80,
        interest: [
          [85, 65, 85, 'HTML5'],
          [88, 75, 88, 'CSS3'],
          [85, 86, 85, 'JS'],
          [80, 88, 80, 'AJAX'],
          [75, 70, 75, 'Angular'],
          [86, 90, 86, 'Vue'],
          [60, 60, 60, 'ES6'],
          [30, 20, 30, '持续集成'],
          [70, 40, 70, 'git'],
          [40, 45, 40, 'PS']
        ],
        interestName: ['HTML5', 'CSS3', 'JS', 'AJAX', 'Angular', 'Vue', 'ES6', '持续集成', 'git', 'PS'],
        ability: {
          communication: 90,
          administration: 80,
          understand: 85,
          collaboration: 86,
          development: 80,
          attitude: 87
        },
        skills: {
          'name': '前端工程师',
          'children': [
            {
              'name': 'html',
              'children': [
                {'name': '标签与属性', 'value': 100},
                {'name': '语义化', 'value': 100},
                {'name': '元素类型(块级、行内等)', 'value': 100},
                {'name': 'viewport', 'value': 100},
                {'name': 'web Compinents', 'value': 100}
              ]
            },
            {
              'name': 'css',
              'children': [
                {'name': '选择器', 'value': 100},
                {'name': '样式权重', 'value': 100},
                {'name': '常用样式', 'value': 100},
                {
                  'name': '布局',
                  'children': [
                    {'name': '盒子模型', 'value': 100},
                    {'name': '水平垂直居中', 'value': 100},
                    {'name': '相对、绝对、固定定位', 'value': 100},
                    {'name': 'inline-block', 'value': 100},
                    {'name': 'float', 'value': 100},
                    {'name': 'flex', 'value': 100}
                  ]
                },
                {
                  'name': '适配方案',
                  'children': [
                    {
                      'name': '等比适配',
                      'children': [
                        {'name': 'fexlble', 'value': 100},
                        {'name': 'viewport', 'value': 100}
                      ]
                    },
                    {'name': '流式布局', 'value': 100},
                    {'name': '媒体查询', 'value': 100}
                  ]
                },
                {'name': '过渡', 'value': 100},
                {'name': '动画', 'value': 100},
                {
                  'name': 'css预处理',
                  'children': [
                    {'name': 'less', 'value': 100},
                    {'name': 'sass', 'value': 100}
                  ]
                },
                {'name': '兼容性问题', 'value': 100}
              ]
            },
            {
              'name': 'js',
              'children': [
                {
                  'name': '语言',
                  'children': [
                    {'name': '变量、函数、对象', 'value': 100},
                    {'name': 'this', 'value': 100},
                    {'name': '闭包', 'value': 100},
                    {'name': 'new', 'value': 100},
                    {
                      'name': '面向对象',
                      'children': [
                        {'name': '构造函数(call、apply)', 'value': 100},
                        {'name': '原型链', 'value': 100},
                        {'name': '混合模式', 'value': 100}
                      ]
                    },
                    {'name': '单线程异步运行机理', 'value': 100}
                  ]
                },
                {
                  'name': 'api(基于浏览器)',
                  'children': [
                    {'name': 'DOM', 'value': 100},
                    {
                      'name': '事件',
                      'children': [
                        {'name': '移动端', 'value': 100},
                        {'name': 'PC端', 'value': 100}
                      ]
                    },
                    {
                      'name': 'AJAX',
                      'children': [
                        {'name': '基于XMLHttpRequest', 'value': 100},
                        {'name': 'Fetch(注意兼容性)', 'value': 100}
                      ]
                    },
                    {'name': 'canvas', 'value': 100},
                    {'name': 'websocket', 'value': 100},
                    {
                      'name': 'webgl',
                      'children': [
                        {'name': 'three.js', 'value': 100}
                      ]
                    },
                    {
                      'name': '本地存储',
                      'children': [
                        {'name': 'cookie', 'value': 100},
                        {'name': 'LocalStorage', 'value': 100}
                      ]
                    }
                  ]
                },
                {
                  'name': '编程模式',
                  'children': [
                    {'name': '函数式编程', 'value': 100},
                    {'name': 'AMD', 'value': 100},
                    {'name': 'CMD', 'value': 100},
                    {
                      'name': '流程控制',
                      'children': [
                        {'name': 'Promise', 'value': 100},
                        {'name': 'Tapable', 'value': 100}
                      ]
                    },
                    {
                      'name': '应用状态(数据控制)容器',
                      'children': [
                        {'name': 'redux', 'value': 100}
                      ]
                    },
                    {
                      'name': '其他设计模式',
                      'children': [
                        {'name': '工厂模式', 'value': 100},
                        {'name': '单例模式', 'value': 100},
                        {'name': '模块模式', 'value': 100},
                        {'name': '代理模式', 'value': 100},
                        {'name': '职责链模式', 'value': 100},
                        {'name': '命令模式', 'value': 100},
                        {'name': '模板方法模式', 'value': 100},
                        {'name': '策略模式', 'value': 100},
                        {'name': '订阅模式', 'value': 100},
                        {'name': '中介者模式', 'value': 100},
                        {'name': '适配器模式', 'value': 100},
                        {'name': '...', 'value': 100}
                      ]
                    }
                  ]
                },
                {'name': 'ES6', 'value': 100},
                {
                  'name': '框架',
                  'children': [
                    {
                      'name': '提升效率(语法糖)',
                      'children': [
                        {'name': 'jquery/zepto', 'value': 100},
                        {'name': 'lodash.js', 'value': 100},
                        {'name': 'moment.js', 'value': 100},
                        {'name': 'underscore', 'value': 100}
                      ]
                    },
                    {
                      'name': '模块加载',
                      'children': [
                        {'name': 'requireJs', 'value': 100},
                        {'name': 'webpack', 'value': 100}
                      ]
                    },
                    {
                      'name': 'UI框架',
                      'children': [
                        {'name': 'bootstrap', 'value': 100},
                        {'name': 'ElementUI', 'value': 100},
                        {'name': 'iView', 'value': 100},
                        {'name': 'ElementUI admin', 'value': 100},
                        {'name': 'Fuse', 'value': 100},
                        {'name': 'Vux', 'value': 100}
                      ]
                    },
                    {
                      'name': 'webgl(3d动画)',
                      'children': [
                        {'name': 'tree.js', 'value': 100}
                      ]
                    },
                    {
                      'name': 'M*M',
                      'children': [
                        {'name': 'react', 'value': 100},
                        {'name': 'redux', 'value': 100}
                      ]
                    },
                    {
                      'name': '前段工程化',
                      'children': [
                        {
                          'name': '依赖管理',
                          'children': [
                            {'name': 'npm', 'value': 100},
                            {'name': 'yarn', 'value': 100}
                          ]
                        },
                        {
                          'name': '流程控制',
                          'children': [
                            {'name': 'gulp', 'value': 100},
                            {'name': 'webpack', 'value': 100}
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  'name': 'nodejs',
                  'children': [
                    {'name': 'express', 'value': 100},
                    {'name': '...', 'value': 100}
                  ]
                }
              ]
            },
            {
              'name': '综合',
              'children': [
                {'name': '浏览器运行机理', 'value': 100},
                {
                  'name': '性能优化',
                  'children': [
                    {'name': '静态资源优化', 'value': 100},
                    {'name': '接口合并、首屏直接出', 'value': 100},
                    {'name': '渲染速度优化', 'value': 100}
                  ]
                },
                {
                  'name': '代码调试',
                  'children': [
                    {'name': 'chrome: dev tools/inspect', 'value': 100},
                    {'name': 'safari调试iOS', 'value': 100},
                    {'name': 'HBuilder', 'value': 100},
                    {'name': 'charles抓包', 'value': 100}
                  ]
                },
                {
                  'name': '跨域',
                  'children': [
                    {'name': 'JSONP', 'value': 100},
                    {'name': 'cors', 'value': 100}
                  ]
                },
                {'name': 'http', 'value': 100},
                {'name': '编程习惯', 'value': 100},
                {
                  'name': '混合编程',
                  'children': [
                    {'name': 'js与native通信机制', 'value': 100},
                    {'name': 'h5+', 'value': 100}
                  ]
                },
                {'name': 'react native(入门)', 'value': 100},
                {
                  'name': '持续集成',
                  'children': [
                    {'name': 'gitLab', 'value': 100},
                    {'name': 'jenkins', 'value': 100}
                  ]
                }
              ]
            },
            {
              'name': '软件',
              'children': [
                {
                  'name': 'IDE',
                  'children': [
                    {'name': 'WebStorm', 'value': 100},
                    {'name': 'sublime', 'value': 100}
                  ]
                },
                {
                  'name': '版本控制',
                  'children': [
                    {'name': 'git', 'value': 100},
                    {'name': 'svn', 'value': 100}
                  ]
                },
                {
                  'name': '切图',
                  'children': [
                    {'name': 'PS', 'value': 100}
                  ]
                },
                {
                  'name': '远程',
                  'children': [
                    {'name': 'ssh', 'value': 100},
                    {'name': 'sftp', 'value': 100}
                  ]
                }
              ]
            }
          ]
        }
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
      self.interestChart = self.$echarts.init(document.getElementById('interestChart'))
      self.abilityChart = self.$echarts.init(document.getElementById('abilityChart'))
      self.skillsChart = self.$echarts.init(document.getElementById('skillsChart'))
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
            left: '49%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.html,
            textAlign: 'center',
            left: '49%',
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
            left: '49%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.css,
            textAlign: 'center',
            left: '49%',
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
            left: '49%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.js,
            textAlign: 'center',
            left: '49%',
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
            left: '49%',
            top: '45%',
            textStyle: {
              fontSize: 14,
              color: '#666'
            }
          },
          {
            text: self.data.ajax,
            textAlign: 'center',
            left: '49%',
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
            color: ['#fafafa', '#7298fe'],
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
      // 兴趣能力
      self.interestOption = {
        xAxis: {
          name: '能力',
          max: 100,
          min: 20,
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 18
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            formatter: '{value} %'
          }
        },
        yAxis: {
          type: 'value',
          name: '兴趣',
          max: 100,
          nameTextStyle: {
            color: '#999',
            fontSize: 18
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value} %'
          }
        },
        tooltip: {
          padding: 5,
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value
            return '技术：' + value[3] + '<br>' + '兴趣：' + value[1] + '<br>' + '能力：' + value[0] + '<br>'
          }
        },
        visualMap: [
          {
            show: false,
            dimension: 3,
            categories: self.data.interestName,
            calculable: true,
            precision: 0.1,
            textGap: 30,
            textStyle: {
              color: '#ccc'
            },
            inRange: {
              color: (function () {
                var colors = ['#FBD75E', '#FCFF99', '#F77F6F', '#E05ACD', '#A064FB', '#E09B5A', '#A6FFD2', '#9CCAFF', '#8BDCE8', '#7298fe']
                return colors.concat(colors)
              })()
            }
          }
        ],
        series: [{
          data: self.data.interest,
          type: 'scatter',
          symbolSize: function (data) {
            return data[2]
          },
          label: {
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top',
              color: ['#666'],
              fontSize: '18'
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffsetY: 5,
              color: ['#6e6eff']
            }
          }
        }]
      }
      // 综合能力
      self.abilityOption = {
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {name: '沟通表达（Communication）', max: 100},
            {name: '管理能力（Administration）', max: 100},
            {name: '理解能力（Understand）', max: 100},
            {name: '协作能力（Collaboration）', max: 100},
            {name: '开发能力（Development）', max: 100},
            {name: '工作态度（Attitude）', max: 100}
          ]
        },
        series: [{
          type: 'radar',
          color: '#f78070',
          areaStyle: {
            normal: {}
          },
          data: [
            {
              value: [
                self.data.ability.communication,
                self.data.ability.administration,
                self.data.ability.understand,
                self.data.ability.collaboration,
                self.data.ability.development,
                self.data.ability.attitude
              ],
              name: '综合能力雷达图'
            }
          ]
        }]
      }
      // 技术栈
      self.skillsOption = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            data: [self.data.skills],
            top: '18%',
            bottom: '14%',
            layout: 'radial',
            symbol: 'emptyCircle',
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 750
          }
        ]
      }
      self.htmlChart.setOption(self.htmlOption)
      self.cssChart.setOption(self.cssOption)
      self.jsChart.setOption(self.jsOption)
      self.ajaxChart.setOption(self.ajaxOption)
      self.interestChart.setOption(self.interestOption)
      self.abilityChart.setOption(self.abilityOption)
      self.skillsChart.setOption(self.skillsOption)
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
    .data-title {
      font-weight: normal;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
      margin: 0 auto 10px;
      padding-bottom: 10px;
      border-bottom: 1px dashed #eee;
      span {
        float: right;
        font-size: 14px;
        font-weight: normal;
        color: #666;
      }
    }
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
    #interestChart {
      width: 1152px;
      height: 500px;
    }
    #abilityChart {
      width: 1152px;
      height: 500px;
    }
    #skillsChart {
      width: 1152px;
      height: 800px;
    }
  }
</style>
