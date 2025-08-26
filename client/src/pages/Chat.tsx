import Nav from "../components/Navbar";

export default function Chat() {
  return (
    <>
      <Nav />
      <div className="flex  min-w-screen">
        <div className="w-1/4 border-r-2 h-screen flex flex-col">
          {/* sidebar */}
          <div className="p-4">sideBar</div>
        </div>
        {/* chatSection  */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-xl font-semibold">Chat Area</div>
        </div>
      </div>
    </>
  );
}
