//get specific posts

export default (req, res) => {
  let id = req.query.id;
  res.status(200).json({ data: id });
};
