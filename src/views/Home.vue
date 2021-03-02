<template>
  <div id="home">
    <div
      v-for="item in this.$store.state.home.homeContent"
      :key="item.id"
      class="root"
    >
      <div class="card">
        <img :src="item.imageUrl" style="width: 100%; height: 10rem;" />
        <div class="container">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("home/getHomeContent");
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#home {
  text-align: center;
}
.card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px 10px;
}

.root {
  padding: 10px 10px;
}

.container {
  padding: 2px 10px;
}
</style>
