export default (req, res) => {
  if (req.method === "POST") {
    res.status(200).json({ status: "success" });
    //const { message, name, email, source } = req.body;
    console.log(req.body);
  }
};
