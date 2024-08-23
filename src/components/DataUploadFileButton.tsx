import FileIcon from "src/assets/file.svg";

export default function DataUploadFileButton() {
  return (
    <div
      className="flex gap-5 bg-white border border-[#E9EFF4] font-worksans text-[#3A3A49] px-4 py-6
        w-[512px]
      "
    >
      <img src={FileIcon} alt="file icon" />
      <div className="flex flex-col">
        <h2 className="text-[#373F41] font-bold text-[20px] font-mulish">
          File Upload
        </h2>
        <p className="font-mulish text-[#373F41] leading-5">
          File formats of rdf/xml, ttl, ntriples, and json-ld Supports multiple
          files selection.
        </p>
      </div>
    </div>
  );
}
