import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as resources from "./resources/index";
import { getLocalStorageLanguage } from "../src/utils/utils";

i18n.use(initReactI18next).init({
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {}
    ),
  },
  lng: getLocalStorageLanguage(),
});

export default i18n;
