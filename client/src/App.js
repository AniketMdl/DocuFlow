function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">DocuFlow</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to DocuFlow
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            A document management platform built with MERN stack
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="text-xl font-bold mb-2">Upload</h3>
            <p className="text-gray-600">Quick document upload</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-600">End-to-end encryption</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast</h3>
            <p className="text-gray-600">Lightning quick processing</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;