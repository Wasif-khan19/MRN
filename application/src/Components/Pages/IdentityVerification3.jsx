import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import axios from "axios";
import { BiSolidDashboard } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { HiMiniSquare3Stack3D, HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Package, PanelLeft } from "lucide-react";
import { TbExternalLink } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const IdentifyVerification3 = () => {
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
                      <Button className="bg-[#4880FF] hover:bg-[#2f5bc4]">
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
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IoSettings size={20} color="#4880FF" className="mt-1" />
                      <Link className="text-2xl font-normal">Admin /</Link>
                      <span className="text-2xl font-semibold">
                        Identity Verification
                      </span>
                    </div>

                    <Link to="/userlogin" className="ml-auto">
                      <Button className="bg-[#4880FF] hover:bg-[#2f5bc4]">
                        Save Changes
                      </Button>
                    </Link>
                  </div>
                  <div className="ml-7 pt-3 flex items-center">
                    <p className="mb-0">Access our documentation here: </p>
                    <span className="underline font-medium text-[#4880FF] ml-2">
                      <Link to="/" className="flex items-center">
                        Implementation Guide <TbExternalLink size={20} />
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="bg-white shadow-lg shadow-gray-400 rounded p-6">
                    

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Default locale
                        </p>
                        <div className="mt-1 pl-3 ml-44 flex-auto mr-72 py-2 px-2">
                          <Select defaultValue="system">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="system">System</SelectItem>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="assistant">
                                Assistant
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Domain Name
                        </p>
                        <div className="mt-1 ml-44 flex-auto mr-72 py-2 px-2">
                          <input
                            type="text"
                            placeholder="Enter capture method"
                            className="w-full border border-gray-300 rounded py-2 px-3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Max attempt per user
                        </p>
                        <div className="mt-1 pl-5 ml-28 flex-auto mr-72 py-2 px-2">
                          <input
                            type="number"
                            placeholder="Enter capture method"
                            className="w-full border border-gray-300 rounded py-2 px-3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                            Authorization Token Lifetime
                        </p>
                        <div className="mt-1 ml-16 pl-4 flex-auto mr-72 py-2 px-2">
                          <input
                            type="text"
                            placeholder="Value in Minutes"
                            className="w-full border border-gray-300 rounded py-2 px-3"
                          />
                        </div>
                
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-5">
                  <div className="bg-white shadow-lg space-y-5 shadow-gray-400 rounded p-6">
                    <p className="mb-4">
                      Configure your redirect implementation by providing URLs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Callback URL
                        </p>
                        <input
                          placeholder="https://api.mapit.com/cis-service/v1/callbacks/verification-status"
                          className="mt-1 border ml-4 flex-grow py-2 px-2 rounded-md shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Success URL
                        </p>
                        <input
                          placeholder="The customer browser will redirected to this URL on success"
                          className="mt-1 border ml-5 flex-grow py-2 px-2 rounded-md shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Redirect URL
                        </p>
                        <input
                          placeholder="The customer browser will redirected to this URL on error"
                          className="mt-1 border ml-4 flex-grow py-2 px-2 rounded-md shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* next boxes input */}
                <div className="pt-5">
                  <div className="bg-white shadow-lg space-y-5 shadow-gray-400 rounded p-6">
                    <p className="mb-4">
                      Configure settings for initial end-user onboarding flow
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Capture method
                        </p>
                        <div className="mt-1 ml-12 flex-grow py-2 px-2">
                          <Select defaultValue="system">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="system">System</SelectItem>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="assistant">
                                Assistant
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                      <div className="flex items-center">
                        <p className="text-gray-700 font-semibold">
                          Footer display mode
                        </p>
                        <div className="mt-1 ml-5 flex-grow py-2 px-2">
                          <Select defaultValue="system">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="system">System</SelectItem>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="assistant">
                                Assistant
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">
                          Allow Cross Device Journey
                        </Label>
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

export default IdentifyVerification3;
