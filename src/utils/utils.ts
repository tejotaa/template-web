export function getLocalStorageLanguage() {
  return localStorage.getItem("lang") || "es";
}

export function getLocalStorageTheme() {
  return localStorage.getItem("theme") === "dark";
}

export function getYear() {
  return new Date().getFullYear();
}
