<template>
  <div class="box">
    <div class="container">
      <h1 class="txt-center">member login</h1>
      <label for="uname"><b>아이디</b></label
      ><input
        v-model="userid"
        name="uname"
        type="text"
        placeholder="아무거나 입력하세요."
        required
      />

      <label for="psw"><b>pasword</b></label
      ><input
        v-model="passwd"
        name="psw"
        type="password"
        placeholder="아무거나 입력하세요."
      />

      <button type="submit" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userid: "",
      passwd: ""
    };
  },
  mounted() {
    console.log(process.env);
    console.log(process.env.VUE_APP_API);
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        userId: this.userid,
        passwd: this.passwd
      });
      //TODO: 여기서 라우터 할래?
      // .then(res => {
      //   if (res.status === 200) {
      //     this.$router.push({ name: `${res.data.start}` });
      //   } else {
      //     alert("뭐지?");
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  border: 3px solid #f1f1f1;
}

.txt-center {
  text-align: center;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}
</style>
