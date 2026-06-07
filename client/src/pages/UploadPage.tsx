import React from 'react'

export default function UploadPage(){
  return (
    <main className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-xl font-semibold mb-4">Upload</h1>
      <div className="bg-white p-6 rounded shadow">
        <p className="text-sm text-gray-600">Drag & drop PDF files here. Server will accept and process signatures.</p>
        <input type="file" accept="application/pdf" className="mt-4" id="fileInput" />
      </div>
    </main>
  )
}
