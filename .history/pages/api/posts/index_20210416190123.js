import items from "../../../data";

export default function handler(req, res) {
  res.statusCode = 200;
  res.json({ data: items });
}
