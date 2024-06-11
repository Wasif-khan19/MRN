import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RiMenu4Line } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Search } from "lucide-react";
import { RxCountdownTimer } from "react-icons/rx";

import { FaUserGroup } from "react-icons/fa6";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Package, PanelLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

const Dashboard = () => {
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

            {/* search bar */}
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>

            {/* notification iconsd aega idhr */}
            <div>
              <FaBell size={22} color="#3D42DF" />
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-[#F5F6FA]">
            {/* dashboard heading options */}
            <CardTitle className="font-semibold text-2xl tracking-normal">
              Dashboard
            </CardTitle>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {/* first card */}
              <Link
                to={"/transaction"}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700"
              >
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="text-xl text-[#202224] opacity-60 font-medium tracking-wide">
                      Total User
                    </CardTitle>
                    <div className="bg-[#E5E4FF] rounded-2xl py-3 px-3">
                      <FaUserGroup size={25} color="#3D42DF" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-semibold text-[#202224]">
                      40,689
                    </div>
                    <p className="text-base text-[#202224] opacity-60 font-medium tracking-wide pt-5 text-muted-foreground">
                      Total users registered
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Second card */}
              <Link
                to={"/transaction"}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 "
              >
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="text-xl text-[#202224] opacity-60 font-medium tracking-wide">
                      Warning
                    </CardTitle>
                    <div className="bg-[#FDF9F7] rounded-2xl py-3 px-3">
                      <FaUserGroup size={25} color="#FFA756" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-semibold text-[#202224]">
                      600
                    </div>
                    <p className="text-base text-[#202224] opacity-60 font-medium tracking-wide pt-5 text-muted-foreground">
                      Users with warning
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Third card */}
              <Link
                to={"/transaction"}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700 "
              >
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="text-xl text-[#202224] opacity-60 font-medium tracking-wide">
                      Passed
                    </CardTitle>
                    <div className="bg-[#F3FAFA] rounded-2xl py-3 px-3">
                      <FaUserGroup size={25} color="#00B69B" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-semibold text-[#202224]">
                      40,000
                    </div>
                    <p className="text-base text-[#202224] opacity-60 font-medium tracking-wide pt-5 text-muted-foreground">
                      Users passed with registration
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Fourth card */}
              <Link
                to={"/transaction"}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-700"
              >
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                    <CardTitle className="text-xl text-[#202224] opacity-60 font-medium tracking-wide">
                      Rejected
                    </CardTitle>
                    <div className="bg-[#FCF1F1] rounded-2xl py-3 px-3">
                      <RxCountdownTimer size={25} color="#F15B4D" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-semibold text-[#202224]">
                      89
                    </div>
                    <p className="text-base text-[#202224] opacity-60 font-medium tracking-wide pt-5 text-muted-foreground">
                      Users who were rejected
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                  <h2 className="text-lg md:text-2xl font-semibold mb-2 md:mb-0">
                    Transactions Failed Percentage
                  </h2>
                  <select className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
                <div>
                  {/* graph aega idhr */}
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

export default Dashboard;