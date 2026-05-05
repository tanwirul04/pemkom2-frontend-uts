import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapseProps {
  title: string;
  description: string;
}

export const Collapse: React.FC<CollapseProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border-2 border-pink-100 shadow-lg shadow-pink-100 border-r-8 border-r-red-900 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-full px-6 py-8 flex items-center gap-6 text-left"
      >
        <div className="p-2 bg-gray-100">
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <span className="text-lg font-semibold text-gray-800">{title}</span>
      </button>

      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};