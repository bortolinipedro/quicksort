const fs = require("fs");
const constants = require('./valores-estruturados');
const { quickSort } = require("../algoritmos/quicksort-recursivo");
const { hybridQuickSort: hybridQuickSortSimple } = require("../algoritmos/quicksort-hibrido");
const { hybridQuickSort: hybridQuickSortMediana } = require("../algoritmos/quicksort-hibrido-mediana");

function nowMs() {
  const hr = process.hrtime.bigint();
  return Number(hr / 1000000n);
}

function measureOne(algorithmName, sortFn, baseArray, threshold) {
  const arrCopy = [...baseArray];
  const counters = { comparisons: 0, swaps: 0 };
  const start = nowMs();

  const ret = typeof threshold === 'number'
    ? sortFn(arrCopy, 0, arrCopy.length - 1, counters, threshold)
    : sortFn(arrCopy, 0, arrCopy.length - 1, counters);
  const end = nowMs();
  const used = ret || counters;
  return {
    algorithm: algorithmName,
    size: arrCopy.length,
    comparisons: used.comparisons,
    swaps: used.swaps,
    ops: used.comparisons + used.swaps,
    ms: end - start,
  };
}

const targets = [
  ["RANDOM_1M", constants.RANDOM_1M],
  ["RANDOM_1M_REP", constants.RANDOM_1M_REP],
  ["RANDOM_10M", constants.RANDOM_10M],
  ["ASC_ARRAY", constants.ASC_ARRAY],
  ["DESC_ARRAY", constants.DESC_ARRAY],
  ["REP_1_ARRAY", constants.REP_1_ARRAY],
  ["RANDOM_ARRAY_1", constants.RANDOM_ARRAY_1],
];

const algorithms = [
  ["QuickSort_Recursivo", quickSort],
  ["QuickSort_Hibrido_Simples", hybridQuickSortSimple],
  ["QuickSort_Hibrido_Mediana", hybridQuickSortMediana],
];

const threshold = 10;
const runs = 10;

const rows = [];
for (const [arrayName, data] of targets) {
  for (const [algName, fn] of algorithms) {
    const isHybrid = fn === hybridQuickSortSimple || fn === hybridQuickSortMediana;
    for (let run = 1; run <= runs; run++) {
      const r = measureOne(algName, fn, data, isHybrid ? threshold : undefined);
      rows.push({ run, arrayName, ...r, threshold: isHybrid ? threshold : "" });
      global.gc && global.gc();
    }
  }
}

const header = "Array,Run,Algorithm,Size,Threshold,Comparisons,Swaps,Ops,TimeMs\n";
const csv = rows
  .map(r => `${r.arrayName},${r.run},${r.algorithm},${r.size},${r.threshold},${r.comparisons},${r.swaps},${r.ops},${r.ms}`)
  .join("\n");

fs.writeFileSync("results_large.csv", header + csv, "utf-8");

console.log("✅ Benchmark concluído. Arquivo gerado: results_large.csv");


