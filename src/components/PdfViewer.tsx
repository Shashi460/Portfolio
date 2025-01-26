'use client';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import React from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
import { Button } from './ui/button';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [pageNumber, setPageNumber] = useState(1);

  // Handle successful document loading
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setPageNumber(1); // Reset to the first page
  };

  // Download PDF handler
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'Resume.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div onClick={downloadPdf} className="cursor-pointer w-full text-right mt-4 fixed top-0 right-5">
        <Button text='Download Resume' />
      </div>

      <div className="mt-8 flex flex-col items-center w-full p-6 bg-white shadow-md rounded-md">
        {/* Name Section */}
        <h2 className="text-2xl font-extrabold text-gray-800">Ala Shashi Vardhan Reddy</h2>

        {/* Internship Section */}
        <div className="mt-6 w-full gap-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Internship</h3>
          <p className="text-sm text-gray-600 mt-1">Summer Internship Training</p>
          <p className="text-sm text-gray-600">June 2023 - July 2023</p>
          <p className="text-sm text-gray-600 font-medium">GeeksforGeeks</p>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-2">
            <li>Gained expertise in algorithms, asymptotic notations, time complexity, and space complexity analysis.</li>
            <li>Solved over 650+ coding problems in DSA using C++ on LeetCode, earning multiple badges.</li>
            <li>Consistently participated in LeetCode contests, achieving a contest rating of 1600+ and demonstrating strong problem-solving and algorithmic proficiency.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold text-gray-700">Projects</h3>

          {/* Infinity Project */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-800">INFINITY</p>
            <p className="text-xs text-gray-600">TypeScript, ReactJs, NextJs, TailwindCSS, Appwrite, Shadcn, Responsive Web Design</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-2">
              <li>Developed a secure SSR authentication system with validation and authorization using Appwrite.</li>
              <li>Integrated Plaid API for secure bank account linking, enhancing user experience and transaction management.</li>
              <li>Created a dynamic dashboard showcasing user account summaries, categorized spending analysis, and real-time data insights.</li>
              <li>Implemented a secure fund transfer system using Dwolla, ensuring compliance and user-friendly transactions.</li>
            </ul>
          </div>

          {/* Promptopia Project */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-800">PROMPTOPIA</p>
            <p className="text-xs text-gray-600">JavaScript, ReactJs, NextJs, TailwindCSS, MongoDB</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-2">
              <li>Integrated NextAuth for secure user authentication, streamlining signup and login processes.</li>
              <li>Developed a robust backend system with full CRUD operations for prompt management.</li>
              <li>Implemented SSR and SSG in Next.js, reducing page load times and improving performance under high traffic.</li>
              <li>Designed an advanced search system, enhancing content discoverability by tags, usernames, and keywords.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-6 w-full gap-2 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Technical Skills</h3>
          <p className="text-sm text-gray-600 mt-2"><span className='font-bold text-md'>Languages</span>: C++, Java, JavaScript, TypeScript</p>
          <p className="text-sm text-gray-600"><span className='font-bold text-md'>Frameworks</span>: ReactJS, TailwindCSS, Next.js</p>
          <p className="text-sm text-gray-600"><span className='font-bold text-md'>Skills</span>: Data Structures and Algorithms, Problem-Solving, Responsive Web Design</p>
          <p className="text-sm text-gray-600"><span className='font-bold text-md'>Databases</span>: MySQL, MongoDB</p>
        </div>

        {/* Education Section */}
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold text-gray-700">Education</h3>
          <div className="mt-4 gap-1 flex flex-col">
            <p className="text-sm font-medium text-gray-800">Lovely Professional University</p>
            <p className="text-xs text-gray-600">Punjab 2021-2025</p>
            <p className="text-sm text-gray-600">Information Technology — CGPA: 7.0</p>
          </div>
          <div className="mt-4 gap-1 flex flex-col">
            <p className="text-sm font-medium text-gray-800">Narayana IIT Academy</p>
            <p className="text-xs text-gray-600">Hyderabad 2019–2021</p>
            <p className="text-sm text-gray-600">Intermediate — Percentage: 98.00%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;