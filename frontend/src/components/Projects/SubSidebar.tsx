type Props = {
  isOpen: boolean;
  onSelect?: (option: string) => void;
  selectedOption?: string;
};

const buttonBaseClass = "text-left p-0 w-fit transition-colors duration-150";
const buttonSelectedClass = "text-lemon-green font-semibold";
const buttonUnselectedClass = "text-mossy-gray hover:text-lemon-green";

export default function SubSidebar({ isOpen, onSelect, selectedOption }: Props) {
  const options = ["Locali", "Detect The Cat", "Job Finder"];
  const handleSelect = (opt: string) => {
    if (onSelect) onSelect(opt);
  };

  return (
    <div
      className={`absolute left-full top-0 ml-8 pl-4 min-w-48 whitespace-nowrap border-l border-slate-700 transition-all duration-200 ease-out origin-left z-10 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-2 font-medium">
        {options.map((opt) => (
          <button
            key={opt}
            className={`${buttonBaseClass} ${
              selectedOption === opt ? buttonSelectedClass : buttonUnselectedClass
            }`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}


