<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="id" placeholder="ID" />
    <input v-model="password" type="password" placeholder="PASSWORD" />
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  data() {
    return {
      user: { id: "", password: "" },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          id: this.user.id,
          password: this.user.password,
        });
        console.log(response);
      } catch {
        console.log("error");
      }
    },
  },
});
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  margin: 100px;
  margin-left: 30%;
  margin-right: 30%;
  gap: 10px;
  background-color: antiquewhite;
  padding: 50px;
  padding-top: 10px;
}

input {
  height: 30px;
}

button {
  height: 40px;
}
</style>
