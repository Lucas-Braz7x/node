import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Início do processo principal');

console.log("Thread criada")
const worker = new Worker(path.join(__dirname, './thread-worker.js'));

console.log("Enviando mensagem para a thread criada")
worker.postMessage('Gerarando PDF');

console.log("Processando outros BOs")

worker.on('message', (msg) => {
  console.log('Resposta da thread:', msg);
  console.log("Processou mais alguma coisa depois da resposta da thread")
});

worker.on('error', (err) => {
  console.error('Erro na thread:', err);
});


worker.on('exit', (code) => {
  console.log(`Thread finalizada com código ${code}`);
});
