import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type HeaderInputProps = {
    onHeaderAdd: (key: string, value: string) => void;
  };
  
  const HeaderInput: React.FC<HeaderInputProps> = ({ onHeaderAdd }) => {
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
  
    const handleAdd = () => {
      if (key && value) {
        onHeaderAdd(key, value);
        setKey("");
        setValue("");
      }
    };
  
    return (
      <div className="flex gap-2 py-4">
        <Input type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} />
        <Input type="text" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button variant={"secondary"} onClick={handleAdd} className="rounded-full text-xl">
            +
        </Button>
      </div>
    );
  };
  
  export default HeaderInput;
  