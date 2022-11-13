// third column contain bounce rate excel expression
const data = [
  ['150', '643', '=(A1/B1)*100'],
  ['172', '474', '=(A2/B2)*100'],
  ['188', '371', '=(A3/B3)*100'],
  ['162', '731', '=(A4/B4)*100'],
  ['133', '682', '=(A5/B5)*100'],
  ['87', '553', '=(A6/B6)*100'],
  ['26', '592', '=(A7/B7)*100'],
  ['110', '461', '=(A8/B8)*100'],
  ['50', '346', '=(A9/B9)*100'],
  ['160', '423', '=(A10/B10)*100'],
  ['Average', 'Average', 'Average'],
  ['=AVERAGE(A1:A10)', '=AVERAGE(B1:B10)', '=AVERAGE(C1:C10)'],
];

const load = () => {
  const container = document.getElementById('demo-data-grid');
  // new instance of handsontable
  new Handsontable(container, {
    // add the data
    data: data,
    formulas: {
      // use HyperFormula as the calculation engine
      engine: HyperFormula,
    },
    // add left serial number
    rowHeaders: true,
    // column names
    colHeaders: [
      'Number of one-page visits',
      'Number of website visits',
      'Bounce rate',
    ],
    // make the last 2 bottom row fixed
    fixedRowsBottom: 2,
    stretchH: 'all',
    height: 500,
    licenseKey: 'non-commercial-and-evaluation',
  });
};

if (window.Handsontable) load();
window.addEventListener('load', load);
