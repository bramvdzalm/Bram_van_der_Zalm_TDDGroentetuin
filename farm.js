const getYieldForPlant = (corn) => {
    return corn.yield
  }

const getYieldForCrop = (crop, corn) => {
    return crop.numCrops * getYieldForPlant(crop.crop, corn)
  }
  
const getTotalYield = ({ crops }, influencingFactors) => {
    let total = 0;
    crops.forEach((crop) => {
        total += getYieldForCrop(crop, influencingFactors);
    });
    return total;
  };




module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield }