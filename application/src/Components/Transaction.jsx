/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { ImFilter } from "react-icons/im";
import { RiMenu4Line } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { FiCopy } from "react-icons/fi";
import { FaStar } from "react-icons/fa";



import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
  MoreHorizontal,
  Package,
  PanelLeft,
  Search,
} from "lucide-react";

import { Badge } from "@/Components/ui/badge";

import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Input } from "@/Components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Tabs, TabsContent, TabsList } from "@/Components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Transaction= () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
        //
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
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
                to="/dashboard"
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
            <TooltipContent side="right">Customers</TooltipContent>
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
            <TooltipContent side="right">Analytics</TooltipContent>
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
              <Link to={"/login"} className="text-sm px-10">
                Logout
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-[#ffffff]">
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

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-[#F5F6FA]">
          <Tabs defaultValue="all">
            {/* transaction heading options */}
            <CardTitle className='font-semibold text-2xl tracking-normal py-4'>Transactions</CardTitle>
            <div className="flex items-center">
                <TabsList className='bg-white gap-10 border border-gray-200'>
                  <ImFilter className="ml-2"/>
                  <button className="text-center">Filter By</button>
                  <button className="text-center">Date: Today</button>
                  <button className="text-center">Status: All</button>
                  <button className="text-center">Filter by Value</button>
                  <button className="text-center text-[#EA0234]">Reset All</button>
                </TabsList>
              </div>
            <TabsContent value="all">
              <Card className="" x-chunk="dashboard-06-chunk-0">
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden md:table-cell text-[#202224] font-bold text-base">
                          Transaction ID
                        </TableHead>
                        <TableHead className='hidden md:table-cell text-[#202224] font-bold text-base'>Account</TableHead>
                        <TableHead className='hidden md:table-cell text-[#202224] font-bold text-base'>Date</TableHead>
                        <TableHead className="hidden md:table-cell text-[#202224] font-bold text-base">Reference</TableHead>
                        <TableHead className="hidden md:table-cell text-[#202224] font-bold text-base">Risk</TableHead>
                        <TableHead className="hidden md:table-cell text-[#202224] font-bold text-base">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-normal text-[#202224]">
                        953tr6-4s481-85e97-05qwege1 
                        </TableCell>
                        <TableCell className='flex items-center py-7 text-[#8295A3]'>
                        4f257f5f-c918-4d71-86d4-s838392...<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          12-Jan-2024 12:00
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-[#8295A3]">
                          User:df54t3-c..<button><FiCopy/></button><br/>
                          User:df54t3-c..<button><FiCopy/></button>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <Badge className='bg-[#CCF0EB]'><FaStar color="#00B69B"/><h1 className="px-1 text-[#00B69B]">0</h1></Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <h1 className="rounded-md py-2 px-3 bg-[#CCF0EB] text-center text-[#00B69B] font-medium">Passed</h1>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>

                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>

              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Transaction;
