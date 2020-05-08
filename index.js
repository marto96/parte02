const fs = require('fs');
const path = require('path');
const os = require('os');

const filename = path.join(__dirname, 'report.csv');
const output = [];

const data = [{
        fecha: '2020-02-20',
        monto: 1021.12
    },
    {
        fecha: '2020-02-29',
        monto: 8844.21
    },
];

data.forEach((d) => {
    const row = [];
    row.push(d.fecha);
    row.push(d.monto);

    output.push(row.join());
});

fs.writeFileSync(filename, output.join(os.EOL));