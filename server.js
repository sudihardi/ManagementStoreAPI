const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addStore = require('./routes/stores/addStore')
const getStore = require('./routes/stores/getStore')
const editStore = require('./routes/stores/editStore')
const deleteStore = require('./routes/stores/deleteStore')

const addInventory = require('./routes/inventory/addInventory')
const getInventory = require('./routes/inventory/getInventory')
const editInventory = require('./routes/inventory/editInventory')
const deleteInventory = require('./routes/inventory/deleteInventory')

const addGoods = require('./routes/goods/addGoods')
const getGoods = require('./routes/goods/getGoods')
const editGoods = require('./routes/goods/editGoods')
const deleteGoods = require('./routes/goods/deleteGoods')

const app = express()

app.use(express.json())
app.use(rootRoute)

app.use(bodyParser.json())

app.use(addStore)
app.use(getStore)
app.use(editStore)
app.use(deleteStore)

app.use(addInventory)
app.use(getInventory)
app.use(editInventory)
app.use(deleteInventory)

app.use(addGoods)
app.use(getGoods)
app.use(editGoods)
app.use(deleteGoods)

app.use(registerRoute)
app.use(loginRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
