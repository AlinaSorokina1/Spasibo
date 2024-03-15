// const { where, json } = require('sequelize');
const { Student } = require('../../db/models');
const router = require('express').Router();

router.get('/:phase', async (req, res) => {
  try {
    const { phase } = req.params;
    const students = await Student.findAll({
      where: { phase },
      order: ['countThanks'],
    });

    res.status(200).json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
