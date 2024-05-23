import { Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

interface Header {
  key: string;
  value: string;
  enabled: boolean;
}

type HeaderListProps = {
  headers: Header[];
  onHeaderChange: (key: string, enabled: boolean) => void;
  onHeaderRemove: (key: string) => void;
};

const HeaderList: React.FC<HeaderListProps> = ({
  headers,
  onHeaderChange,
  onHeaderRemove,
}) => (
  <div>
    {headers.map((header) => (
      <div key={header.key} className="flex gap-4 items-center py-2 border-b">
        <div className="flex flex-1 gap-2 justify-between">
          <Input className="w-[50%]" type="text" value={header.key} contentEditable={false} disabled={!header.enabled} />
          <Input className="w-[50%]" type="text" value={header.value} contentEditable={false} disabled={!header.enabled}/>
        </div>
        <Checkbox
          checked={header.enabled}
          onCheckedChange={(checkedState) =>
            onHeaderChange(header.key, checkedState as boolean)
          }
        />
        <button onClick={() => onHeaderRemove(header.key)}>
          <Trash2 size={18} />
        </button>
      </div>
    ))}
  </div>
);

export default HeaderList;
