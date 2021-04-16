export default function Posts() {
  return (
    <div className="mb-2 flex mx-auto w-full items-center justify-center">
      <ul className="flex flex-col p-4">
        <li className="border-gray-400 flex flex-row">
          <div className="flex flex-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
            <div className="flex-1 pl-1 mr-16">
              <div className="font-medium">
                Product-Based Service Based or Hybrid?
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
