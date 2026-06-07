import React from 'react'

export default function Dashboard(){
  return (
    <main className="max-w-6xl mx-auto mt-8 p-4">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>
      <section className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded p-4 shadow">Recent documents (placeholder)</div>
        <aside className="bg-white rounded p-4 shadow">Quick actions</aside>
      </section>
    </main>
  )
}
