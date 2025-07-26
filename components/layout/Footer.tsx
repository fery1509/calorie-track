import type React from "react"
import Link from "next/link"

/**
 * Komponen Footer dengan copyright dan link dokumentasi
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">© 2023 AsupanKu. All rights reserved.</div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link
              href="/dokumentasi"
              className="text-sm text-gray-600 hover:text-royal-purple transition-colors duration-200"
            >
              Dokumentasi
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-royal-purple transition-colors duration-200"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
