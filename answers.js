// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  ...{
    burger: 'Thom',
    meat: 'tofu',
    cheese: 'American',
    toppings: ['lettuce', 'tomato', 'mustard']
  },
  ...{
    burger: 'Johnny',
    meat: 'chicken',
    cheese: 'American',
    toppings: ['mustard', 'peppers']
  },
  ...{
    burger: 'Colin',
    meat: 'beef',
    cheese: 'American',
    toppings: ['tabasco', 'lettuce']
  },
  ...{
    burger: 'Ed',
    meat: 'beef',
    cheese: 'American',
    toppings: ['lettuce', 'avocado', 'onion']
  },
  ...{
    burger: 'Phil',
    meat: 'beef',
    cheese: 'American',
    toppings: ['lettuce', 'pickles']
  }
])

// find all the burgers
db.burgers.find({})

// show just the meat of each burger
db.burgers.find({}, { meat: 1 })

// show just the toppings of each burger
db.burgers.find({}, { toppings: 1 })
db.burgers.find({ cheese: 'American' }, { toppings: 1 })

// show everything but the cheese
db.burgers.find({}, { toppings: 1, meat: 1 })

// find all the burgers with beef
db.burgers.find({ meat: 'beef' })

// find all the burgers that are not beef
db.burgers.find({ meat: { $ne: 'beef' } })

// find the first burger with cheese
db.burgers.findOne({}, { cheese: true })

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne(
  { burger: 'Thom' },
  { $set: { cheese: 'double cheese' }, $currentDate: { lastModified: true } }
)

// find the burger you updated to have double cheese
db.burgers.findOne({}, { cheese: true })

// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany(
  {},
  { $set: { meat: 'veggie' }, $currentDate: { lastModified: true } }
)

// delete one of your veggie burgers
db.burgers.deleteOne({ burger: 'Phil' })

// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// drop the collection
db.burgers.deleteMany({})
//Expected Output
//true

// drop the database
db.dropDatabase()

//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
