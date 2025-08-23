import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function FloatingVerticalButtons() {
  return (
    <div className="fixed top-1/3 left-0 z-[9999] flex flex-col items-start gap-3">
      <Link
        href="/emergency"
        className="bg-[#8e2c74] hover:bg-[#751f62] text-white px-4 py-2 rounded-r-2xl font-semibold text-[13px] flex flex-col items-center justify-center shadow-xl w-14 h-32"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <Phone size={18} className="mb-1" />
        Emergency 24x7
      </Link>

      <Link
        href="/book-appointment"
        className="bg-[#f1d5eb] hover:bg-[#eac6e2] text-[#8e2c74] px-4 py-2 rounded-r-2xl font-semibold text-[13px] flex flex-col items-center justify-center shadow-xl w-14 h-32"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        <Calendar size={18} className="mb-1" />
        Book Appointment
      </Link>
    </div>
  );
}
