import AddIcon from "src/assets/add.svg";
interface SettingsHeadingProps {
  label: string;
  action: () => void;
}
export default function SettingsHeading({
  label,
  action,
}: SettingsHeadingProps) {
  return (
    <div className="flex gap-2 items-center">
      <h1 className="text-[#25282B] font-semibold text-[20px] font-montserrat">
        {label}
      </h1>
      <img
        onClick={action}
        className="w-[20px] h-[20px]"
        src={AddIcon}
        alt="add icon"
      />
    </div>
  );
}
