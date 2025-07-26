import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import { User, Target, Activity, Settings } from "lucide-react"

/**
 * Halaman Profil Pengguna
 * Menampilkan informasi pribadi dan pengaturan target nutrisi
 */
export default function Profil() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil</h1>
            <p className="text-gray-600">Kelola informasi pribadi dan target nutrisi Anda</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="card mb-8">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-royal-purple mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Informasi Pribadi</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Lahir</label>
                    <input
                      type="date"
                      defaultValue="1990-01-01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent">
                      <option value="male">Laki-laki</option>
                      <option value="female">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tinggi Badan (cm)</label>
                    <input
                      type="number"
                      defaultValue="170"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Berat Badan (kg)</label>
                    <input
                      type="number"
                      defaultValue="70"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-royal-purple text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Simpan Perubahan
                  </button>
                </div>
              </div>

              {/* Nutrition Targets */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-royal-purple mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Target Nutrisi Harian</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Kalori (kcal)</label>
                    <input
                      type="number"
                      defaultValue="2000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Protein (g)</label>
                    <input
                      type="number"
                      defaultValue="100"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Karbohidrat (g)</label>
                    <input
                      type="number"
                      defaultValue="300"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Lemak (g)</label>
                    <input
                      type="number"
                      defaultValue="70"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-royal-purple text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Update Target
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* BMI Card */}
              <div className="card">
                <div className="flex items-center mb-4">
                  <Activity className="h-6 w-6 text-royal-purple mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">BMI Anda</h3>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-royal-purple mb-2">24.2</div>
                  <div className="text-sm text-gray-600 mb-4">Normal</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Kurang</span>
                    <span>Normal</span>
                    <span>Lebih</span>
                  </div>
                </div>
              </div>

              {/* Activity Level */}
              <div className="card">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-royal-purple mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Level Aktivitas</h3>
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-purple focus:border-transparent">
                  <option value="sedentary">Tidak Aktif</option>
                  <option value="light">Ringan</option>
                  <option value="moderate" selected>
                    Sedang
                  </option>
                  <option value="active">Aktif</option>
                  <option value="very-active">Sangat Aktif</option>
                </select>
                <p className="text-xs text-gray-500 mt-2">Level aktivitas mempengaruhi kebutuhan kalori harian Anda</p>
              </div>

              {/* Goals */}
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tujuan</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="goal" value="lose" className="mr-2" />
                    <span className="text-sm">Menurunkan Berat Badan</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="goal" value="maintain" className="mr-2" defaultChecked />
                    <span className="text-sm">Mempertahankan Berat Badan</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="goal" value="gain" className="mr-2" />
                    <span className="text-sm">Menambah Berat Badan</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
