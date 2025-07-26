"use client"

import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import Footer from "@/components/layout/Footer"
import { Heart, Users, Target, Shield, Award, Github, Mail, Phone } from "lucide-react"

/**
 * Halaman About Us - Tentang AsupanKu
 */
export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Nutritionist",
      role: "Lead Nutritionist",
      avatar: "SN",
      bio: "Ahli gizi dengan 10+ tahun pengalaman dalam konsultasi nutrisi dan diet sehat.",
    },
    {
      name: "John Developer",
      role: "Full Stack Developer",
      avatar: "JD",
      bio: "Pengembang berpengalaman yang passionate dalam teknologi kesehatan.",
    },
    {
      name: "Maria Designer",
      role: "UI/UX Designer",
      avatar: "MD",
      bio: "Desainer yang fokus pada pengalaman pengguna yang intuitif dan menarik.",
    },
  ]

  const features = [
    {
      icon: Target,
      title: "Tracking Akurat",
      description: "Pantau asupan nutrisi harian dengan database makanan Indonesia yang lengkap",
    },
    {
      icon: Heart,
      title: "Kesehatan Optimal",
      description: "Capai target kesehatan dengan panduan nutrisi yang dipersonalisasi",
    },
    {
      icon: Users,
      title: "Komunitas Sehat",
      description: "Bergabung dengan komunitas yang saling mendukung dalam hidup sehat",
    },
    {
      icon: Shield,
      title: "Data Aman",
      description: "Privasi dan keamanan data kesehatan Anda adalah prioritas utama kami",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Pengguna Aktif" },
    { number: "50,000+", label: "Makanan Tercatat" },
    { number: "1,000+", label: "Database Makanan" },
    { number: "95%", label: "Tingkat Kepuasan" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tentang AsupanKu</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Platform pelacakan nutrisi terdepan yang membantu jutaan orang Indonesia mencapai gaya hidup sehat melalui
              monitoring asupan makanan yang akurat dan mudah digunakan.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-gradient">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Misi Kami</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Memberdayakan setiap individu untuk mencapai kesehatan optimal melalui pemahaman yang lebih baik tentang
                nutrisi dan pola makan. Kami berkomitmen menyediakan tools yang mudah digunakan, akurat, dan berbasis
                sains untuk mendukung perjalanan kesehatan Anda.
              </p>
            </div>

            <div className="card-gradient">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Visi Kami</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Menjadi platform nutrisi #1 di Indonesia yang membantu menciptakan generasi yang lebih sehat dan sadar
                akan pentingnya gizi seimbang. Kami ingin setiap keluarga Indonesia memiliki akses mudah untuk memantau
                dan meningkatkan kualitas asupan nutrisi mereka.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="card-gradient mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
              AsupanKu dalam Angka
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">
              Mengapa Memilih AsupanKu?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card-gradient hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-lg">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">Tim Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="card-gradient text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{member.avatar}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="card-gradient mb-12">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Penghargaan & Pengakuan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">🏆 Best Health App 2023</div>
                  <div className="text-gray-600 dark:text-gray-400">Indonesia Digital Health Awards</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">⭐ 4.8/5 Rating</div>
                  <div className="text-gray-600 dark:text-gray-400">Google Play Store & App Store</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">🎖️ Certified Partner</div>
                  <div className="text-gray-600 dark:text-gray-400">Kementerian Kesehatan RI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="card-gradient">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">Hubungi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">hello@asupanku.id</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Telepon</h3>
                <p className="text-gray-600 dark:text-gray-400">+62 21 1234 5678</p>
              </div>
              <div className="flex flex-col items-center">
                <Github className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">github.com/asupanku</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
