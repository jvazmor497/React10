import { lazy, Suspense } from "react";
import Loading from "../components/loadingComponent";

const ParentComponent = lazy(() => import("../components/ParentComponent"));
function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="parentContainer">
        <ParentComponent />
      </div>
    </Suspense>
  );
}

export default Home;
