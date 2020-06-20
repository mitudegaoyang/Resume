<template>
  <div class="inner_top" :class="{unfixed: unfixed}">
    <div class="box">
      <div class="fl">
        <span>{{helloMsg}}</span>
      </div>
      <ul class="fr btnGroup">
        <li>现在是北京时间：{{time}}</li>
        <li>网站已平稳运行：{{timeList.day}}天{{timeList.hour}}小时{{timeList.minutes}}分钟{{timeList.seconds}}秒</li>
        <li>
          <span id="busuanzi_container_site_pv">
            本站总访问量
            <span id="busuanzi_value_site_pv"></span>次
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "InnerTop", // 模板名称
  data() {
    return {
      timeList: {
        relative: "",
        day: "00",
        hour: "00",
        minutes: "00",
        seconds: "00"
      },
      timer: "",
      time: "0000-00-00 00:00:00",
      hour: "",
      helloMsg: "您好，欢迎您的光临~"
    };
  },
  props: {
    unfixed: {
      type: Boolean
    }
  },
  methods: {
    /**
     * 个位补零
     */
    prefixInteger(num) {
      if (num < 10) {
        num = "0" + num;
      } else {
        num = num.toString();
      }
      return num;
    },
    /**
     * 运营时间计算
     */
    timeInit() {
      var self = this;
      self.timeList.day = self.prefixInteger(
        moment().diff("2019-07-01 15:58:00", "days")
      );
      self.timeList.hour = self.prefixInteger(
        moment().diff("2019-07-01 15:58:00", "hours") % 24
      );
      self.timeList.minutes = self.prefixInteger(
        moment().diff("2019-07-01 15:58:00", "minutes") % 60
      );
      self.timeList.seconds = self.prefixInteger(
        moment().diff("2019-07-01 15:58:00", "seconds") % 60
      );
    },
    refreshClock() {
      var self = this;
      self.time = moment().format("YYYY-MM-DD HH:mm:ss");
      self.hour = moment().format("H") * 1;
      self.helloMsg =
        self.hour >= 0 && self.hour < 6
          ? "午夜好，您不要太辛苦，夜深了也要注意休息呀~"
          : self.hour >= 6 && self.hour < 12
          ? "早上好，今天又是元气满满的一天~"
          : self.hour >= 12 && self.hour < 14
          ? "中午好，午休后，为更好的自己加油~"
          : self.hour >= 14 && self.hour < 19
          ? "下午好，愿您享受宁静的下午时光~"
          : "晚上好，今天又是美好一天~";
      self.timeInit();
    }
  },
  created() {
    var self = this;
    self.refreshClock();
    self.timer = window.setInterval(self.refreshClock, 1000);

    let scriptTag = document.createElement("script");
    scriptTag.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    scriptTag.async = true;
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  },
  beforeDestroy() {
    var self = this;
    clearInterval(self.timer);
  }
};
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
.unfixed {
  position: relative;
}
</style>
