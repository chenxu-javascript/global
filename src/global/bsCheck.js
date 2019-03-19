import bsRunWhen from "./bsRunWhen";

const bsCheck = function(cod) {
  return new Promise(function(resolve, reject) {
    bsRunWhen(resolve, cod, "bsCheck", reject);
  });
};

export default bsCheck;
