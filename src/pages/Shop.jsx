import { Link} from 'react-router-dom';
import ShopCategories from '../components/ShopCategories';

function Shop() {
  return (
    <div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row h-[92px] bg-[#FAFAFA] pt-[24px] pb-[24px]">
        <div className="h-[44px] w-full max-w-[1049px] mx-auto flex items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[24px]">Shop</h2>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end items-center space-x-2 mt-2 md:mt-0">
            <Link to="/" className="text-[14px] text-black hover:underline">Home</Link>
            <span className="text-xs text-[#BDBDBD]">›</span>
            <h6 className="text-[14px] text-[#BDBDBD]">Shop</h6>
          </div>
        </div>
      </div>
      {/* Kategori kartları grid alanı */}
      <div className="w-full max-w-[1440px] px-4 mx-auto h-auto md:h-[271px] bg-[#FAFAFA] py-6">
        <div className="w-full md:w-[1088px] h-auto md:h-[271px] mx-auto">
            <ShopCategories />
        </div>
      </div>
    </div>
  );
}


export default Shop;