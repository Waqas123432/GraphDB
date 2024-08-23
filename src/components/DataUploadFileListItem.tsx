import VectorIcon from "src/assets/vector.svg";

interface DataUploadFileListItemProps {
  fileName: string;
  fileSize: string;
  namedGraphId: string[];
}

export default function DataUploadFileListItem({
  fileName,
  fileSize,
  namedGraphId,
}: DataUploadFileListItemProps) {
  const handleDelete = () => {
    console.log(`Deleting ${fileName}`);
  };

  const handleImport = () => {
    console.log(`Importing ${fileName}`);
  };

  return (
    <li className="bg-white border border-[#E9EFF4] flex items-center p-4 rounded-md">
      <input type="checkbox" className="mr-4" />
      <span className="flex-grow font-medium text-[#4B506D]">{fileName}</span>
      <div className="w-32 relative">
        <select className="border-none outline-none px-3 py-2 border border-[#A4A6B3] rounded-md text-[#52575C] appearance-none bg-white">
          {namedGraphId.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
        <img
          src={VectorIcon}
          alt="Dropdown arrow"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>
      <span className="mr-4 text-[#6B7280]">{fileSize}</span>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
      >
        Delete
      </button>
      <button
        onClick={handleImport}
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        Import
      </button>
    </li>
  );
}
