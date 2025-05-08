import net from 'net'

const server = net.createServer((socket) => {
  console.log('Bem-vindo, Brô');

  socket.on('data', (data) => {
    console.log('Cliente disse:', data.toString());
    
    socket.write('Fala jow!!!');
  });

  socket.on('end', () => {
    console.log('Flw até mais!!!');
  });
});

server.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000...');
});
