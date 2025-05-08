import { fork } from 'child_process';

const childProcess = fork('./src/processos/processo_02.js');

/*
Diferente do C o Node cria automaticamente um canal de comunicação entre processos
com isso consigo enviar mensagens entre eles com o retorno do fork
E com a várial global do process (A mesma que eu uso para pegar o env e etc)
*/

childProcess.on('message', (msg) => {
  console.log('Mensagem do processo criado:', msg);
});

childProcess.send('Opaaaaaaaaaaa!');
