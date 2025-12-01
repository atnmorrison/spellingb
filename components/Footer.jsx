export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a
            href="/about"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Contact
          </a>
          <a
            href="/privacypolicy"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/termsofservice"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Terms of Service
          </a>
        </div>
        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          © {new Date().getFullYear()} Scott Morrison. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

