<template>
  <div id="app">
    <vue-particles
      color="#D2D3D6"
      :particleOpacity="0.7"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="5"
      linesColor="#D2D3D6"
      :linesWidth="2"
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
