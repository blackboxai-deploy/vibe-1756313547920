export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Main Hello World Message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hello World
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Welcome to your beautiful Next.js application. This is where your journey begins!
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-150"></div>
          </div>

          {/* Subtle Info Text */}
          <div className="mt-12">
            <p className="text-sm text-gray-500">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}