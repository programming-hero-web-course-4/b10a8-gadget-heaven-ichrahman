const Footer = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-200 mt-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-lg font-bold text-gray-800">Gadget Heaven</h2>
                    <p className="text-sm text-gray-600">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Product Support</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
