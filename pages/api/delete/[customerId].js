import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
    return;
  }
  if (req.method === "DELETE") {
    try {
      await Customer.deleteOne({ _id: req.query.customerId });
      res.status(200).json({ status: "success", message: "Data deleted" });
    } catch (err) {
        console.log(err.message)
      res
        .status(500)
        .json({ status: "failed", message: "Error in deleting data from database" });
    }
  }
}
