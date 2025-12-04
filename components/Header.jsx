import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto max-w-4xl px-4">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Scott Morrison
          </Link>
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="hidden sm:inline">Rocket Man Morrison</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

