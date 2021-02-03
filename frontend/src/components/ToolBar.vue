<template>
  <div class="toolbar-container">
    <div class="title">Wanna Cocktail</div>
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/home/recipe">Recipe</router-link>
      <router-link to="/home/mypage">Mypage</router-link>
    </div>
    <div class="auth-nav">
      <router-link to="/home/login">Sign In</router-link>
      <router-link to="/home/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.toolbar-container {
  padding: 20px;
  background-color: rgba(252, 84, 109, 0.37);
  display: flex;
}

.title {
  font-weight: bold;
  font-size: 1.5em;
  flex-grow: 1;
  align-items: center;
}
.nav {
  display: flex;
  margin: 0 0;
  justify-content: space-evenly;
  flex-grow: 4;
}

.nav a {
  font-weight: bold;
  color: rgb(58, 52, 53);
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: white;
}

.auth-nav {
  align-items: center;
  gap: 10px;
  flex-grow: 1;
}

.auth-nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;

  padding: 5px;
}
.auth-nav a.router-link-exact-active {
  border: 1px solid white;
  border-radius: 5px;
}
</style>