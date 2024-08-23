interface BlueButttonProps {
  label: string;
  action: () => void;
}

export default function BlueButtton({ label, action }: BlueButttonProps) {
  return (
    <button
      onClick={action}
      className="bg-[#007EFF] text-nowrap p-4 w-full rounded-[8px] text-white font-semibold font-mulish shadow-[0px_4px_12px_0px_#3751FF3D]"
    >
      {label}
    </button>
  );
}
