import React from 'react'
import { useParams } from 'react-router-dom'

export default function DocumentViewer(){
  const { id } = useParams();
  return (
    <main className="max-w-5xl mx-auto mt-8 p-4">
      <h1 className="text-lg font-semibold mb-4">Document Viewer - {id}</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-600">PDF viewer + drag & drop signature area (placeholder)</p>
      </div>
    </main>
  )
}
