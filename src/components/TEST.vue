<template>
    <div class="vue-tempalte">
      <!-- Navigation -->
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">

          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link pr-3" :to="({name: 'enter'})">Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" :to="({name: 'signup'})">Sign up</router-link>
            </li>
          </ul>
        </div>
      </nav>
   
      <!-- Main -->
      <div class="App">
        <div class="vertical-center">
          <div class="inner-block">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>


