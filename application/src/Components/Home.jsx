import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { RiUserSettingsFill, RiUserUnfollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoHelpCircle } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";



const Home = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="">
          {/* MAPIT HEADING TOP  */}
          <header className="items-center justify-center flex">
            <div>
              <h2 className="text-3xl mb-4 font-extrabold pt-5">
                MAP<span className="text-[#4379EE]">IT</span>
              </h2>
            </div>
          </header>
          <hr />

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            {/* dashboard heading options */}
            <CardTitle className="font-bold text-2xl tracking-normal">
              Welcome to Mapit!
            </CardTitle>
            <h1>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </h1>
            <div>
              <h1>Sign in to our portals below:</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">

              {/* First card */}
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl">
                      <RiUserSettingsFill size={23} color="#4379EE" />
                    </div>
                    <CardTitle className="text-lg text-black font-medium tracking-wide pl-4">
                      Mapit Customer Portal
                    </CardTitle>
                  </CardHeader>
                  <hr />
                  <CardContent className="flex flex-col items-center">
                    <div className="font-normal  text-black mt-7 text-center">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                    <Link
                      to="/userlogin"
                      className="border bg-[#4379EE] rounded-lg text-white px-10 py-2 text-center font-bold mt-7"
                    >
                      Sign in
                    </Link>
                  </CardContent>
                </Card>
         

              {/* Second card */}
             
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl flex">
                      <RiUserUnfollowFill size={23} color="#4379EE" />
                      <p className="text-lg text-black font-medium tracking-wide pl-4">
                        4Stop Portal
                      </p>
                    </div>
                    <h1>
                      a <span className="font-bold">MAPIT</span> company
                    </h1>
                  </CardHeader>
                  <hr />
                  <CardContent className="flex flex-col items-center">
                    <div className="font-normal  text-black mt-7 text-center">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                    <Link
                      to="/userlogin"
                      className="border bg-[#4379EE] rounded-lg text-white px-10 py-2 text-center font-bold mt-7"
                    >
                      Sign in
                    </Link>
                  </CardContent>
                </Card>
          

              {/* Second card */}
              
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl flex">
                      <MdVerifiedUser size={23} color="#4379EE" />
                      <p className="text-lg text-black font-medium tracking-wide pl-4">
                        Transaction Monitoring Portal
                      </p>
                    </div>
                  </CardHeader>
                  <hr />
                  <CardContent className="flex flex-col items-center">
                    <div className="font-normal  text-black mt-7 text-center">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                    <Link
                      to="/userlogin"
                      className="border bg-[#4379EE] rounded-lg text-white px-10 py-2 text-center font-bold mt-7"
                    >
                      Sign in
                    </Link>
                  </CardContent>
                </Card>
            
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-14">
              {/* First card */}
              <Link to="/target-path">
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl">
                      <FaBookReader size={23} color="#4379EE" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <h1 className="font-bold">MAPIT LIBRARY</h1>
                    <div className="font-normal  text-black mt-3">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* First card */}
              <Link to="/target-path">
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl">
                      <IoHelpCircle  size={23} color="#4379EE" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <h1 className="font-bold">MAPIT SUPPORT</h1>
                    <div className="font-normal  text-black mt-3">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                  </CardContent>
                </Card>
              </Link>


              {/* First card */}
              <Link to="/target-path">
                <Card x-chunk="dashboard-01-chunk-0">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <div className="bg-[#FDF9F7] rounded-2xl">
                      <CgNotes   size={23} color="#4379EE" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <h1 className="font-bold">IDENTITY AND BLOGS</h1>
                    <div className="font-normal  text-black mt-3">
                      View identity verification and customize onboarding
                      workflows.
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;
