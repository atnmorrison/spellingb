import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto max-w-4xl px-4 py-2">
        <nav className="flex items-center justify-between min-h-[100px]">
          <Link
            href="/"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/rmm-logo.png"
              alt="Rocket Man Morrison Logo"
              width={80}
              height={80}
              className="object-contain w-20 h-20"
              priority
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Scott Morrison
            </span>
          </Link>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="hidden sm:inline">Rocket Man Morrison</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

