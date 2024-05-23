import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HttpMethod } from "@/types";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useStore } from "@/store";
import { SyntheticEvent } from "react";
import axios from "axios";

const methodOptionColor = {
  GET: "text-purple-500",
  POST: "text-green-500",
  PUT: "text-yellow-500",
  DELETE: "text-red-500",
};

const UrlInput = () => {
  const {
    url,
    setUrl,
    method: selectedMethod,
    setMethod: setSelectedMethod,
    requestHeaders,
    loading,
    setLoading,
    setErrorMessage,
    setResponse,
    setResponseStatus,
    setResponseHeaders,
  } = useStore((state) => state);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const options = {
        method: selectedMethod,
        url,
        headers: requestHeaders,
      };
      const res = await axios(options);
      setResponse(res.data);
      setResponseStatus(res.status);
      setResponseHeaders(res.headers);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 pb-4 mb-4 border-b">
      <Select
        defaultValue={HttpMethod.GET}
        value={selectedMethod}
        onValueChange={(value) => setSelectedMethod(value as HttpMethod)}
      >
        <SelectTrigger className={`w-28 ${methodOptionColor[selectedMethod]}`}>
          <SelectValue placeholder="Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={HttpMethod.GET} className="text-purple-500">
            GET
          </SelectItem>
          <SelectItem value={HttpMethod.POST} className="text-green-500">
            POST
          </SelectItem>
          <SelectItem value={HttpMethod.PUT} className="text-yellow-500">
            PUT
          </SelectItem>
          <SelectItem value={HttpMethod.DELETE} className="text-red-500">
            DELETE
          </SelectItem>
        </SelectContent>
      </Select>

      <form className="flex w-full gap-2" onSubmit={onSubmit}>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          placeholder="http://localhost:5000/test"
          disabled={loading}
        />

        <Button type="submit" disabled={loading}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default UrlInput;
