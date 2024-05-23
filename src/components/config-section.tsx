import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConfigSection = () => {
  return (
    <div>
      <Tabs defaultValue="header" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="header">Header</TabsTrigger>
          <TabsTrigger value="body">Body</TabsTrigger>
        </TabsList>
        <TabsContent value="header">
          Header
        </TabsContent>
        <TabsContent value="body">Change your body here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default ConfigSection;
