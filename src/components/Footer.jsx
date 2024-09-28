export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* ABOUT Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">ABOUT</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
  
          {/* GROUP COMPANIES Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">GROUP COMPANIES</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Myntra</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cleartrip</a></li>
              <li><a href="#" className="hover:underline">Shopsy</a></li>
            </ul>
          </div>
  
          {/* HELP Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">HELP</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Payments</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Shipping</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Cancellation & Returns</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
  
          {/* Consumer Policy Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">CONSUMER POLICY</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Security</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
            </ul>
          </div>
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>
  
        {/* Bottom Section */}
        <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Become a Seller</a>
            <a href="#" className="hover:text-gray-400">Advertise</a>
            <a href="#" className="hover:text-gray-400">Gift Cards</a>
            <a href="#" className="hover:text-gray-400">Help Center</a>
          </div>
  
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2007-2024 PeakMart.com
          </div>
  
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  