import express from "express";
import User from "../models/user.model.js";

const router = express.Router(); //remember

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      age,
    });
    res.send("User created successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      msg: "done",
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get signgle user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json({
      msg: "done",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// deelte single user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findByIdAndDelete(id);
    res.json({
      msg: "done",
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({
      msg: "done",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
