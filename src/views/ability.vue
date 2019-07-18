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
        ability: {
          communication: 90,
          administration: 80,
          understand: 85,
          collaboration: 86,
          development: 80,
          attitude: 87
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
          min: 0,
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
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(104, 111, 245, 0.5)',
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
      self.skillsOption = {}
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
      height: 500px;
    }
  }
</style>
