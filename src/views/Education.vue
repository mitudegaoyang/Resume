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
                          <div class="sparks">
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                            <div class="spark"></div>
                          </div>
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
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">Loading1</div>
                        <div class="loading1">
                          <div class="loading-center-absolute">
                            <div class="loading-item"></div>
                          </div>
                        </div>
                      </div>
                    </i-col>
                    <i-col span="12">
                      <div class="animate-box">
                        <div class="animate-title">Loading2</div>
                        <div class="loading2">
                          <div class="loading-center-absolute">
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-little"></div>
                            <div class="loading-item-big"></div>
                          </div>
                        </div>
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
        .sparks {
          position: absolute;
          width: 100%;
          .spark {
            position: absolute;
            width: 3px;
            height: 10px;
            background: #fef1d9;
            border-radius: 18px;
            z-index: 50;
            transform-origin: bottom center;
            transform: scaleY(0);
          }
          .spark:nth-child(1) {
            top: 150px;
            left: 275px;
            animation: Spark 1s 0.4s linear infinite;
          }
          .spark:nth-child(2) {
            top: 165px;
            left: 250px;
            animation: Spark 1s 1s linear infinite;
          }
          .spark:nth-child(3) {
            top: 120px;
            left: 280px;
            animation: Spark 1s 0.8s linear infinite;
          }
          .spark:nth-child(4) {
            top: 100px;
            left: 300px;
            animation: Spark 1s 2s linear infinite;
          }
          .spark:nth-child(5) {
            top: 140px;
            left: 320px;
            animation: Spark 1s 0.75s linear infinite;
          }
          .spark:nth-child(6) {
            top: 160px;
            left: 335px;
            animation: Spark 1s 0.65s linear infinite;
          }
          .spark:nth-child(7) {
            top: 130px;
            left: 310px;
            animation: Spark 1s 1s linear infinite;
          }
          .spark:nth-child(8) {
            top: 130px;
            left: 260px;
            animation: Spark 1s 1.4s linear infinite;
          }
        }
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
              box-shadow: 0 0 40px 18px rgba(226,15,0,0.3);
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 245px;
              bottom: 70px;
              animation: Fire 2s 0.15s ease-in-out infinite alternate;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 95px;
              animation: Fire 2s 0.35s ease-in-out infinite alternate;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 285px;
              bottom: 120px;
              animation: Fire 2s 0s ease-in-out infinite alternate;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 305px;
              bottom: 100px;
              animation: Fire 2s 0.3s ease-in-out infinite alternate;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 325px;
              bottom: 70px;
              animation: Fire 2s 0.1s ease-in-out infinite alternate;
            }
          }
          .fire-orange {
            .flame {
              position: absolute;
              width: 20px;
              border-radius: 20px;
              background: #ff9c00;
              z-index: 12;
              box-shadow: 0 0 40px 18px rgba(255,156,0,0.3);
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 245px;
              bottom: 60px;
              animation: Fire 2s 0.05s ease-in-out infinite alternate;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 85px;
              animation: Fire 2s 0.1s ease-in-out infinite alternate;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 285px;
              bottom: 110px;
              animation: Fire 2s 0.4s ease-in-out infinite alternate;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 305px;
              bottom: 90px;
              animation: Fire 2s 0.35s ease-in-out infinite alternate;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 325px;
              bottom: 60px;
              animation: Fire 2s 0.1s ease-in-out infinite alternate;
            }
          }
          .fire-yellow {
            .flame {
              position: absolute;
              width: 20px;
              border-radius: 20px;
              background: #ffeb6e;
              z-index: 13;
              box-shadow: 0 0 40px 18px rgba(255,235,110,0.3);
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 265px;
              bottom: 70px;
              animation: Fire 2s 0.6s ease-in-out infinite alternate;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 285px;
              bottom: 95px;
              animation: Fire 2s 0.38s ease-in-out infinite alternate;
            }
            .flame:nth-child(3) {
              height: 50px;
              left: 305px;
              bottom: 80px;
              animation: Fire 2s 0.18s ease-in-out infinite alternate;
            }
          }
          .fire-white {
            .flame {
              position: absolute;
              width: 15px;
              border-radius: 15px;
              background: #fef1d9;
              z-index: 14;
              box-shadow: 0 0 40px 18px rgba(254,241,217,0.3);
            }
            .flame:nth-child(1) {
              height: 50px;
              left: 255px;
              bottom: 50px;
              animation: Fire 2s 0.22s ease-in-out infinite alternate;
            }
            .flame:nth-child(2) {
              height: 50px;
              left: 265px;
              bottom: 60px;
              animation: Fire 2s 0.42s ease-in-out infinite alternate;
            }
            .flame:nth-child(3) {
              width: 20px;
              height: 50px;
              left: 285px;
              bottom: 80px;
              animation: Fire 2s 0.8s ease-in-out infinite alternate;
            }
            .flame:nth-child(4) {
              height: 50px;
              left: 310px;
              bottom: 60px;
              animation: Fire 2s 0.64s ease-in-out infinite alternate;
            }
            .flame:nth-child(5) {
              height: 50px;
              left: 320px;
              bottom: 50px;
              animation: Fire 2s 0.32s ease-in-out infinite alternate;
            }
          }
        }
      }
      .loading1 {
        .loading-center-absolute {
          margin: 0 auto;
          width: 100px;
          .loading-item {
            margin: 100px 35px;
            width: 30px;
            height: 30px;
            background: #f78070;
            transform-style: preserve-3d;
            animation: Loading1 1s infinite ease-in-out;
          }
        }
      }
      .loading2 {
        .loading-center-absolute {
          position: relative;
          margin: 0 auto;
          width: 100px;
          .loading-item-big {
            margin: 100px 35px;
            width: 30px;
            height: 30px;
            background: #f8a05b;
            transform: rotate( 45deg);
            animation: Loading2 2s 0.4s infinite ease-in-out;
          }
          .loading-item-little {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #f8a05b;
            transform: rotate( 45deg)
          }
          .loading-item-little:nth-child(1) {
            left: -30px;
            top: 5px;
            animation: Loading2-1 2s 0.125s infinite ease-in-out;
          }
          .loading-item-little:nth-child(2) {
            left: 4px;
            top: -30px;
            animation: Loading2-2 2s 0.25s infinite ease-in-out;
          }
          .loading-item-little:nth-child(3) {
            left: 40px;
            top: -65px;
            animation: Loading2-3 2s 0.375s infinite ease-in-out;
          }
          .loading-item-little:nth-child(4) {
            right: 4px;
            top: -30px;
            animation: Loading2-4 2s 0.5s infinite ease-in-out;
          }
          .loading-item-little:nth-child(5) {
            right: -30px;
            bottom: 5px;
            animation: Loading2-5 2s 0.625s infinite ease-in-out;
          }
          .loading-item-little:nth-child(6) {
            right: 4px;
            bottom: -30px;
            animation: Loading2-6 2s 0.75s infinite ease-in-out;
          }
          .loading-item-little:nth-child(7) {
            left: 40px;
            bottom: -65px;
            animation: Loading2-7 2s 0.875s infinite ease-in-out;
          }
          .loading-item-little:nth-child(8) {
            left: 4px;
            bottom: -30px;
            animation: Loading2-8 2s 0.8s infinite ease-in-out;
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
  @keyframes Fire {
    0% {
      transform: scaleY(1);
    }
    28% {
      transform: scaleY(0.7);
    }
    38% {
      transform: scaleY(0.8);
    }
    50% {
      transform: scaleY(0.6);
    }
    70% {
      transform: scaleY(0.95);
    }
    82% {
      transform: scaleY(0.58);
    }
    100% {
      transform: scaleY(1);
    }
  }
  @keyframes Spark {
     0%, 35% {
       transform: scaleY(0) translateY(0);
       opacity: 0;
     }
     50% {
       transform: scaleY(1) translateY(0);
       opacity: 1;
     }
     70% {
       transform: scaleY(1) translateY(-10px);
       opacity: 1;
     }
     75% {
       transform: scaleY(1) translateY(-10px);
       opacity: 0;
     }
     100% {
       transform: scaleY(0) translateY(0);
       opacity: 0;
     }
   }
  @keyframes Loading1 {
    0% {
      transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
      transform: rotateX(-180deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-180deg) rotateZ(-180deg);
    }
  }
  @keyframes Loading2 {
    0% {
      transform: rotate( 45deg) scale(0.7);
    }
    50% {
      transform: rotate( 45deg) scale(1.5);
    }
    100% {
      transform: rotate( 45deg) scale(0.7);
    }
  }
  @keyframes Loading2-1 {
    0% {
      left: -30px;
      top: 5px;
    }
    50% {
      left: 40px;
      top: 5px;
    }
    100% {
      left: -30px;
      top: 5px;
    }
  }
  @keyframes Loading2-2 {
    0% {
      left: 4px;
      top: -30px;
    }
    50% {
      left: 40px;
      top: 5px;
    }
    100% {
      left: 4px;
      top: -30px;
    }
  }
  @keyframes Loading2-3 {
    0% {
      left: 40px;
      top: -65px;
    }
    50% {
      left: 40px;
      top: 5px;
    }
    100% {
      left: 40px;
      top: -65px;
    }
  }
  @keyframes Loading2-4 {
    0% {
      right: 4px;
      top: -30px;
    }
    50% {
      right: 40px;
      top: 5px;
    }
    100% {
      right: 4px;
      top: -30px;
    }
  }
  @keyframes Loading2-5 {
    0% {
      right: -30px;
      bottom: 5px;
    }
    50% {
      right: 40px;
      bottom: 5px;
    }
    100% {
      right: -30px;
      bottom: 5px;
    }
  }
  @keyframes Loading2-6 {
    0% {
      right: 4px;
      bottom: -30px;
    }
    50% {
      right: 40px;
      bottom: 5px;
    }
    100% {
      right: 4px;
      bottom: -30px;
    }
  }
  @keyframes Loading2-7 {
    0% {
      left: 40px;
      bottom: -65px;
    }
    50% {
      left: 40px;
      bottom: 5px;
    }
    100% {
      left: 40px;
      bottom: -65px;
    }
  }
  @keyframes Loading2-8 {
    0% {
      left: 4px;
      bottom: -30px;
    }
    50% {
      left: 40px;
      bottom: 5px;
    }
    100% {
      left: 4px;
      bottom: -30px;
    }
  }
</style>
