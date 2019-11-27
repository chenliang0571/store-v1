export class Store {
    name: string;
    categories: string[];
    image: string;
}
export interface Menu {
    restaurant: string;
    address: string;
    geohash: string;
    image_url: string;
    rating: number;
    menus: Category[];
}
export interface Category {
    category: string;
    description: string;
    tags: string[];
    recipes: Recipe[];
}
export interface Recipe {
    title: string;
    ingredient: string;
    price: number;
    options: RecipeOption[];
}
export interface RecipeOption {
    name: string;
    oper: string;
    price: number;
}
