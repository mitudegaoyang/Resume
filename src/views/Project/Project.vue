<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'project'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{ margin: '16px 0' }">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>项目集</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row style="padding-bottom: 20px">
                    <i-col>
                      <div
                        style="
                          border-bottom: 1px solid #e9e9e9;
                          padding-bottom: 6px;
                          margin-bottom: 6px;
                        "
                      >
                        <checkbox
                          :indeterminate="data.indeterminate"
                          :value="data.checkAll"
                          @click.prevent.native="handleCheckAll"
                          >全选</checkbox
                        >
                      </div>
                      <checkbox-group v-model="data.checkAllGroup" @on-change="checkAllGroupChange">
                        <checkbox
                          v-for="item in data.checkData"
                          :label="item"
                          :key="item"
                        ></checkbox>
                      </checkbox-group>
                    </i-col>
                  </i-row>
                  <i-row class="project-list">
                    <i-col
                      class="project-item"
                      :class="{ thumb: item.img }"
                      v-for="item in data.projectDataBak"
                      :key="item.index"
                    >
                      <div class="project-box">
                        <div class="project-header">
                          <div class="project-title">
                            {{ item.title }}
                            <span class="project-label">{{ item.label }}</span>
                          </div>
                          <div class="project-info">
                            <div class="project-tags">
                              <span
                                :class="'project-tags-' + tag.value"
                                v-for="tag in item.tags"
                                :key="tag.index"
                                >{{ tag.name }}</span
                              >
                            </div>
                            <div class="project-time">{{ item.time }}</div>
                          </div>
                        </div>
                        <div class="project-content" v-html="item.content"></div>
                        <div class="project-link">
                          <a :href="item.link.src">{{ item.link.title }}</a>
                        </div>
                      </div>
                      <div class="project-thumb" v-if="item.img">
                        <img :src="item.img" width="350px" :title="item.img" alt="项目展示" />
                      </div>
                    </i-col>
                  </i-row>
                  <i-row v-show="data.projectDataBak.length === 0">
                    <i-col>
                      <div class="project-not-found">未匹配到相应项目</div>
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
import _ from 'lodash';
import Footer from '../../components/Footer.vue'; // 引进底部模板
import NavBar from '../../components/NavBar.vue'; // 引进菜单模板
import Weibo from '../../components/Weibocom.vue'; // 引进热点组件
import PROCONFIG from '../config/proConfig.ts'; // 引如工作经历数据
export default {
  name: 'Project',
  components: {
    NavBar, // 使用菜单组件
    Footer, // 使用底部组件
    Weibo // 使用热点组件
  },
  data() {
    return {
      data: {
        indeterminate: false,
        checkAll: false,
        checkAllGroup: [],
        checkData: [
          'html',
          'css',
          'js',
          'react',
          'vue',
          'angular',
          'ice',
          'antd',
          'element',
          'iview',
          'vux',
          'element-admin',
          'weex',
          'fuse',
          'jsp',
          'echarts',
          'cloudcharts',
          'single-spa',
          'formilyjs',
          'emotion',
          'tgg-large-screen'
        ],
        projectData: PROCONFIG,
        projectDataBak: []
      }
    };
  },
  methods: {
    handleCheckAll() {
      var self = this;
      if (self.data.indeterminate) {
        self.data.checkAll = false;
      } else {
        self.data.checkAll = !self.data.checkAll;
      }
      self.data.indeterminate = false;
      if (self.data.checkAll) {
        self.data.checkAllGroup = _.clone(self.data.checkData);
      } else {
        self.data.checkAllGroup = [];
      }
      self.filter();
    },
    checkAllGroupChange(data) {
      var self = this;
      if (data.length === self.data.checkData.length) {
        self.data.indeterminate = false;
        self.data.checkAll = true;
      } else if (data.length > 0) {
        self.data.indeterminate = true;
        self.data.checkAll = false;
      } else {
        self.data.indeterminate = false;
        self.data.checkAll = false;
      }
      self.filter();
    },
    /**
     * 筛选项目
     */
    filterData(types) {
      var self = this;
      self.data.projectDataBak = _.filter(self.data.projectDataBak, function(data) {
        var type = false;
        _.each(data.tags, function(v) {
          if (v.value === types) {
            type = true;
          }
        });
        return type;
      });
    },
    filter() {
      var self = this;
      self.data.projectDataBak = self.data.projectData;
      _.each(self.data.checkAllGroup, function(v) {
        self.filterData(v);
      });
    }
  },
  created() {
    var self = this;
    self.filter();
    self.$loadingBar.finish();
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
  min-height: 530px;
  background: #fff;
}
.content-center {
  padding: 24px;
  background: #fff;
  .project-list {
    .project-item {
      margin-top: 30px;
      padding-top: 40px;
      border-top: 2px dashed #ccc;
      .project-box {
        float: left;
        width: 100%;
        .project-header {
          padding-bottom: 5px;
          .project-title {
            font-size: 18px;
            font-weight: 600;
            .project-label {
              font-size: 0.8em;
              font-weight: 400;
              color: #888;
            }
          }
          .project-info {
            margin: 5px 0;
            .project-tags {
              float: left;
              span {
                height: 20px;
                line-height: 20px;
                padding: 0 6px;
                margin-right: 5px;
                border-radius: 3px;
                display: inline-block;
                vertical-align: middle;
                font-size: 0.75em;
                font-family: Lucida Grande, arial;
                color: #fff;
              }
              .project-tags-html {
                background: #f60;
              }
              .project-tags-css {
                background: #f90;
              }
              .project-tags-js {
                background: #ffda3f;
                color: #333;
              }
              .project-tags-react {
                background: #61dafb;
              }
              .project-tags-vue {
                background: #4fc08d;
              }
              .project-tags-angular {
                background: #eb5a5c;
              }
              .project-tags-antd {
                background: #0170fe;
              }
              .project-tags-element {
                background: #409efe;
              }
              .project-tags-iview {
                background: #2d8cf0;
              }
              .project-tags-vux {
                background: #35495e;
              }
              .project-tags-element-admin {
                background: #4caf50;
              }
              .project-tags-weex {
                background: #3aabf4;
              }
              .project-tags-fuse {
                background: #2877c1;
              }
              .project-tags-jsp {
                background: #2952a4;
              }
              .project-tags-node {
                background: #80bd01;
              }
              .project-tags-ice {
                background: #6047de;
              }
              .project-tags-echarts {
                background: #e43961;
              }
              .project-tags-cloudcharts {
                background: #ff8200;
              }
              .project-tags-single-spa {
                background: #ee689f;
              }
              .project-tags-formilyjs {
                background: #4d1db5;
              }
              .project-tags-emotion {
                background: #c43bad;
              }
              .project-tags-tgg-large-screen {
                background: #612aaa;
              }
            }
            .project-time {
              float: right;
            }
          }
          .project-info:after {
            display: block;
            clear: both;
            content: '';
            visibility: hidden;
            height: 0;
          }
        }
        .project-content {
          font-size: 14px;
          color: #333;
        }
        .project-link {
          font-size: 14px;
          text-align: right;
        }
      }
      .project-thumb {
        float: right;
        width: 350px;
        margin-right: -400px;
        margin-left: 50px;
      }
    }
    .project-item:first-child {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
    .project-item.thumb {
      padding-right: 400px;
    }
    .project-item:after {
      display: block;
      clear: both;
      content: '';
      visibility: hidden;
      height: 0;
    }
  }
  .project-not-found {
    line-height: 100px;
    height: 100px;
    text-align: center;
  }
}
</style>
<style lang="less">
.project-content {
  li {
    list-style: disc;
    margin-left: 1.3em;
  }
}
</style>
