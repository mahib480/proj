const Navbar = () => {
  
  return (
    <nav className="flex items-center justify-between min-h-[90px] mx-20">
      <div className="nav-logo-container">
        <img src="/logo.png" alt="" width="175" height="35"/>
      </div>
      <div className="">
        <button className="px-4 py-2 bg-red-600 outline-none rounded-full cursor-pointer text-white hover:bg-red-800">Contact Us</button>
      </div>

      
    </nav>
  );
};

export default Navbar;