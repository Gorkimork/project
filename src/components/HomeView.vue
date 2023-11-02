<template>
    <main>
        <header class="bottom">
            <section class="header-bottom">        
            <section class="link">
                <section class="link-home">
                    <router-link :to="({name: 'home'})">Главная</router-link>
                </section>
                <section class="link-kit">
                    <router-link :to="({name: 'kit'})">Наборы</router-link>
                </section>
                <section class="link-book">
                    <router-link :to="({name: 'book'})">Манга</router-link>
                </section>

            </section>
            <section>
            <RouterView/>
            </section>

            </section>
        </header>
        <section class="manga-home">
            <div class="manga-main">
                <h1>Манга</h1>
                <hr>
            </div>
            
            <section class="new-manga">
                <div class="new-manga-text">
                    <h2>Новинки</h2>
                </div>
            <section class="new-manga-before">
                <div class="new-manga-img">
                    <router-link :to="({name: 'manga1'})"><img class="manga1-img" src="../assets/manga1.png" alt="manga1">
                    <h4>Citrus</h4>
                    </router-link>
                    
                </div>
                <div class="new-manga-img">
                    <router-link :to="({name: 'manga2'})"><img class="manga2-img" src="../assets/manga2.png" alt="manga2">
                    <H4>Divine Nanami</H4>
                    </router-link>
                </div>
                <div class="new-manga-img">
                    <router-link :to="({name: 'manga3'})"><img class="manga3-img" src="../assets/manga3.png" alt="manga3">
                    <h4>AKB49</h4>
                    </router-link>
                </div>
                <div class="new-manga-img">
                    <router-link :to="({name: 'manga4'})"><img class="manga4-img" src="../assets/manga4.png" alt="manga4">
                    <h4>Snowing Weather</h4>
                    </router-link>
                </div>
                <div class="new-manga-img">
                    <router-link :to="({name: 'manga5'})"><img class="manga5-img" src="../assets/manga5.png" alt="manga5">
                    <h4>Dead Note</h4>
                    </router-link>
                </div>
            </section>
            <div id="app">

                <ShowMore></ShowMore>
                <hr>
            </div>

            </section>
            <section class="popular-manga">
                <div class="popular-manga-text">
                    <h3>Популярное</h3>
                </div>
                <section class="popular-manga-before">
                <div class="popular-manga-img">
                    <router-link :to="({name: 'manga3'})">
                        <img class="manga3-img" src="../assets/manga3.png" alt="manga3">
                        <h4>AKB49</h4>
                    </router-link>
                    
                </div>
                <div class="popular-manga-img">
                    <router-link :to="({name: 'manga4'})"><img class="manga4-img" src="../assets/manga4.png" alt="manga4">
                    <h4>Snowing Weather</h4>
                    </router-link>
                </div>
                <div class="popular-manga-img">
                    <router-link :to="({name: 'manga2'})"><img class="manga2-img" src="../assets/manga2.png" alt="manga2">
                    <h4>Divine Nanami</h4>
                    </router-link>
                </div>
                <div class="popular-manga-img">
                    <router-link :to="({name: 'manga5'})"><img class="manga5-img" src="../assets/manga5.png" alt="manga5">
                    <h4>Dead Note</h4>
                    </router-link>
                </div>
                <div class="popular-manga-img">
                    <router-link :to="({name: 'manga1'})"><img class="manga1-img" src="../assets/manga1.png" alt="manga1">
                    <h4>Citrus</h4>
                    </router-link>
                </div>
                
            </section>
            <div id="app">

                <ShowMore></ShowMore>
            </div>
                
            </section>
        </section>
    </main>
</template>

<style scoped>
.bottom  {
        background-color: #333;
        display: flex;
        height: 75px;  
        width: 1360px;
        transition: all 0.30s ease-in-out;
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        
    }

.header-bottom{
    width: 510px;
   
}
.bottom a{
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
}
.bottom a:hover {
    text-shadow: 0 0 10px #efa507,
    0 0 10px #efa507,
    0 0 0px #efa507,
    0 0 10px #efa507,
    0 0 0px #efa507;
    -webkit-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
    -moz-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
}

.manga-home a {
    color: #333;
    text-decoration: none;
    text-align: center;
    display: block;

}
.manga-home h4 {
    height: 66px;
}
.manga-home{
    color: #333;
    padding-left: 30px;
    margin-top: 30px;
}
.new-manga{
    width: 1000px;
    margin-left: 20px;
}
.popular-manga{
    width: 1000px;
    margin-left: 20px;
}
.popular-manga-before{
    display: flex;
}
.popular-manga-img{
    margin-right: 60px;
    margin-bottom: 60px;
    width: 150px;
    height: 280px;
    box-shadow:0px 0px 10px #333;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
}
.popular-manga-img:hover{
    box-shadow: 10px 1px 20px #333;
    -webkit-box-shadow: 10px 1px 20px #333;
    -moz-box-shadow: 10px 1px 20px #333;
}
.new-manga-before{
    display: flex;
}
.new-manga-img{
    margin-right: 60px;
    margin-bottom: 60px;
    width: 150px;
    height: 280px;
    box-shadow:0px 0px 10px #333;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
}
.new-manga-img:hover{
    box-shadow: 10px 1px 20px #333;
    -webkit-box-shadow: 10px 1px 20px #333;
    -moz-box-shadow: 10px 1px 20px #333;
}


.new-manga-text{
    margin-bottom: 30px;
    margin-top: 40px;
}
.popular-manga-text{
    margin-bottom: 30px;
    margin-top: 40px;   
}

.manga-main{
    margin-left: 20px;
}




.manga1-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;}
.manga2-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga3-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;
}
.manga4-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga5-img {
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga6-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga7-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;
}
.manga8-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga9-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}
.manga10-img{
    width: 150px;
    height: 213px;
    margin-right: 50px;

}

hr {
background-image: linear-gradient(to right, #333, transparent);
border: 0;
height: 2px;
margin: 22px 0 22px 0;box-sizing:
content-box;
display: block;
}

</style>


<script>
import ShowMore from './ShowMore.vue';
 
 export default {
   name: 'App',
   components: {
    ShowMore
   }
 };

</script>
<script setup>
//import{
//    useRouter,
//   useRoute
//} from 'vue-router'
//const router = useRouter()
//const route = useRoute()
</script>