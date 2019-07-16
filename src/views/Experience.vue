<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'experience'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>工作经历</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-timeline class="time-content-box">
                    <i-time-line-item :color="(item.index % 2 === 0) ? '#FFAD2C' : '#50ABF8'" v-for="item in data" :key="item.index">
                      <p class="time-title" :class="{double: (item.index % 2 !== 0)}">{{item.timeShow}}</p>
                      <p class="time-content" :class="{double: (item.index % 2 !== 0)}">{{item.title}}</p>
                      <p class="time-content" :class="{double: (item.index % 2 !== 0)}">{{item.content}}</p>
                      <p class="time-content" :class="{double: (item.index % 2 !== 0)}">{{item.job}}</p>
                      <p class="time-content" :class="{double: (item.index % 2 !== 0)}" v-for="p in item.describe" :key="p.index">{{p}}</p>
                    </i-time-line-item>
                  </i-timeline>
                </i-content>
              </i-layout>
            </i-content>
          </i-row>
        </i-layout>
      </i-col>
    </i-row>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
import NavBar from '../components/NavBar.vue' // 引进菜单模板
export default {
  name: 'Experience',
  components: {
    NavBar // 使用菜单组件
  },
  data () {
    return {
      msg: 'Experience',
      data: [
        {
          'startTime': '2018-7-14 00:00:00',
          'endTime': '',
          'title': '鱼猫金服',
          'content': '供应链金融网络借贷信息中介平台',
          'job': '前端开发',
          'describe': [
            '1、根据产品指定的原型图了解项目基本需求',
            '2、进行项目分析及技术选型，搭建项目框架，进行基本的路由配置及demo编写',
            '3、利用H5相关技术、主流前端框架（主要使用Vue.js）开发网站，移动端等多平台应用',
            '4、与产品、UI进行良好沟通，快速理解各模块需求，并进行相应的模块设计与开发',
            '5、配合产品经理对web前端产品持续优化页面架构和性能，改善用户体验',
            '6、与后端合作完成整个项目和产品开发',
            '7、测试维护，修复bug,提升用户体验及页面性能',
            '8、部署上线，能够及时处理线上问题'
          ]
        },
        {
          'startTime': '2017-4-17 00:00:00',
          'endTime': '2018-7-14 00:00:00',
          'title': '毫末科技',
          'content': '技术咨询及软件开发服务',
          'job': '项目经理、前端开发',
          'describe': [
            '1、协助产品对项目需求进行梳理',
            '2、根据产品和UI设计制作规范的前端Web页面',
            '3、利用H5相关技术、主流前端框架（AngularJS、Vue.js等）开发网站，移动端等多平台应用',
            '4、与产品、UI进行良好沟通，快速理解各方需求，并进行相应的模块设计与开发',
            '5、配合产品经理对web前端产品持续优化页面架构和性能，改善用户体验',
            '6、根据用户的需求,分析并给出最优的前台技术解决方案',
            '7、与后端合作完成整个项目和产品开发',
            '8、测试维护，修复bug,提升用户体验及页面性能',
            '9、协助部署上线，能够及时处理线上问题',
            '10、整个项目过程中把控各模块开发人员进度，在开发人员遇到困难及时提供协助'
          ]
        },
        {
          'startTime': '2016-8-1 00:00:00',
          'endTime': '2017-4-17 00:00:00',
          'title': '蜜枣网',
          'content': '全渠道全行为全能力消费者数据分析',
          'job': '前端开发',
          'describe': [
            '1、根据产品和UI设计制作规范的前端Web页面',
            '2、利用H5相关技术、原生JS、jQ等第三方插件库，开发PC、移动端应用',
            '3、与产品、UI进行良好沟通，理解客户需求，使用既有模块进行实现，并进行相应的模块定制化开发',
            '4、与后端合作完成整个项目和产品开发',
            '5、测试维护，修复bug,提升用户体验及页面性能'
          ]
        }
      ]
    }
  },
  methods: {
    /**
     * 获取工作经历列表
     */
    getList () {
      var self = this
      self.$loadingBar.finish()
      console.log('请求json')
      self.initList()
    },
    /**
     * 格式化工作经历列表
     */
    initList () {
      var self = this
      self.data = _.orderBy(self.data, ['startTime'], ['desc'])
      _.each(self.data, function (v, k) {
        v.timeShow = moment(v.startTime).format('YYYY.MM') + ' - ' +
          (moment(v.endTime).format('YYYY.MM') !== 'Invalid date' ? moment(v.endTime).format('YYYY.MM') : '至今')
        v.index = k
      })
    },
    init () {
      var self = this
      self.getList()
    }
  },
  created () {
    var self = this
    self.init()
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
    background: #fff;
  }
  .content-center {
    padding: 24px;
    background: #fff;
    .time-content-box {
      margin-top: 30px;
      margin-left: 50%;
      .time-title{
        position: relative;
        top: -4px;
        color: #ffffff;
        text-align: center;
        width: 140px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        font-weight: bold;
        background: #FFAD2C;
        border-radius: 25px;
      }
      .time-title.double {
        position: relative;
        left: -175px;
        background: #50ABF8;
      }
      .time-content{
        padding-left: 5px;
        padding-top: 5px;
      }
      .time-content.double {
        position: relative;
        left: -590px;
        text-align: right;
      }
    }
  }
</style>
