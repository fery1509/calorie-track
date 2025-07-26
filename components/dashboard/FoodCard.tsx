"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { FoodCardProps } from "@/types/nutrition"
import { Edit2, Trash2, Clock } from "lucide-react"

/**
 * Komponen kartu makanan dengan informasi nutrisi yang konsisten
 * Dilengkapi dengan aksi edit dan hapus yang muncul saat hover
 */
const FoodCard: React.FC<FoodCardProps & { time?: string; onEdit?: () => void; onDelete?: () => void }> = ({
  name,
  calories,
  protein,
  carbs,
  fat,
  time = "12:30",
  onEdit,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Hitung kontribusi kalori terhadap target harian (2000 kcal)
  const dailyCalorieTarget = 2000
  const calorieContribution = Math.round((calories / dailyCalorieTarget) * 100)

  // Format angka yang konsisten
  const formatNumber = (num: number) => {
    return isClient ? new Intl.NumberFormat("id-ID").format(num) : num.toString()
  }

  return (
    <div
      className="card-gradient hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Header dengan nama makanan dan waktu */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{time}</span>
              </div>
              {/* Action buttons - muncul saat hover */}
              <div
                className={`flex items-center space-x-1 transition-all duration-200 ${
                  isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                }`}
              >
                {onEdit && (
                  <button
                    onClick={onEdit}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    title="Edit makanan"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={onDelete}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    title="Hapus makanan"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Informasi Nutrisi - Format konsisten dalam grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Kalori</div>
              <div className="text-lg font-bold text-nutrition-calories">{formatNumber(calories)}</div>
              <div className="text-xs text-gray-400">kcal</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Protein</div>
              <div className="text-lg font-bold text-nutrition-protein">{formatNumber(protein)}</div>
              <div className="text-xs text-gray-400">gram</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Karbohidrat</div>
              <div className="text-lg font-bold text-nutrition-carbs">{formatNumber(carbs)}</div>
              <div className="text-xs text-gray-400">gram</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-gray-500 mb-1">Lemak</div>
              <div className="text-lg font-bold text-nutrition-fat">{formatNumber(fat)}</div>
              <div className="text-xs text-gray-400">gram</div>
            </div>
          </div>

          {/* Kontribusi Kalori dengan penjelasan yang jelas */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-400">Kontribusi kalori harian:</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-nutrition-calories">{calorieContribution}%</span>
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div
                  className="progress-calories h-2 rounded-full"
                  style={{ width: `${Math.min(calorieContribution, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
