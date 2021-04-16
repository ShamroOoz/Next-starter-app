import items from "../../data";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ data: items });
};
