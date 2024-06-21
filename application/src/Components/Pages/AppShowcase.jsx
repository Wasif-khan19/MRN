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
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";
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

const AppShowcase = () => {
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
                        <button className=" py-2 px-4 rounded bg-[#4379EE] text-white active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-sm font-medium inline-flex items-center">
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

                <div className="pt-12">
                  <p className="text-xl font-semibold mb-1">
                    Get our mobile app:
                  </p>
                  <div className="bg-white shadow-lg space-y-2 border-2 border-gray-300 shadow-gray-400 rounded">
                    <div className="p-3  md:ps-1 mb-3">
                      <div>
                        <div className="container px-10 py-10 mx-auto flex items-center md:flex-row flex-col">
                          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <h2 className="text-2xl text-[#4379EE] font-bold title-font mb-1">
                              Step1
                            </h2>
                            <h1 className="text-lg font-medium title-font text-gray-900">
                              Download the MAPIT app on your mobile phone
                            </h1>
                          </div>
                          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                            <button className="bg-[#4379EE] inline-flex py-3 px-5 rounded-lg items-center hover:bg-blue-600 focus:outline-none">
                              <FaGooglePlay size={25} color="#ffffff" />
                              <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-white mb-1">
                                  GET IT ON
                                </span>
                                <span className="title-font font-medium text-white">
                                  Google Play
                                </span>
                              </span>
                            </button>

                            <button className="bg-[#4379EE] inline-flex py-3 px-5 rounded-lg items-center hover:bg-blue-600 focus:outline-none">
                              <BsApple size={25} color="#ffffff" />
                              <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-white mb-1">
                                  Download on the
                                </span>
                                <span className="title-font font-medium text-white">
                                  App Store
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <p className="text-xl font-semibold mb-1">
                    Scan to connect:
                  </p>
                  <div className="bg-white shadow-lg space-y-2 border-2 border-gray-300 shadow-gray-400 rounded">
                    <div className="p-3  md:ps-1 mb-3">
                      <div>
                        <div className="container px-10 py-10 mx-auto flex items-center md:flex-row flex-col">
                          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <h2 className="text-2xl text-[#4379EE] font-bold title-font mb-1">
                              Step2
                            </h2>
                            <h1 className="text-lg font-medium title-font text-gray-900">
                              Scan the code to connect the app with your MAPIT account
                            </h1>
                          </div>
                          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                            <button className="bg-[#4379EE] inline-flex py-3 px-3 rounded-md items-center hover:bg-blue-600 focus:outline-none">
                              <BsQrCode  size={150} color="#ffffff" />
                            </button>
                          </div>
                        </div>
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

export default AppShowcase;