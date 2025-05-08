process.on('message', (msg) => {
  console.log('Mensagem do processo pai:', msg);
  process.send('Eaeeeeeeeeewwwwwww!');
});
