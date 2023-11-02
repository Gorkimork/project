<template>
    <div class="vue-tempalte">
        <form class="text-signin">
            <h4>Восстановление пароля</h4>
 
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control-lg" />
            </div>
 
            <button type="submit" @click="router.push({name: 'enter'})" class="btn">Сбросить пароль</button>
 
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<script setup>
import{

    useRouter
} from 'vue-router'
const router = useRouter()
</script>

<style scoped>

.form-group {
  height: 100px;
  display: grid;
}
.form-control-lg{
  transition: all 0.20s ease-in-out;
  -webkit-transition: all 0.20s ease-in-out;
  -moz-transition: all 0.20s ease-in-out;
  outline:none;
  height: 10px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 7px;

}

.form-control-lg:focus{
  border:#333 2px solid;
      box-shadow: 0px 0px 3px #efa507;
      -webkit-box-shadow: 0px 0px 3px #efa507;
      -moz-box-shadow: 0px 0px 3px #efa507;
      border-radius: 7px;

}
body {
  background: #ffffff !important;
  min-height: 100px;
  display: flex;
  font-weight: 400px;

}
 
body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 350px;
  height: auto;
  margin-left: 500px;
  margin-top: 70px;
}

.text-signin{
    color: #333;
}
.navbar-light {
    background-color: #f2ecee;
    box-shadow: 0px 14px 80px #f6f6f6;
  }
   
  .vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;    
  }
   
  .inner-block {
    width: 450px;
    margin: auto;
    background: #dcdadb;
    box-shadow: 0px 14px 80px #ecebeb;
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
   
  .vertical-center .form-control:focus {
    border-color: #333;
    box-shadow: none;
  }
   
  .vertical-center h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }
   
  label {
    font-weight: 500;
  }
   
  .forgot-password,
  .forgot-password a {

    text-decoration: none;
    padding-top: 10px;
    color: #333;
    margin: 0;
  }
   
  .forgot-password a {
    color: #333;
  }
  
  .signup-text a{
    color: #333;
    text-decoration: none;
}

.btn {
  transition: all 0.50s ease-in-out;
  -webkit-transition: all 0.50s ease-in-out;
  -moz-transition: all 0.50s ease-in-out;
  outline:none;
  
  
  margin-top: 10px;
  color: #333;
  font-weight: bold;
  font-size: large;
}

.btn:hover{
  border:#333 1px solid;
      box-shadow: 0px 0px 5px #333;
      -webkit-box-shadow: 0px 0px 5px #333;
      -moz-box-shadow: 0px 0px 5px #333;
      background: #333;
      color: #ffffff;
 
}

  </style>