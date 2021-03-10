import rocket from "./rocket.jpg";
import truck from "./truck.jpg";

const products =  [
    {
        id: 1,
        name: "Express Delivery",
        price: 299,
        image: {rocket},
    },

    {
        id: 2,
        name: "Normal Delivery",
        price: 199,
        image: {truck},

    },

    {
        id: 3,
        name: "Katakeet Cookie",
        price: 7,
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd34%2Feaster-chick-egg-cookies-102921707%2Feaster-chick-egg-cookies-102921707_horiz.jpg%3Fitok%3DUBZfwNLI"
    }
];

export default products;