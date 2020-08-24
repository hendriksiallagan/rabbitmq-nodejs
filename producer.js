const amqp = require('amqplib')

amqp.connect('amqp://localhost').then(conn => conn.createChannel().then(ch => {
    const q = 'hello'
    const msg = 'Hello world!'
    const ok = ch.assertQueue(q, { durable: false })
    ok.then(() => {
      ch.sendToQueue(q, Buffer.from(msg))
      console.log('- Sent', msg)
      return ch.close()
    })
}))