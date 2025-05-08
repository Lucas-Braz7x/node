import { fork } from 'child_process';

/*
Uma parada interessante é que consigo falar o arquivo que eu quero que o fork execute
Diferente do C que """duplica""" todo o processo pai (E é executado da linha do fork em diante)
*/

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
