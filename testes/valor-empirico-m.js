const fs = require("fs");
const constants = require('./valores-estruturados');
const { hybridQuickSort } = require("../algoritmos/quicksort-hibrido");

function measureOperations(name, array, threshold) {
  const arrCopy = [...array];
  const counters = hybridQuickSort(
    arrCopy,
    0,
    arrCopy.length - 1,
    { comparisons: 0, swaps: 0 },
    threshold
  );
  return {
    name,
    size: array.length,
    threshold,
    comparisons: counters.comparisons,
    swaps: counters.swaps,
    ops: counters.comparisons + counters.swaps,
  };
}

const randomArrays = [
  ["RANDOM_1", constants.RANDOM_ARRAY_1],
  ["RANDOM_2", constants.RANDOM_ARRAY_2],
  ["RANDOM_3", constants.RANDOM_ARRAY_3],
  ["RANDOM_4", constants.RANDOM_ARRAY_4],
  ["RANDOM_5", constants.RANDOM_ARRAY_5],
  ["RANDOM_6", constants.RANDOM_ARRAY_6],
  ["RANDOM_7", constants.RANDOM_ARRAY_7],
  ["RANDOM_8", constants.RANDOM_ARRAY_8],
  ["RANDOM_9", constants.RANDOM_ARRAY_9],
  ["RANDOM_10", constants.RANDOM_ARRAY_10],
  ["RANDOM_11", constants.RANDOM_ARRAY_11],
  ["RANDOM_12", constants.RANDOM_ARRAY_12],
  ["RANDOM_13", constants.RANDOM_ARRAY_13],
  ["RANDOM_14", constants.RANDOM_ARRAY_14],
  ["RANDOM_15", constants.RANDOM_ARRAY_15],
  ["RANDOM_16", constants.RANDOM_ARRAY_16],
  ["RANDOM_17", constants.RANDOM_ARRAY_17],
  ["RANDOM_18", constants.RANDOM_ARRAY_18],
  ["RANDOM_19", constants.RANDOM_ARRAY_19],
  ["RANDOM_20", constants.RANDOM_ARRAY_20],
  ["RANDOM_21", constants.RANDOM_ARRAY_21],
  ["RANDOM_22", constants.RANDOM_ARRAY_22],
  ["RANDOM_23", constants.RANDOM_ARRAY_23],
  ["RANDOM_24", constants.RANDOM_ARRAY_24],
  ["RANDOM_25", constants.RANDOM_ARRAY_25],
  ["RANDOM_26", constants.RANDOM_ARRAY_26],
  ["RANDOM_27", constants.RANDOM_ARRAY_27],
  ["RANDOM_28", constants.RANDOM_ARRAY_28],
  ["RANDOM_29", constants.RANDOM_ARRAY_29],
  ["RANDOM_30", constants.RANDOM_ARRAY_30],
  ["RANDOM_31", constants.RANDOM_ARRAY_31],
  ["RANDOM_32", constants.RANDOM_ARRAY_32],
  ["RANDOM_33", constants.RANDOM_ARRAY_33],
  ["RANDOM_34", constants.RANDOM_ARRAY_34],
  ["RANDOM_35", constants.RANDOM_ARRAY_35],
  ["RANDOM_36", constants.RANDOM_ARRAY_36],
  ["RANDOM_37", constants.RANDOM_ARRAY_37],
  ["RANDOM_38", constants.RANDOM_ARRAY_38],
  ["RANDOM_39", constants.RANDOM_ARRAY_39],
  ["RANDOM_40", constants.RANDOM_ARRAY_40],
  ["RANDOM_41", constants.RANDOM_ARRAY_41],
  ["RANDOM_42", constants.RANDOM_ARRAY_42],
  ["RANDOM_43", constants.RANDOM_ARRAY_43],
  ["RANDOM_44", constants.RANDOM_ARRAY_44],
  ["RANDOM_45", constants.RANDOM_ARRAY_45],
  ["RANDOM_46", constants.RANDOM_ARRAY_46],
  ["RANDOM_47", constants.RANDOM_ARRAY_47],
  ["RANDOM_48", constants.RANDOM_ARRAY_48],
  ["RANDOM_49", constants.RANDOM_ARRAY_49],
  ["RANDOM_50", constants.RANDOM_ARRAY_50],
  ["RANDOM_51", constants.RANDOM_ARRAY_51],
  ["RANDOM_52", constants.RANDOM_ARRAY_52],
  ["RANDOM_53", constants.RANDOM_ARRAY_53],
  ["RANDOM_54", constants.RANDOM_ARRAY_54],
  ["RANDOM_55", constants.RANDOM_ARRAY_55],
  ["RANDOM_56", constants.RANDOM_ARRAY_56],
  ["RANDOM_57", constants.RANDOM_ARRAY_57],
  ["RANDOM_58", constants.RANDOM_ARRAY_58],
  ["RANDOM_59", constants.RANDOM_ARRAY_59],
  ["RANDOM_60", constants.RANDOM_ARRAY_60],
  ["RANDOM_61", constants.RANDOM_ARRAY_61],
  ["RANDOM_62", constants.RANDOM_ARRAY_62],
  ["RANDOM_63", constants.RANDOM_ARRAY_63],
  ["RANDOM_64", constants.RANDOM_ARRAY_64],
  ["RANDOM_65", constants.RANDOM_ARRAY_65],
  ["RANDOM_66", constants.RANDOM_ARRAY_66],
  ["RANDOM_67", constants.RANDOM_ARRAY_67],
  ["RANDOM_68", constants.RANDOM_ARRAY_68],
  ["RANDOM_69", constants.RANDOM_ARRAY_69],
  ["RANDOM_70", constants.RANDOM_ARRAY_70],
  ["RANDOM_71", constants.RANDOM_ARRAY_71],
  ["RANDOM_72", constants.RANDOM_ARRAY_72],
  ["RANDOM_73", constants.RANDOM_ARRAY_73],
  ["RANDOM_74", constants.RANDOM_ARRAY_74],
  ["RANDOM_75", constants.RANDOM_ARRAY_75],
  ["RANDOM_76", constants.RANDOM_ARRAY_76],
  ["RANDOM_77", constants.RANDOM_ARRAY_77],
  ["RANDOM_78", constants.RANDOM_ARRAY_78],
  ["RANDOM_79", constants.RANDOM_ARRAY_79],
  ["RANDOM_80", constants.RANDOM_ARRAY_80],
  ["RANDOM_81", constants.RANDOM_ARRAY_81],
  ["RANDOM_82", constants.RANDOM_ARRAY_82],
  ["RANDOM_83", constants.RANDOM_ARRAY_83],
  ["RANDOM_84", constants.RANDOM_ARRAY_84],
  ["RANDOM_85", constants.RANDOM_ARRAY_85],
  ["RANDOM_86", constants.RANDOM_ARRAY_86],
  ["RANDOM_87", constants.RANDOM_ARRAY_87],
  ["RANDOM_88", constants.RANDOM_ARRAY_88],
  ["RANDOM_89", constants.RANDOM_ARRAY_89],
  ["RANDOM_90", constants.RANDOM_ARRAY_90],
  ["RANDOM_91", constants.RANDOM_ARRAY_91],
  ["RANDOM_92", constants.RANDOM_ARRAY_92],
  ["RANDOM_93", constants.RANDOM_ARRAY_93],
  ["RANDOM_94", constants.RANDOM_ARRAY_94],
  ["RANDOM_95", constants.RANDOM_ARRAY_95],
  ["RANDOM_96", constants.RANDOM_ARRAY_96],
  ["RANDOM_97", constants.RANDOM_ARRAY_97],
  ["RANDOM_98", constants.RANDOM_ARRAY_98],
  ["RANDOM_99", constants.RANDOM_ARRAY_99],
  ["RANDOM_100", constants.RANDOM_ARRAY_100],
];

const otherArrays = [
  ["ASC_ARRAY", constants.ASC_ARRAY],
  ["DESC_ARRAY", constants.DESC_ARRAY],
  ["REP_ARRAY", constants.REP_ARRAY],
];

const thresholds = Array.from({ length: 50 }, (_, i) => i + 1); // 1..50 (inclusive)
let randomResults = [];
let otherResults = [];

for (const t of thresholds) {
  for (const [name, arr] of randomArrays) {
    randomResults.push(measureOperations(name, arr, t));
  }
}

for (const t of thresholds) {
  for (const [name, arr] of otherArrays) {
    otherResults.push(measureOperations(name, arr, t));
  }
}

const csvHeader = "Array,Size,Threshold,Comparisons,Swaps,Ops\n";
const csvRows = thresholds
  .map(t => {
    const rowsThisT = randomResults
      .filter(r => r.threshold === t)
      .map(r => `${r.name},${r.size},${r.threshold},${r.comparisons},${r.swaps},${r.ops}`);
    const sumOps = randomResults
      .filter(r => r.threshold === t)
      .reduce((acc, r) => acc + r.ops, 0);
    const sumRow = `RANDOM_SUM,,${t},,,${sumOps}`;
    return [...rowsThisT, sumRow].join("\n");
  })
  .join("\n");

fs.writeFileSync("results.csv", csvHeader + csvRows, "utf-8");

const csvOthersHeader = "Array,Size,Threshold,Comparisons,Swaps,Ops\n";
const csvOthersRows = thresholds
  .map(t => {
    return otherResults
      .filter(r => r.threshold === t)
      .map(r => `${r.name},${r.size},${r.threshold},${r.comparisons},${r.swaps},${r.ops}`)
      .join("\n");
  })
  .join("\n");

fs.writeFileSync("results_others.csv", csvOthersHeader + csvOthersRows, "utf-8");

console.log("✅ Medições concluídas. Arquivos gerados: results.csv (aleatórios) e results_others.csv (others)");
