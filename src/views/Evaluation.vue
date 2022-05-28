<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'evaluation'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{ margin: '16px 0' }">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>自我评价</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row>
                    <i-col class="content-text">
                      {{ data.passage1.content }}{{ data.passage2.content }}
                    </i-col>
                    <i-col class="content-text">
                      {{ data.passage3.content }}{{ data.passage4.content }}
                    </i-col>
                    <i-col class="content-text">
                      {{ data.passage5.content }}{{ data.passage6.content }}
                    </i-col>
                    <i-col class="content-text">
                      {{ data.passage7.content }}{{ data.passage8.content }}
                    </i-col>
                    <i-col class="content-text">
                      {{ data.passage9.content }}
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
import NavBar from '../components/NavBar.vue'; // 引进菜单模板
import Footer from '../components/Footer.vue'; // 引进底部模板
import Weibo from '../components/Weibocom.vue'; // 引进热点组件
import moment from 'moment';
export default {
  name: 'Evaluation',
  components: {
    NavBar, // 使用菜单组件
    Footer, // 使用底部组件
    Weibo // 使用热点组件
  },
  data() {
    return {
      data: {
        passage1: {
          msg:
            '我为人诚恳、乐观开朗、自信积极，保持正能量。工作中，我保持着进取心、责任心，能做到自信而不自负，不以自我为中心，懂得换位思考。',
          content: ''
        },
        passage2: {
          msg: '较强的适应能力和团队精神使我很好得融入到每个项目中。',
          content: ''
        },
        passage3: {
          msg: '沟通是我的一个强项，有效沟通会极大提高我们的工作效率。',
          content: ''
        },
        passage4: {
          msg: '日常开发中，我会通过熟练地使用npm、shell 等常用命令来提高工作效率。',
          content: ''
        },
        passage5: {
          msg: '对于新事物、新技术有着较为强烈的好奇心和求知欲。',
          content: ''
        },
        passage6: {
          msg: '因此，我会利用空闲时间去不断扩充个人知识库，并将其沉淀到我的技术博客中。',
          content: ''
        },
        passage7: {
          msg: `至今，我已经有${moment().diff(
            '2016-1-1',
            'year'
          )}年前端开发，以及1年左右的前端团队管理经验了。`,
          content: ''
        },
        passage8: {
          msg: '具备良好的分析解决问题能力，能独立承担任务并有一定程度的系统进度把控能力。',
          content: ''
        },
        passage9: {
          msg: '我相信技术是管理的基石，在技术达到一定程度时，管理才能做到相得益彰。',
          content: ''
        }
      }
    };
  },
  methods: {
    /**
     * 模仿书写
     * @param type 段落
     * @param millis 段落间延时毫秒数
     */
    writing(type, millis) {
      var self = this;
      var index = 0;
      var data = self.data['passage' + type];
      var ID = setInterval(function() {
        data.content += data.msg[index];
        index++;
        if (index === data.msg.length) {
          clearInterval(ID);
          if (type < Object.keys(self.data).length) {
            setTimeout(function() {
              self.writing(type + 1, millis);
            }, millis);
          }
        }
      }, 70);
    }
  },
  created() {
    var self = this;
    self.$loadingBar.finish();
    self.writing(1, 500);
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
  min-height: 600px;
  background: #fff;
}
.content-center {
  padding: 48px 24px;
  background: #fff;
  .content-text {
    font-size: 18px;
    line-height: 4em;
    text-indent: 2em;
  }
}
</style>
