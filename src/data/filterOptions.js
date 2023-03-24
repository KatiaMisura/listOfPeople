const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
];

export const createCategoryoptions = {
    filterName: "Kategorija",
    options: options,
};

export const categoryOptions = {
    filterName: "Kategorija",
    options: [{ value: "", label: "All" }, ...options],
};

export const cityOptions = {
    filterName: "Grad",
    options: [
        { value: "", label: "All" },
        { value: "Split", label: "Split" },
        { value: "Zagreb", label: "Zagreb" },
        { value: "Osjek", label: "Osjek" },
    ],
};

const currentYear = new Date().getFullYear();
const starYear = currentYear - 100;
export const years = [];

for (let year = currentYear; year > starYear; year -= 10) {
    years.push(year);
}
