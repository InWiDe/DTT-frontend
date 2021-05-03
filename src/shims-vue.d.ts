import VueRouter from "vue-router";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
  interface Vue {
    $router: VueRouter;
  }
}
