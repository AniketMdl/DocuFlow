import React from 'react'

export default function Header(){
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg">DocuFlow</a>
        <nav className="flex gap-4">
          <a href="/dashboard" className="text-sm text-gray-600">Dashboard</a>
          <a href="/upload" className="text-sm text-gray-600">Upload</a>
        </nav>
      </div>
    </header>
  )
}
