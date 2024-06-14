import axios from "axios";
import { BiSolidDashboard } from "react-icons/bi";
import { HiMiniSquare3Stack3D, HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/Components/ui/button";
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

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Package, PanelLeft } from "lucide-react";
import { FaPlus } from 'react-icons/fa';


const ReportsCreate = () => {
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
                            <div className="-mt-8 hidden lg:block shadow-md w-full lg:w-1/5 p-0">
                                <div className="space-y-5">
                                    <div className="text-center justify-center items-center">
                                        <Link to="/userlogin">
                                            <div className="">
                                                <button className="w-full items-start border-spacing-4 border p-3 text-left bg-blue-100 hover:bg-blue-500 text-blue-800 hover:text-white">
                                                    Verification
                                                </button>

                                            </div>
                                        </Link>

                                        <div className="py-8 ml-4 space-y-5">
                                            <button className="block w-full font-medium text-lg text-left text-gray-700">
                                                Workflows
                                            </button>
                                            <button className="block w-full font-medium text-lg text-left text-gray-700">
                                                Transaction
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Account details entry fields */}

                            <div className="-mt-8 flex-1 p-5 overflow-auto">
                                <div className="-mt-8 flex p-3  items-center space-y-1 shadow-md w-full">
                                    <span><Link className="text-2xl font-normal mb-4">Reports /</Link></span>
                                    <span className="text-2xl font-semibold mb-4">Create</span>
                                </div>



                                <hr />
                                <div className="bg-white shadow-lg space-y-5 shadow-gray-400 rounded p-6">


                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                                        <div className="flex items-center">
                                            <p className="text-gray-700 font-semibold">
                                                Document Type
                                            </p>
                                            <div className="mt-1 ml-14 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">Any</SelectItem>
                                                        <SelectItem value="user">User</SelectItem>
                                                        <SelectItem value="assistant">
                                                            Assistant
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-1  md:grid-cols-1 gap-10">
                                        <div className="flex items-center">
                                            <p className="text-gray-700 font-semibold">
                                                Channel
                                            </p>
                                            <div className="mt-1 ml-28 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
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
                                                Product
                                            </p>
                                            <div className="mt-1 ml-28 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
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
                                                Status
                                            </p>
                                            <div className="mt-1 ml-32 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
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
                                                Verification Status
                                            </p>
                                            <div className="mt-1 ml-10 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
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
                                                Issuing Country
                                            </p>
                                            <div className="mt-1 ml-14 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
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
                                                Reject Reason
                                            </p>
                                            <div className="mt-1 ml-16 flex-grow py-2 px-2">
                                                <Select defaultValue="system">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="system">New</SelectItem>
                                                        <SelectItem value="user">User</SelectItem>
                                                        <SelectItem value="assistant">
                                                            Assistant
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>


                                        </div>
                                    </div>







                                </div>
                                <div className="container mt-7">
                                    <button className="flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-blue-200 hover:text-white p-3 border rounded">
                                        <FaPlus className="mr-2" />
                                        <span>Create Reports</span>
                                    </button>

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

export default ReportsCreate;