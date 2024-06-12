import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import axios from "axios";
import { BiSolidDashboard } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniSquare3Stack3D, HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Package, PanelLeft } from "lucide-react";

const IdentifyVerification = () => {
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
              <div className="hidden lg:block shadow-md w-full lg:w-1/5 p-0">
                <div className="space-y-5">
                  <div className="text-center justify-center items-center">
                    <Link to="/userlogin">
                      <Button>
                        <FaArrowLeft className="mr-2 h-4 w-4" /> Identity
                        Verification
                      </Button>
                    </Link>

                    <div className="py-8 ml-4 space-y-5">
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Account Settings
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Customize Clients
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Api Credentials
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        App Showcase
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Offline Token
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Data Settings
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Watchlist Screening
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Document Verification
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Accepted IDs
                      </button>
                      <button className="block w-full font-medium text-lg text-left text-gray-700">
                        Supported IDs
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account details entry fields */}
              <div className="flex-1 p-5 overflow-auto">
                <div className="flex">
                <Link className="text-2xl font-normal mb-4">Admin      /</Link>
                <span className="text-2xl font-semibold mb-4">Account Settings</span>
                
                </div>
                <hr />
                <div className="bg-white shadow-lg space-y-5 shadow-gray-400 rounded p-6">
                  <p className="mb-4">
                    Configure your redirect implementation by providing URLs
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="flex items-center">
                      <p className="text-gray-700 font-semibold">Callback URL</p>
                      <input
                        placeholder="https://api.mapit.com/cis-service/v1/callbacks/verification-status"
                        className="mt-1 border ml-4 flex-grow py-2 px-2 rounded-md shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="flex items-center">
                      <p className="text-gray-700 font-semibold">Success URL</p>
                      <input
                        placeholder="The customer browser will redirected to this URL on success"
                        className="mt-1 border ml-4 flex-grow py-2 px-2 rounded-md shadow-sm"
                      />
                    </div>
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="flex items-center">
                      <p className="text-gray-700 font-semibold">Redirect URL</p>
                      <input
                        placeholder="The customer browser will redirected to this URL on error"
                        className="mt-1 border ml-4 flex-grow py-2 px-2 rounded-md shadow-sm"
                      />
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

export default IdentifyVerification;
