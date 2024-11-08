function modeDark(darkMode) {
  const root = document.documentElement;
  if (!darkMode) {
    // dark mode
    root.style.setProperty("--header-search-bg-color", "#2c2c22");
    root.style.setProperty("--header-search-placeholder-text-color", "#a9a9a9");
    root.style.setProperty("--header-login-btn-border-color", "#4a4a4a");
    root.style.setProperty("--header-svg-color-primary", "#ffffff");
    root.style.setProperty("--x-line-color", "#4a4a4a");
    root.style.setProperty("--bg-header-main", "#2c2c2c");
    root.style.setProperty("--bg-wrapper", "#2c2c2c");
    root.style.setProperty("--normal-text-color", "#cacaca");
    darkMode = true;
  } else {
    // light mode
    root.style.setProperty("--header-search-bg-color", "#f0f0f1");
    root.style.setProperty("--header-search-placeholder-text-color", "#81858b");
    root.style.setProperty("--header-login-btn-border-color", "#e0e0e2");
    root.style.setProperty("--header-svg-color-primary", "#3f4064");
    root.style.setProperty("--x-line-color", "#e0e0e2");
    root.style.setProperty("--bg-header-main", "#ffffff");
    root.style.setProperty("--bg-wrapper", "#ffffff");
    root.style.setProperty("--normal-text-color", "#3a3a3a");
    darkMode = false;
  }
}
