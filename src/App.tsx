import { Toaster } from "sonner";
import MaxWidthWrapper from "./components/max-width-wrappper";
import Navbar from "./components/navbar";
import RequestBuilder from "./components/request-builder";
// import { useStore } from "@/store";
import ResponseViewer from "./components/response-viewer";

function App() {
  // const { url, method, requestHeaders } = useStore((state) => state);

  return (
    <div className="">
      <Navbar />
      <main>
        <MaxWidthWrapper className="pt-6">
          {/* {url}
          {method}
          {JSON.stringify(requestHeaders)} */}
          <section className="grid grid-cols-2 gap-4">
            <RequestBuilder />

            <ResponseViewer />
          </section>
        </MaxWidthWrapper>
      </main>
      <Toaster duration={1000} />
    </div>
  );
}

export default App;
