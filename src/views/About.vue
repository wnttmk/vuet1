<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li> <router-link :to="{path:'a1'}">A1</router-link></li>
       <li> <router-link :to="{path:'a2'}">A2</router-link></li>
    </ul>
     
   
    <router-view></router-view>
  </div>
   
</template>


<script>

export default {
  name:'about',
   
}
</script>

<style>

</style>