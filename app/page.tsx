"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <header className="bg-primary text-white py-20 px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">lyzhia </h1>
          <h2 className="text-2xl opacity-90">Your Title</h2>
        </div>
      </header>
      
      <main className="container mx-auto max-w-4xl px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg leading-relaxed">Write something about yourself here.</p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
          <div className="flex flex-wrap gap-3">
            
            <span className="px-4 py-2 rounded-full text-white font-medium bg-secondary">
              React
            </span>
            <span className="px-4 py-2 rounded-full text-white font-medium bg-secondary">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full text-white font-medium bg-secondary">
              JavaScript
            </span>
            <span className="px-4 py-2 rounded-full text-white font-medium bg-secondary">
              HTML
            </span>
            <span className="px-4 py-2 rounded-full text-white font-medium bg-secondary">
              CSS
            </span>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img 
                  src="/placeholder.svg?height=200&width=300" 
                  alt="Project 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600">Description of project 1</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <img 
                  src="/placeholder.svg?height=200&width=300" 
                  alt="Project 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-600">Description of project 2</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <a 
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-lg"
            >
              your.email@example.com
            </a>
            <a 
              href="tel:+1 234 567 890"
              className="inline-flex items-center gap-2 text-lg"
            >
              +1 234 567 890
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-white py-8 px-8">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-medium">lyzhia </p>
            <p className="opacity-80">&copy; 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}