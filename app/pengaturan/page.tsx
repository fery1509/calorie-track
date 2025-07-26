"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import Toast from "@/components/ui/Toast"
import type { ToastNotification } from "@/types/nutrition"
import { User, Bell, Shield, Palette, Download, Trash2, Save, Eye, EyeOff } from "lucide-react"

/**
 * Halaman Pengaturan dengan berbagai konfigurasi aplikasi
 */
export default function Pengaturan() {
  const [toasts, setToasts] = useState<ToastNotification[]>([])
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState<{
    name: string
    email: string
    phone: string
    emailNotifications: boolean
    pushNotifications: boolean
    reminderBreakfast: boolean
    reminderLunch: boolean
    reminderDinner: boolean
    weeklyReport: boolean
    profileVisibility: string
    dataSharing: boolean
    analyticsTracking: boolean
    theme: string
    language: string
    units: string
    dailyCalories: number
    dailyProtein: number
    dailyCarbs: number
    dailyFat: number
    dailyWater: number
  }>({
    // Profile Settings
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+62 812 3456 7890",

    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    reminderBreakfast: true,
    reminderLunch: true,
    reminderDinner: true,
    weeklyReport: true,

    // Privacy Settings
    profileVisibility: "private",
    dataSharing: false,
    analyticsTracking: true,

    // App Settings
    theme: "system",
    language: "id",
    units: "metric",

    // Target Settings
    dailyCalories: 2000,
    dailyProtein: 100,
    dailyCarbs: 300,
    dailyFat: 70,
    dailyWater: 8,
  })

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

  const handleSave = () => {
    showToast("Pengaturan berhasil disimpan!", "success")
  }

  const handleExportData = () => {
    showToast("Data sedang diexport... Anda akan menerima email konfirmasi.", "success")
  }

  const handleDeleteAccount = () => {
    showToast("Fitur hapus akun akan segera tersedia. Hubungi support untuk bantuan.", "warning")
  }

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Pengaturan</h1>
            <p className="text-gray-600 dark:text-gray-400">Kelola preferensi dan konfigurasi aplikasi Anda</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Settings */}
              <div className="card-gradient">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Profil Pengguna</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        value={settings.name}
                        onChange={(e) => updateSetting("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => updateSetting("email", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={settings.phone}
                      onChange={(e) => updateSetting("phone", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password Baru
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password baru (opsional)"
                        className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="card-gradient">
                <div className="flex items-center mb-6">
                  <Bell className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Notifikasi</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">Email Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Terima notifikasi melalui email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => updateSetting("emailNotifications", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">Push Notifications</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Notifikasi langsung di perangkat</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.pushNotifications}
                        onChange={(e) => updateSetting("pushNotifications", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Reminder Makan</h3>
                    <div className="space-y-3">
                      {[
                        { key: "reminderBreakfast", label: "Sarapan (07:00)" },
                        { key: "reminderLunch", label: "Makan Siang (12:00)" },
                        { key: "reminderDinner", label: "Makan Malam (18:00)" },
                      ].map((reminder) => (
                        <div key={reminder.key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{reminder.label}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings[reminder.key as keyof typeof settings] as boolean}
                              onChange={(e) => updateSetting(reminder.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* App Settings */}
              <div className="card-gradient">
                <div className="flex items-center mb-6">
                  <Palette className="h-6 w-6 text-green-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Tampilan & Bahasa</h2>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tema</label>
                      <select
                        value={settings.theme}
                        onChange={(e) => updateSetting("theme", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        <option value="light">Terang</option>
                        <option value="dark">Gelap</option>
                        <option value="system">Ikuti Sistem</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bahasa</label>
                      <select
                        value={settings.language}
                        onChange={(e) => updateSetting("language", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      >
                        <option value="id">Bahasa Indonesia</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Unit Pengukuran
                    </label>
                    <select
                      value={settings.units}
                      onChange={(e) => updateSetting("units", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      <option value="metric">Metrik (kg, cm)</option>
                      <option value="imperial">Imperial (lbs, ft)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="card-gradient">
                <div className="flex items-center mb-6">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Privasi & Keamanan</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Visibilitas Profil
                    </label>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) => updateSetting("profileVisibility", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      <option value="private">Privat</option>
                      <option value="friends">Teman Saja</option>
                      <option value="public">Publik</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">Berbagi Data untuk Riset</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Bantu penelitian nutrisi dengan data anonim
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.dataSharing}
                        onChange={(e) => updateSetting("dataSharing", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
              {/* Daily Targets */}
              <div className="card-gradient">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Target Harian</h3>
                <div className="space-y-4">
                  {[
                    { key: "dailyCalories", label: "Kalori", unit: "kcal", max: 5000 },
                    { key: "dailyProtein", label: "Protein", unit: "g", max: 300 },
                    { key: "dailyCarbs", label: "Karbohidrat", unit: "g", max: 500 },
                    { key: "dailyFat", label: "Lemak", unit: "g", max: 200 },
                    { key: "dailyWater", label: "Air", unit: "gelas", max: 15 },
                  ].map((target) => (
                    <div key={target.key}>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {target.label}
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          value={settings[target.key as keyof typeof settings]}
                          onChange={(e) => updateSetting(target.key, Number.parseInt(e.target.value))}
                          max={target.max}
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                        <span className="text-sm text-gray-500">{target.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-gradient">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Aksi Cepat</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleSave}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Save className="h-4 w-4" />
                    <span>Simpan Semua Pengaturan</span>
                  </button>
                  <button
                    onClick={handleExportData}
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Export Data</span>
                  </button>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="card-gradient border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">Zona Berbahaya</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleDeleteAccount}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Hapus Akun</span>
                  </button>
                  <p className="text-xs text-red-600 dark:text-red-400">
                    Tindakan ini tidak dapat dibatalkan. Semua data akan dihapus permanen.
                  </p>
                </div>
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
