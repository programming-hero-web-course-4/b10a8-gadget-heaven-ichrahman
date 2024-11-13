
const Dashboard = () => {
    return (
        <div className="bg-purple-600 text-center py-8">
            <div>
                <h3 className="text-white text-[32px] font-bold">Dashboard</h3>
                <p className="text-white pt-4 pb-8 w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn btn-outline rounded-full py-3 px-6 mr-6 text-white">
                    Cart
                </button>
                <button className="btn bg-white rounded-full text-purple-600 py-3 px-6 font-bold shadow-md hover:bg-purple-100 transition-transform transform hover:scale-105">
                    Wishlist
                </button>
            </div>
        </div>
    )
}

export default Dashboard;