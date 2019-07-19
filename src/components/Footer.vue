<template>
  <i-footer class="center dark">
    <div class="w1200">
      <i-row type="flex" justify="center" align="middle">
        <i-col :span="8">
          <i-row>
            <i-col :span="8">
              <i-row><b class="font18">我的信息</b></i-row>
              <i-row class="h15"></i-row>
              <i-row><a href="">自我简介</a></i-row>
              <i-row><a href="">专业技能</a></i-row>
              <i-row><a href="">工作经历</a></i-row>
            </i-col>
            <i-col :span="8">
              <i-row><b class="font18">项目信息</b></i-row>
              <i-row class="h15"></i-row>
              <i-row><a href="">管理类项目</a></i-row>
              <i-row><a href="">官网类项目</a></i-row>
              <i-row><a href="">活动类项目</a></i-row>
            </i-col>
            <i-col :span="8">
              <i-row><b class="font18">我的外链</b></i-row>
              <i-row class="h15"></i-row>
              <i-row><a href="https://github.com/mitudegaoyang">GitHub</a></i-row>
              <i-row><a href="https://gitee.com/MiTuDGaoYang">Gitee</a></i-row>
              <i-row><a href="https://mitudegaoyang.gitbooks.io/mybook/content/">GitBook</a></i-row>
            </i-col>
          </i-row>
        </i-col>
        <i-col :span="8" class="left">
          <i-row class="pl100">姓名：高天阳</i-row>
          <i-row class="pl100">电话：136****5113</i-row>
          <i-row class="pl100">邮箱：136****5113@163.com</i-row>
          <i-row class="pl100">时间：9:00-17:30</i-row>
        </i-col>
        <i-col :span="8">
          <i-row class="pl100">
            <i-col :span="12">
              <div>我的微信</div>
            </i-col>
            <i-col :span="12">
              <div>我的QQ</div>
            </i-col>
          </i-row>
        </i-col>
      </i-row>
      <i-row>
        <i-col>由高天阳设计开发</i-col>
        <i-col>版权所有 © 2018-2019 高天阳</i-col>
      </i-row>
    </div>
    <i-back-top></i-back-top>
  </i-footer>
</template>

<script>
import moment from 'moment'
export default {
  name: 'NavBar', // 模板名称
  data () {
    return {
      time: true,
      month: ''
    }
  },
  beforeMount () {
  },
  props: {},
  created () {
    var self = this
    self.month = parseInt(moment().format('M'))
    self.time = (self.month > 9 || self.month < 5)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left {
    text-align: left;
  }
  .font18 {
    font-size: 18px;
  }
  .h15 {
    height: 15px;
    line-height: 15px;
  }
  .pb10 {
    padding-bottom: 10px;
  }
  .w1200 {
    width: 1200px;
    margin: 0 auto;
  }
  .center {
    text-align: center;
  }
  .dark {
    color: #999;
    background: #424242;
    font-weight: 400;
    line-height: 24px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
  }
  .pl100 {
    padding-left: 100px;
  }
  .dark a {
    color: #999;
  }
  .dark a:hover {
    color: #bbb;
  }
</style>
