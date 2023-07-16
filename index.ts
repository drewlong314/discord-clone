import express from 'express';
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// user can write, edit, and delete messages
// a message has:
// value - string
// serverId?
// channelId?
// userId
// recipientId?

// a server has:
// channels - array
// members - [userId, role?]
// owner - userId
// name

// a channel has:
// name
// serverId
// messages?

// a role has:
// name

// a user has:
// name
// friends?
//
