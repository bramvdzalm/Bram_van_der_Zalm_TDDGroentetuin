const getYieldForPlant = (plant, environmentFactors) => {
    let yieldWithFactors = 0

    for (let factor in environmentFactors) {
      let factorValue = environmentFactors[factor]
      let plantFactor = plant.factors[factor]
      let additionalYield = plantFactor[factorValue]
      yieldWithFactors += (additionalYield / 100) * plant.yield 
    }

    return plant.yield + yieldWithFactors
  }

const getYieldForCrop = (crop, environmentFactors) => {
    return crop.numCrops * getYieldForPlant(crop.crop, environmentFactors)
  }
  
const getTotalYield = ({ crops }, environmentFactors ) => {
    let total = 0;
    crops.forEach((crop) => {
        total += getYieldForCrop(crop, environmentFactors);
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