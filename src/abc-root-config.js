import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@abc/single-spa-demo-nav",//Application name
  () => System.import("@abc/single-spa-demo-nav"),//The second argument to registerApplication must be either a function that returns a promise loading function or the resolved Application.
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@abc/single-spa-demo-page-one",
  () => System.import("@abc/single-spa-demo-page-one"),
  isActive.page1,
  { domElement: document.getElementById('page-1-container') }
);

registerApplication(
  "@abc/single-spa-demo-page-two",
  () => System.import("@abc/single-spa-demo-page-two"),
  isActive.page2,
  { domElement: document.getElementById('page-2-container') }
);

start();
