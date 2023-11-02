<template>
    <div class="vue-tempalte">
        <form class="text-signin" @submit.prevent="submitForm">
            <h3>Вход</h3>
 
            <form class="form-group" >
                <label 

                >Email</label>

                <input 
                required="required"
                type="email" 
                v-model="formData.email"
                class="form-control-lg"/>
                <span                   
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                    class="text-red"><p>Поле заполненно неправильно</p></span>

            </form>
 
            <form class="form-group" >
                <label>Пароль</label>
                <input
                required="required"               
                v-model="formData.password" 
                type="password" 
                class="form-control-lg" />
                  <span                   
                    v-for="error in v$.password.$errors"
                    :key="error.$uid"
                    class="text-red"><p>Пароль должен иметь не меньше 4-ех символов</p></span>
            </form>

            <button  type="submit" class="btn">Войти</button>

 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link :to="({name: 'forgot-password'})">Забыли пароль?</router-link>
            </p>
            <p class="signup-text">
                <RouterLink :to="({name: 'signup'})">Нет учётной записи?</RouterLink>
            </p>
 
          </form>
      </div>
</template>
 



<script>

</script>

<script setup>
import {reactive, computed} from "vue";
import useVuelidate from "@vuelidate/core";
import {required, minLength, email} from "@vuelidate/validators";

import{

    useRouter
} from 'vue-router'
const router = useRouter()


const formData = reactive({
  email: "",
  password: ""
})

const rules = computed(() => {
  return{  
  email: {required, email},
  password: {required, minLength: minLength(4)} }
})   


const v$ = useVuelidate(rules, formData)

const submitForm = async () =>{
  const result = await v$.value.$validate();
  if (result){
    console.log('success, form submitted')
    router.push('/')
   
} else {
  console.log("error, form not submitted")

}

}



</script>

<style scoped>

.text-red{
  color: red;

}


.form-group {
  height: 100px;
  display: grid;
  width: 355px;
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
    margin-top: 5px;
    margin-bottom: 5px;
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