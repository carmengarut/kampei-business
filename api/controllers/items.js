const itemsRouter = require('express').Router()
const Item = require('../models/Item')
const Business = require('../models/Business.js')
const userExtractor = require('../middleware/userExtractor')

itemsRouter.get('/', async (request, response) => {
  const items = await Item.find({})
    .populate('business', {
      email: 1,
      name: 1
    })

  response.json(items)
})

itemsRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id
  const items = await Item.find({})
    .populate('business', {
      email: 1,
      name: 1
    })
    .populate('subitem', {
      name: 1,
      image: 1,
      price: 1
    })

  response.json(items.filter(item => item.business.id === id))
})

itemsRouter.get('/one/:id', async (request, response, next) => {
  const id = request.params.id
  const item = await Item.findById(id)
    .populate('business', {
      email: 1,
      name: 1
    })
    .populate('subitem', {
      name: 1,
      image: 1,
      price: 1
    })

  response.json(item)
})

itemsRouter.delete('/:id', userExtractor, async (request, response, next) => {
  const { id } = request.params
  await Item.findByIdAndDelete(id)

  try {
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

itemsRouter.post('/', userExtractor, async (request, response, next) => {
  const { name, image, category, subcategory, price, subitem } = request.body

  if (!name || !category || !price) {
    console.log('Item property is missing')
    return response.status(400).json({
      error: 'Item property is missing'
    })
  }

  const { userId } = request
  const business = await Business.findById(userId)
  if (!business) {
    return response.status(400).json({
      error: 'Business does´t exist'
    })
  }

  const newItem = new Item({
    name,
    image,
    category,
    subcategory,
    price,
    subitem,
    creationDate: new Date().toISOString(),
    status: 'active',
    business: business._id
  })

  try {
    const savedItem = await newItem.save()
    const itemsList = business.items.concat(savedItem._id)

    await Business.findByIdAndUpdate(userId, { items: itemsList })

    response.status(201).json(savedItem)
  } catch (error) {
    next(error)
  }
})

itemsRouter.put('/:id', userExtractor, async (request, response, next) => {
  const { id } = request.params
  const newItem = request.body

  try {
    const result = await Item.findByIdAndUpdate(id, newItem, { new: true })

    if (result === null) {
      return response.status(400).json({
        error: 'Item does´t exist'
      })
    }

    response.json(result)
  } catch (e) {
    next(e)
  }
})

module.exports = itemsRouter
