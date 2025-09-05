const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res) {
  try {
    const { email, password, username, description, profilePic } = req.body;

    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return res.status(400).json({ message: "Email ou username já existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      description: description || "Novo jogador no FutQuiz ⚽",
      profilePic: "https://i.ibb.co/2nYVq6G/default-avatar.png", // padrão
      level: 1,
    });

    await newUser.save();

    res.status(201).json({ message: "Usuário registrado com sucesso" });
  } catch (err) {
    console.error("Erro em registerUser:", err); // log real
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Usuário não encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "1d" }
    );

    res.status(200).json({
      message: "Login bem-sucedido",
      token,
      user: {
        id: user._id,
        username: user.username,
        description: user.description,
        profilePic: user.profilePic,
        level: user.level,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Erro em loginUser:", err); // log real
    res.status(500).json({ message: "Erro no servidor", error: err.message });
  }
}

module.exports = { registerUser, loginUser };
