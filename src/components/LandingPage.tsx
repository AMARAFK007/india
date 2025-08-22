import React, { useState, useEffect } from 'react'
import { Star, Users, Award, BookOpen, Play, CheckCircle, ArrowRight, Zap, Target, TrendingUp, Globe, Shield, Clock, ChevronDown } from 'lucide-react'

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group">
              <div className="relative">
                <BookOpen className="h-10 w-10 text-gradient bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="ml-3 text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">EduPro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Courses', 'About', 'Pricing', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative text-gray-300 hover:text-white transition-colors duration-300 group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <button className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              🚀 Transform Your Career Today
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
              Master Skills
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Shape Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join <span className="text-purple-400 font-semibold">50,000+</span> professionals who've accelerated their careers with our 
            <span className="text-blue-400 font-semibold"> AI-powered learning platform</span>. 
            Get lifetime access to premium courses taught by industry legends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="flex items-center justify-center relative z-10">
                <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Learning Now
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </button>
            
            <button className="group border-2 border-purple-500/50 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                <Globe className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                Explore Courses
              </span>
            </button>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-2xl shadow-2xl">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute top-40 right-10 animate-bounce delay-2000">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 rounded-2xl shadow-2xl">
              <Target className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
            <div className="bg-gradient-to-r from-teal-500 to-purple-500 p-4 rounded-2xl shadow-2xl">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Students Transformed', icon: Users, color: 'from-purple-400 to-pink-400' },
              { number: '200+', label: 'Industry Experts', icon: Award, color: 'from-blue-400 to-cyan-400' },
              { number: '500+', label: 'Premium Courses', icon: BookOpen, color: 'from-teal-400 to-green-400' },
              { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'from-orange-400 to-red-400' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="relative mb-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                </div>
                <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">EduPro?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of learning with our revolutionary platform that combines cutting-edge technology 
              with world-class instruction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'World-Class Instructors',
                description: 'Learn from industry legends and Fortune 500 executives who have built billion-dollar companies.',
                gradient: 'from-purple-500 to-pink-500',
                delay: 'delay-100'
              },
              {
                icon: Shield,
                title: 'Lifetime Guarantee',
                description: 'Get unlimited access forever with free updates, new courses, and premium support included.',
                gradient: 'from-blue-500 to-cyan-500',
                delay: 'delay-200'
              },
              {
                icon: Clock,
                title: 'Learn at Your Pace',
                description: 'AI-powered personalized learning paths that adapt to your schedule and learning style.',
                gradient: 'from-teal-500 to-green-500',
                delay: 'delay-300'
              }
            ].map((feature, index) => (
              <div key={index} className={`group relative ${feature.delay}`}>
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="relative mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Start your learning journey today with our flexible pricing options.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Basic</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-6">$29<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Access to 50+ courses</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Basic support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Mobile app access</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pro</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-6">$59<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Access to all courses</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Certificates included</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />1-on-1 mentoring</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Everything in Pro</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Team management</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Custom content</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Analytics dashboard</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-2xl font-bold">EduPro</span>
              </div>
              <p className="text-gray-400">
                Empowering learners worldwide with premium educational content and expert instruction.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">Data Science</a></li>
                <li><a href="#" className="hover:text-white">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-white">AI & Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage