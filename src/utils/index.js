import { get } from "lodash";

export const capitolizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
};

export const generateRandomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
};

/**
 * Converts an object-array to map
 * @param {*} arr - Array to convert
 * @param {*} key - Object key
 */
export const objArrayToMap = (arr, key) => {
  if (!arr || !key) return [];
  let map = [];
  arr.map((item) => {
    return (map[get(item, key, null)] = item);
  });
  return map;
};

// Convert array to map
export const arrayToMap = (arr) => {
  if (!arr) return [];
  let map = [];
  arr.map((item) => {
    return (map[item] = true);
  });
  return map;
};

export const getQuadraticRoots = (a, b, c) => {
  try {
    if ((!a && a !== 0) || (!b && b !== 0) || (!c && c !== 0)) return 1;
    let discriminant = b * b - 4 * a * c; // calculate discriminant
    if (discriminant > 0) return (-b + Math.sqrt(discriminant)) / (2 * a);
    // condition for real and different roots
    else if (discriminant === 0) return -b / (2 * a);
    // condition for real and equal roots
    else {
      // if roots are not real
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      return realPart + imagPart;
    }
  } catch (e) {
    console.log("Error on getQuadraticRoots");
    return 1;
  }
};
