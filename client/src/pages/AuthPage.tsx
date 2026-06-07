import React from 'react'

export default function AuthPage(){
  return (
    <main className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Sign in to DocuFlow</h1>
      <form className="space-y-4" id="loginForm">
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input name="email" type="email" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input name="password" type="password" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> Remember me</label>
          <a className="text-sm text-blue-600" href="#">Forgot?</a>
        </div>
        <div>
          <button className="w-full bg-blue-600 text-white rounded py-2">Sign in</button>
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-3">Demo creds: demo@docuflow.local / password</p>
    </main>
  )
}
