import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import axios from "axios";
import { Package, PanelLeft } from "lucide-react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniSquare3Stack3D, HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const DocumentsSupport = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const documents = [
    "Credit card",
    "Insurance card",
    "Cash advance application",
    "Corporate resolution certificate",
    "Credit card statement",
    "Lease agreement",
    "Loan application",
    "Mortgage application",
    "Tax return",
    "Vehicle title",
    "Medicare card",
    "Birth certificate",
    "US social security card",
    "Working With Children check",
    "Superannuation statement",
    "Trade association card",
    "School enrollment letter",
    "Phone bill",
    "Social security card",
    "DOCUMENT",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = documents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(documents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex bg-[#ffffff]">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            {/* top left icon */}
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 text-lg font-semibold md:h-8 md:w-8 md:text-base"
            >
              <RiMenu4Line
                color="#202224"
                className="h-4 w-4 transition-all group-hover:scale-110"
              />
            </Link>

            {/* side icons */}
            <Tooltip>
              {/* dasboard */}
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <BiSolidDashboard color="#4880FF" className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>

            {/* order list icons */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center opacity-30 text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <HiMiniSquare3Stack3D className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>

            {/* products all icons */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center opacity-30 text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>

            {/* user icons */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center opacity-30 text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <HiUser className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>

            {/* settings icon */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center opacity-30 text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <IoSettings className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>

          {/* profile*/}
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            {/* profile pic */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuLabel className="text-center">
                  My Account
                </DropdownMenuLabel>
                <button
                  className="text-center items-center justify-center px-8"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </aside>

        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-white">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  {/* dashboard */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <BiSolidDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>

                  {/* orders list */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <HiMiniSquare3Stack3D className="h-5 w-5" />
                    Orders
                  </Link>

                  {/* products */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>

                  {/* user icons */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <HiUser className="h-5 w-5" />
                    Customers
                  </Link>

                  {/* settings */}
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <IoSettings className="h-5 w-5" />
                    Settings
                  </Link>

                  {/* logout */}
                  <Link
                    to="/login"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <TbLogout2 className="h-5 w-5" />
                    Logout
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </header>

          <main>
            <div className=" flex flex-col lg:flex-row min-h-screen">
              {/* navigation sidebar */}

              <div className="-mt-5 hidden lg:block shadow-md w-auto lg:w-1/5">
                <div className="space-y-1 fixed">
                  <div className="flex flex-col mt-3 items-center h-screen text-center">
                    <div className="mb-4">
                      <Link to="/userlogin">
                        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                          <FaArrowLeft className="mr-2 h-4 w-4" /> Identity
                          Verification
                        </button>
                      </Link>
                    </div>

                    <div className=" ps-5 pt-2  space-y-3 mr-14">
                      <button className="block   w-full font-medium text-lg text-left text-gray-700">
                        Application Settings
                      </button>
                      <button className="block pt-2 w-full font-medium text-lg text-left text-gray-700">
                        Customiza Client
                      </button>
                      <button className="block pt-2 w-full font-medium text-lg text-left text-gray-700">
                        Api Cerdentials
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        App Showcase
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Offline Token
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Data Setting
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Watchlist Verification
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Document Verification
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Accepted IDs
                      </button>
                      <button className="block w-full pt-2 font-medium text-lg text-left text-gray-700">
                        Supported IDs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Account details entry fields */}

              <div className="-mt-4 md:-mt-8 flex-1 p-4 md:p-5 overflow-auto">
                <div className="md:-mt-8 flex p-2 md:p-3 items-center space-x-2 md:space-x-1 space-y-3 w-full">
                  <IoSettings
                    size={23}
                    color="#4880FF"
                    className="mt-1 md:mt-4"
                  />
                  <span>
                    <Link className="text-lg md:text-2xl ms-2 font-normal mb-1 md:mb-4">
                      Admin /
                    </Link>
                  </span>
                  <span className="text-lg md:text-2xl ms-1 font-semibold mb-1 md:mb-4">
                    Identity Verification
                  </span>
                </div>

                <hr className="md:mt-2" />

                <div className="p-3 md:p-5 md:ps-1 mb-3 md:mb-6">
                  <div className="flex flex-col shadow-md p-3 md:p-4 pb-0 ">
                    <div className="flex items-center space-x-4 md:space-x-10">
                      <Link className=" pb-1 md:pb-2">Extracted Fields</Link>
                      <div className="border-b-2 border-gray-800 pb-1 md:pb-2">
                        <Link>Data Retention</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-md shadow-gray-500 p-5">
                  <div className="overflow-auto">
                    <div className="flex justify-between items-center">
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((doc, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {doc}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {doc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index + 1}
                          onClick={() => handlePageChange(index + 1)}
                          className={`px-3 py-1 mx-1 border rounded ${
                            currentPage === index + 1
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      </div>
                      
                      <div>
                        <label htmlFor="itemsPerPage" className="mr-2">
                          Items per page:
                        </label>
                        <select
                          id="itemsPerPage"
                          value={itemsPerPage}
                          onChange={handleItemsPerPageChange}
                          className="border px-2 py-1 rounded"
                        >
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <br />
    </div>
  );
};

export default DocumentsSupport;