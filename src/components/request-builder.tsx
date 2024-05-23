import { ApiHeader, HeaderItem } from "@/types";
import { useEffect, useState } from "react";
import UrlInput from "./url-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderList from "./header-list";
import HeaderInput from "./header-input";
import { useStore } from "@/store";


const RequestBuilder = () => {
  const setRequestHeaders = useStore((state) => state.setRequestHeaders);
  const [headers, setHeaders] = useState<HeaderItem[]>([
    {
      key: "content-type",
      value: "application/json",
      enabled: true,
    },
  ]);

  const handleHeaderChange = (key: string, enabled: boolean) => {
    setHeaders((prevHeaders) =>
      prevHeaders.map((header) =>
        header.key === key ? { ...header, enabled } : header
      )
    );
  };

  const handleHeaderRemove = (key: string) => {
    setHeaders((prevHeaders) =>
      prevHeaders.filter((header) => header.key !== key)
    );
  };

  const handleHeaderAdd = (key: string, value: string) => {
    setHeaders((prevHeaders) => [
      ...prevHeaders,
      { key, value, enabled: true },
    ]);
  };

  useEffect(() => {
    const enabledHeaders = headers.filter(header => header.enabled);
    const headersObject: ApiHeader = enabledHeaders.reduce((obj, currentHeader) => {
      obj[currentHeader.key] = currentHeader.value;
      return obj;
    }, {} as ApiHeader)
    
    setRequestHeaders(headersObject);
  }, [headers])

  return (
    <div className="border p-4 rounded-sm">
      <UrlInput />

      <Tabs defaultValue="header" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
        </TabsList>
        <TabsContent value="header">
          <HeaderList
            headers={headers}
            onHeaderChange={handleHeaderChange}
            onHeaderRemove={handleHeaderRemove}
          />
          <HeaderInput onHeaderAdd={handleHeaderAdd} />
        </TabsContent>
        <TabsContent value="body">Work in Progress...</TabsContent>
      </Tabs>
    </div>
  );
};

export default RequestBuilder;
