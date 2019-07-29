<template>
  <div class="layout">
    <i-row>
      <i-col class="banner" :style="{opacity: opacity}">
        <p>Hello, I'm Mr.Gao</p>
        <p class="font-24">一个拥有像素眼的前端工程师</p>
      </i-col>
    </i-row>
    <i-row class="nav">
      <i-col>
        <NavBar :activeName="'home'" :unfixed="unfixed"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-button @click="unfixed = !unfixed">显示隐藏{{unfixed}}</i-button>
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
      scrollTop: 0,
      unfixed: true,
      msg: 'Home'
    }
  },
  mounted () {
    var self = this
    window.addEventListener('scroll', self.initHeight)
    self.$nextTick(() => {
      self.offsetTop = document.querySelector('.nav').offsetTop
    })
  },
  methods: {
    initHeight () {
      var self = this
      self.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      self.unfixed = (self.scrollTop < self.offsetTop)
      self.opacity = 1 - (self.scrollTop / self.offsetTop)
    }
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
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .banner {
      background: url("../assets/img/banner.jpg") no-repeat center center / cover;
      // background: url("../assets/img/banner.jpg") no-repeat center center / contain;
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
  .w1200 {
    margin: 0 auto;
    width: 1200px;
  }
  .content {
    margin: 50px auto;
    min-height: 900px;
    background: #fff;
  }
  .content-center {
    padding: 24px;
    background: #fff;
  }
</style>
