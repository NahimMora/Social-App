import Navbar from '../ui/home/navbar/Navbar';

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:overflow-hidden">

      <div className="w-20vw p-4">
        <Navbar />
      </div>

      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
