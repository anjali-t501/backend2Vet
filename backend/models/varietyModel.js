const mongoose = require("mongoose");
const VarietySchema = new mongoose.Schema({
  subProduct:{
    type:[String]
  },
  Variety1:{
    type:[String]
  },
  Variety2:{
    type:[String]
  },
  Variety3:{
    type:[String]
  },
  Variety4:{
    type:[String]
  },
  Variety5:{
    type:[String]
  },
  colors:{
    type:[String]
  },
  sizes:{
    type:[String]
  }
});
const Model = mongoose.model("varieties", VarietySchema);
module.exports = Model;
