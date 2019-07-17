<template>
  <div class="inner_top">
    <div class="box">
      <div class="fl">
        <span>{{helloMsg}}</span>
      </div>
      <ul class="fr btnGroup">
        <li>现在是北京时间：{{time}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'InnerTop', // 模板名称
  data () {
    return {
      time: '',
      hour: '',
      helloMsg: ''
    }
  },
  methods: {
    refreshClock () {
      var self = this
      self.time = moment().format('YYYY-MM-DD hh:mm:ss')
      self.hour = moment().format('H') * 1
      self.helloMsg = (self.hour >= 0 && self.hour < 6)
        ? '午夜好，您不要太辛苦，夜深了也要注意休息呀~' : (self.hour >= 6 && self.hour < 12)
          ? '早上好，今天又是元气满满的一天~' : (self.hour >= 12 && self.hour < 14)
            ? '中午好，午休后，为更好的自己加油~' : (self.hour >= 14 && self.hour < 19)
              ? '下午好，愿您享受宁静的下午时光~' : '晚上好，今天又是美好一天~'
    }
  },
  created () {
    var self = this
    window.setInterval(self.refreshClock, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .inner_top {
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #f0f0f0;
    margin: 0 auto;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
  }
  .inner_top .box {
    padding: 0 100px;
    min-width: 1425px;
  }
  .inner_top .box .minor_info {
    color: #b5b5b5;
    font-size: 12px;
    padding-left: 7px;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .inner_top .box .btnGroup li {
    float: left;
    padding: 0 10px;
    position: relative;
    list-style: none;
    cursor: pointer;
  }
  .inner_top .box .btnGroup li:hover {
    color: #2b85e4;
  }
</style>
