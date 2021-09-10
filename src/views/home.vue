<template>
  <div class="layout">
    <i-row style="background: #f5f7f9">
      <i-col class="banner" :style="{ opacity: opacity }">
        <p>Hello, I'm Mr.Gao</p>
        <p class="font-24">热情 · 执行力 · 健谈</p>
      </i-col>
    </i-row>
    <i-row class="nav">
      <i-col>
        <NavBar :activeName="'home'" :unfixed="unfixed"></NavBar>
      </i-col>
    </i-row>
    <i-row class="main">
      <i-col class="w1200">
        <i-row>
          <i-col class="item1">
            <div class="contentBox" :style="{ top: contentTop }">
              <div class="roundIcon"></div>
              <div class="content">
                <div class="title">我叫高天阳，坐标北京</div>
                <div>
                  我并不是计算机专业，但对前端很感兴趣，所以自学前端，今后的职业规划是朝着项目经理发展，目前在学TypeScript/ES6。
                </div>
              </div>
            </div>
            <div class="imgList">
              <div class="imgList-left">
                <div class="img"></div>
                <div class="img"></div>
              </div>
              <div class="imgList-right">
                <div class="img"></div>
                <div class="img"></div>
              </div>
            </div>
          </i-col>
        </i-row>
        <i-row>
          <i-col class="item2">
            <div class="content">
              <div>
                自2016年开始接触并正式进入互联网这个行业，并深深的爱上了这个行业。在工作的
                {{ year }}
                年来，做过前端开发，做过项目经理，在不同的岗位有着不同的收获。
              </div>
            </div>
            <div class="bgBox">
              <div class="roundIcon"></div>
            </div>
            <div class="imgList">
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
              <div class="img"></div>
            </div>
          </i-col>
        </i-row>
      </i-col>
      <i-col class="item3">
        <div class="content">
          <div>系统开发过<span class="textLinear">响应式，移动端，PC端</span>。</div>
          <div>功能上来说，管理后台，考试评测系统，企业官网，</div>
          <div>活动宣传，可视化，地图等都有所涉猎。</div>
        </div>
      </i-col>
    </i-row>
    <i-row class="bg">
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center"> </i-content>
              </i-layout>
            </i-content>
          </i-row>
        </i-layout>
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
import NavBar from '../components/NavBar.vue'; // 引进菜单模板
import Footer from '../components/Footer.vue'; // 引进底部模板
export default {
  name: 'Home',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用底部组件
  },
  data() {
    return {
      opacity: 1,
      offsetTop: 0,
      mainTop: 0,
      scrollTop: 0,
      contentTop: 0,
      unfixed: true,
      msg: 'Home',
      year: 0
    };
  },
  mounted() {
    var self = this;
    window.addEventListener('scroll', self.initHeight);
    self.$nextTick(() => {
      self.offsetTop = document.querySelector('.nav').offsetTop;
      self.mainTop = document.querySelector('.main').offsetTop;
    });
  },
  methods: {
    initHeight() {
      var self = this;
      self.scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      self.unfixed = self.scrollTop < self.offsetTop;
      self.opacity = 1 - self.scrollTop / self.offsetTop;
      self.contentTop = 200 * (1 - self.scrollTop / self.mainTop) + 200 + 'px';
    }
  },
  created() {
    var self = this;
    self.$loadingBar.finish();
    self.year = moment().diff('2016-1-1', 'year');
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  min-width: 800px;
  /*background: #f5f7f9;*/
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .banner {
    background: url('https://s3.ax1x.com/2021/01/30/yFqIIS.jpg') no-repeat center center / cover;
    height: 100vh;
    line-height: 80px;
    text-align: center;
    color: #7e6d3f;
    font-size: 40px;
    padding: 20vh 0 600px;
  }
}
.font-24 {
  font-size: 20px;
}
.main {
  .w1200 {
    margin: 0 auto 50px;
    width: 1200px;
    .item1 {
      position: relative;
      height: 1000px;
      .contentBox {
        position: relative;
        padding: 120px 80px;
        top: 0;
        width: 50%;
        height: 550px;
        background: #79a4ce;
        font-size: 28px;
        color: #fff;
        border-radius: 26px;
        .content {
          position: relative;
          z-index: 10;
          box-shadow: 0 0 0 2px #b3e8f5, 0 0 0 10px #fff;
          height: 100%;
          padding: 20px;
          border-radius: 12px;
          background: #fff;
          color: #000;
          .title {
            margin-bottom: 30px;
            font-size: 40px;
            font-weight: 600;
          }
        }
        .roundIcon {
          z-index: 5;
          position: absolute;
          top: 300px;
          left: 0;
          background: linear-gradient(
            51deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          width: 220px;
          height: 220px;
          border-radius: 100px;
        }
      }
      .imgList {
        position: absolute;
        width: 55%;
        height: 700px;
        top: 200px;
        left: 45%;
        .img {
          float: left;
          width: 300px;
          height: 200px;
          line-height: 350px;
          text-align: center;
          background: #61b1f6;
        }
        .imgList-left {
          width: 300px;
          float: left;
          margin-right: 20px;
          .img:nth-child(1) {
            margin-bottom: 20px;
            height: 300px;
            background: url('https://s3.ax1x.com/2021/01/30/ykpE5t.jpg') no-repeat center center /
              cover;
          }
          .img:nth-child(2) {
            background: url('https://s3.ax1x.com/2021/01/30/ykpPDH.jpg') no-repeat center -15px / cover;
          }
        }
        .imgList-right {
          width: 300px;
          float: left;
          .img:nth-child(1) {
            background: url('https://s3.ax1x.com/2021/01/30/ykpkVA.jpg') no-repeat center -65px / cover;
          }
          .img:nth-child(2) {
            margin-top: 20px;
            height: 300px;
            background: url('https://s3.ax1x.com/2021/01/30/ykpAUI.jpg') no-repeat center center /
              cover;
          }
        }
      }
    }
    .item2 {
      position: relative;
      height: 900px;
      .content {
        position: relative;
        padding: 20px 50px;
        top: 0;
        width: 55%;
        height: 200px;
        font-size: 28px;
        color: #000;
        background: #ffffff;
        box-sizing: border-box;
        box-shadow: 0 2px 0 0 rgba(47, 118, 142, 0.6), 0 6px 0 0 #fff, 0 12px 0 0 #2f768e;
      }
      .bgBox {
        position: relative;
        top: -300px;
        left: 60%;
        width: 750px;
        height: 750px;
        background: #2f778e;
        border-radius: 26px;
        .roundIcon {
          width: 300px;
          height: 300px;
          border-radius: 300px;
          background: #c6f1ff;
          margin: 0 auto;
          transform: translate(0, 225px);
          transform-style: preserve-3d;
        }
        .roundIcon::after {
          content: '';
          width: 300px;
          height: 300px;
          border-radius: 300px;
          background: #6d9fb0;
          position: absolute;
          transform: translate(100px, 0) translateZ(-1px);
        }
        .roundIcon::before {
          content: '';
          width: 300px;
          height: 300px;
          border-radius: 300px;
          background: #2b697f;
          position: absolute;
          transform: translate(-100px, 0) translateZ(-1px);
        }
      }
      .imgList {
        position: absolute;
        width: 100%;
        height: 600px;
        top: 260px;
        .img {
          float: left;
          margin-right: 20px;
          width: 285px;
          height: 500px;
          line-height: 350px;
          text-align: center;
          background: #61b1f6;
        }
        :last-child {
          margin-right: 0px;
        }
        .img:nth-child(1) {
          background: url('https://s1.ax1x.com/2020/08/24/dBvrSx.jpg') no-repeat center center /
            cover;
        }
        .img:nth-child(2) {
          background: url('https://s1.ax1x.com/2020/07/17/Uyd7FK.jpg') no-repeat center center /
            cover;
        }
        .img:nth-child(3) {
          background: url('https://s1.ax1x.com/2020/07/22/U7jGQK.jpg') no-repeat center center /
            cover;
        }
        .img:nth-child(4) {
          background: url('https://s3.ax1x.com/2021/01/13/sNPGPP.jpg') no-repeat center center /
            cover;
        }
      }
    }
  }
  .item3 {
    width: 100vw;
    height: 230px;
    background: url('https://s3.ax1x.com/2021/01/31/yEkHSA.png') #fff no-repeat bottom right / 463px
      136px;
    .content {
      margin: 0 auto;
      padding: 50px 0;
      top: 0;
      width: 1200px;
      height: 230px;
      font-size: 28px;
      color: #000;
      .textLinear {
        background: linear-gradient(to right, #f8945d, #42c4fb, #f5ef4b);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }
}
.w1200 {
  margin: 50px auto;
  width: 1200px;
}
</style>
