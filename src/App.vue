<template>
  <div id="app">
    <vue-particles
      color="#515a6e"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#515a6e"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .lizi {
    position: fixed;
    z-index: -1;
    top: 0px;
    left: 0px;
    background: #f5f7f9;
    width: 100vw;
    height: 100vh;
  }
</style>
