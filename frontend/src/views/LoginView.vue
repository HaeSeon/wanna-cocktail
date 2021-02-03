<template>
  <div class="login">
    <h1>SignIn</h1>
    <input v-model="user.email" placeholder="E-Mail" />
    <input v-model="user.password" type="password" placeholder="PASSWORD" />
    <button @click="handleLoginButton">Login</button>
    <div v-if="error">{{ error }}</div>
    <router-link to="/signup" class="link">SignUp</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Login",
  data() {
    return {
      user: { email: "", password: "" },
      error: "",
    };
  },
  methods: {
    async handleLoginButton() {
      const email = this.user.email;
      const password = this.user.password;
      try {
        if (!email) {
          throw `이메일을 입력하세요.`;
        }
        if (!password) {
          throw `패스워드를 입력하세요.`;
        }
        const response = await axios
          .post<User>("/auth/login", {
            email,
            password,
          })
          .catch((httpError) => {
            throw httpError.response.data;
          });
        const user = response.data;
        if (user) {
          this.$router.replace("/home");
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
<style scoped>
h1 {
  font-weight: 400;
  text-shadow: 1px 1px 2px rgb(58, 52, 53), 0 0 25px white,
    0 0 5px rgb(252, 84, 109);
}
.login {
  display: flex;
  flex-direction: column;
  margin: 100px;
  margin-left: 30%;
  margin-right: 30%;
  gap: 10px;
  background-color: rgba(58, 52, 53, 0.9);
  padding: 50px;
  padding-top: 10px;
  gap: 20px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
}
.link {
  color: white;
}

input {
  height: 30px;
  padding: 4px 8px;
  border: 1px solid white;
  background-color: rgb(58, 52, 53);
  color: white;
  font-family: -apple-system, system-ui, BlinkMacSystemFont;
}

button {
  height: 50px;
  border: 0px solid white;
  cursor: pointer;
  padding: 4px 8px;
  background-color: rgb(252, 84, 109);
  border-radius: 5px;
  color: white;
  font-family: -apple-system, system-ui, BlinkMacSystemFont;
  font-size: 1.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
