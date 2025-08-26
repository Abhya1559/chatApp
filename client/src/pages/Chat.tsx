import { useState } from "react";
import Nav from "../components/Navbar";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function Chat() {
  const [search, setSearch] = useState("");

  const friends = [
    "John Doe",
    "Jane Smith",
    "Alex Johnson",
    "Emily Brown",
    "Michael Lee",
  ];

  const filteredFriends = friends.filter((friend) => 
    friend.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Nav />
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div className="w-1/4 border-r-2 flex flex-col">
          <div className="p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Add your friends..."
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary">Search</button>
              {/* Button to open modal */}
              <label htmlFor="my_modal_6" className="btn btn-error btn-md">
                Add Friends
              </label>

              {/* Modal */}
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold mb-4">Search Friends</h3>

                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Enter friend name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full mb-4"
                  />

                  {/* Results */}
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {filteredFriends.length > 0 ? (
                      filteredFriends.map((friend, index) => (
                        <div
                          key={index}
                          className="p-2 bg-gray-700 rounded-lg font-bold cursor-pointer hover:bg-gray-800"
                        >
                          {friend}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No friends found</p>
                    )}
                  </div>

                  {/* Close Button */}
                  <div className="modal-action gap-2">
                    <label htmlFor="my_modal_6" className="btn btn-primary btn-md">
                      Add
                    </label>
                    <label htmlFor="my_modal_6" className="btn btn-error btn-md">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {/* Example friends list */}
            <ul className="space-y-4">
              <li className="p-8 flex items-center gap-8 text-black font-semibold bg-gray-800 rounded-sm cursor-pointer hover:bg-gray-600">
                <div className="relative">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    height={60}
                    width={60}
                    className="rounded-full"
                  />
                  {/* Online/Offline Dot */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></span>
                </div>

                <div>
                  <h1 className="text-gray-50">John Doe</h1>
                  <p className="text-gray-200">Hey How are you doing??</p>
                </div>
              </li>

              <li className="p-8 flex align-middle gap-8 text-black font-semibold bg-gray-800 rounded-sm cursor-pointer hover:bg-gray-600">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-gray-50">Suraj-Al</h1>
                  <p className="text-gray-200">Hey How are you doing??</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b flex gap-2  p-4 font-semibold text-lg">
            <div className="relative">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                height={60}
                width={60}
                className="rounded-full"
              />
              {/* Online/Offline Dot */}
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></span>
            </div>

            <h1 className="mt-4"> Chat with John Doe</h1>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Ani
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Jhon Doe
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>

          {/* Input Box */}
          <div className="border-t p-4 flex items-center gap-2">
            <textarea
              placeholder="Type your message..."
              className="textarea textarea-bordered flex-1 resize-none"
              rows={1}
            ></textarea>
            <button className="btn btn-primary btn-md flex items-center gap-1">
              Send <RiSendPlane2Fill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
