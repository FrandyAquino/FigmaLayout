import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const InputSearch = ({ variant = "default" }) => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg w-[543px] h-[48px] py-3 px-4">
            {variant === "categories" && (
                <div className="flex items-center border-r border-black pr-4 mr-4">
                    <span className="mr-2 text-sm font-light">All categories</span>
                    <IoIosArrowDown/>
                </div>
            )}
            <IoIosSearch className="text-[#1071FF] mr-2 w-6 h-6" />
            <input
                type="text"
                placeholder="Search by product or SKU"
                className="w-full outline-none"
            />
        </div>
    );
};

export default InputSearch;
