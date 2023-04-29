const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // store the triggered event
  window.deferredPrompt = event;
  console.log("storing beforeInstallprompt event", event);

  // toggle install button visbility on
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  console.log("install button clicked");
  const promptEvent = window.deferredPrompt;
  console.log(promptEvent);
  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();

  // Reset the deferred prompt variable. It can only be used once
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
