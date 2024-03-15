// const { where, json } = require('sequelize');
const { Student } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});



router.put('/:id/updateCount', async (req, res) => {
  // console.log(123565);
  try {
   const {id} = req.params;
   const {countThanks} = req.body;
   const result = await Student.update({countThanks}, {where: {id}});
   if (result[0]){
    const student = await Student.findOne({where: {id}});
    res.status(200).json({ message: 'success', student });
      return;
   }
    res.status(400).json({ message: 'error' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


module.exports = router;
