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

        <section>
            <h1>Корзина )))</h1>
        </section>
    </main>
</template>

<style scoped>
.bottom {
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
.bottom a:hover {
    text-shadow: 0 0 10px #efa507,
    0 0 15px #efa507,
    0 0 20px #efa507,
    0 0 30px #efa507,
    0 0 200px #efa507;
    -webkit-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
    -moz-text-shadow: 0px 0px 10px #efa507(81, 203, 238, 1);
}
.tech-work{
    margin-top: 40px;
    color: #333;
    text-align: center;
}

</style>
