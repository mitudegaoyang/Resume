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
                        <div class="animate-title">篝火展示区</div>
                        <div class="campfire">
                          <div class="logs">
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                            <div class="log">
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                              <div class="streak"></div>
                            </div>
                          </div>
                          <div class="sticks">
                            <div class="stick"></div>
                            <div class="stick"></div>
                            <div class="stick"></div>
                            <div class="stick"></div>
                          </div>
                          <div class="fire">
                            <div class="fire-red">
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                            </div>
                            <div class="fire-orange">
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                            </div>
                            <div class="fire-yellow">
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                            </div>
                            <div class="fire-white">
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                              <div class="flame"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">茶杯展示区</div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">闹钟展示区</div>
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
  },
  created () {
    var self = this
    self.$loadingBar.finish()
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
          animation-delay: -0.35s;
        }
        .dot:nth-child(2),.dot:nth-child(6) {
          animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-delay: -0.65s;
        }
        .dot:nth-child(3),.dot:nth-child(7) {
          animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
          animation-delay: -0.95s;
        }
        .dot:nth-child(4),.dot:nth-child(8) {
           animation: Rod 1.5s cubic-bezier(0.42, 0, 0.58, 1) infinite;
           animation-delay: -1.25s;
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
      .campfire {
        width: 100%;
        height: 250px;
        .logs {
          position: absolute;
          width: 100%;
          .log {
            position: absolute;
            width: 30px;
            height: 80px;
            background: #781e20;
            border-bottom-left-radius: 13px;
            border-bottom-right-radius: 13px;
            .streak {
              position: absolute;
              width: 2px;
              border-radius: 20px;
              background: #b35050;
            }
            .streak:nth-child(1) {
              top: 15px;
              left: 4px;
              height: 30px;
            }
            .streak:nth-child(2) {
              top: 55px;
              left: 4px;
              height: 15px;
            }
            .streak:nth-child(3) {
              top: 10px;
              left: 9px;
              height: 10px;
            }
            .streak:nth-child(4) {
              top: 30px;
              left: 9px;
              height: 30px;
            }
            .streak:nth-child(5) {
              top: 65px;
              left: 9px;
              height: 15px;
            }
            .streak:nth-child(6) {
              top: 20px;
              left: 16px;
              height: 50px;
            }
            .streak:nth-child(7) {
              top: 10px;
              left: 22px;
              height: 30px;
            }
            .streak:nth-child(8) {
              top: 45px;
              left: 22px;
              height: 30px;
            }
            .streak:nth-child(9) {
              top: 20px;
              left: 27px;
              height: 15px;
            }
            .streak:nth-child(10) {
              top: 43px;
              left: 27px;
              height: 30px;
            }
          }
          .log:before {
            margin: 0 auto;
            content: '';
            display: block;
            background: #b35050;
            position: relative;
            top: -4.5px;
            width: 6px;
            height: 3px;
            border-radius: 50%;
            box-shadow: 0 0 0 1.5px #781e20, 0 0 0 4.5px #b35050, 0 0 0 6px #781e20, 0 0 0 8.5px #b35050, 0 0 0 10px #781e20, 0 0 0 12px #b35050;
          }
          .log:nth-child(1) {
            top: 150px;
            left: 48%;
            z-index: 60;
            transform: rotate(-130deg);
          }
          .log:nth-child(2) {
            top: 160px;
            left: 50%;
            z-index: 50;
            transform: rotate(120deg);
          }
          .log:nth-child(3) {
            top: 160px;
            left: 45%;
            z-index: 10;
            transform: rotate(-90deg);
          }
          .log:nth-child(4) {
            top: 160px;
            left: 49%;
            z-index: 10;
            transform: rotate(71deg);
          }
          .log:nth-child(5) {
            top: 170px;
            left: 55%;
            z-index: 20;
            transform: rotate(-108deg);
          }
          .log:nth-child(6) {
            top: 150px;
            left: 49%;
            z-index: 10;
            transform: rotate(-10deg);
          }
        }
        .sticks {
          position: absolute;
          width: 100%;
          .stick {
            position: absolute;
            width: 5px;
            height: 30px;
            background: #781e20;
            border-radius: 5px;
          }
          .stick:before {
            content: '';
            display: block;
            background: #b35050;
            position: relative;
            width: 5px;
            height: 3px;
            border-radius: 50%;
          }
          .stick:after {
            content: '';
            display: block;
            background: #781e20;
            position: relative;
            left: 3px;
            top: 8px;
            width: 5px;
            height: 2px;
            transform: rotate(-20deg);
          }
          .stick:nth-child(1) {
            top: 230px;
            left: 260px;
            z-index: 60;
            transform-style: preserve-3d;
            transform: rotateZ(110deg) rotateY(180deg);
          }
          .stick:nth-child(2) {
            top: 220px;
            left: 325px;
            z-index: 45;
            transform: rotate(-110deg);
          }
          .stick:nth-child(3) {
            top: 170px;
            left: 245px;
            z-index: 5;
            transform: rotate(-70deg);
          }
          .stick:nth-child(4) {
            top: 172px;
            left: 347px;
            z-index: 15;
            transform: rotate(28deg);
          }
        }
        .fire {
          .fire-red {
            .flame {
              position: absolute;
              width: 20px;
              border-radius: 20px;
              background: #e20f00;
              z-index: 11;
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 245px;
              bottom: 70px;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 95px;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 285px;
              bottom: 110px;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 305px;
              bottom: 95px;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 325px;
              bottom: 70px;
            }
          }
          .fire-orange {
            .flame {
              position: absolute;
              width: 20px;
              border-radius: 20px;
              background: #ff9c00;
              z-index: 12;
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 245px;
              bottom: 60px;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 80px;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 285px;
              bottom: 100px;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 305px;
              bottom: 85px;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 325px;
              bottom: 60px;
            }
          }
          .fire-yellow {
            .flame {
              position: absolute;
              width: 20px;
              border-radius: 20px;
              background: #ffeb6e;
              z-index: 13;
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 265px;
              bottom: 70px;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 285px;
              bottom: 95px;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 305px;
              bottom: 80px;
            }
          }
          .fire-white {
            .flame {
              position: absolute;
              width: 15px;
              border-radius: 15px;
              background: #fef1d9;
              z-index: 14;
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 255px;
              bottom: 50px;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 60px;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 287px;
              bottom: 80px;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 310px;
              bottom: 60px;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 320px;
              bottom: 50px;
            }
          }
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
