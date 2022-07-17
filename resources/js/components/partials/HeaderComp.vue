<template>
  <header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Chi Siamo</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>

  </header>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style lang="scss"scoped>

header{
  background-color: rgb(30, 1, 30);
  height: 70px;


  ul{
    list-style: none;
    text-align: center;
    padding: 20px;
    li{
      display: inline-block;
      padding-right: 15px;
      a{
        color: white;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
          color:rgb(105, 105, 166);
        }
      }
    }
  }
}

</style>