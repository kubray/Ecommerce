import { Link} from 'react-router-dom';

function Shop(){
    return(
        <div>
            <div className="container w-full max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row h-[92px] border border-red-500 bg-[#FAFAFA] pt-[24px] pb-[24px]">
                <div className="row h-[44px] w-full max-w-[1049px] mx-auto flex items-center ">
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
            
        </div>
    )
}


export default Shop;