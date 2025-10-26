// Courses Page - Dynamic Course Loading
// Unparalleled Scholar

const API_BASE_URL = 'http://localhost:3000/api';

// Load courses when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    setupSearchBar();
});

// Setup search bar functionality
function setupSearchBar() {
    const searchInput = document.getElementById('course-search');
    const resultsCount = document.getElementById('search-results-count');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const courseCards = document.querySelectorAll('#courses-container > div');
            let visibleCount = 0;
            
            courseCards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const category = card.querySelector('.px-3.py-1.text-xs')?.textContent.toLowerCase() || '';
                const instructor = card.querySelector('.text-sm.text-gray-600')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || category.includes(searchTerm) || instructor.includes(searchTerm)) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update results count
            if (searchTerm) {
                resultsCount.textContent = `Showing ${visibleCount} course${visibleCount !== 1 ? 's' : ''}`;
            } else {
                resultsCount.textContent = '';
            }
        });
    }
}

// Fetch and display courses
async function loadCourses(category = null) {
    const container = document.getElementById('courses-container');
    
    try {
        let url = `${API_BASE_URL}/courses`;
        if (category && category !== 'all') {
            url += `?category=${category}`;
        }

        const response = await fetch(url);
        const result = await response.json();

        if (result.success && result.data.length > 0) {
            container.innerHTML = result.data.map(course => createCourseCard(course)).join('');
        } else {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No courses found</h3>
                    <p class="mt-2 text-gray-500">Try selecting a different category.</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading courses:', error);
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-red-600">Error loading courses. Please try again later.</p>
            </div>
        `;
    }
}

// Create course card HTML
function createCourseCard(course) {
    return `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <div class="h-48 bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                <svg class="h-16 w-16 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-100 rounded-full">
                        ${course.category}
                    </span>
                    <span class="text-sm text-gray-500">${course.duration}h</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">${course.title}</h3>
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">${course.description}</p>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center">
                        <span class="text-yellow-400 mr-1">★</span>
                        <span class="text-sm font-semibold text-gray-700">${course.rating.average}</span>
                        <span class="text-xs text-gray-500 ml-1">(${course.rating.count})</span>
                    </div>
                    <span class="px-3 py-1 text-sm font-semibold ${
                        course.level === 'Beginner' ? 'text-green-600 bg-green-100' :
                        course.level === 'Intermediate' ? 'text-blue-600 bg-blue-100' :
                        'text-purple-600 bg-purple-100'
                    } rounded-full">
                        ${course.level}
                    </span>
                </div>

                <div class="mt-4">
                    <p class="text-sm text-gray-600">
                        <span class="font-medium">Instructor:</span> ${course.instructor.name}
                    </p>
                </div>

                <button onclick="enrollCourse('${course.id}')" 
                    class="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Enroll Now
                </button>
            </div>
        </div>
    `;
}

// Filter courses by category
function filterCourses(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-indigo-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });
    event.target.classList.add('active', 'bg-indigo-600', 'text-white');
    event.target.classList.remove('bg-white', 'text-gray-700');

    // Load filtered courses
    loadCourses(category);
}

// Enroll in course
function enrollCourse(courseId) {
    alert(`Enrollment feature coming soon! Course ID: ${courseId}`);
    // TODO: Implement enrollment logic
}
