const Devices = () => {
    return (
        <div className="mt-20">
            <h2 className="text-center text-4xl font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <button className="btn rounded-full bg-[#09080f0d] text-black font-medium py-2 px-7 w-40">
                        All Products
                    </button>
                    <button className="btn bg-white rounded-full bg-[#09080f0d] text-black font-medium py-2 px-7 w-40">
                        Wearables
                    </button>
                    <button className="btn bg-white rounded-full bg-[#09080f0d] text-black font-medium py-2 px-7 w-40">
                        Computers
                    </button>
                    <button className="btn bg-white rounded-full bg-[#09080f0d] text-black font-medium py-2 px-7 w-40">
                        Drones
                    </button>
                </div>
                <div className="col-span-2">
                    <h2>Products</h2>
                </div>
            </div>
        </div>
    );
};

export default Devices;