export function mountLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");

  if (!loadingScreen) {
    throw new Error("The loading screen component could not be found.");
  }

  window.addEventListener("load", () => {
    loadingScreen.classList.add("is-ready");
  });
}
