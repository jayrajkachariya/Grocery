import { CART } from "../../constants";

const INIT = [
  {
    "img": [
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559100545/pro_60749_tdj3nm.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559100530/60749a_wqvmn0.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329365/17710b_awslgx.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329457/60749b_dzmu5p.jpg"
    ],
    "productDiscountInPercent": 2,
    "productFeatures": [
      "Crispy and crunchy biscuits",
      "Loaded with the goodness of wheat and milk",
      "Delicious tea time accompaniment ",
      "Power packed with the nourishment of glucose"
    ],
    "ingredients": [
      "Wheat Flour (67%)",
      "Sugar Edible Vegetable Oil",
      "Invert Sugar Syrup [Sugar, Citric Acid]",
      "Raising Agents [503 (Ii), Baking Powder]",
      "Salt",
      "Milk Solids (0.6%)",
      "Emulsifier [Di-Acetyl Tartaric Acid Esters Of Mono and Di-Glycerides Of Edible Vegetable Oils] and Dough Conditioner [223]"
    ],
    "productDisclaimer": [
      "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented."
    ],
    "_id": "5cee172bab0e2c0017b3103e",
    "productCategory": "Biscuits, Snacks & Chocolates",
    "productSubCategory": "Biscuits & Chocolates Offers",
    "productName": "Parle-G Original Gluco Biscuit",
    "productManufacturer": "Parle Biscuits PVT LTD, V. S. Khandekar Marg, Vile Parle East, Mumbai - 400057, Maharashtra",
    "productMRP": 65,
    "brand": "Parle-G",
    "weightVariant": "800g",
    "createdAt": "2019-05-29T05:22:51.138Z",
    "updatedAt": "2019-05-29T05:22:51.138Z",
    "__v": 0,
    "count": 2
  },
  {
    "img": [
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559100588/pro_26059_dtzee4.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329561/26059a_tyopt2.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329597/26059c_zpzle6.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329583/26059b_hcr7wm.jpg"
    ],
    "productDiscountInPercent": 18,
    "productFeatures": [
      "Rich, smooth Chocolate creme sandwiched between two crunchy Chocolate wafers",
      "Give yourself a delicious treat today and Twist, Lick and Dunk an Oreo",
      "The perfect pack for snacking at home or sharing with your family or friends"
    ],
    "ingredients": [],
    "productDisclaimer": [
      "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented."
    ],
    "_id": "5cee17d6ab0e2c0017b3103f",
    "productCategory": "Biscuits, Snacks & Chocolates",
    "productSubCategory": "Biscuits & Chocolates Offers",
    "productName": "Oreo Choco Creme Biscuit",
    "productManufacturer": "Mondelez India Food Pvt. Ltd, Unit No. 2001, 20th Floor, Tower-3 (Wing C), Indiabulls Finance Centre, Parel, Mumbai, Maharashtra - 400013",
    "productMRP": 30,
    "brand": "Oreo",
    "weightVariant": "120g",
    "createdAt": "2019-05-29T05:25:42.769Z",
    "updatedAt": "2019-05-29T05:25:42.769Z",
    "__v": 0,
    "count": 2
  },
  {
    "img": [
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559102628/pro_216248_qlq9ej.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559102666/216248a_w8dfdb.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329162/216248b_akhalm.jpg",
      "https://res.cloudinary.com/damlsxcci/image/upload/v1559329194/216248c_ebzmlm.jpg"
    ],
    "productDiscountInPercent": 10,
    "productFeatures": [
      "Sumptuously delicious, chocolaty and indulgent cookies",
      "Crammed with scrummy, smooth and luscious creme",
      "Sprinkled with sugar crystals",
      "Offers a delightfully rich and intense chocolaty experience"
    ],
    "ingredients": [
      "Wheat",
      "Soy Milk",
      "Sulphites"
    ],
    "productDisclaimer": [
      "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more or different information. It is recommended not to solely rely on the information presented."
    ],
    "_id": "5cee13e1c11af3b64125042c",
    "productCategory": "Biscuits, Snacks & Chocolates",
    "productSubCategory": "Biscuits & Chocolates Offers",
    "productName": "Britannia Bourbon The Original Biscuit",
    "productManufacturer": "Britannia Bourbon",
    "productMRP": 90,
    "brand": "Britannia",
    "weightVariant": "150g",
    "styleVariant": "Pack of Three",
    "createdAt": "2019-05-29T05:08:49.150Z",
    "updatedAt": "2019-05-29T05:08:49.150Z",
    "__v": 0,
    "count": 1
  }
];

const cartReducer = (state = INIT, { type, product }) => {
  if (type === CART.ADD) {
    const index = state.findIndex(x => x._id === product._id);
    if (index + 1) {
      // state.splice(index, 1, { ...state[index], count: state[index].count + 1 });
      let newState = [...state];
      newState[index].count++;
      return newState;
    } else {
      let newState = [...state, { ...product, count: 1 }];
      return newState;
    }
  }
  if (type === CART.SUBTRACT) {
    const index = state.findIndex(x => x._id === product._id);
    let newState = [...state];
    if (newState[index].count === 1) {
      newState.splice(index, 1);
    } else {
      newState[index].count--;
    }
    return newState;
  }
  return state;
};

export default cartReducer;
