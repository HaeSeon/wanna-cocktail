<template>
  <tool-bar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolBar from "../components/ToolBar.vue";

export default defineComponent({
  name: "Home",
  components: { ToolBar },
});
</script>

<style scoped>
.home {
  padding: 5%;
}
</style>
