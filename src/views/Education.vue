<template>
  <div class="layout">
    <i-row>
      <i-col>
        <NavBar :activeName="'education'"></NavBar>
      </i-col>
    </i-row>
    <i-row>
      <i-col class="w1200">
        <i-layout>
          <i-row>
            <i-breadcrumb :style="{margin: '16px 0'}">
              <i-breadcrumb-item to="/">首页</i-breadcrumb-item>
              <i-breadcrumb-item>动效课堂</i-breadcrumb-item>
            </i-breadcrumb>
          </i-row>
          <i-row>
            <i-content class="content">
              <i-layout>
                <i-content class="content-center">
                  <i-row>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">DNA螺旋展示区</div>
                        <div class="wave">
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                        </div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">闹钟展示区</div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">茶杯展示区</div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">图形展示区</div>
                      </div>
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
        <Footer></Footer>
      </i-col>
    </i-row>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue' // 引进菜单模板
import Footer from '../components/Footer.vue' // 引进底部模板
export default {
  name: 'Education',
  components: {
    NavBar, // 使用菜单组件
    Footer // 使用底部组件
  },
  data () {
    return {
      msg: 'Education'
    }
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
    .animate-box {
      height: 300px;
      .animate-title {
        text-align: center;
      }
      .wave {
        margin: 45px auto;
        width: 20px;
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000px;
        animation: Spin 20s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        .dot {
          width: 20px;
          height: 1px;
          background-color: #464141;
          display: block;
          vertical-align: middle;
          margin: 25px auto;
          position: relative;
          transform: scale(0.6);
        }
        .dot:nth-child(1),.dot:nth-child(5) {
          animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-delay: -0.25s;
        }
        .dot:nth-child(2),.dot:nth-child(6) {
          animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-delay: -0.55s;
        }
        .dot:nth-child(3),.dot:nth-child(7) {
          animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-delay: -0.85s;
        }
        .dot:nth-child(4),.dot:nth-child(8) {
           animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
           animation-delay: -1.15s;
         }
        .dot:before, .dot:after {
          content: "";
          display: inline-block;
          vertical-align: middle;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          left: -1px;
        }
        .dot:nth-child(1):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -0.375s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(1):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -0.375s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(2):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -0.75s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(2):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -0.75s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(3):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.125s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(3):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.125s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(4):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.5s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(4):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.5s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(5):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.875s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(5):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -1.875s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(6):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -2.25s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(6):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -2.25s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(7):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -2.625s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(7):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -2.625s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
        .dot:nth-child(8):before {
          animation: Before 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -3s;
          background-color: #42dbc0;
          box-shadow: inset 2px 2px 5px #57dfc7;
        }
        .dot:nth-child(8):after {
          animation: After 3s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-fill-mode: forwards;
          animation-delay: -3s;
          background-color: #6f58ee;
          box-shadow: inset 2px 2px 5px #9786f3;
        }
      }
    }
  }
  @keyframes Before {
    0% {
      left: -40px;
      z-index: 10;
    }
    25% {
      transform: scale(1.4);
      z-index: 10;
    }
    50% {
      left: 40px;
      z-index: 1;
    }
    75% {
      background-color: #42c3c0;
      box-shadow: inset 2px 2px 5px #69cfcd;
      transform: scale(0.6);
      z-index: 1;
    }
    100% {
      left: -40px;
      z-index: 1;
    }
  }
  @keyframes After {
    0% {
      left: 40px;
      z-index: 1;
    }
    25% {
      background-color: #7434f3;
      box-shadow: inset 2px 2px 5px #9564f6;
      transform: scale(0.6);
      z-index: 1;
    }
    50% {
      left: -40px;
      z-index: 10;
    }
    75% {
      transform: scale(1.4);
      z-index: 10;
    }
    100% {
      left: 40px;
      z-index: 10;
    }
  }
  @keyframes Rod {
    0% {
      width: 20px;
    }
    50% {
      width: 5px;
    }
    100% {
      width: 20px;
    }
  }
  @keyframes Spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>
