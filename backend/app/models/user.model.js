const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  name: String  
});

mongoose.model('users', userSchema);


module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        googleId: String,
        email: String,
        name: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
  };