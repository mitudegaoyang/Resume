<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'ability'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>专业技能</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  content
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
  name: 'Ability',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用菜单组件
  },
  data () {
    return {
      msg: 'Ability'
    }
  },
  created () {
    var self = this
    self.$loadingBar.finish()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout{
    min-width: 800px;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .w1200 {
    margin: 0 auto;
    width: 1200px;
  }
  .content {
    margin-bottom: 50px;
    min-height: 530px;
    background: #fff;
  }
  .content-center {
    padding: 24px;
    background: #fff;
  }
</style>
