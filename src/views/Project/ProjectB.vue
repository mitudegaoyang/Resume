<template>
  <div class="home">
    <i-row>
      <i-col>
        <NavBar :activeName="'projectB'"></NavBar>
      </i-col>
    </i-row>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue' // 引进菜单模板
export default {
  name: 'ProjectB',
  components: {
    NavBar // 使用菜单组件
  },
  data () {
    return {
      msg: 'ProjectB'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
