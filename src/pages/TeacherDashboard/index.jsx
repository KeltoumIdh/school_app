import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className='grid grid-cols-2 gap-4 items-center justify-center max-w-md mx-auto m-10'>

<Link to="/teacher-dashboard/add-module" class="block max-w-sm p-6 bg-blue-300 border border-gray-200 rounded-lg shadow hover:bg-blue-100 ">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Add New Module</h5>
</Link>
<Link to="/teacher-dashboard/add-exam" class="block max-w-sm p-6 bg-orange-300 border border-gray-200 rounded-lg shadow hover:bg-orange-100 ">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Create Exam</h5>
</Link>
<Link to="/teacher-dashboard/exam-notes" class="block max-w-sm p-6 bg-purple-300 border border-gray-200 rounded-lg shadow hover:bg-purple-100 ">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Exam Notes</h5>
</Link>
<Link to="/teacher-dashboard/attendance-tracking" class="block max-w-sm p-6 bg-green-300 border border-gray-200 rounded-lg shadow hover:bg-green-100 ">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Attendance Tracking</h5>
</Link>

    </div>
  )
}
