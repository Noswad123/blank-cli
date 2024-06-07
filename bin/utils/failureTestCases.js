"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureTestCases = void 0;
exports.failureTestCases = [
    {
        title: "Missing Quantity and Storage Temp",
        items: [
            {
                substanceType: "DNA-Glycerol-Stock",
                substanceName: "Stuff",
                amount: 5,
                amountUnits: "mg",
                concentration: 0.2,
                concentrationUnits: "g/L",
                containerType: "Plate",
                temperature: 21
            }
        ],
        itemType: "Facilities",
        isInternational: false,
        isFailure: true,
        reasons: [
            'Line 1: missing storage temp.',
            'Line 1: missing quantity.'
        ]
    },
    {
        title: "invalid substance type",
        isFailure: true,
        items: [
            {
                substanceType: "Invalid-Type",
                substanceName: "Unknown Substance",
                amount: 50,
                amountUnits: "mg",
                concentration: 1.0,
                concentrationUnits: "mg/ml",
                containerType: "Bottle",
                storageTemp: 21,
                quantity: 4
            }
        ],
        itemType: "Facilities",
        isInternational: false,
        reasons: [
            'Line 1: invalid substance type.'
        ]
    },
    {
        title: "Amount not a number",
        isFailure: true,
        items: [
            {
                substanceType: "Microbial-Culture",
                substanceName: "Buffer A",
                amount: "500",
                amountUnits: "ml",
                concentration: 1.0,
                concentrationUnits: "M",
                containerType: "Bottle",
                storageTemp: 21,
                quantity: 1,
                hsCodes: ["38220000"],
                eccnCode: "EAR99",
                materialDescription: "Buffer A"
            }
        ],
        itemType: "SupplyChain",
        isInternational: true,
        reasons: ['Line 1: amount is not a number.']
    },
    {
        title: "Line 1 missing things, missing line 2 missing things",
        isFailure: true,
        items: [
            {
                substanceType: "Reagent",
                substanceName: "Anti-ProteinX",
                amount: 0.5,
                amountUnits: "mg",
                concentration: 2.0,
                concentrationUnits: "mg/ml",
                containerType: "Vial",
                storageTemp: 4
            },
            {
                substanceType: "Chemical-Solid",
                substanceName: "Sodium Chloride",
                amount: 100,
                amountUnits: "g",
                containerType: "Jar",
                storageTemp: 21,
                quantity: 1,
            }
        ],
        itemType: "Facilities",
        isInternational: false,
        reasons: ['Line 1: missing quantity.', 'Line 2: invalid substance type.']
    },
    {
        title: "Missing international fields",
        isFailure: true,
        items: [
            {
                substanceType: "DNA-Oligo",
                substanceName: "HeLa Cells",
                amount: 1,
                amountUnits: "flask",
                containerType: "Flask",
                storageTemp: 21,
                quantity: 1,
                materialDescription: "HeLa Cells",
            }
        ],
        itemType: "SupplyChain",
        isInternational: true,
        reasons: [
            'Line 1: missing hsCodes.',
            'Line 1: missing eccn code.',
        ]
    },
];
