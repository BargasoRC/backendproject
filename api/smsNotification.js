// const Nexmo = require('nexmo');

// const nexmo = new Nexmo({
//   apiKey: 'a37d5f73',
//   apiSecret: 'aKShuV8xE0RGxWLc',
// });

// const from = 'Nexmo';
// const to = '639973312100';
// const text = 'Hello from Nexmo';

// nexmo.message.sendSms(from, to, text);

const itexmo = require('itexmo')({ apiCode: 'TR-YOLTO312100_TS7B2' })

itexmo
  .send({ to: '+639750242544', body: 'hello world' })
  .then(message => console.log(message))