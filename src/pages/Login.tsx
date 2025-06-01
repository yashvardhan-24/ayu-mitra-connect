
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900/80 backdrop-blur rounded-3xl shadow-2xl border-2 border-cyan-600 p-8">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://img.icons8.com/color/48/000000/heart-with-pulse--v2.png" 
              alt="Ayu Mitra Logo" 
              className="h-12 w-12 rounded-full shadow-xl border-2 border-cyan-600"
            />
            <span className="font-bold text-2xl tracking-wide text-cyan-400 ml-3">Ayu Mitra</span>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-white mb-8">Welcome Back</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cyan-200">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-cyan-600 text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-cyan-200">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800/50 border-cyan-600 text-white placeholder-gray-400"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transition duration-200"
            >
              Sign In
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-cyan-400 hover:text-cyan-300 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
