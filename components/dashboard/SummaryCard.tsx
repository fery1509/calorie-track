"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { SummaryCardProps } from "@/types/nutrition"
import ProgressCircle from "@/components/ui/ProgressCircle"

/**
 * Komponen kartu ringkasan nutrisi dengan warna makro yang berbeda
 */
const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, unit, target }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const percentage = Math.round((value / target) * 100)

  // Format angka yang konsisten untuk menghindari hydration mismatch
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("id-ID").format(num)
  }

  // Mapping warna berdasarkan jenis nutrisi
  const getColorConfig = (title: string) => {
    switch (title.toLowerCase()) {
      case "protein":
        return {
          gradient: "from-purple-500 to-purple-600",
          text: "text-purple-600",
          bg: "bg-purple-50",
          progress: "progress-protein",
          icon: "🥩",
        }
      case "karbohidrat":
        return {
          gradient: "from-emerald-500 to-emerald-600",
          text: "text-emerald-600",
          bg: "bg-emerald-50",
          progress: "progress-carbs",
          icon: "🍚",
        }
      case "lemak":
        return {
          gradient: "from-indigo-500 to-indigo-600",
          text: "text-indigo-600",
          bg: "bg-indigo-50",
          progress: "progress-fat",
          icon: "🥑",
        }
      case "kalori":
        return {
          gradient: "from-amber-500 to-orange-500",
          text: "text-amber-600",
          bg: "bg-amber-50",
          progress: "progress-calories",
          icon: "🔥",
        }
      default:
        return {
          gradient: "from-gray-500 to-gray-600",
          text: "text-gray-600",
          bg: "bg-gray-50",
          progress: "progress-calories",
          icon: "📊",
        }
    }
  }

  const config = getColorConfig(title)

  return (
    <div className="card-gradient hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-2xl">{config.icon}</span>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h3>
          </div>

          <div className="flex items-baseline space-x-1 mb-2">
            <span className={`text-3xl font-bold ${config.text}`}>{isClient ? formatNumber(value) : value}</span>
            <span className="text-sm text-gray-500 font-medium">{unit}</span>
          </div>

          <div className="text-xs text-gray-500">
            Target:{" "}
            <span className="font-semibold">
              {isClient ? formatNumber(target) : target} {unit}
            </span>
          </div>
        </div>

        {/* Enhanced Progress Circle */}
        <div className="ml-4">
          <ProgressCircle value={value} max={target} size={70} strokeWidth={6} color={config.gradient} />
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-600">Progress</span>
          <div className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${config.gradient}`}>
            {percentage}%
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className={`${config.progress} shadow-sm`} style={{ width: `${Math.min(percentage, 100)}%` }} />
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex items-center justify-center">
        {percentage >= 100 ? (
          <div className="flex items-center space-x-1 text-emerald-600">
            <span className="text-sm">🎉</span>
            <span className="text-xs font-semibold">Target Tercapai!</span>
          </div>
        ) : percentage >= 80 ? (
          <div className="flex items-center space-x-1 text-amber-600">
            <span className="text-sm">⚡</span>
            <span className="text-xs font-semibold">Hampir Tercapai</span>
          </div>
        ) : (
          <div className="flex items-center space-x-1 text-gray-500">
            <span className="text-sm">💪</span>
            <span className="text-xs font-semibold">Terus Semangat!</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SummaryCard
