import { AsteriskIcon } from "lucide-react";

interface InputFieldProps {
  label: string;
  register: any;
  type: string;
  placeholder: string;
  error: string | undefined;
}

export default function InputField({
  label,
  register,
  type,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="ml-2.5 flex text-lg font-medium">
        {label}
        <AsteriskIcon size={16} className="text-[#de362a]" />
      </label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="shadow-cyan-shadow rounded-xl p-2.5 text-black outline-none"
      />
      <p className="ml-2.5 mt-1 text-sm text-[#de362a]">{error}</p>
    </div>
  );
}
