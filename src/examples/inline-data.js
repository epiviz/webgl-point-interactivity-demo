export default JSON.stringify(
  {
    defaultData: ["day,price", "1,10", "2,22", "3,35"],
    tracks: [
      {
        tooltips: 1,
        mark: "line",
        layout: "linear",
        x: {
          attribute: "day",
          type: "quantitative",
          domain: [1, 10],
          axis: "bottom",
        },
        y: {
          attribute: "price",
          type: "quantitative",
          domain: [0, 40],
          axis: "left",
          scale: "linear",
        },
        color: {
          value: "red",
        },
        shape: {
          value: "circle",
        },
      },
    ],
  },
  null,
  2
);