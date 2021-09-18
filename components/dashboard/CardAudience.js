function CardAudience() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-8 text-gray-800 bg-white shadow-lg justify-items-start rounded-xl md:col-span-2 lg:col-span-1 h-104">
      <img src="fia-avatar.jpeg" className="w-32 h-32 rounded-full shadow" />
      <div className="flex mt-4 space-x-4">
        <img
          src="instagram-icon.png"
          alt="instagram"
          className="w-10 h-10 rounded-full"
        />
        <img
          src="facebook-icon.png"
          alt="facebook"
          className="w-10 h-10 rounded-full"
        />
        <img
          src="mailchimp-icon.png"
          alt="mailchimp"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <h3 className="mt-8 font-mono text-2xl font-semibold">Audiences</h3>
      <span class="bg-indigo-100 h-px w-full mt-4"></span>
      <ul className="w-full py-4 space-y-1">
        <li className="flex justify-between px-4 py-2 bg-gray-50">
          <span className="font-bold">Blogs</span>
          <span>120 000</span>
        </li>
        <li className="flex justify-between px-4 py-2 bg-gray-50">
          <span className="font-bold">Social</span>
          <span>13 000</span>
        </li>
        <li className="flex justify-between px-4 py-2 bg-gray-50">
          <span className="font-bold">Email List</span>
          <span>4 420</span>
        </li>
      </ul>
      <span className="pr-2 ml-auto text-xs">
        <a href="#" className="text-indigo-400">
          See more...
        </a>
      </span>
    </div>
  );
}

export default CardAudience;
