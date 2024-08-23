import BlueButton from "src/components/BlueButton";
import DataUploadFileListItem from "src/components/DataUploadFileListItem"; // Import the DataUploadFileListItem component

export default function DataUploadFileList() {
  const onImportFile = () => {
    // TODO: Handle import action
    console.log("Importing files...");
  };

  // Dummy data
  const files = [
    {
      fileName: "file1.txt",
      fileSize: "2 MB",
      namedGraphId: ["Graph1", "Graph2"],
    },
    {
      fileName: "file2.csv",
      fileSize: "1.5 MB",
      namedGraphId: ["Graph3", "Graph4"],
    },
  ];

  return (
    <div>
      <div className="w-32 mb-4">
        <BlueButton label="Import" action={onImportFile} />
      </div>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <DataUploadFileListItem
            key={index}
            fileName={file.fileName}
            fileSize={file.fileSize}
            namedGraphId={file.namedGraphId}
          />
        ))}
      </ul>
    </div>
  );
}
