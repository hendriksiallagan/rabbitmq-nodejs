const amqp = require('amqplib')

amqp.connect('amqp://localhost').then(conn=> {
  return conn.createChannel().then(ch => {
    const ok = ch.assertQueue('hello', { durable: false })
    ok.then(() => {
      return ch.consume('hello', msg => console.log('- Received', msg.content.toString()), { noAck: true })
    })
  })
})

// conn.createChannel().then(ch => {
//     const ok = ch.assertQueue('hello', { durable: false })
//     ok.then(() => {
//       return ch.consume('hello', msg => console.log('- Received', msg.content.toString()), { noAck: true })
//     })
//   })