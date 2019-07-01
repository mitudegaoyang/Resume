<template>
  <div>
    <i-header style="z-index: 1000">
      <i-menu mode="horizontal" :active-name="activeName">
        <div class="layout-logo">
        </div>
        <div class="layout-nav">
          <i-menu-item name="home" to="/home">
            <i-icon type="ios-home" size="24"></i-icon>
            首页
          </i-menu-item>
          <i-menu-item name="finance" to="/finance">
            <i-icon type="ios-stats" size="24"></i-icon>
            我要出借
          </i-menu-item>
          <i-menu-item name="riskEducation" to="/riskEducation">
            <i-icon type="ios-school" size="24"></i-icon>
            网站课堂
          </i-menu-item>
          <i-submenu name="information">
            <template slot="title">
              <i-icon type="ios-information-circle" size="24"></i-icon>
              信息披露
            </template>
            <i-menu-item name="organizationInfo" to="/information/baseInfo/organizationInfo">组织信息</i-menu-item>
            <i-menu-item name="complianceProgress" to="/information/complianceProgress">合规进度</i-menu-item>
            <i-menu-item name="external" to="/information/notice">对外公告</i-menu-item>
            <i-menu-item name="auditReport" to="/information/auditReport">审计报告</i-menu-item>
            <i-menu-item name="operationsReport" to="/information/baseInfo/operationsReport">运营报告</i-menu-item>
            <i-menu-item name="filingInfo" to="/information/baseInfo/filingInfo">备案信息</i-menu-item>
            <i-menu-item name="contactUs" to="/information/contactUs">联系我们</i-menu-item>
          </i-submenu>
          <i-menu-item name="safe" to="/safe">
            <i-icon type="ios-lock" size="24"></i-icon>
            安全保障
          </i-menu-item>
          <i-menu-item name="center" to="/center">
            <i-icon type="ios-person" size="24"></i-icon>
            个人中心
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
    width: 780px;
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
