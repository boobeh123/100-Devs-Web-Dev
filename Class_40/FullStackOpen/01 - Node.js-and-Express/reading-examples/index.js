const express = require('express')
const app = express()

let inventory = [
  {
    id: 001,
    name: "Disinfectant Spray",
    quantity: 010,
    stock: true
  },
  {
    id: 2,
    name: "Antibacterial Soap",
    quantity: 000,
    stock: false
  },
  {
    id: 3,
    name: "Microfiber Cloth Dozen Pack",
    quantity: 100,
    stock: true
  },
  {
    id: 4,
    name: "delet this",
    quantity: 001,
    stock: true
  }
]

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(express.json());
app.use(requestLogger);
app.use(unknownEndpoint)
app.get('/', (request, response) => {
    response.send('<h2>Hello World</h2>');
})
app.get('/api/inventory', (request, response) => {
    response.json(inventory);
})
app.get('/api/inventory/:id', (request, response) => {
    const id = Number(request.params.id)
    const item = inventory.find(item => {
        console.log(`Item.id: ${item.id} (${typeof item.id}) // id: ${id} (${typeof id}) // item.id === id: (${item.id === id})`)
        return item.id === id
    })

    if (item) {
        console.log(item)
        response.json(item);
    } else {
        response.status(404).end();
    }
})
const generateId = () => {
    // Checks inventory for largest id number & stores into maxId
    const maxId = inventory.length > 0 ? Math.max(...inventory.map(item => item.id)) : 0
    // Creates a unique & unused ID 
    return maxId + 1
}
app.post('/api/inventory', (request, response) => {
    const body = request.body;
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    const item = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }
    inventory = inventory.concat(item)
    response.json(item)
})
app.delete('/api/inventory/:id', (request, response) => {
    const id = Number(request.params.id)
    item = inventory.filter(item => item.id !== id)
  
    response.status(204).end()
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});