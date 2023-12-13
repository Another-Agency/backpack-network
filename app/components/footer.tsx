// lets create a basic footer component

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-end justify-center w-full h-24 border-t">
      <Link
        href="/compliance/tos"
        className="text-sm text-gray-500 hover:text-gray-600"
      >
        Terms of Service
      </Link>
      <Link
        href="/compliance/pp"
        className="text-sm text-gray-500 hover:text-gray-600"
      >
        Privacy Policy
      </Link>
    </footer>
  );
}
