import { Suspense, lazy } from "react";

// comp
import Navbar from "./pages/Navbar/Navbar";

import BasicRouter from "./routes/BasicRouter";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Suspense fallback={<Loading />}>
        <BasicRouter />
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
