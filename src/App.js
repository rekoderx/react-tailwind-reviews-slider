import Review from "./Review";
import reviews from "./data";

function App() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen max-w-4xl mx-auto">
      <h2 className="capitalize text-4xl font-bold text-gray-700">
        <span className="text-blue-400">/</span> reviews
      </h2>
      <Review reviews={reviews} />
    </main>
  );
}

export default App;
