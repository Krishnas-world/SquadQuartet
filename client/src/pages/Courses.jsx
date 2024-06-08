import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const courses = [
    {
      category: 'UI/UX Design',
      title: 'What is UI/UX? how to get started with UI/UX Design? | Shourya',
      imageUrl: '../../public/thumb1.webp',
      instructor: 'Shourya',
    },
    {
      category: 'UI/UX Design',
      title: 'UI Design Principles. Everything you need to know about UI | Shourya',
      imageUrl: '../../public/thumb3.webp',
      instructor: 'Shourya',
    },
    {
      category: 'UI/UX Design',
      title: 'How to properly use the 60-30-10 Color Rule in Designing Interface | Bharat',
      imageUrl: '../../public/603010.jpg',
      instructor: 'Bharat',
    },
    {
      category: 'UI/UX Design',
      title: 'Design a simple Coffee shop user interface only in 10 min | Bharat',
      imageUrl: '../../public/pexels-pixabay-414630.jpg',
      instructor: 'Bharat',
    },
    {
      category: 'Front End Web Development',
      title: 'Introduction to the Holy Trinity of Front End Web Development : HTML , CSS, JS | Roshan',
      imageUrl: '../../public/thumb2.webp',
      instructor: 'Roshan',
    },
    {
      category: 'Front End Web Development',
      title: 'All about HTML & CSS in 1 hour | Roshan',
      imageUrl: '../../public/html.jpg',
      instructor: 'Roshan',
    },
    {
      category: 'Front End Web Development',
      title: 'Learn JavaScript in one hour | Roshan',
      imageUrl: '../../public/WhatsApp Image 2024-06-08 at 05.23.42_93bfa601.jpg',
      instructor: 'Roshan',
    },
    {
      category: 'Front End Web Development',
      title: 'How to make a calculator using html,css, javascript| Roshan',
      imageUrl: '../../public/hjs.jpg',
      instructor: 'Roshan',
    },
  ];

  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category.includes(selectedCategory))
    : courses;

  const getUniqueCategories = () => {
    const categories = courses.map(course => course.category);
    return [...new Set(categories)];
  };

  return (
    <div className="bg-purple-100 min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <Link to='/'>
          <button className="text-purple-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-purple-700">LearnEase</h1>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Share</button>
          <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-purple-700">Watch and Learn Now!!</h2>
        <div className="mt-2">
          <select
            className="w-full p-2 border border-zinc-300 rounded-md"
            defaultValue="Choose"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Choose</option>
            {getUniqueCategories().map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <a href="#" className="text-purple-700 mt-2 inline-block">View WatchList</a>
      </div>
      {filteredCourses.length > 0 ? (
        <div className="space-y-8">
          {getUniqueCategories().map((category) => (
            selectedCategory === '' || selectedCategory === category ? (
              <div key={category}>
                <h3 className="text-2xl font-bold text-purple-700">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  {filteredCourses
                    .filter(course => course.category === category)
                    .map((course, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={course.imageUrl} alt={course.title} className="rounded-md mb-4" />
                        <h4 className="text-lg font-semibold">{course.title}</h4>
                        <div className="mt-4 flex space-x-2">
                          <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Watch Now</button>
                          <button className="bg-purple-200 text-purple-700 px-4 py-2 rounded-lg">Add to WatchList</button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : null
          ))}
        </div>
      ) : (
        <div className="text-center text-purple-700">
          No courses available for the selected category.
        </div>
      )}
    </div>
  );
}
