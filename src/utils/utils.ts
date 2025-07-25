export function getLocalStorageLanguage() {
  return localStorage.getItem("lang") || "es";
}
