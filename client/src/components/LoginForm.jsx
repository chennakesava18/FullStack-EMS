import React from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'

const LoginForm = ({role,title,subtitle}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[showPassword, setShowPassword] = useState(false)
  const[error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16  ">
        <div className="w-full md:w-md animation-fade-in">
          <Link to="/login" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-700 text-sm mb-10 transition-colors">
          <ArrowLeftIcon size={16} /> Back to portals
          </Link>
          <div className="mb-8 ">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900"> {title} </h1>
            <p className="text-slate-500"> {subtitle} </p>
          </div>
          {error && <div className="mb-4 text-red-600 bg-red-50 p-3 rounded">{error}</div>}
        </div>
        <form onSubmit={handleSubmit} className="w-full md:w-md space-y-6">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email"
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password"
            
            className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
           <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-slate-400 hover:text-slate-600 transition-colors">
              {showPassword ? "Hide" : "Show"}
            </button>
            <button type="submit" disabled={loading} className="w-full btn-primary">
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
        
    
  )
}

export default LoginForm
