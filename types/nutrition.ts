// Interface untuk kartu ringkasan nutrisi
export interface SummaryCardProps {
  title: string
  value: number
  unit: string
  target: number
}

// Interface untuk kartu makanan
export interface FoodCardProps {
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
}

// Interface untuk komponen progress circle
export interface ProgressCircleProps {
  value: number
  max: number
  size?: number
  strokeWidth?: number
}

// Interface untuk data makanan
export interface FoodItem {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  time: string
}

// Interface untuk ringkasan nutrisi harian
export interface DailySummary {
  calories: { current: number; target: number }
  protein: { current: number; target: number }
  carbs: { current: number; target: number }
  fat: { current: number; target: number }
}

// Interface untuk toast notification
export interface ToastNotification {
  id: string
  message: string
  type: "success" | "warning" | "error"
  duration?: number
}
