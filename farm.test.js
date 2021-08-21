const { getYieldForPlant, 
        getYieldForCrop, 
        getTotalYield, 
        getCostsForCrop,
        getRevenueForCrop,
        getProfitForCrop,
        getTotalProfit } = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple cropss", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("Get costs for crop corn", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 30,
        };
        expect(getCostsForCrop(input)).toBe(30);
    });
    test("Get costs for crop pumpkin", () => {
        const pumpkin = {
            name: "pumpkin",
            yield: 3,
        };
        const input = {
            crop: pumpkin,
            numCrops: 100,
        };
        expect(getCostsForCrop(input)).toBe(100);
    });
});

describe("getRevenueForCrop", () => {
    test("Get revenue for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input)).toBe(60);
    });
});

describe("getProfitForCrop", () => {
    test("Get profit for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getProfitForCrop(input)).toBe(50);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            salesPrice: 5,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBe(63)
    });
});

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
              low: -50,
              medium: 0,
              high: 50,
            },
          },
    };
    const environmentFactors = {
        sun: "low",
      };

    test("Get yield for plant with environment factors corn", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForPlant", () => {
    const paprika = {
        name: "paprika",
        yield: 100,
        factors: {
            sun: {
              low: -40,
              medium: 0,
              high: 40,
            },
          },
    };
    const environmentFactors = {
        sun: "high",
      };

    test("Get yield for plant with environment factors paprika", () => {
        expect(getYieldForPlant(paprika, environmentFactors)).toBe(140);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop with environment factors corn", () => {
        const corn = {
            name: "corn",
            yield: 50,
            factors: {
                sun: {
                  low: -50,
                  medium: 0,
                  high: 50,
                },
              },
        };
        const environmentFactors = {
            sun: "low",
          };

        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(250);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop with environment factors paprika", () => {
        const paprika = {
            name: "paprika",
            yield: 14,
            factors: {
                sun: {
                  low: -40,
                  medium: 0,
                  high: 40,
                },
              },
        };
        const environmentFactors = {
            sun: "medium",
          };

        const input = {
            crop: paprika,
            numCrops: 8,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(112);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple cropss", () => {
        const corn = {
            name: "corn",
            yield: 10,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 10,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "high",
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(105);
    });

});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple cropss", () => {
        const corn = {
            name: "corn",
            yield: 15,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const pumpkin = {
            name: "pumpkin",
            yield: 40,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };

        const environmentFactors = {
            sun: "low",
        };
        const crops = [
            { crop: corn, numCrops: 4 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops }, environmentFactors)).toBe(70);
    });

});

describe("getRevenueForCrop", () => {
    test("Get revenue for crop with environment factors corn", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salesPrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(30);
    });
});

describe("getRevenueForCrop", () => {
    test("Get revenue for crop with environment factors paprika", () => {
        const paprika = {
            name: "paprika",
            yield: 8,
            salesPrice: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "medium",
        };
        const input = {
            crop: paprika,
            numCrops: 10,
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(320);
    });
});