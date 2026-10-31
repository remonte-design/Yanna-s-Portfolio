import { mountLoadingScreen } from "../../components/loadingScreen.js";
import { mountPortfolio } from "../../components/portfolio.js?v=social-links-inline-20261031";

mountLoadingScreen();

const loadingScreen = document.querySelector(".loading-screen");
const sceneArt = document.querySelector(".scene-art");
const screenTransition = document.querySelector(".screen-transition");
const portfolioPage = document.querySelector(".portfolio-page");
const skipIntro = document.querySelector(".skip-intro");

if (!(loadingScreen instanceof HTMLElement)) {
  throw new Error("The loading screen component could not be found.");
}

if (!(sceneArt instanceof HTMLObjectElement)) {
  throw new Error("The loading screen illustration could not be found.");
}

if (!(screenTransition instanceof HTMLElement)) {
  throw new Error("The screen transition element could not be found.");
}

if (!(portfolioPage instanceof HTMLElement)) {
  throw new Error("The portfolio page container could not be found.");
}

if (!(skipIntro instanceof HTMLButtonElement)) {
  throw new Error("The skip-intro control could not be found.");
}

mountPortfolio(portfolioPage);

let transitionStarted = false;
let cardTriggerInitialized = false;

function openPinkScreen() {
  if (transitionStarted) {
    return;
  }

  const svgDocument = sceneArt.contentDocument;
  const svgRoot = svgDocument?.documentElement;
  const cardTrigger = svgDocument?.querySelector(".card-trigger");

  if (!svgRoot || svgRoot.localName !== "svg" || !cardTrigger || cardTrigger.localName !== "g") {
    throw new Error("The portfolio card interaction could not be initialized.");
  }

  const illustrationBounds = sceneArt.getBoundingClientRect();
  const svgBounds = svgRoot.getBoundingClientRect();
  const cardBounds = cardTrigger.getBoundingClientRect();
  const scaleX = illustrationBounds.width / svgBounds.width;
  const scaleY = illustrationBounds.height / svgBounds.height;
  const originX =
    illustrationBounds.left +
    (cardBounds.left + cardBounds.width / 2 - svgBounds.left) * scaleX;
  const originY =
    illustrationBounds.top +
    (cardBounds.top + cardBounds.height / 2 - svgBounds.top) * scaleY;

  screenTransition.style.setProperty("--origin-x", `${originX}px`);
  screenTransition.style.setProperty("--origin-y", `${originY}px`);
  screenTransition.classList.add("is-opening");
  transitionStarted = true;
}

skipIntro.addEventListener("click", openPinkScreen);

screenTransition.addEventListener("animationend", (event) => {
  if (event.animationName === "pink-screen-reveal") {
    portfolioPage.hidden = false;
    portfolioPage.dispatchEvent(new Event("portfolio:visible"));
    document.documentElement.classList.add("portfolio-active");
    document.title = "Riyanna Monte | Portfolio";
    loadingScreen.hidden = true;
    portfolioPage.querySelector("#portfolio-title")?.focus({ preventScroll: true });
    screenTransition.classList.remove("is-opening");
    screenTransition.classList.add("is-revealing-portfolio");
    return;
  }

  if (event.animationName === "portfolio-screen-fade") {
    screenTransition.hidden = true;
  }
});

function initializeCardTrigger() {
  if (cardTriggerInitialized) {
    return;
  }

  const cardTrigger = sceneArt.contentDocument?.querySelector(".card-trigger");

  if (!cardTrigger || cardTrigger.localName !== "g") {
    throw new Error("The portfolio card interaction could not be initialized.");
  }

  cardTrigger.addEventListener("click", openPinkScreen);
  cardTrigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPinkScreen();
    }
  });
  cardTriggerInitialized = true;
}

sceneArt.addEventListener("load", initializeCardTrigger, { once: true });

if (sceneArt.contentDocument?.querySelector(".card-trigger")) {
  initializeCardTrigger();
}
