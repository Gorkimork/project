<template>
  <NavBar></NavBar>

  <router-view v-slot="{Component}">
    <Transition name="fade" mode='out-in'>
      <Component :is="Component"/>
    </Transition>
  </router-view>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import TEST from './components/TEST.vue'
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'App',
  components:{
  NavBar,
  TEST,
  }
}


</script>

<style>
/* .fade-enter-active,
 .fade-leave-active {
  transition: opacity 0.5s ease;
}

 .fade-enter-from,
 .fade-leave-to {
    opacity: 0;
}*/

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nirmala UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  input {
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    outline:none;
 }
  input:focus {
      border:#efa507 2px solid;
      box-shadow: 0px 0px 10px #efa507;
      -webkit-box-shadow: 0px 0px 10px #efa507;
      -moz-box-shadow: 0px 0px 10px #efa507;
      border-radius: 5px;
}


.link a {
    display: inline-block;
    color: #ffffff; /* Цвет обычной ссылки */
    line-height: 1;
    text-decoration: none; /* Убираем подчеркивание */
    cursor: pointer;
    margin-right: 100px;

}
.link a:after {
    background-color: #ffffff; /* Цвет линии при наведении на нее курсора мыши */
    display: block;
    content: "";
    height: 2px; /* Высота линии */
    width: 0%;
    -webkit-transition: width .3s ease-in-out;
    -moz--transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;

}
.link a:hover:after,
.link a:focus:after {
    width: 100%;
}

.link{
  width: 300px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 98px;
  padding-top: 25px;
  font-weight: bold;
  font-size: large;

}


  </style>
