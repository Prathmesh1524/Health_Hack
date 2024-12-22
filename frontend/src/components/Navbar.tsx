'use client'
import { Link } from 'react-router-dom'
import { Menu, Heart } from 'lucide-react'
import { Button } from './ui/button'
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">HealthTech</span>
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium">
            Home
          </Link>
          <Link to={"/about"} className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
            About
          </Link>
          <Link to={"/contact"} className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
            Contact
          </Link>
          <Link to={"/blogs"} className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
            Blogs
          </Link>
          <Link to={"/chatbot"} className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
            Let's Chat
          </Link>
        </div>
        <div className="flex items-center">
          <Link to={"/signin"}>
          <Button variant="outline" className="hidden sm:block">Sign In</Button></Link>
          <div className="sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

