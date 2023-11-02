<template>
    <div >
      <button class="btn" @click="toggleVisibility">{{ buttonText }}</button>
      <div class="new-manga-more" v-if="isVisible">
        <div class="manga-img">        
            <router-link :to="({name: 'manga6'})"><img class="manga6-img" src="../assets/manga6.png" alt="manga6">
            <h4>White Blindfold</h4>
            </router-link>
        </div>
        <div class="manga-img">
            <router-link :to="({name: 'manga7'})"><img class="manga7-img" src="../assets/manga7.png" alt="manga7">
            <h4>Bleach</h4>
            </router-link>
        </div>
        <div class="manga-img">        
            <router-link :to="({name: 'manga8'})"><img class="manga8-img" src="../assets/manga8.png" alt="manga8">
            <h4>Dead Note 2</h4>
            </router-link>
        </div>
        <div class="manga-img">        
            <router-link :to="({name: 'manga9'})"><img class="manga9-img" src="../assets/manga9.png" alt="manga9">
            <h4>Chains of hands</h4>
            </router-link>
        </div>
        <div class="manga-img">
            <router-link :to="({name: 'manga10'})"><img class="manga10-img" src="../assets/manga10.png" alt="manga10">
            <h4>Yellow Flowers</h4>
            </router-link>
        </div>
        



      </div>
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        isVisible: false
      };
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    },
    computed: {
      buttonText() {
        return this.isVisible ? 'Скрыть' : 'Увидеть больше';
      }
    }
  };
  </script>
   
  <style scoped>
  button {
    margin-bottom: 5px;
    
    margin-top: 10px;
  }

  .new-manga-more h4{ 
    height: 66px;
  }
  .new-manga-more{
    display: flex;
    margin-right: 20px;
    margin-bottom: 40px;

 }

 .new-manga-more a {
    text-align: center;
    color: #333;
    text-decoration: none;
    display: block;
 }


 .manga-img{
    margin-right: 60px;
    margin-bottom: 60px;
    width: 150px;
    height: 280px;
    box-shadow:0px 0px 10px #333;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
}
.manga-img:hover{
    box-shadow: 10px 1px 20px #333;
    -webkit-box-shadow: 10px 1px 20px #333;
    -moz-box-shadow: 10px 1px 20px #333;
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

img{
    box-shadow:0px 0px 10px #333;
    transition: all 0.30s ease-in-out;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
}
img:hover{
    box-shadow: 10px 1px 20px #333;
    -webkit-box-shadow: 10px 1px 20px #333;
    -moz-box-shadow: 10px 1px 20px #333;
}

  .btn {
  width: 150px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #333;
  outline: none;
  transition: 0.4s ease-in-out;
}
.btn:hover {
  transition: 0.4s ease-in-out;
  background: #333 ;
  color: #fff

}



  </style>