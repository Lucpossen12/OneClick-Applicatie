document.getElementById('run-code-button').addEventListener('click', function() {
    const GenesisDevice = require('genesis-device');
    const genesis = new GenesisDevice();
  
    genesis.addVariable('dc02_vm_params', {
      default: {
          hostname: 'DC02',
          vcpu: '3',
          ram: '8000',
          disk_datastore: 'ssd',
          disk_size: '100',
      }
  }, [
    'Parameter deploy DC 2',
  ]);
  
      const output = genesis.toString();
    download('output.txt', output);
  });
  
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

