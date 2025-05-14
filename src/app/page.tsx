// src/app/page.tsx
'use client';
import { motion } from 'framer-motion'; // This brings in animation tools
import Link from 'next/link'; // This helps us create links to other pages

// This is the main code for the homepage
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* The 'div' is like a container for the whole page. 
         'min-h-screen' makes it at least as tall as your screen.
         'bg-gray-50' gives a light gray background. */}

      {/* Hero Section: The big welcome area */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        {/* 'section' groups related content.
           'bg-gradient-to-r...' creates a blue-to-indigo gradient background.
           'text-white' makes text white.
           'py-20' adds padding (space) at the top and bottom. */}
        <div className="container mx-auto px-4 text-center">
          {/* 'container' keeps content from touching screen edges.
             'mx-auto' centers it.
             'px-4' adds side padding.
             'text-center' centers text. */}
          
          {/* Headline with animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }} // Start invisible and 20 pixels up
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.8 }} // Take 0.8 seconds
          >
            Welcome to Velix SaaS
          </motion.h1>
          {/* 'h1' is a big headline.
             'text-4xl' makes text large (bigger on bigger screens with 'md:text-6xl').
             'font-bold' makes it bold.
             'mb-4' adds space below. */}

          {/* Description */}
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The ultimate solution for your business needs.
          </motion.p>
          {/* 'p' is a paragraph.
             'text-xl' makes text medium-large.
             'mb-8' adds space below.
             Animation starts 0.2 seconds later than the headline. */}

          {/* Sign-up button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Get Started
            </Link>
          </motion.div>
          {/* 'Link' creates a clickable link to the signup page (we’ll build it later).
             'bg-white' makes the button white.
             'text-blue-600' makes text blue.
             'px-6 py-3' adds padding.
             'rounded-full' makes it pill-shaped.
             'font-semibold' makes text slightly bold.
             'hover:bg-gray-100' changes color on mouse hover. */}
        </div>
      </section>

      {/* Features Section: Why Velix is great */}
      <section className="py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Why Choose Velix?
          </h2>
          {/* 'h2' is a subheading.
             'text-3xl' makes it large.
             'mb-12' adds space below. */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 'grid' arranges items in a grid.
               'grid-cols-1' means 1 column on small screens.
               'md:grid-cols-3' means 3 columns on medium screens.
               'gap-8' adds space between items. */}
            
            {[
              { title: 'Fast', desc: 'Blazing-fast performance.' },
              { title: 'Secure', desc: 'Top-notch security features.' },
              { title: 'Scalable', desc: 'Grows with your business.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
            {/* This creates 3 cards, each fading in one after another.
               'bg-white' makes cards white.
               'p-6' adds padding.
               'rounded-lg' rounds corners.
               'shadow-md' adds a shadow. */}
          </div>
        </div>
      </section>

      {/* Pricing Section: Show subscription plans */}
      <section className="bg-gray-100 py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { plan: 'Basic', price: '$9/mo', features: ['Feature A', 'Feature B'] },
              { plan: 'Pro', price: '$29/mo', features: ['All Basic Features', 'Feature C', 'Feature D'] },
            ].map((tier, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{tier.plan}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <ul className="mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="mb-2">{feature}</li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700"
                >
                  Choose {tier.plan}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Bottom of the page */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Velix SaaS. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/about" className="mx-2 hover:underline">About</Link>
            <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
            <Link href="/privacy" className="mx-2 hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}