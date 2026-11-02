import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-white border-t border-gray-200 px-6 sm:px-10 lg:px-20">

      <div className="max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          SHAVEZ ALI<span className="text-violet-600">.</span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Shavez Ali. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors"
        >
          Back to Top ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer
