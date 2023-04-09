const router = require('express').Router();
const { Category, Product } = require('../../models');
const { destroy } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findAll({
      where: {
        id: req.params.id
      }
    })
      .then((catData) =>
      res.json(catData))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  })
  .then((newCat) => {
    res.json(newCat)
  })
  .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
  },
  {
    where:{
      id: req.params.id
    }
  }
  .then((updatedBook) => {
      res.json(updatedBook)
  })
  .catch((err) => res.json(err))
  )
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((destroyCategory) =>{
    res.json(destroyCategory)
  })
  .catch((err) => res.json(err))
})
  
module.exports = router;
