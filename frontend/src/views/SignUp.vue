<template>
  <div class="signup">
    <h1>SignUp</h1>
    <input v-model="user.email" placeholder="E-Mail" />
    <input v-model="user.name" placeholder="NAME" />
    <input v-model="user.password" type="password" placeholder="PASSWORD" />
    <button @click="handleSignUpButton">SignUp</button>
    <div v-if="error">{{ error }}</div>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      user: { email: "", password: "", name: "" },
      error: "",
    };
  },
  methods: {
    async handleSignUpButton() {
      const email = this.user.email;
      const password = this.user.password;
      const name = this.user.name;
      try {
        if (!email) {
          throw `이메일을 입력하세요`;
        }
        if (!password) {
          throw `패스워드를 입력하세요`;
        }
        if (!name) {
          throw `이름을 입력하세요`;
        }
        const response = await axios
          .post<User>("/auth/signup", {
            email,
            password,
            name,
          })
          .catch((httpError) => {
            throw httpError.response.data;
          });
        const user = response.data;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>
<style scoped>
.signup {
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
