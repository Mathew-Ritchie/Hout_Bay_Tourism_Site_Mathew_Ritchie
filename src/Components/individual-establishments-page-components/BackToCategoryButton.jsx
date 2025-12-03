import { Link } from "react-router-dom";

export default function BackToCategoryButton({ type }) {
  const formattedType = type ? type.charAt(0).toUpperCase() + type.slice(1) : "All";

  return (
    <div className=" bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-0">
      <Link
        to={`/establishments/${type}`}
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
      >
        Back to {formattedType} Establishments
      </Link>
    </div>
  );
}
