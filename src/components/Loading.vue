<template>
  <div>
    <div class="square1" v-if="types === 1">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
      </div>
    </div>
    <div class="square2" v-if="types === 2">
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
    <div class="square3" v-if="types === 3">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
      </div>
    </div>
    <div class="square4" v-if="types === 4">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
      </div>
    </div>
    <div class="square5" v-if="types === 5">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
      </div>
    </div>
    <div class="square6" v-if="types === 6">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
      </div>
    </div>
    <div class="square7" v-if="types === 7">
      <div class="loading-center-absolute">
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
        <div class="loading-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading', // 模板名称
  data () {
    return {}
  },
  props: {
    'types': {
      type: Number,
      required: true
    }
  },
  created () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .loading-center-absolute {
    margin: 0 auto;
    width: 100px;
  }
  /**块状动效1**/
  .square1 {
    .loading-center-absolute {
      .loading-item {
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        background: #f78070;
        transform-style: preserve-3d;
        animation: square1 1s infinite ease-in-out;
      }
    }
  }
  @keyframes square1 {
    0% {
      transform: perspective(100px) rotateX(0deg) rotateZ(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(-180deg) rotateZ(0deg);
    }
    100% {
      transform: perspective(100px) rotateX(-180deg) rotateZ(-180deg);
    }
  }
  /**块状动效2**/
  .square2 {
    .loading-center-absolute {
      position: relative;
      .loading-item-big {
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        background: #f8a05b;
        transform: rotate( 45deg);
        animation: square2 2s 0.4s infinite ease-in-out;
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
        animation: square2-1 2s 0.125s infinite ease-in-out;
      }
      .loading-item-little:nth-child(2) {
        left: 4px;
        top: -30px;
        animation: square2-2 2s 0.25s infinite ease-in-out;
      }
      .loading-item-little:nth-child(3) {
        left: 40px;
        top: -65px;
        animation: square2-3 2s 0.375s infinite ease-in-out;
      }
      .loading-item-little:nth-child(4) {
        right: 4px;
        top: -30px;
        animation: square2-4 2s 0.5s infinite ease-in-out;
      }
      .loading-item-little:nth-child(5) {
        right: -30px;
        bottom: 5px;
        animation: square2-5 2s 0.625s infinite ease-in-out;
      }
      .loading-item-little:nth-child(6) {
        right: 4px;
        bottom: -30px;
        animation: square2-6 2s 0.75s infinite ease-in-out;
      }
      .loading-item-little:nth-child(7) {
        left: 40px;
        bottom: -65px;
        animation: square2-7 2s 0.875s infinite ease-in-out;
      }
      .loading-item-little:nth-child(8) {
        left: 4px;
        bottom: -30px;
        animation: square2-8 2s 0.8s infinite ease-in-out;
      }
    }
  }
  @keyframes square2 {
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
  @keyframes square2-1 {
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
  @keyframes square2-2 {
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
  @keyframes square2-3 {
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
  @keyframes square2-4 {
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
  @keyframes square2-5 {
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
  @keyframes square2-6 {
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
  @keyframes square2-7 {
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
  @keyframes square2-8 {
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
  /**块状动效3**/
  .square3 {
    .loading-center-absolute {
      .loading-item {
        position: absolute;
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        border: 3px solid #fbd75e;
        transform-style: preserve-3d;
        animation: square3-1 1s infinite ease-in-out;
      }
      .loading-item:nth-child(2) {
        margin: 90px 25px;
        width: 50px;
        height: 50px;
        animation: square3-2 1s infinite ease-in-out;
      }
      .loading-item:nth-child(3) {
        margin: 80px 15px;
        width: 70px;
        height: 70px;
        animation: square3-1 1s infinite ease-in-out;
      }
    }
  }
  @keyframes square3-1 {
    0% {
      transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(-180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(100px) rotateX(-180deg) rotateY(-180deg);
    }
  }
  @keyframes square3-2 {
    0% {
      transform: perspective(100px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(100px) rotateX(180deg) rotateY(0deg);
    }
    100% {
      transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
  }
  /**块状动效4**/
  .square4 {
    .loading-center-absolute {
      .loading-item {
        position: absolute;
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        border: 3px solid #7298fe;
      }
      .loading-item:nth-child(1) {
        animation: square4-1 1s 0.5s infinite ease-in-out;
      }
      .loading-item:nth-child(2) {
        animation: square4-2 1s infinite ease-in-out;
      }
      .loading-item:nth-child(3) {
        animation: square4-3 1s 0.5s infinite ease-in-out;
      }
      .loading-item:nth-child(4) {
        animation: square4-4 1s infinite ease-in-out;
      }
    }
  }
  @keyframes square4-1 {
    0% {
      left: 195px;
      top: -25px;
      transform: scale(2);
    }
    50% {
      left: 238px;
      top: 17px;
      transform: scale(1);
    }
    100% {
      left: 195px;
      top: -25px;
      transform: scale(2);
    }
  }
  @keyframes square4-2 {
    0% {
      right: 195px;
      top: -25px;
      transform: scale(2);
    }
    50% {
      right: 238px;
      top: 17px;
      transform: scale(1);
    }
    100% {
      right: 195px;
      top: -25px;
      transform: scale(2);
    }
  }
  @keyframes square4-3 {
    0% {
      right: 195px;
      bottom: 10px;
      transform: scale(2);
    }
    50% {
      right: 238px;
      bottom: 55px;
      transform: scale(1);
    }
    100% {
      right: 195px;
      bottom: 10px;
      transform: scale(2);
    }
  }
  @keyframes square4-4 {
    0% {
      left: 195px;
      bottom: 10px;
      transform: scale(2);
    }
    50% {
      left: 238px;
      bottom: 55px;
      transform: scale(1);
    }
    100% {
      left: 195px;
      bottom: 10px;
      transform: scale(2);
    }
  }
  /**块状动效5**/
  .square5 {
    .loading-center-absolute {
      .loading-item {
        position: absolute;
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        background: #f78070;
      }
      .loading-item:nth-child(1) {
        top: -20px;
        left: 200px;
        animation: square5 0.9s -0.8s infinite ease-in-out;
      }
      .loading-item:nth-child(2) {
        top: -20px;
        animation: square5 0.9s -0.7s infinite ease-in-out;
      }
      .loading-item:nth-child(3) {
        top: -20px;
        left: 276px;
        animation: square5 0.9s -0.6s infinite ease-in-out;
      }
      .loading-item:nth-child(4) {
        left: 200px;
        animation: square5 0.9s -0.5s infinite ease-in-out;
      }
      .loading-item:nth-child(5) {
        animation: square5 0.9s -0.4s infinite ease-in-out;
      }
      .loading-item:nth-child(6) {
        left: 276px;
        animation: square5 0.9s -0.3s infinite ease-in-out;
      }
      .loading-item:nth-child(7) {
        top: 56px;
        left: 200px;
        animation: square5 0.9s -0.2s infinite ease-in-out;
      }
      .loading-item:nth-child(8) {
        top: 56px;
        animation: square5 0.9s -0.1s infinite ease-in-out;
      }
      .loading-item:nth-child(9) {
        top: 56px;
        left: 276px;
        animation: square5 0.9s 0s infinite ease-in-out;
      }
    }
  }
  @keyframes square5 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }
  /**块状动效6**/
  .square6 {
    .loading-center-absolute {
      .loading-item {
        position: absolute;
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        background: #f8a05b;
      }
      .loading-item:nth-child(1) {
        top: -20px;
        left: 215px;
        animation: square6-1 0.5s 0s infinite alternate;
      }
      .loading-item:nth-child(2) {
        top: -20px;
        right: 215px;
        animation: square6-2 0.5s 0s infinite alternate;
      }
      .loading-item:nth-child(3) {
        left: 215px;
        animation: square6-1 0.5s 0s infinite alternate;
      }
      .loading-item:nth-child(4) {
        right: 215px;
        animation: square6-2 0.5s 0s infinite alternate;
      }
      .loading-item:nth-child(5) {
        top: 56px;
        left: 215px;
        animation: square6-1 0.5s 0s infinite alternate;
      }
      .loading-item:nth-child(6) {
        top: 56px;
        right: 215px;
        animation: square6-2 0.5s 0s infinite alternate;
      }
    }
  }
  @keyframes square6-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      left: 160px;
      top: 18px;
      transform: rotate(-90deg);
    }
  }
  @keyframes square6-2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      right: 160px;
      top: 18px;
      transform: rotate(90deg);
    }
  }
  /**块状动效7**/
  .square7 {
    .loading-center-absolute {
      .loading-item {
        position: absolute;
        margin: 100px 35px;
        width: 30px;
        height: 30px;
        background: #fbd75e;
      }
      .loading-item:nth-child(1) {
        animation: square7-1 2s infinite ease-in-out;
      }
      .loading-item:nth-child(2) {
        animation: square7-2 2s infinite ease-in-out;
      }
      .loading-item:nth-child(3) {
        animation: square7-3 2s infinite ease-in-out;
      }
      .loading-item:nth-child(4) {
        animation: square7-4 2s infinite ease-in-out;
      }
    }
  }
  @keyframes square7-1 {
    0% {
      top: -20px;
      left: 200px;
      transform: rotate(0deg) scale(1);
    }
    25% {
      top: -20px;
      left: 276px;
      transform: rotate(-90deg) scale(0.5);
    }
    50% {
      top: 56px;
      left: 276px;
      transform: rotate(-180deg) scale(1);
    }
    75% {
      top: 56px;
      left: 200px;
      transform: rotate(-270deg) scale(0.5);
    }
    100% {
      top: -20px;
      left: 200px;
      transform: rotate(-360deg) scale(1);
    }
  }
  @keyframes square7-2 {
    0% {
      top: -20px;
      left: 276px;
      transform: rotate(0deg) scale(1);
    }
    25% {
      top: 56px;
      left: 276px;
      transform: rotate(-90deg) scale(0.5);
    }
    50% {
      top: 56px;
      left: 200px;
      transform: rotate(-180deg) scale(1);
    }
    75% {
      top: -20px;
      left: 200px;
      transform: rotate(-270deg) scale(0.5);
    }
    100% {
      top: -20px;
      left: 276px;
      transform: rotate(-360deg) scale(1);
    }
  }
  @keyframes square7-3 {
    0% {
      top: 56px;
      left: 276px;
      transform: rotate(0deg) scale(1);
    }
    25% {
      top: 56px;
      left: 200px;
      transform: rotate(-90deg) scale(0.5);
    }
    50% {
      top: -20px;
      left: 200px;
      transform: rotate(-180deg) scale(1);
    }
    75% {
      top: -20px;
      left: 276px;
      transform: rotate(-270deg) scale(0.5);
    }
    100% {
      top: 56px;
      left: 276px;
      transform: rotate(-360deg) scale(1);
    }
  }
  @keyframes square7-4 {
    0% {
      top: 56px;
      left: 200px;
      transform: rotate(0deg) scale(1);
    }
    25% {
      top: -20px;
      left: 200px;
      transform: rotate(-90deg) scale(0.5);
    }
    50% {
      top: -20px;
      left: 276px;
      transform: rotate(-180deg) scale(1);
    }
    75% {
      top: 56px;
      left: 276px;
      transform: rotate(-270deg) scale(0.5);
    }
    100% {
      top: 56px;
      left: 200px;
      transform: rotate(-360deg) scale(1);
    }
  }
  /**块状动效8**/
  /**块状动效9**/
  /**块状动效10**/
  /**点状动效1**/
  /**点状动效2**/
  /**点状动效3**/
  /**点状动效4**/
  /**点状动效5**/
  /**点状动效6**/
  /**点状动效7**/
  /**点状动效8**/
  /**点状动效9**/
  /**点状动效10**/
  /**线状动效1**/
  /**线状动效2**/
  /**线状动效3**/
  /**线状动效4**/
  /**线状动效5**/
  /**线状动效6**/
  /**线状动效7**/
  /**线状动效8**/
  /**线状动效9**/
  /**线状动效10**/
</style>
