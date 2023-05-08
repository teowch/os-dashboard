const express = require('express');
const shell = require('shelljs');
const cors = require ('cors');

const app = express();

const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  // Processes
  shell.exec('top -b -n 1', {silent: true}, function(code, stdout, stderr) {
    if (code !== 0) {
      res.status(500).send('Error');
      return;
    }
    
    const lines = stdout.split('\n');
    const processes = [];

    for (let i = 7; i < lines.length - 1; i++) {
      const columns = lines[i].trim().split(/\s+/);
      const pid = parseInt(columns[0]);
      const command = columns.slice(11).join(' ');
      const user = columns[1]
      const cpu = columns[8];
      const mem = columns[9];

      processes.push({
        pid,
        command,
        user,
        cpu,
        mem,
      });
    }

    const output = shell.exec('free -m', {silent: true}).stdout.trim().split('\n');
    const [totalMem, usedMem] = output[1].match(/\d+/g).map(mem => parseInt(mem, 10));
    const memResult = {total: totalMem, used: usedMem};

    const cpuResult = {used: 0}
    
    processes.map(process => {
      console.log(process.cpu)
      cpuResult.used += parseFloat(process.cpu)
    });

    if (cpuResult > 100) cpuResult = 100;
    
    const response = {mem: memResult, processes, cpu: cpuResult}
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
