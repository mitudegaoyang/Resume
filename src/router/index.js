import Vue from 'vue';
import Router from 'vue-router';
// import Container from '@/components/Container'
import Home from '@/views/Home';
import Ability from '@/views/Ability';
import Project from '@/views/Project/Project';
import Experience from '@/views/Experience';
import Education from '@/views/Education';
import Evaluation from '@/views/Evaluation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/ability',
      name: 'ability',
      component: Ability
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/evaluation',
      name: 'evaluation',
      component: Evaluation
    }
  ]
});
