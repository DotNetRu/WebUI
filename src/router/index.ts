import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Editor from "@/components/Editor.vue";
import Result from "@/components/Result.vue";

export default new Router({
  routes: [
    {
      path: "/editor",
      name: "Editor",
      component: Editor,
      alias: "/"
    },
    {
      path: "/result",
      name: "Result",
      component: Result
    }
  ]
})
