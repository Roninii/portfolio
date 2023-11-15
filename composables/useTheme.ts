const currentTheme = ref<"light" | "dark">("light");
export default function useTheme() {
  if (process.client) {
    // check local storage for saved theme preference and set it
    const themePreference = window.localStorage.getItem("theme");
    if (themePreference) {
      currentTheme.value = themePreference as "light" | "dark";
      currentTheme.value === "light" ? setLightTheme() : setDarkTheme();
    }
  }
  function setLightTheme() {
    currentTheme.value = "light";

    document.documentElement.style.setProperty("--primary", "var(--purple)");
    document.documentElement.style.setProperty(
      "--background",
      "var(--bg--light)"
    );
    document.documentElement.style.setProperty("--text", "var(--text--light");
    document.documentElement.style.setProperty(
      "--link-text",
      "var(--link-text--light"
    );
    document.documentElement.style.setProperty(
      "--active-link-text",
      "var(--active-link-text--light"
    );
    document.documentElement.style.setProperty(
      "--shadow",
      "var(--shadow--light"
    );
    document.documentElement.style.setProperty(
      "--quote-bg",
      "var(--quote-bg--light"
    );

    saveToLocalStorage();
  }

  function setDarkTheme() {
    currentTheme.value = "dark";

    document.documentElement.style.setProperty("--primary", "var(--teal)");
    document.documentElement.style.setProperty(
      "--background",
      "var(--bg--dark)"
    );
    document.documentElement.style.setProperty("--text", "var(--text--dark");
    document.documentElement.style.setProperty(
      "--link-text",
      "var(--link-text--dark"
    );
    document.documentElement.style.setProperty(
      "--active-link-text",
      "var(--active-link-text--dark"
    );
    document.documentElement.style.setProperty(
      "--shadow",
      "var(--shadow--dark"
    );
    document.documentElement.style.setProperty(
      "--quote-bg",
      "var(--quote-bg--dark"
    );

    saveToLocalStorage();
  }

  function toggleTheme() {
    if (currentTheme.value === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }

  function saveToLocalStorage() {
    if (!window) return;

    window.localStorage.setItem("theme", currentTheme.value);
  }

  return {
    toggleTheme,
    currentTheme,
  };
}
