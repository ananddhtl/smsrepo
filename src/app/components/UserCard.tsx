import { IoMdMore } from "react-icons/io";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-andPurple even:bg-andYellow p-4 flex flex-col min-w-[130px]"> {/* Increased width */}
      {/* Top Section */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <button className="text-gray-500 hover:text-gray-800">
          <IoMdMore size={20} />
        </button>
      </div>
      {/* Content Section */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold my-4">1,23,333</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
      </div>
    </div>
  );
};

export default UserCard;
