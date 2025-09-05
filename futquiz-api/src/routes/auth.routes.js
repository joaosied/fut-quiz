const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");
const router = express.Router();
const authMiddleware = require("../middleware/auth"); // <- precisa criar/importar
const User = require("../models/User"); 

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
