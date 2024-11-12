const Banner = () => {
    return (
        <div className="min-h-64 bg-purple-600 text-white pb-60">
            <div className="hero-content text-center w-9/12 mx-auto">
                <div className="">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white rounded-full text-purple-600 py-3 px-6 font-bold shadow-md hover:bg-purple-100 transition-transform transform hover:scale-105">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;