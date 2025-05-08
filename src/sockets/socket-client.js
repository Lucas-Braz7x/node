import net from 'net'

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectando....');
  client.write('Fala meu bom');
});

client.on('data', (data) => {
  console.log('Servidor respondeu:', data.toString());
  client.end(); 
});

client.on('end', () => {
  console.log("Bye bye!")
});
