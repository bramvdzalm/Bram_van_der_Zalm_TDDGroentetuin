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
const getRevenueForCrop = (crop) => {
    return getYieldForCrop(crop) * crop.crop.salesPrice
  };

const getProfitForCrop = (crop) => {
    return getRevenueForCrop(crop) - getCostsForCrop(crop)
  }

const getTotalProfit = ({ crops }) => {
    let total = 0
    crops.forEach(crop => {
        total += getProfitForCrop(crop)
    });
    return total
  }


module.exports = { 
  getYieldForPlant, 
  getYieldForCrop, 
  getTotalYield, 
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
 }