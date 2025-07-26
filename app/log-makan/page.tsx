"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Toast from "@/components/ui/Toast"
import type { ToastNotification } from "@/types/nutrition"
import { Plus, Search, Clock, Edit2, Trash2, Filter } from "lucide-react"

/**
 * Halaman Log Makan dengan fitur edit/hapus dan filter
 */
export default function LogMakan() {
  const [toasts, setToasts] = useState<ToastNotification[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const showToast = (message: string, type: "success" | "warning" | "error") => {
    const newToast: ToastNotification = {
      id: Date.now().toString(),
      message,
      type,
    }
    setToasts((prev) => [...prev, newToast])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const handleEditFood = (foodName: string) => {
    showToast(`Mengedit ${foodName}...`, "success")
  }

  const handleDeleteFood = (foodName: string) => {
    showToast(`${foodName} berhasil dihapus dari log makanan`, "success")
  }

  const handleAddFood = () => {
    showToast("Membuka form tambah makanan...", "success")
  }

  // Data dummy untuk log makanan
  const mealSections = [
    {
      title: "Sarapan",
      time: "07:00 - 09:00",
      totalCalories: 320,
      foods: [
        { id: "1", name: "Roti Bakar + Selai", portion: "2 potong", calories: 250, time: "07:30" },
        { id: "2", name: "Kopi Susu", portion: "1 gelas", calories: 70, time: "07:45" },
      ],
    },
    {
      title: "Makan Siang",
      time: "12:00 - 14:00",
      totalCalories: 650,
      foods: [
        { id: "3", name: "Nasi Gudeg", portion: "1 porsi", calories: 450, time: "12:30" },
        { id: "4", name: "Es Teh Manis", portion: "1 gelas", calories: 120, time: "13:00" },
        { id: "5", name: "Kerupuk", portion: "5 buah", calories: 80, time: "12:45" },
      ],
    },
    {
      title: "Makan Malam",
      time: "18:00 - 20:00",
      totalCalories: 0,
      foods: [],
    },
    {
      title: "Camilan",
      time: "Sepanjang hari",
      totalCalories: 180,
      foods: [
        { id: "6", name: "Pisang", portion: "1 buah sedang", calories: 105, time: "15:30" },
        { id: "7", name: "Kacang Almond", portion: "10 buah", calories: 75, time: "16:00" },
      ],
    },
  ]

  const totalCalories = mealSections.reduce((sum, section) => sum + section.totalCalories, 0)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Log Makan</h1>
            <p className="text-gray-600 dark:text-gray-400">Catat dan kelola makanan yang Anda konsumsi</p>
          </div>

          {/* Search & Filter Section */}
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Kelola Makanan</h2>
              <div className="flex items-center space-x-3">
                <button onClick={handleAddFood} className="btn-primary flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Tambah Makanan</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Cari makanan berdasarkan nama..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>

              {/* Date Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Today's Log */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Log Hari Ini ({new Date(selectedDate).toLocaleDateString("id-ID")})
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Total: <span className="font-semibold text-purple-600">{totalCalories} kcal</span>
              </div>
            </div>

            {mealSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8 last:mb-0">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{section.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{section.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {section.totalCalories} kcal
                    </span>
                    <button
                      onClick={handleAddFood}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 px-2 py-1 rounded transition-all duration-200"
                    >
                      + Tambah
                    </button>
                  </div>
                </div>

                {/* Food Items */}
                <div className="ml-8 space-y-3">
                  {section.foods.length > 0 ? (
                    section.foods.map((food) => (
                      <div
                        key={food.id}
                        className="group flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900 dark:text-gray-100">{food.name}</span>
                            <span className="font-semibold text-purple-600">{food.calories} kcal</span>
                          </div>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600 dark:text-gray-400">
                            <span>{food.portion}</span>
                            <span>•</span>
                            <span>{food.time}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button
                            onClick={() => handleEditFood(food.name)}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                            title="Edit makanan"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteFood(food.name)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                            title="Hapus makanan"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                      <p className="text-gray-500 dark:text-gray-400 mb-2">Belum ada makanan yang dicatat</p>
                      <button
                        onClick={handleAddFood}
                        className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline"
                      >
                        Tambah makanan pertama
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Summary */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Total Kalori Hari Ini</span>
                <span className="text-2xl font-bold text-purple-600">{totalCalories} kcal</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Target: 2,000 kcal</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Sisa: <span className="font-semibold">{2000 - totalCalories} kcal</span>
                </span>
              </div>
              <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="progress-calories h-3 rounded-full"
                  style={{ width: `${Math.min((totalCalories / 2000) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  )
}
