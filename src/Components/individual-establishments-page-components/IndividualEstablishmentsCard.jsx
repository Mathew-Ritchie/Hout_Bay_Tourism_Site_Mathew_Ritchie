import MapSVG from "./SVGs/map";
import EmailSVG from "./SVGs/email";
import WebSVG from "./SVGs/WebSVG";
import OpenTime from "./SVGs/OpenTime";
import LocationSVG from "./SVGs/LocationSVG";
import PhoneSVG from "./SVGs/PhoneSVG";
import RatingSVG from "./SVGs/RatingSVG";

export default function IndividualEstablishmentCard({ details }) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-2xl w-full inline-flex flex-col justify-center items-start">
      {details.imageUrl && (
        <img
          src={`${details.imageUrl}`}
          alt={details.name}
          className="w-full h-64 object-cover object-center rounded-lg mb-6"
        />
      )}

      {/* Establishment Name */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">{details.name}</h2>

      {/* Establish categories */}
      {details.category && (
        <div className="inline-flex gap-3">
          {details.category.map((item, index) => (
            <p key={index} className="text-xl text-gray-500 mb-2 italic font-semibold">
              {item}
            </p>
          ))}
        </div>
      )}

      {/* Operating hours  */}
      <div className="text-lg text-gray-700 mb-2 inline-flex justify-center items-center gap-2 ">
        <OpenTime />
        {details.tradingHours ? details.tradingHours : "Sorry - no trading hours available"}
      </div>

      {/* Establishment description */}
      {details.description &&
        details.description.map((item, index) => (
          <p className="text-justify pb-5" key={index}>
            {item}
          </p>
        ))}

      {/* Establishment Address  */}
      <div className="inline-flex justify-center items-center gap-2">
        <LocationSVG /> {details.address ? details.address : "Sorry - no address available"}
      </div>

      {/* Establishment Phone Number  */}
      <div className="inline-flex justify-center items-center gap-2">
        <PhoneSVG />
        {details.phoneNumber ? details.phoneNumber : "Sorry - no phone number available"}
      </div>

      {/* Establishment Rating  */}
      <div className="inline-flex justify-center items-center gap-2">
        <RatingSVG />
        {details.rating ? `${details.rating}/5` : "Sorry - no rating available"}
      </div>

      <div className="inline-flex justify-center flex-wrap items-center gap-2 pt-5">
        {details.website && (
          <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
            {/* <strong>Website:</strong>{" "} */}
            <a
              href={details.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2"
            >
              <WebSVG />
              Website
            </a>
          </p>
        )}

        {details.email && (
          <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
            {/* <strong>email:</strong>{" "} */}
            <a
              href={`mailto:${details.email}`}
              target="_blank"
              rel=""
              className="inline-flex justify-center items-center gap-2"
            >
              <EmailSVG /> {details.email}
            </a>
          </p>
        )}

        <p className="w-fit px-4 py-2 rounded-full text-sm font-medium shadow-md transition-colors duration-200 bg-gray-300 text-gray-800 hover:bg-gray-400">
          {/* <strong>Location:</strong>{" "} */}
          <a
            href={`https://www.google.com/maps/search/${details.name}`}
            target="blank"
            className="inline-flex justify-center items-center gap-2"
          >
            <MapSVG />
            Google
          </a>
        </p>
      </div>
    </div>
  );
}
