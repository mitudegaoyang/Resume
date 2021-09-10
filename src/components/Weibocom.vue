<template>
  <div>
    <div @click="toogleWeibo" type="primary" class="hot-button">
      <div class="hot-button-icon"></div>
    </div>
    <Drawer :closable="false" width="400" v-model="weiboTag">
      <div slot="header" class="drawer-header-inner">
        <span class="drawer-header-hot"></span>
        <span class="drawer-header-left">微博实时热搜</span>
        <span class="drawer-header-right" @click="getWeibo">
          <span class="drawer-header-reset"></span>
          <span>最新热搜</span>
        </span>
      </div>
      <p
        v-for="(item, index) in weiboData"
        v-show="item && item.desc_extr && item.desc_extr.toString().length"
        :key="index"
        class="hot-container"
      >
        <a :href="item.scheme">
          <span class="hot-icon">{{ index + 1 }}</span>
          <span class="hot-text">{{ item.desc }}</span>
          <span class="hot-num">{{ item.num }}</span>
        </a>
      </p>
    </Drawer>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import weiboData from '../assets/json/weibo.json';
export default {
  name: 'InnerTop', // 模板名称
  data() {
    return {
      weiboTag: false,
      weiboData: {}
    };
  },
  methods: {
    /**
     * 判断是否为热点
     */
    isEmpty(item) {
      if (item && item.desc_extr && item.desc_extr.toString().length) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 切换弹框
     */
    toogleWeibo() {
      var self = this;
      self.weiboTag = !self.weiboTag;
      if (self.weiboTag) {
        self.getWeibo();
      }
    },
    /**
     * 获取微博热搜
     */
    getWeibo() {
      var self = this;
      axios
        .get('/weibo/api/container/getIndex', {
          params: {
            jumpfrom: 'weibocom',
            containerid: '106003type=25&t=3&disable_hot=1&filter_type=realtimehot'
          }
        })
        .then(function(response) {
          _.each(response.data.data.cards[0].card_group, function(v) {
            if (v && v.desc_extr && v.desc_extr.toString().length) {
              v.desc_extr = v.desc_extr.toString();
              if (v.desc_extr.length > 8) {
                v.num = v.desc_extr.substring(0, v.desc_extr.length - 8) + '亿';
              } else if (v.desc_extr.length > 4) {
                v.num = v.desc_extr.substring(0, v.desc_extr.length - 4) + '万';
              } else {
                v.num = v.desc_extr;
              }
            }
          });
          self.weiboData = _.filter(response.data.data.cards[0].card_group, 'num');
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    /**
     * 微博热搜假数据
     */
    initWeibo() {
      var self = this;
      _.each(weiboData.data.cards[0].card_group, function(v) {
        if (v && v.desc_extr && v.desc_extr.toString().length) {
          v.desc_extr = v.desc_extr.toString();
          if (v.desc_extr.length > 8) {
            v.num = v.desc_extr.substring(0, v.desc_extr.length - 8) + '亿';
          } else if (v.desc_extr.length > 4) {
            v.num = v.desc_extr.substring(0, v.desc_extr.length - 4) + '万';
          } else {
            v.num = v.desc_extr;
          }
        }
      });
      self.weiboData = _.filter(weiboData.data.cards[0].card_group, 'num');
    }
  },
  created() {
    var self = this;
    self.initWeibo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hot-button {
  position: fixed;
  right: 30px;
  bottom: 100px;
  width: 48px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  text-align: center;
  color: #ff4d4f;
  background: #fff;
  cursor: pointer;
  z-index: 100;
}
.hot-button-icon {
  width: 48px;
  height: 40px;
  background: url('../assets/img/hot.svg') no-repeat center center;
  background-size: 40%;
}
.hot-button:hover {
  background: #fdfdfd;
}
.drawer-header-inner {
  display: inline-block;
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #17233d;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .drawer-header-hot {
    position: relative;
    top: 2px;
    display: inline-block;
    width: 14px;
    height: 16px;
    background: url('../assets/img/hot.svg') no-repeat center center;
    background-size: cover;
  }
  .drawer-header-left {
    padding-left: 10px;
  }
  .drawer-header-right {
    cursor: pointer;
    font-size: 12px;
    float: right;
    color: #999;
    .drawer-header-reset {
      position: relative;
      top: 2px;
      display: inline-block;
      width: 13px;
      height: 14px;
      margin-right: 5px;
      background: url('../assets/img/reset.svg') no-repeat center center;
      background-size: cover;
    }
  }
}

.hot-container {
  display: flow-root;
  height: 20px;
  margin-bottom: 20px;
}
.hot-icon {
  display: inline-block;
  width: 24px;
  height: 18px;
  margin-right: 10px;
  text-align: center;
  font-size: 13px;
  color: #6a6a6a;
  background: #f3f3f3;
  border-radius: 2px;
}
.hot-container:nth-child(1) .hot-icon {
  color: #fff;
  background: #ff7170;
}
.hot-container:nth-child(2) .hot-icon {
  color: #fff;
  background: #ff9900;
}
.hot-container:nth-child(3) .hot-icon {
  color: #fff;
  background: #ffcc02;
}
.hot-container:nth-child(4) .hot-icon {
  color: #fff;
  background: #e7d48f;
}
.hot-text {
  display: inline-block;
  color: #4d4d4d;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.hot-text:hover {
  color: #2d8cf0;
}
.hot-num {
  color: #999;
  float: right;
  font-size: 14px;
}
</style>
