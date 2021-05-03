import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import CharacterDetails from "@/views/CharacterDetails.vue";
import Randomizer from "@/views/Randomizer.vue";
import PageNotFound from "@/components/Layouts/NotFound.vue";

//Defined routing for the whole app
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/character/:id",
    name: "CharacterDetails",
    component: CharacterDetails,
  },
  {
    path: "/randomizer",
    name: "Randomizer",
    component: Randomizer,
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Getting all routes to generate sitemap
function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== "*") {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

//Convert Routes list to the XML format and write to the file
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getRoutesXML() {
  const list = getRoutesList(router.options.routes, "https://localhost:8080")
    .map((route) => `<url><loc>${route}</loc></url>`)
    .join("\r\n");
  return `<urlset xmlns="https://localhost:8080/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

console.log(getRoutesXML());
getRoutesXML();

export default router;
