import { Suspense } from "react";
import Router from "./routes/Router";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className="h-[90vh] w-full flex justify-center
   items-center"
    >
      Loading...
    </div>
  );
};

export default App;
