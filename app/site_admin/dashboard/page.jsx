import React from "react";
import AdminDashboardSidebar from "../../components/sidebar/adminDashboard/AdminDashboardSidebar.jsx";

const dashboard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center max-w-full py-2 px-2 xl:px-0">
        <div className="xl:w-[1280px] w-full">
          <div>Product Category</div>
          <div className="flex flex-wrap mx-[-0.5rem] px-[0.5rem] items-stretch">
            <div className="xl:w-1/3 lg:w-1/3 sm:w-1/4 w-1/3">
              <div className="bg-white text-black overflow-auto h-full flex items-center flex-col sm:py-2 py-0 sm:px-2 px-0 border-[1px] hover:shadow-md">
                <div className="h-16 w-full flex justify-center items-center relative">
                  Total Shops
                </div>
                <div className="text-xs sm:text-sm sm:mx-3 mx-0 mt-2">500</div>
              </div>
            </div>
            <div className="xl:w-1/3 lg:w-1/3 sm:w-1/4 w-1/3">
              <div className="bg-white text-black overflow-auto h-full flex items-center flex-col sm:py-2 py-0 sm:px-2 px-0 border-[1px] hover:shadow-md">
                <div className="h-16 w-full flex justify-center items-center relative">
                  Total Users
                </div>
                <div className="text-xs sm:text-sm sm:mx-3 mx-0 mt-2">500</div>
              </div>
            </div>
            <div className="xl:w-1/3 lg:w-1/3 sm:w-1/4 w-1/3">
              <div className="bg-white text-black overflow-auto h-full flex items-center flex-col sm:py-2 py-0 sm:px-2 px-0 border-[1px] hover:shadow-md">
                <div className="h-16 w-full flex justify-center items-center relative">
                  Total Products
                </div>
                <div className="text-xs sm:text-sm sm:mx-3 mx-0 mt-2">500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
