"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import { BarChart3, TrendingUp, Target, Award, Flame, Zap, Download } from "lucide-react"

/**
 * Halaman Statistik dengan grafik dan analisis nutrisi
 */
export default function Statistik() {
  const [selectedPeriod, setSelectedPeriod] = useState("7days")
  const [selectedMetric, setSelectedMetric] = useState("calories")

  // Data dummy untuk statistik
  const weeklyData: Array<{
    day: string
    calories: number
    protein: number
    carbs: number
    fat: number
    target: number
  }> = [
    { day: "Sen", calories: 1800, protein: 85, carbs: 220, fat: 65, target: 2000 },
    { day: "Sel", calories: 2100, protein: 95, carbs: 280, fat: 75, target: 2000 },
    { day: "Rab", calories: 1950, protein: 90, carbs: 250, fat: 70, target: 2000 },
    { day: "Kam", calories: 1750, protein: 80, carbs: 200, fat: 60, target: 2000 },
    { day: "Jum", calories: 2200, protein: 100, carbs: 300, fat: 80, target: 2000 },
    { day: "Sab", calories: 1900, protein: 88, carbs: 240, fat: 68, target: 2000 },
    { day: "Min", calories: 1850, protein: 85, carbs: 230, fat: 65, target: 2000 },
  ]

  const monthlyStats = {
    totalCalories: 54250,
    avgDaily: 1750,
    bestDay: 2200,
    worstDay: 1400,
    targetHit: 22,
    totalDays: 30,
    streak: 7,
  }

  const nutritionBreakdown = {
    protein: { current: 85, target: 100, percentage: 85 },
    carbs: { current: 220, target: 300, percentage: 73 },
    fat: { current: 65, target: 70, percentage: 93 },
    fiber: { current: 25, target: 35, percentage: 71 },
  }

  const achievements = [
    { title: "Streak Master", description: "7 hari berturut-turut mencatat makanan", icon: "🔥", unlocked: true },
    {
      title: "Protein Power",
      description: "Mencapai target protein 5 hari berturut-turut",
      icon: "💪",
      unlocked: true,
    },
    { title: "Balanced Eater", description: "Menjaga keseimbangan makro nutrisi", icon: "⚖️", unlocked: false },
    { title: "Hydration Hero", description: "Minum 8 gelas air per hari selama seminggu", icon: "💧", unlocked: true },
  ]

  const getMaxValue = () => {
    return Math.max(...weeklyData.map((d) => Math.max(d.calories, d.target))) + 200
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Statistik Nutrisi</h1>
              <p className="text-gray-600 dark:text-gray-400">Analisis mendalam tentang pola makan dan nutrisi Anda</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              >
                <option value="7days">7 Hari Terakhir</option>
                <option value="30days">30 Hari Terakhir</option>
                <option value="90days">3 Bulan Terakhir</option>
              </select>
              <button className="btn-secondary flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Rata-rata Harian</p>
                  <p className="text-2xl font-bold text-purple-600">{monthlyStats.avgDaily}</p>
                  <p className="text-xs text-gray-500">kcal/hari</p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="card-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Target Tercapai</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {Math.round((monthlyStats.targetHit / monthlyStats.totalDays) * 100)}%
                  </p>
                  <p className="text-xs text-gray-500">
                    {monthlyStats.targetHit}/{monthlyStats.totalDays} hari
                  </p>
                </div>
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="card-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Streak Terpanjang</p>
                  <p className="text-2xl font-bold text-orange-600">{monthlyStats.streak}</p>
                  <p className="text-xs text-gray-500">hari berturut-turut</p>
                </div>
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Flame className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="card-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Hari Terbaik</p>
                  <p className="text-2xl font-bold text-blue-600">{monthlyStats.bestDay}</p>
                  <p className="text-xs text-gray-500">kcal tercatat</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Weekly Progress Chart */}
            <div className="card-gradient">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Progress Mingguan</h2>
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                >
                  <option value="calories">Kalori</option>
                  <option value="protein">Protein</option>
                  <option value="carbs">Karbohidrat</option>
                  <option value="fat">Lemak</option>
                </select>
              </div>

              {/* Simple Bar Chart */}
              <div className="space-y-4">
                {weeklyData.map((day, index) => {
                  const value = day[selectedMetric as keyof typeof day] as number
                  const target = selectedMetric === "calories" ? day.target : 100 // simplified target
                  const percentage = Math.min((value / target) * 100, 100)

                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 text-sm font-medium text-gray-600 dark:text-gray-400">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{value}</span>
                          <span className="text-xs text-gray-500">{Math.round(percentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              selectedMetric === "calories"
                                ? "progress-calories"
                                : selectedMetric === "protein"
                                  ? "progress-protein"
                                  : selectedMetric === "carbs"
                                    ? "progress-carbs"
                                    : "progress-fat"
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Nutrition Breakdown */}
            <div className="card-gradient">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Breakdown Nutrisi</h2>
              <div className="space-y-6">
                {Object.entries(nutritionBreakdown).map(([key, data]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">{key}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {data.current}/{data.target}g
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          key === "protein"
                            ? "progress-protein"
                            : key === "carbs"
                              ? "progress-carbs"
                              : key === "fat"
                                ? "progress-fat"
                                : "bg-gradient-to-r from-green-500 to-green-600"
                        }`}
                        style={{ width: `${data.percentage}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">{data.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="card-gradient mb-8">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Pencapaian</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    achievement.unlocked
                      ? "border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700"
                      : "border-gray-200 bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700 opacity-60"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3
                        className={`font-semibold ${
                          achievement.unlocked
                            ? "text-yellow-800 dark:text-yellow-200"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          achievement.unlocked
                            ? "text-yellow-700 dark:text-yellow-300"
                            : "text-gray-500 dark:text-gray-500"
                        }`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.unlocked && (
                      <div className="ml-auto">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="card-gradient">
            <div className="flex items-center mb-6">
              <Zap className="h-6 w-6 text-blue-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Insights & Rekomendasi</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">💡 Pola Makan Anda</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Anda cenderung mengonsumsi lebih banyak kalori di akhir pekan. Pertimbangkan untuk menjaga konsistensi
                  asupan harian.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">✅ Kekuatan Anda</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Konsistensi dalam mencatat makanan sangat baik! Anda telah mencatat selama 7 hari berturut-turut.
                </p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">⚠️ Area Perbaikan</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Asupan serat masih di bawah target. Tambahkan lebih banyak sayuran dan buah-buahan dalam diet Anda.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
