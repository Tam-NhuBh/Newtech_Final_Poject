const db = require("../models");

const User = db.user;


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
