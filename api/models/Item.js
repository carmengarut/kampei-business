const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
  title: String,
  image: String,
  creationDate: Date,
  status: String,
  price: Number,
  category: String,
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business'
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
})

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Item = model('Item', itemSchema)

module.exports = Item
