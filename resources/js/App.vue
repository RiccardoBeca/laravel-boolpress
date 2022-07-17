<template>
<div>
  <HeaderComp />
  <div class="container">
    <h1>ciao vue</h1>
    <ul>
      <li v-for="post in posts"
      :key="post.id">
        <p>{{ post.title }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
  

  <FooterComp/>

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
      
      posts: null
    }

  },

  methods:{

    getApi(){

        axios.get('/api/posts')
        .then(response =>{

          this.posts = response.data;

        })

      // console.log('api');
    }

  },

  mounted() {
    
    this.getApi();
    // console.log(axios);

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