<template>
  <div id="app">
    <header>
      <span style="color:black;">{{ this.$store.state.auth.id }}님</span>
      <div id="nav">
        <!-- <router-link to="/">Login</router-link> | -->
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 50px;
  padding: 1rem;
  color: white;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1,
p {
  margin: 0;
}
main {
  padding: 1rem;
  height: 100%;
}

body {
  padding-top: 50px;
  background: white;
}

* {
  box-sizing: border-box;
}
</style>
