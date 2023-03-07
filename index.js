const qrcode = require('qrcode-terminal');
const { Client, localAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new localAuth(),
});
client.initialize();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage(`${process.env.number_phone}@c.us`, 'Testing bot wa ges');
});