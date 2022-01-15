const ordersRouter = require('express').Router()
const Item = require('../models/Item')
// const User = require('../models/User.js')
const Order = require('../models/Order')
const Business = require('../models/Business')
const userExtractor = require('../middleware/userExtractor')

ordersRouter.post('/', async (request, response, next) => {
  const { total, currency = 'EUR', itemsList, businessId } = request.body

  // const { userId } = request

  // const user = await User.findById(userId)
  const business = await Business.findById(businessId)

  // itemsList.forEach(async (itemId) => {
  //   const item = await Item.findById(itemId)
  //   if (!item) {
  //     return response.status(400).json('Item doesn´t exist')
  //   }
  // })

  const newOrder = new Order({
    total,
    currency,
    date: new Date().toISOString(),
    status: 'New',
    // user: userId,
    business: businessId,
    items: itemsList
  })

  try {
    const savedOrder = await newOrder.save()
    itemsList.forEach(async (orderItem) => {
      const item = await Item.findById(orderItem.item)
      item.orders = item.orders.concat(savedOrder._id)
      await item.save()
      if (orderItem.subitem) {
        const subitem = await Item.findById(orderItem.subitem)
        subitem.orders = subitem.orders.concat(savedOrder._id)
        await subitem.save()
      }
    })

    // user.orders = user.orders.concat(savedOrder._id)
    // await user.save()

    business.orders = business.orders.concat(savedOrder._id)
    await business.save()

    response.status(201).json(savedOrder)
  } catch (error) {
    response.status(400).json(error.message)
  }
})

ordersRouter.get('/', async (request, response) => {
  const orders = await Order.find({})
    .populate('business', {
      email: 1,
      name: 1
    })
    .populate('user', {
      email: 1,
      name: 1,
      surname: 1
    })
    .populate('items.item', {
      name: 1,
      price: 1
      
    })
    .populate('items.subitem', {
      name: 1,
      price: 1
      
    })

  response.json(orders)
})

ordersRouter.put('/:id', userExtractor, async (request, response, next) => {
  const { id } = request.params
  const newOrder = request.body

  try {
    const result = await Order.findByIdAndUpdate(id, newOrder, { new: true })
      .populate('items.item', {
        name: 1,
        price: 1
        
      })
      .populate('items.subitem', {
        name: 1,
        price: 1
        
      })

    if (result === null) {
      return response.status(400).json({
        error: 'Order does´t exist'
      })
    }

    response.json(result)
  } catch (e) {
    next(e)
  }
})

module.exports = ordersRouter
