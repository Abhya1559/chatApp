import Nav from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="bg-gradient-to-r from-blue-950 to-blue-950 min-h-screen flex justify-center items-center">
        <h1 className="font-bold text-8xl text-center p-6 bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text">
          Hello this is chatApp
        </h1>
      </div>
    </div>
  );
}
