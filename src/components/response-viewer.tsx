import { useStore } from "@/store";
import DisplayStatus from "./display-status";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Loader from "./loader";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ResponseViewer = () => {
  const errorMessage = useStore((state) => state.errorMessage);
  const response = useStore((state) => state.response);
  const responseStatus = useStore((state) => state.responseStatus);
  const responseHeaders = useStore((state) => state.responseHeaders);
  const loading = useStore((state) => state.loading);

  const renderResponseData = () => {
    if (!responseHeaders || !response) return null;

    const contentType = responseHeaders["content-type"];
    if (contentType.includes("application/json")) {
      return <pre>{JSON.stringify(response, null, 2)}</pre>;
    } else if (contentType.includes("text/html")) {
      return <div dangerouslySetInnerHTML={{ __html: response }} />;
    } else {
      return <pre>{response}</pre>;
    }
  };

  return (
    <div className="border p-4 rounded-sm ">
      {responseStatus && (
        <div className="pb-2 mb-2 border-b">
          <DisplayStatus status={responseStatus} />
        </div>
      )}

      {errorMessage && <div>Error: {errorMessage}</div>}

      {loading && <Loader />}

      {!loading && response && (
        <ScrollArea className="h-[400px] w-full relative">
          <CopyToClipboard
            text={JSON.stringify(response, null, 2)}
            onCopy={() => toast.success("Copied to clipboard!")}
          >
            <button className="absolute top-0 right-5">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Copy size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          </CopyToClipboard>
          {renderResponseData()}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};

export default ResponseViewer;
