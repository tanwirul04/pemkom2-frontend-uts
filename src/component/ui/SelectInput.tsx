interface SelectInputProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
    options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, nama, register, error, options }) => {
    return (
        <div className="flex flex-col gap-1 mb-2">
            <label htmlFor={label}>{label}</label>
            <select 
                {...register(nama)}
                className={`border p-2 rounded-xl outline-none
                ${error 
                    ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-300" 
                    : "border-gray-200 focus:ring-2 focus:ring-blue-300"
                }`}
            >
                <option value="">Pilih</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default SelectInput;