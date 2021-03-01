import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/Content", //Home/Content
        component: () => import("../views/test.vue")
      },
      {
        //FIXME: 잘못된 경로 들어왔을때 빈화면 안보려주려
        path: "",
        component: () => import("@/components/blank.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
