"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Utensils, BarChart3, Settings, ChevronLeft, ChevronRight, Info } from "lucide-react"

/**
 * Komponen Sidebar yang collapsible dengan animasi smooth
 */
const Sidebar: React.FC = () => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Log Makan",
      href: "/log-makan",
      icon: Utensils,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Statistik",
      href: "/statistik",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Pengaturan",
      href: "/pengaturan",
      icon: Settings,
      color: "from-amber-500 to-amber-600",
    },
    {
      name: "About Us",
      href: "/about",
      icon: Info,
      color: "from-blue-500 to-blue-600",
    },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex md:flex-shrink-0 transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-grow pt-6 pb-4 overflow-y-auto bg-white/80 backdrop-blur-sm border-r border-gray-200/50 shadow-sm">
            {/* Toggle Button */}
            <div className="flex justify-end px-3 mb-6">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              >
                {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-3 space-y-3">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 ease-in-out ${
                        isActive
                          ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-purple-50 hover:text-purple-600"
                      }`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <Icon
                        className={`flex-shrink-0 h-5 w-5 transition-all duration-200 ease-in-out ${
                          isCollapsed ? "mx-auto" : "mr-3"
                        } ${isActive ? "text-white" : "text-gray-400 group-hover:text-purple-600"}`}
                      />
                      {!isCollapsed && <span className="transition-opacity duration-200">{item.name}</span>}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 z-50 shadow-lg">
        <nav className="flex justify-around py-2">
          {menuItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 text-xs font-medium transition-all duration-200 ease-in-out rounded-lg ${
                  isActive
                    ? `text-white bg-gradient-to-r ${item.color} shadow-md transform scale-105`
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <Icon
                  className={`h-5 w-5 mb-1 transition-colors duration-200 ease-in-out ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
