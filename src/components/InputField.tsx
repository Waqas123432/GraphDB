interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "file";
}

export default function InputField({
  name,
  value,
  onChange,
  type = "text",
}: InputFieldProps) {
  return type === "file" ? (
    <input
      type="file"
      name={name}
      value={undefined} // File inputs don't support the value attribute for security reasons
      onChange={onChange}
      className="text-[14px] font-medium text-[#4B506D] p-3 w-full outline-none rounded-[8px] border-[#A4A6B3] border"
    />
  ) : (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="text-[14px] font-medium text-[#4B506D] p-3 w-full outline-none rounded-[8px] border-[#A4A6B3] border"
    />
  );
}
