<template>
  <div>
    <i-header style="z-index: 1000">
      <i-menu mode="horizontal" :active-name="activeName">
        <div class="layout-logo">
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
export default {
  name: 'NavBar', // 模板名称
  components: {},
  data () {
    return {
      showLunarCalendar: true,
      throttleType: false,
      festival: [],
      throttleName: '',
      src: ''
    }
  },
  props: {
    'activeName': {
      type: String,
      required: true
    }
  },
  methods: {},
  created () {
    var self = this
    self.src = process.env.BASE_API
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-logo {
    height: 80px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
  }
  .layout-nav{
    width: 800px;
    float: right;
  }
  .layout-footer-center{
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
