const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../models");

const User = db.user;

const secret = 'test';
// Retrieve all Projects from the database.
exports.authenticate = async  (req, res) => {
  try {
    // Truy vấn MongoDB để lấy dữ liệu
    
    const data = await User.find();
    if (!data) {
      // Handle empty response
      res.status(404).json({ error: 'No data found' });
      return;
    }
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  };



  exports.signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email }); //working stats
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  exports.signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
  
      const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };
