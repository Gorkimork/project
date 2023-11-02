<template>
    <header>
    <section class="header-top">        
            <img class="logo" alt="logo" src="../assets/logo.png">
        <section class="search">
            <form class="search-input-logo">   
                <input placeholder="Найти книженку" type="text" class="header-search">
                <button type="submit" @click="router.replace({name: 'home'})"  class="button-search">
                    <img class="search-logo" alt="logo-search" src="../assets/search.png">
                </button>
            </form>

        </section>


        <section class="link-crate">
            <router-link :to="({name: 'crate'})" class="text-crate">Корзина</router-link>
            <router-link :to="({name: 'crate'})">
                <img  src="../assets/crate.png" alt="crate-shop">
            </router-link>
            

        </section>
        <section class="link-enter">
            <router-link :to="({name: 'enter'})" class="text-enter">Войти</router-link>
        </section>


        
    </section>


        
        
    </header>
</template>




<!--Стили для Navbar-->
<style scoped>
    /* Стиль КОРЗИНЫ */

        .link-crate{
            margin-left: 100px;
            margin-right: 100px;
            
            display: flex;
            align-items: center;
        }
    /*Стиль ссылки на CRATE */
        .text-crate{
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
            font-weight: bold;
            font-size: large;
            transition: all 0.30s ease-in-out;
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
        }
        .text-crate:hover{
                        
            text-shadow: 0 0 10px #efa507,
                0 0 20px #efa507,
                0 0 0px #efa507,
                0 0 20px #efa507,
                0 0 0px #efa507;
            -webkit-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
            -moz-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
}
        
     /*Стиль картинки корзины */   
        .link-crate img{
            width: 25px;
            height: auto;
            margin-left: 10px;

        }
    /*Стиль для ВОЙТИ*/
        .text-enter{
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
            font-weight: bold;
            font-size: large;
            transition: all 0.30s ease-in-out;
            -webkit-transition: all 0.30s ease-in-out;
            -moz-transition: all 0.30s ease-in-out;
        }

        .text-enter:hover{
            
            text-shadow: 0 0 10px #efa507,
                0 0 20px #efa507,
                0 0 0px #efa507,
                0 0 20px #efa507,
                0 0 0px #efa507;
            -webkit-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
            -moz-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
}
        

        header {
            background-color: #333;
            display: flex;;
            height: 115px;  
            width: 1360px;
            text-align: center;
        }

        .header-top{
            align-items: center;
            display: flex;
        }
        .logo{
            width: 100px;
            height: 110px;
            margin-left: 30px;
            margin-top: 10px;
        }
        

        .search-input-logo{
            border-radius: 5px;
            background-color: white;
            height: 44px;
            display: flex;


        }
        .header-search{
            display: inline;
            border: 0;
            background-color: transparent;
            height: 44px;
            width: 650px;
            line-height: 24px;
            padding: 9px 80px 9px 15px
           


        }

        .button-search{
            border-radius: 3px;
            background-color: #333;
            margin-left: 609px;
            margin-top: 5px;
            cursor: pointer;
            width: 35px;
            height: 35px;
            border: 0;
            align-items: center;
            position: absolute;
        }


        

        .search-logo{
            width: 25px;
            height: 25px;

        }
        .search{
            margin-left: 50px;
            padding-top: 0;
            margin-right: 32px;
            width: 100%;
            display: flex;
            align-items: center;

        }



</style>



<script setup>
import{
    useRouter,
//    useRoute
} from 'vue-router'
const router = useRouter()
//const route = useRoute()
</script>


