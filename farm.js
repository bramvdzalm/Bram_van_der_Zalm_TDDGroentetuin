const getYieldForPlant = (corn) => {
    return corn.yield
  }

const getYieldForCrop = (crop, corn) => {
    return crop.numCrops * getYieldForPlant(crop.crop, corn)
  }
  
const getTotalYield = ({ crops }) => {
    let total = 0;
    crops.forEach((crop) => {
        total += getYieldForCrop(crop);
    });
    return total;
  };
  const getCostsForCrop = (input) => {
    return input.numCrops * 1
  };



module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop }