<template>
  <div>
    <i-header style="z-index: 1000">
      <i-menu mode="horizontal" :active-name="activeName">
        <div class="layout-logo">
          <img src="../assets/img/logo.png" title="高天阳个人官网" alt="个人官网" style="height: 80px">
        </div>
        <div class="layout-logo" v-if="throttleType">
          <div class="throttle-logo-bg" :style="{backgroundPosition: throttlePosition}" :title="throttleName"></div>
        </div>
        <div class="layout-logo throttle-logo-img" v-if="throttleType">
          <img :src="require('../assets/img/solarTerm/' + throttleTitle + '.png')" :title="throttleName" alt="节气小标">
        </div>
        <div class="layout-nav">
          <i-menu-item name="home" to="/home">
            <i-icon type="ios-home" size="24"></i-icon>
            自我简介
          </i-menu-item>
          <i-menu-item name="ability" to="/ability">
            <i-icon type="ios-stats" size="24"></i-icon>
            专业技能
          </i-menu-item>
          <i-menu-item name="experience" to="/experience">
            <i-icon type="ios-briefcase" size="24"></i-icon>
            工作经历
          </i-menu-item>
          <i-submenu name="project">
            <template slot="title">
              <i-icon type="logo-codepen" size="24"></i-icon>
              项目集
            </template>
            <i-menu-item name="projectA" to="/project/projectA">项目A</i-menu-item>
            <i-menu-item name="projectB" to="/project/projectB">项目B</i-menu-item>
            <i-menu-item name="projectC" to="/project/projectC">项目C</i-menu-item>
            <i-menu-item name="projectD" to="/project/projectD">项目D</i-menu-item>
            <i-menu-item name="projectE" to="/project/projectE">项目E</i-menu-item>
            <i-menu-item name="projectF" to="/project/projectF">项目F</i-menu-item>
            <i-menu-item name="projectG" to="/project/projectG">项目G</i-menu-item>
          </i-submenu>
          <i-menu-item name="education" to="/education">
            <i-icon type="ios-school" size="24"></i-icon>
            教育经历
          </i-menu-item>
          <i-menu-item name="evaluation" to="/evaluation">
            <i-icon type="ios-text" size="24"></i-icon>
            自我评价
          </i-menu-item>
        </div>
      </i-menu>
    </i-header>
    <div class="headerBox"></div>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'lodash'
export default {
  name: 'NavBar', // 模板名称
  components: {},
  data () {
    return {
      showLunarCalendar: true,
      throttleType: false,
      throttleList: [
        {name: '立春', type: true, day: '', position: {x: '-23', y: '-11'}, title: 'BeginningOfSpring', coefficient: 3.87, str: '-2-', leap: -1, exception: []},
        {name: '雨水', type: true, day: '', position: {x: '-146', y: '-12'}, title: 'RainWater', coefficient: 18.73, str: '-2-', leap: -1, exception: [{name: '2026', value: -1}]},
        {name: '惊蛰', type: true, day: '', position: {x: '-23', y: '-71'}, title: 'InsectsAwakening', coefficient: 5.63, str: '-3-', leap: 0, exception: []},
        {name: '春分', type: true, day: '', position: {x: '-146', y: '-71'}, title: 'SpringEquinox', coefficient: 20.646, str: '-3-', leap: 0, exception: []},
        {name: '清明', type: true, day: '', position: {x: '-23', y: '-132'}, title: 'FreshGreen', coefficient: 4.81, str: '-4-', leap: 0, exception: []},
        {name: '谷雨', type: true, day: '', position: {x: '-146', y: '-131'}, title: 'GrainRain', coefficient: 20.1, str: '-4-', leap: 0, exception: []},
        {name: '立夏', type: true, day: '', position: {x: '-23', y: '-191'}, title: 'BeginningOfSummer', coefficient: 5.52, str: '-5-', leap: 0, exception: [{name: '1911', value: 1}]},
        {name: '小满', type: true, day: '', position: {x: '-146', y: '-191'}, title: 'LesserFullness', coefficient: 21.04, str: '-5-', leap: 0, exception: [{name: '2008', value: 1}]},
        {name: '芒种', type: true, day: '', position: {x: '-23', y: '-251'}, title: 'GrainInEar', coefficient: 5.678, str: '-6-', leap: 0, exception: [{name: '1902', value: 1}]},
        {name: '夏至', type: true, day: '', position: {x: '-146', y: '-251'}, title: 'SummerSolstice', coefficient: 21.37, str: '-6-', leap: 0, exception: [{name: '1928', value: 1}]},
        {name: '小暑', type: true, day: '', position: {x: '-23', y: '-311'}, title: 'LesserHeat', coefficient: 7.108, str: '-7-', leap: 0, exception: [{name: '1925', value: 1}, {name: '2016', value: 1}]},
        {name: '大暑', type: true, day: '', position: {x: '-146', y: '-311'}, title: 'GreaterHeat', coefficient: 22.83, str: '-7-', leap: 0, exception: [{name: '1922', value: 1}]},
        {name: '立秋', type: true, day: '', position: {x: '-23', y: '-371'}, title: 'BeginningOfAutumn', coefficient: 7.5, str: '-8-', leap: 0, exception: [{name: '2002', value: 1}]},
        {name: '处暑', type: true, day: '', position: {x: '-146', y: '-372'}, title: 'EndOfHeat', coefficient: 23.13, str: '-8-', leap: 0, exception: []},
        {name: '白露', type: true, day: '', position: {x: '-23', y: '-431'}, title: 'WhiteDew', coefficient: 7.646, str: '-9-', leap: 0, exception: [{name: '1927', value: 1}]},
        {name: '秋分', type: true, day: '', position: {x: '-146', y: '-431'}, title: 'AutumnalEquinox', coefficient: 23.042, str: '-9-', leap: 0, exception: [{name: '1942', value: 1}]},
        {name: '寒露', type: true, day: '', position: {x: '-23', y: '-491'}, title: 'ColdDew', coefficient: 8.318, str: '-10-', leap: 0, exception: []},
        {name: '霜降', type: true, day: '', position: {x: '-146', y: '-491'}, title: 'FirstFrost', coefficient: 23.438, str: '-10-', leap: 0, exception: [{name: '2089', value: 1}]},
        {name: '立冬', type: true, day: '', position: {x: '-23', y: '-551'}, title: 'BeginningOfWinter', coefficient: 7.438, str: '-11-', leap: 0, exception: [{name: '2089', value: 1}]},
        {name: '小雪', type: true, day: '', position: {x: '-146', y: '-551'}, title: 'LightSnow', coefficient: 22.36, str: '-11-', leap: 0, exception: [{name: '1978', value: 1}]},
        {name: '大雪', type: true, day: '', position: {x: '-23', y: '-611'}, title: 'HeavySnow', coefficient: 7.18, str: '-12-', leap: 0, exception: [{name: '1954', value: 1}]},
        {name: '冬至', type: true, day: '', position: {x: '-146', y: '-611'}, title: 'WinterSolstice', coefficient: 21.94, str: '-12-', leap: 0, exception: [{name: '1918', value: -1}, {name: '2021', value: -1}]},
        {name: '小寒', type: true, day: '', position: {x: '-23', y: '-671'}, title: 'LesserCold', coefficient: 6.11, str: '-1-', leap: -1, exception: [{name: '1982', value: 1}, {name: '2019', value: -1}, {name: '2021', value: -1}, {name: '2022', value: -1}, {name: '2023', value: -1}, {name: '2025', value: -1}, {name: '2026', value: -1}, {name: '2084', value: -1}, {name: '2089', value: -1}]},
        {name: '大寒', type: true, day: '', position: {x: '-146', y: '-671'}, title: 'GreaterCold', coefficient: 20.12, str: '-1-', leap: -1, exception: [{name: '2082', value: 1}]}
      ],
      festival: [],
      throttleTitle: '',
      throttleName: '',
      throttlePosition: '',
      src: ''
    }
  },
  props: {
    'activeName': {
      type: String,
      required: true
    }
  },
  methods: {
    /**
     * 获取节气
     */
    getThrottle () {
      var self = this
      var YYYY = moment().format('YYYY')
      var YY = moment().format('YY')
      _.each(self.throttleList, function (v) {
        if (v.exception.length > 0) {
          _.each(v.exception, function (va) {
            if (YYYY === va.name) {
              v.day = YYYY + v.str + (parseInt(YY * 0.2422 + v.coefficient) - parseInt((YY * 1 + v.leap) / 4) + va.value)
              v.type = false
            } else if (v.type) {
              v.day = YYYY + v.str + (parseInt(YY * 0.2422 + v.coefficient) - parseInt((YY * 1 + v.leap) / 4))
            }
          })
        } else {
          v.day = YYYY + v.str + (parseInt(YY * 0.2422 + v.coefficient) - parseInt((YY * 1 + v.leap) / 4))
        }
      })
      self.rendingThrottle()
    },
    /**
     * 渲染节气
     */
    rendingThrottle () {
      var self = this
      _.each(self.throttleList, function (v) {
        if (moment().diff(moment(v.day, 'YYYY-M-D'), 'seconds') > 0 && moment().diff(moment(v.day, 'YYYY-M-D'), 'seconds') <= 86400) {
          self.throttleType = true
          self.throttleTitle = v.title
          self.throttleName = v.name
          self.throttlePosition = v.position.x + 'px ' + v.position.y + 'px'
        }
      })
    }
  },
  created () {
    var self = this
    self.src = process.env.BASE_API
    self.getThrottle()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout-logo {
    height: 80px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
  }
  .layout-nav {
    width: 800px;
    float: right;
  }
  .throttle-logo-bg {
    margin-top: 20px;
    margin-left: 20px;
    width: 80px;
    height: 40px;
    border-radius: 5px;
    background-size: cover;
    background: url("../assets/img/solarTerm/solarTerm.png") no-repeat -23px -13px;
    background-size: 250px;
  }
  .throttle-logo-img{
    margin-top: 25px;
    margin-left: 20px;
    width: 70px;
    height: 35px;
    border-radius: 5px;
    background-size: cover;
    img {
      vertical-align: top;
      height: 35px;
    }
  }
  .layout-footer-center {
    text-align: center;
  }
  .ivu-layout-header {
    width: 100%;
    height: 80px;
    padding: 0;
    position: fixed;
    line-height: 80px;
    z-index: 100;
    background: transparent;
  }
  .ivu-menu-horizontal {
    padding: 0 100px;
  }
  .ivu-menu-horizontal {
    min-width: 1425px;
    height: 80px;
    line-height: 80px;
  }
  .headerBox {
    height: 110px;
  }
</style>
