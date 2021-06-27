import csv from "url:../data/tsne.csv";

export default JSON.stringify(
  {
    defaultData: csv,
    tracks: [
      {
        tooltips: 0.01,
        mark: "point",
        layout: "linear",
        x: {
          attribute: "x",
          type: "quantitative",
          domain: [-10, 10],
          axis: "bottom",
          scale: "linear",
        },
        y: {
          attribute: "y",
          type: "quantitative",
          domain: [-10, 10],
          axis: "left",
          scale: "linear",
        },
        color: {
          attribute: "sample",
          type: "categorical",
          cardinality: 32,
          colorScheme: "interpolateRainbow",
        },
        opacity: { value: 0.05 },
      },
    ],
  },
  null,
  2
);