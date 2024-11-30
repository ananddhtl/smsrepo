'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import AdminPage from "./admin/page";
import StudentPage from "./student/page";
import TeacherPage from "./teacher/page";
import ParentPage from "./parent/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); 

  
  const pageComponents: Record<string, React.ReactNode> = {
    "/admin": <AdminPage />,
    "/student": <StudentPage />,
    "/teacher": <TeacherPage />,
    "/parent": <ParentPage />,
  };

  
  const currentPage = pageComponents[pathname] || <div>Page Not Found</div>;

  return (
    <div className="h-screen flex">
      {/* Left Section */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white shadow-md">
        <Link
          href="/"
          className="flex items-center gap-2 lg:gap-4 text-gray-500 py-2"
        >
          <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold text-gray-700">
            e-SAccountant
          </span>
        </Link>
        <Menu />
      </div>

      {/* Right Section */}
      <div className="w-[86%] md:w-[92%] xl:w-[86%] bg-[#f0f2f5] overflow-auto">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-4">{currentPage}</div>
      </div>
    </div>
  );
}
