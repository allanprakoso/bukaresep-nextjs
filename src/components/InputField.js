const InputText = ({
  id,
  value,
  label,
  name,
  placeholder,
  onChange,
  type,
  ...props
}) => {
  return (
    <div className="input-text">
      <label className="text-gray-600 font-semibold text-lg">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="border-[1.4px] border-gray-400 rounded-md w-full py-3 px-4 mt-2 text-base font-medium text-gray-600 focus:outline-gray-600 "
      />
    </div>
  );
};

const InputOption = ({ id, type, value, label, name, onChange, ...props }) => {
  // for checkbox and radio
  return (
    <div className="input-checkbox flex items-center">
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="h-4 w-4 border-[1.4px] border-gray-400 rounded-sm mr-2 transition duration-200 cursor-pointer"
      />
      <label className="text-gray-600 text-base ">{label}</label>
    </div>
  );
};
module.exports = { InputText, InputOption };
