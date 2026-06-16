import React from 'react'

const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-500 text-white p-8 rounded-l-2xl">
        <div className="absolute -top-30 left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
            <h1 className="text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight tracking-tight">Employee <br /> Management System</h1>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">Welcome back! Please sign in to your account.</p>
        </div>
      </div>
  )
}

export default LoginLeftSide
