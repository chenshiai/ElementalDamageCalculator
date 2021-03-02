import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import route from "./router";
import "vant/lib/index.css";
import { Toast } from "vant";

createApp(App).use(route).use(Toast).mount("#app");

Vue.directive("drag", (el, { modifiers, value }) => {
  el.style.position = "absolute";
  let { x, y } = modifiers;

  el.addEventListener("mousedown", donw);

  var disX, disY;
  function donw(e) {
    disX = e.offsetX;
    disY = e.offsetY;
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  }

  function move(e) {
    var l = e.clientX - disX;
    var t = e.clientY - disY;

    if (value) {
      if (x) {
        el.style.left = l + "px";
      }
      if (y) {
        el.style.top = t + "px";
      }

      if ((x && y) || (!x && !y)) {
        el.style.left = l + "px";
        el.style.top = t + "px";
      }
    }
  }

  function up(e) {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
  }
});
