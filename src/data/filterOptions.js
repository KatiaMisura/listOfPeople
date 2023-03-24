const defaultOption = { value: "", label: "Svi" };

export const categoryList = [
  { value: "red", label: "Crveno", color: "#ff0000" },
  { value: "green", label: "Zeleno", color: "#00ff00" },
  { value: "blue", label: "Plavo", color: "#0000ff" },
  { value: "yellow", label: "Žuto", color: "#ffff00" },
  { value: "purple", label: "Ljubičasto", color: "#ff00ff" },
];

export const cityList = [
  { value: "Split", label: "Split" },
  { value: "Zagreb", label: "Zagreb" },
  { value: "Osjek", label: "Osjek" },
];

export const createCategoryOptions = {
  filterName: "Kategorija",
  options: categoryList,
};

export const categoryOptions = {
  ...createCategoryOptions,
  options: [defaultOption, ...categoryList],
};

export const createCityOptions = {
  filterName: "Grad",
  options: cityList,
};

export const cityOptions = {
  ...createCityOptions,
  options: [defaultOption, ...cityList],
};

const currentYear = new Date().getFullYear();
const starYear = currentYear - 100;
export const yearOptionList = [];

for (let year = currentYear; year > starYear; year -= 10) {
  yearOptionList.push({ value: year, label: year });
}

export const yearOptions = {
  filterName: "Date of birth",
  options: [defaultOption, ...yearOptionList],
};
