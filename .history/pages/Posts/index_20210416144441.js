export default function Posts() {
  return (
    <div class="container mb-2 flex mx-auto w-full items-center justify-center">
      <ul class="flex flex-col p-4">
        <li class="border-gray-400 flex flex-row">
          <div class="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
            <div class="flex-1 pl-1 mr-16">
              <div class="font-medium">
                Product-Based Service Based or Hybrid?
              </div>
            </div>
            <div class="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2">
              B2C
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
