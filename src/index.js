const {PythonShell} = require('python-shell');

const data = `{
  "outlets": [
    {
      "id": 1,
      "name": "Depot",
      "latitude": 27.712143,
      "longitude": 85.313245
    },
    {
      "id": 2,
      "name": "Outlet1",
      "latitude": 27.712162,
      "longitude": 85.312908
    },
    {
      "id": 3,
      "name": "Outlet2",
      "latitude": 27.714843,
      "longitude": 85.312044
    },
    {
      "id": 4,
      "name": "Outlet3",
      "latitude": 27.68082,
      "longitude": 85.317
    },
    {
      "id": 5,
      "name": "Outlet4",
      "latitude": 27.686906,
      "longitude": 85.317343
    },
    {
      "id": 6,
      "name": "Outlet5",
      "latitude": 27.71202,
      "longitude": 85.31295
    },
    {
      "id": 7,
      "name": "Outlet6",
      "latitude": 27.68812,
      "longitude": 85.31305
    },
    {
      "id": 8,
      "name": "Outlet7",
      "latitude": 27.71832,
      "longitude": 85.31913
    },
    {
      "id": 9,
      "name": "Outlet8",
      "latitude": 27.704521,
      "longitude": 85.31951
    },
    {
      "id": 10,
      "name": "Outlet9",
      "latitude": 27.71545,
      "longitude": 85.318383
    }
  ]
}`;

let options = {
  mode: 'text',
  // pythonPath: '../../../../PycharmProjects/vrp/venv/lib/python3.6/site-packages',
  pythonOptions: ['-u'],
  scriptPath: '../../../../PycharmProjects/vrp/',
  args: [data, 2]
};

PythonShell.run('main.py', options, function(err, output) {
  if(err) throw err;
  console.log(output.toString());
});

