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
            <i-breadcrumb :style="{ margin: '16px 0' }">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>工作经历</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-timeline class="time-content-box">
                    <i-time-line-item
                      :color="item.index % 2 === 0 ? '#FFAD2C' : '#50ABF8'"
                      v-for="item in data"
                      :key="item.index"
                    >
                      <p class="time-time" :class="{ double: item.index % 2 !== 0 }">
                        {{ item.timeShow }}
                      </p>
                      <p class="time-content" :class="{ double: item.index % 2 !== 0 }">
                        <span class="time-title">{{ item.title }}</span>
                        <span class="time-job">{{ item.job }}</span>
                      </p>
                      <p class="time-content" :class="{ double: item.index % 2 !== 0 }">
                        <i>{{ item.content }}</i>
                      </p>
                      <p
                        class="time-content"
                        :class="{ double: item.index % 2 !== 0 }"
                        v-for="p in item.describe"
                        :key="p.index"
                      >
                        {{ p }}
                      </p>
                    </i-time-line-item>
                  </i-timeline>
                </i-content>
              </i-layout>
            </i-content>
          </i-row>
        </i-layout>
      </i-col>
    </i-row>
    <i-row>
      <i-col>
        <Weibo></Weibo>
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
import moment from 'moment';
import _ from 'lodash';
import NavBar from '../components/NavBar.vue'; // 引进菜单模板
import Footer from '../components/Footer.vue'; // 引进底部模板
import Weibo from '../components/Weibocom.vue'; // 引进热点组件
import EXPCONFIG from './config/expConfig.ts'; // 引如工作经历数据
export default {
  name: 'Experience',
  components: {
    NavBar, // 使用菜单组件
    Footer, // 使用底部组件
    Weibo // 使用热点组件
  },
  data() {
    return {
      msg: 'Experience',
      data: EXPCONFIG
    };
  },
  methods: {
    /**
     * 获取工作经历列表
     */
    getList() {
      this.$loadingBar.finish();
      // console.log('请求json');
      this.initList();
    },
    /**
     * 格式化工作经历列表
     */
    initList() {
      this.data = _.orderBy(this.data, ['startTime'], ['desc']);
      _.each(this.data, function(v, k) {
        v.timeShow =
          moment(v.startTime).format('YYYY.MM') +
          ' - ' +
          (moment(v.endTime).format('YYYY.MM') !== 'Invalid date'
            ? moment(v.endTime).format('YYYY.MM')
            : '至今');
        v.index = k;
      });
    },
    init() {
      this.getList();
    }
  },
  created() {
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  min-width: 800px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.w1200 {
  margin: 0 auto 50px;
  width: 1200px;
}
.content {
  background: #fff;
}
.content-center {
  padding: 24px;
  background: #fff;
  .time-content-box {
    margin-top: 30px;
    margin-left: 50%;
    .time-time {
      position: relative;
      top: -4px;
      color: #ffffff;
      text-align: center;
      width: 140px;
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      font-weight: bold;
      background: #ffad2c;
      border-radius: 25px;
    }
    .time-time.double {
      position: relative;
      left: -175px;
      background: #50abf8;
    }
    .time-content {
      padding-left: 5px;
      padding-top: 5px;
      .time-title {
        font-size: 18px;
      }
      .time-job {
        font-size: 14px;
        color: #888;
      }
      .time-job:before {
        display: inline-block;
        vertical-align: middle;
        margin: 0 5px;
        width: 40px;
        height: 1px;
        background: #888;
        content: '';
      }
    }
    .time-content.double {
      position: relative;
      left: -590px;
      text-align: right;
    }
  }
}
</style>
