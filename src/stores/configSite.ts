import { defineStore } from "pinia";
import { reactive } from "vue";

interface ConfigSite {
  theme: String;
  categorySelect: String;
}

const categoriesAvailables = ["all", "man", "woman", "shoes"];

export const useConfigSite = defineStore("config-site", () => {
  const configSite = reactive<ConfigSite>({
    theme: "light",
    categorySelect: "all",
  });

  const changeTheme = () => {
    switch (configSite.theme) {
      case "light":
        configSite.theme = "dark";
        break;

      case "dark":
        configSite.theme = "light";
        break;
    }
  };

  const changeCategory = (category: string) => {
    if (!categoriesAvailables.includes(category)) {
      console.log("Category not found: " + category);
      return;
    }

    configSite.categorySelect = category;
  };

  return { configSite, changeTheme, changeCategory };
});
