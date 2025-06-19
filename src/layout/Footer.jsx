function Footer(){
    return(
        <div className="h-[488px] bg-customBlueTwo">
            <div className="h-[142px]">
                <div className="container mx-auto px-4 h-[142px] w-[1050px] pt-[40px] pb-[40px]">
                    <div className="row flex space-x-[343px] w-[1050px] h-[62px]">
                        <div className="col-md-6">
                            <h3 className="text-[24px] text-white font-montserrat">Consulting Agency For Your Business</h3>
                            <p className="text-[14px] text-white font-montserrat">the quick for jumps over the lazy dog</p>
                        </div>
                        <div className="col-md-3 w-[236px] pl-[80px]">
                            <button className="h-[52px] w-[160px] w-[160px] rounded-[5px] bg-customBlue text-white">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[272px]">
                <div className="container mx-auto px-4 w-[1050px] pt-[50px] pb-[50px] ">
                    <div className="row w-[1041px] h-[170px] flex gap-x-20">
                        <div className="col-md-2 flex flex-col">
                            <h5 className="text-[16px] text-white font-monteserrat">Company Info</h5>
                            <div className="flex flex-col pt-[20px] text-[14px] text-white gap-[10px]">
                                <a href="#">About Us</a>
                                <a href="#">Carrier</a>
                                <a href="#">We are hiring</a>
                                <a href="#">Blog</a>
                            </div>            
                        </div>
                        <div className="col-md-2 flex flex-col">
                            <h5 className="text-[16px] text-white font-monteserrat">Legal</h5>
                            <div className="flex flex-col pt-[20px] text-[14px] text-white gap-[10px]">
                                <a href="#">About Us</a>
                                <a href="#">Carrier</a>
                                <a href="#">We are hiring</a>
                                <a href="#">Blog</a>
                            </div>      
                        </div>
                        <div className="col-md-2 flex flex-col">
                            <h5 className="text-[16px] text-white font-monteserrat">Features</h5>
                            <div className="flex flex-col pt-[20px] text-[14px] text-white gap-[10px]">
                                <a href="#">Business Marketing</a>
                                <a href="#">User Analytic</a>
                                <a href="#">Live Chat</a>
                                <a href="#">Unlimited Support</a>
                            </div>      
                        </div>
                        <div className="col-md-2 flex flex-col">
                            <h5 className="text-[16px] text-white font-monteserrat">Resources</h5>
                            <div className="flex flex-col pt-[20px] text-[14px] text-white gap-[10px]">
                                <a href="#">IOS & Android</a>
                                <a href="#">Watch a Demo</a>
                                <a href="#">Customers</a>
                                <a href="#">API</a>
                            </div>   
                        </div>
                        <div className="col-md-4 flex flex-col">
                            <h5 className="text-[16px] text-white font-monteserrat">Get In Touch</h5>
                            <div className="flex flex-col pt-[20px] text-[14px] text-white gap-[10px]">
                                <div className="feature-item flex gap-x-[10px]">
                                    <img src='./src/assets/phone.png'/>
                                    <h6 className="text-14px">(480)555-0103</h6>
                                </div>
                                <div className="feature-item flex gap-x-[10px]">
                                    <img src='./src/assets/map.png'/>
                                    <h6 className="text-14px">4517 Washington Ave.</h6>
                                </div>
                                 <div className="feature-item flex gap-x-[10px]">
                                    <img src='./src/assets/message.png'/>
                                    <h6 className="text-14px">debra.holf@example.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[74px]">
                <div className="container mx-auto w-[1050px] h-[74px] pt-[25px] pb-[25px]">
                    <div className="row w-[1049px] h-[24px] flex justify-between">
                        <div className="col-md-7">
                            <text className="text-14px text-white">Made With Love By Finland All Right Reserved</text>
                        </div>
                        <div className="col-md-6">
                            <div className="flex gap-x-[20px]">
                                <img src='./src/assets/facebook.png'/>
                                <img src='./src/assets/instagram.png'/>
                                <img src='./src/assets/twitter.png'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;