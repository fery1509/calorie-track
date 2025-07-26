"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import SummaryCard from "@/components/dashboard/SummaryCard"
import FoodCard from "@/components/dashboard/FoodCard"
import Toast from "@/components/ui/Toast"
import type { ToastNotification } from "@/types/nutrition"

/**
 * Halaman Dashboard Utama AsupanKu
 * Menampilkan ringkasan nutrisi harian dan daftar makanan
 */
export default function Dashboard() {
  const [toasts, setToasts] = useState<ToastNotification[]>([])

  // Data dummy untuk ringkasan nutrisi
  const nutritionSummary = [
    { title: "Kalori", value: 1200, unit: "kcal", target: 2000 },
    { title: "Protein", value: 50, unit: "g", target: 100 },
    { title: "Karbohidrat", value: 150, unit: "g", target: 300 },
    { title: "Lemak", value: 40, unit: "g", target: 70 },
  ]

  // Data dummy untuk makanan hari ini
  const todayFoods = [
    {
      id: "1",
      name: "Nasi Goreng",
      calories: 500,
      protein: 15,
      carbs: 60,
      fat: 20,
      time: "12:30",
    },
    {
      id: "2",
      name: "Ayam Bakar",
      calories: 300,
      protein: 25,
      carbs: 5,
      fat: 15,
      time: "13:00",
    },
    {
      id: "3",
      name: "Sayur Bayam",
      calories: 50,
      protein: 3,
      carbs: 8,
      fat: 1,
      time: "13:15",
    },
    {
      id: "4",
      name: "Jus Jeruk",
      calories: 120,
      protein: 2,
      carbs: 28,
      fat: 0,
      time: "14:00",
    },
  ]

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
    // Logic untuk edit makanan
  }

  const handleDeleteFood = (foodName: string) => {
    showToast(`${foodName} berhasil dihapus dari log makanan`, "success")
    // Logic untuk hapus makanan
  }

  const handleAddFood = () => {
    showToast("Membuka form tambah makanan...", "success")
    // Logic untuk tambah makanan
  }

  const totalCalories = todayFoods.reduce((sum, food) => sum + food.calories, 0)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 space-y-8">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Pantau asupan nutrisi harian Anda dengan mudah</p>
          </div>

          {/* Summary Cards */}
          <div className="space-y-6">
            <div className="border-b border-gray-100 dark:border-gray-700 pb-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Ringkasan Nutrisi Hari Ini</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionSummary.map((item, index) => (
                <SummaryCard key={index} title={item.title} value={item.value} unit={item.unit} target={item.target} />
              ))}
            </div>
          </div>

          {/* Today's Food Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Makanan Hari Ini</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Total {todayFoods.length} makanan tercatat • {totalCalories} kcal
                </p>
              </div>
              <button onClick={handleAddFood} className="btn-primary flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Tambah Makanan</span>
              </button>
            </div>

            <div className="space-y-4">
              {todayFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  calories={food.calories}
                  protein={food.protein}
                  carbs={food.carbs}
                  fat={food.fat}
                  time={food.time}
                  onEdit={() => handleEditFood(food.name)}
                  onDelete={() => handleDeleteFood(food.name)}
                />
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="border-b border-gray-100 dark:border-gray-700 pb-2">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Statistik Cepat</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card hover:border-purple-200 dark:hover:border-purple-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Makanan Favorit</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Nasi Goreng</span>
                    <span className="font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-lg text-sm">
                      8x
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Ayam Bakar</span>
                    <span className="font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-lg text-sm">
                      6x
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Gado-gado</span>
                    <span className="font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-lg text-sm">
                      5x
                    </span>
                  </div>
                </div>
              </div>

              <div className="card hover:border-green-200 dark:hover:border-green-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Pencapaian Minggu</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Target Kalori</span>
                    <span className="font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-lg text-sm">
                      5/7 hari
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Target Protein</span>
                    <span className="font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-lg text-sm">
                      6/7 hari
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Log Harian</span>
                    <span className="font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-lg text-sm">
                      7/7 hari
                    </span>
                  </div>
                </div>
              </div>

              <div className="card hover:border-blue-200 dark:hover:border-blue-500">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tips Hari Ini</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Anda sudah mencapai 60% target kalori hari ini. Tambahkan lebih banyak protein untuk mencapai target
                  harian yang optimal! 💪
                </p>
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
