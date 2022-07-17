<template>
<div>
  <HeaderComp />
 
  <!-- con router view vado ad innestare tutte le pagine -->
  <main>

    <router-view></router-view>

  </main>
  

  <FooterComp />

</div>



</template>

<script>

import HeaderComp from './components/partials/HeaderComp.vue';
import FooterComp from './components/partials/FooterComp.vue'

export default {
  name: 'App',
  components:{

    HeaderComp,
    FooterComp,


  },

  data(){
    
    return{
    }

  },

  methods:{


  },

  mounted() {
    
    

  },
}
</script>

<style lang="scss" scoped>

li{
  padding: 10px;
  p{
    padding-bottom: 10px;
  }

}

</style>