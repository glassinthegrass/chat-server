const messages =[]
const id = 0


module.exports={
    create: (req,res) => {
        const {text,time} = req.body
        const post= {}
            post.id = id
            post.text = text
            post.time = time
            id++
            messages.push(post)
            res.status(200).send(messages)
        },

    read: (req,res) => {
        res.status(200).send(messages)
    },

    update: (req,res) => {
        const{text}= req.body;
        const {id} =req.params;
        const msgIndex =messages.findIndex(post => post.id === +id)
       const post = messages[msgIndex]
       post.id = id
        post.time = post.time
        post.text= text || post.text
        res.status(200).send(messages)
    },
    delete: (req,res) => {
        const {id} = req.params
        const msgIndex = messages.findIndex(post => post.id === +id)
        messages.splice(msgIndex,1)
        res.status(200).send(messages)
    }
}