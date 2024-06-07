"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successTestCases = void 0;
exports.successTestCases = [
    {
        title: 'Good Facilities Test',
        isFailure: false,
        items: [
            {
                substanceType: 'DNA-Glycerol-Stock',
                substanceName: 'DNA Sample',
                amount: 10,
                amountUnits: 'mg',
                concentration: 0.1,
                concentrationUnits: 'g/L',
                containerType: 'Tube',
                storageTemp: 21,
                quantity: 1,
            },
        ],
        itemType: 'Facilities',
        isInternational: false,
    },
    {
        title: 'Good Supply Chain Test',
        isFailure: false,
        items: [
            {
                substanceType: 'DNA-Glycerol-Stock',
                substanceName: 'RNA_1',
                amount: 2,
                amountUnits: 'mg',
                concentration: 0.1,
                concentrationUnits: 'g/L',
                containerType: 'Tube',
                storageTemp: -20,
                quantity: 1,
                materialDescription: 'RNA_1',
            },
        ],
        itemType: 'SupplyChain',
        isInternational: false,
    },
    {
        title: 'Good International Supply Chain Test',
        isFailure: false,
        items: [
            {
                substanceType: 'Microbial-Culture',
                substanceName: 'RNA_1',
                amount: 2,
                amountUnits: 'mg',
                concentration: 0.1,
                concentrationUnits: 'g/L',
                containerType: 'Tube',
                storageTemp: -20,
                hsCodes: ['1234.56.78'],
                eccnCode: 'EAR99',
                quantity: 1,
                materialDescription: 'RNA_1',
            },
        ],
        itemType: 'SupplyChain',
        isInternational: true,
    },
];
