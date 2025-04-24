import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  message = "Something went wrong",
}: {
  message: string;
}) {
  return (
    <div className="flex justify-center items-center h-full p-4">
      <div className="w-full max-w-md bg-white/30 shadow-lg rounded-2xl">
        <div className="flex flex-col items-center gap-4 p-6 text-center">
          <AlertCircle className="text-red-500 w-10 h-10" />
          <h2 className="text-xl font-semibold text-red-600">{message}</h2>
          <p className="text-sm text-red-500">
            Please try again or contact support if the issue persists.
          </p>
          <Link href="/">Back to dashboard</Link>
        </div>
      </div>
    </div>
  );
}
