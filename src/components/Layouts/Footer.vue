<template>
  <footer class="site-foote">
    <div class="container">
      <div class="row">
        <div>
          <div>
            <h1>Quick Links</h1>
            <ul class="footer-links">
              <li><a href="http://localhost:8080/">Home</a></li>
              <li><a href="http://localhost:8080/randomizer">Randomizer</a></li>
              <li>
                <a href="http://scanfcode.com/categories"></a>
              </li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-about">
          <h1>About</h1>
          <p class="footer-about">
            Rick & Morty is the exclusive platform, where you can find all
            characters of the cartoon universe.
          </p>
        </div>
        <div class="footer-about">
          <h1>Generated sitemap from router</h1>
          <p class="footer-about">
            {{ sitemap }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { getRoutesXML } from "../../router/index";

//This is footer layout component, that is being used in all pages
export default class Footer extends Vue {
  private sitemap: string = getRoutesXML();
}
</script>

<style scoped>
footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.footer-about p {
  text-align: center;
  padding: 20px;
  font-size: 20px;
  color: #00b2c8;
}
.footer-about h1 {
  text-align: center;
  padding-top: 20px;
}
footer h1 {
  text-align: center;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 10px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #00b2c8;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  text-align: center;
  font-size: 20px;
}
.footer-links a {
  color: #00b2c8;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
</style>
