const Card = ({ name, role, email, image, onBlock, onDetails }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img 
      src={image} 
      alt={name} 
      className="w-24 h-24 rounded-full object-cover"
      loading="lazy"
      decoding="async"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500">{role}</p>
    <p className="text-gray-400">{email}</p>
    <div className="flex space-x-4">
      <button
        onClick={onBlock}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
      >
        Block
      </button>
      <button
        onClick={onDetails}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
      >
        Details
      </button>
    </div>
  </div>
);

export default Card;