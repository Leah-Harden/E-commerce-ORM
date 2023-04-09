const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findAll({
      where: {
        id: req.params.id
      }
    })
      .then((tagData) =>
      res.json(tagData))
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
    Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
  .then((newCat) => {
    res.json(newCat)
  })
  .catch((err) => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
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
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((destroyCategory) =>{
    res.json(destroyCategory)
  })
  .catch((err) => res.json(err))
});

module.exports = router;
