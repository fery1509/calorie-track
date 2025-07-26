"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"

/**
 * Komponen Header dengan breadcrumbs dinamis, informasi user, dan status nutrisi
 */
const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentDate, setCurrentDate] = useState("")

  // Data user dan status nutrisi (dummy data)
  const userInfo = {
    name: "John Doe",
    avatar: "JD",
    todayCalories: 1150,
    targetCalories: 2000,
    streak: 7,
  }

  useEffect(() => {
    const today = new Date()
    setCurrentDate(
      today.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )
  }, [])

  const navigationItems = [
    { name: "Dashboard", href: "/" },
    { name: "Log Makan", href: "/log-makan" },
    { name: "Statistik", href: "/statistik" },
    { name: "Pengaturan", href: "/pengaturan" },
    { name: "About", href: "/about" },
  ]

  // Dynamic breadcrumbs berdasarkan pathname
  const getBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    if (pathname === "/") {
      return [{ name: "Dashboard", href: "/", isActive: true }]
    }

    const breadcrumbs = [{ name: "Dashboard", href: "/", isActive: false }]

    pathSegments.forEach((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      breadcrumbs.push({
        name,
        href,
        isActive: index === pathSegments.length - 1,
      })
    })

    return breadcrumbs
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Implement search logic here
    }
  }

  const caloriePercentage = Math.round((userInfo.todayCalories / userInfo.targetCalories) * 100)

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AsupanKu</h1>
                <p className="text-xs text-white/70 hidden sm:block">Nutrition Tracker</p>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
              <input
                type="text"
                placeholder="Cari makanan, resep, atau nutrisi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full bg-white/20 border-none rounded-full py-2 pl-10 pr-3 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:placeholder-white/80 transition-all duration-200"
              />
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-white hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className={isMobileMenuOpen ? "hidden" : "inline-flex"}
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
                <path
                  className={isMobileMenuOpen ? "inline-flex" : "hidden"}
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Items & User Info - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-indigo-200 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-indigo-200 transition-colors duration-200"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white/20 text-white font-semibold flex items-center justify-center uppercase">
                  {userInfo.avatar}
                </div>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-500 border border-white"></span>
              </div>
              <div>
                <p className="text-sm text-white">{userInfo.name}</p>
                <p className="text-xs text-white/70">{currentDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={isMobileMenuOpen ? "md:hidden block" : "md:hidden hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500 hover:bg-opacity-20 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          {/* Dark Mode Toggle Mobile */}
          <button
            onClick={toggleDarkMode}
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500 hover:bg-opacity-20 transition-colors duration-200 w-full text-left"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-purple-100 bg-opacity-10 py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1">
              {getBreadcrumbs().map((breadcrumb, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <Link
                      href={breadcrumb.href}
                      className={`mr-2 text-sm font-medium ${
                        breadcrumb.isActive ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                      aria-current={breadcrumb.isActive ? "page" : undefined}
                    >
                      {breadcrumb.name}
                    </Link>
                    {index < getBreadcrumbs().length - 1 ? (
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-white/50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      {/* Calorie Progress Bar */}
      <div className="bg-purple-100 bg-opacity-10 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/70">
              Kalori Hari Ini: {userInfo.todayCalories} / {userInfo.targetCalories}
            </p>
            <p className="text-sm text-white/70">Streak: {userInfo.streak} hari</p>
          </div>
          <div className="h-2 w-full bg-white/20 rounded-full mt-1">
            <div className="h-2 rounded-full bg-green-500" style={{ width: `${caloriePercentage}%` }}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
