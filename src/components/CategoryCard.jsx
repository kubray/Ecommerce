import { Link } from 'react-router-dom';

const CategoryCard = ({ title, items, image }) => {
  return (
    <Link
      to={`/shop/${title.toLowerCase()}`}
      className="w-full max-w-[205px] h-auto md:h-[223px] flex flex-col items-center justify-start relative overflow-hidden"
    >
      <div className="absolute w-full pt-16 bg-white bg-opacity-0 text-center text-white">
        <h5 className="text-[16px]">{title}</h5>
        <span className="text-[14px]">{items}</span>
        <span className="ml-1 text-[14px]">Items</span>
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </Link>
  );
};

export default CategoryCard; 
