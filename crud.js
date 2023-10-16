const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://indian:suyog8383@cluster0.adjp1pm.mongodb.net/"
);

const productSchema = new mongoose.Schema({ name: String }); //validation

const saveToDatabase = async () => {
  const productModel = mongoose.model("records", productSchema);
  const data = new productModel({ name: "FootBall", price: 45 });
  let result = await data.save();
  console.log("@SN running", result);
};
// saveToDatabase();

const updateToDatabase = async () => {
  const productModel = mongoose.model("records", productSchema);
  const data = await productModel.updateOne(
    { name: "FootBall" },
    { $set: { price: 50, name: "VollyBall" } }
  );
  console.log("@SN ", data);
};
// updateToDatabase();

const deleteFromDatabase = async () => {
  const productModel = mongoose.model("records", productSchema);
  const data = await productModel.deleteOne({ name: "VollyBall" });
  console.log(data);
};
// deleteFromDatabase();

const findFromDatabase = async () => {
  const productModel = mongoose.model("records", productSchema);
  const data = await productModel.find({ name: "Cricket" });
  console.log(data);
};
// findFromDatabase();
