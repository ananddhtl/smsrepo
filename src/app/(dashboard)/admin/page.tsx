import AttendanceChart from "@/app/components/AttendanceChart";
import CountChart from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";
const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-8"> {/* Increased gap between the main divs */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6"> {/* Adjusted gap for inner elements */}
        <div className="flex gap-4 justify-center flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-6 flex-col lg:flex-row"> {/* Increased gap between charts */}
          {/* Left side for CountChart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Right side for AttendanceChart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;


