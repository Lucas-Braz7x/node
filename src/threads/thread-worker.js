import { parentPort } from 'worker_threads';

parentPort.on('message', (msg) => {
  console.log('Mensagem recebida do processo principal:', msg);

  let contador = 0;
  for (let i = 0; i < 1e9; i++) contador++;

  parentPort.postMessage('PDF gerado com sucesso!');
  //parentPort.close();
  process.exit(0)
});
