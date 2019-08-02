<template>
  <div class="layout">
    <i-row style="background: #f5f7f9">
      <i-col class="banner" :style="{opacity: opacity}">
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
      <i-col>
        <i-row>
          <i-col class="item1">
            <div class="content" :style="{top: contentTop}">
              <div class="title">我叫高天阳，坐标北京</div>
              <div>我并不是计算机专业，但对前端很感兴趣，所以自学前端，今后的职业规划是朝着项目经理发展，目前在学TypeScript/ES6。 </div>
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
          <i-col>模块1</i-col>
        </i-row>
        <i-row>
          <i-col>模块3</i-col>
        </i-row>
        <i-row>
          <i-col>模块4</i-col>
        </i-row>
      </i-col>
    </i-row>
    <i-row class="bg">
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                </i-content>
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
import NavBar from '../components/NavBar.vue' // 引进菜单模板
import Footer from '../components/Footer.vue' // 引进底部模板
export default {
  name: 'Home',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用底部组件
  },
  data () {
    return {
      opacity: 1,
      offsetTop: 0,
      mainTop: 0,
      scrollTop: 0,
      contentTop: 0,
      unfixed: true,
      msg: 'Home'
    }
  },
  mounted () {
    var self = this
    window.addEventListener('scroll', self.initHeight)
    self.$nextTick(() => {
      self.offsetTop = document.querySelector('.nav').offsetTop
      self.mainTop = document.querySelector('.main').offsetTop
    })
  },
  methods: {
    initHeight () {
      var self = this
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      self.unfixed = (self.scrollTop < self.offsetTop)
      self.opacity = 1 - (self.scrollTop / self.offsetTop)
      self.contentTop = 200 * (1 - (self.scrollTop / self.mainTop)) + 200 + 'px'
    }
  },
  created () {
    var self = this
    self.$loadingBar.finish()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
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
      background: url("../assets/img/banner.jpg") no-repeat center center / cover;
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
    .item1 {
      position: relative;
      height: 1000px;
      .content {
        position: relative;
        padding: 200px 100px;
        top: 0;
        width: 44vw;
        height: 40vw;
        background: #79a4ce;
        font-size: 36px;
        color: #fff;
        .title {
          margin-bottom: 30px;
          font-size: 50px;
          font-weight: 600;
        }
      }
      .imgList {
        position: absolute;
        width: 1050px;
        height: 700px;
        top: 200px;
        left: 42vw;
        .img {
          float: left;
          width: 500px;
          height: 400px;
          line-height: 350px;
          text-align: center;
          background: #61b1f6;
        }
        .imgList-left {
          width: 500px;
          float: left;
          margin-right: 50px;
          .img:nth-child(1) {
            margin-bottom: 50px;
            height: 300px;
            background: url("../assets/img/img3.jpeg") no-repeat center center / cover;
          }
          .img:nth-child(2) {
            background: url("../assets/img/img4.jpeg") no-repeat center -30px / cover;
          }
        }
        .imgList-right {
          width: 500px;
          float: left;
          .img:nth-child(1) {
            background: url("../assets/img/img1.jpeg") no-repeat center -40px / cover;
          }
          .img:nth-child(2) {
            margin-top: 50px;
            height: 300px;
            background: url("../assets/img/img2.jpeg") no-repeat center center / cover;
          }
        }
      }
    }
  }
  .bg {
    height: 2370px;
    background: url("../assets/img/bg.png") no-repeat center center / cover;
  }
  .w1200 {
    margin: 50px auto;
    width: 1200px;
  }
</style>
