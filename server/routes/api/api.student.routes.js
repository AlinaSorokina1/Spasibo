const router = require("express").Router();
const { Student } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();
    if (students) {
      res.status(200).json({ message: "success", students });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", async (req, res) => {
  let student;
  try {
    const { name, phase, countThanks } = req.body;
    student = await Student.create({ name, phase, countThanks });
    if (student) {
      student = await Student.findOne({ where: { id: student.id } });
      res.status(200).json({ message: "success", student });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
