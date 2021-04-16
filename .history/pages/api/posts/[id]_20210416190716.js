//get specific posts
import items from "../../../data";

export default function handler({ query: { id } }, res) {
  console.log(id);
  const filtered = items.filter((item) => console.log(item.id));

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
