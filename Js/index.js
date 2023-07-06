// JavaScript (script.js)

// Search functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const jobListings = document.querySelector('.job-listings');
const browseJobsButton = document.querySelector('.btn-browse-jobs');

let page = 1;

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm === '') return;

  page = 1;
  searchJobs(searchTerm);
});

browseJobsButton.addEventListener('click', function (e) {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm === '') return;

  page++;
  searchJobs(searchTerm, page);
});

function searchJobs(searchTerm, page = 1) {
  // Clear previous search results
  if (page === 1) {
    jobListings.innerHTML = '';
  }

  // Fetch jobs from API
  fetch(`https://api.example.com/jobs?search=${searchTerm}&page=${page}`)
    .then(response => response.json())
    .then(data => {
      // Display search results
      if (data.length === 0) {
        if (page === 1) {
          jobListings.innerHTML = '<p>No jobs found.</p>';
        } else {
          browseJobsButton.style.display = 'none';
        }
      } else {
        data.forEach(job => {
          const jobListing = createJobListing(job);
          jobListings.appendChild(jobListing);
        });

        if (data.length < 10) {
          browseJobsButton.style.display = 'none';
        } else {
          browseJobsButton.style.display = 'block';
        }
      }
    })
    .catch(error => {
      console.log('An error occurred:', error);
      jobListings.innerHTML = '<p>Failed to fetch jobs. Please try again later.</p>';
    });
}

function createJobListing(job) {
  const jobListing = document.createElement('div');
  jobListing.classList.add('job-listing');

  const jobTitle = document.createElement('h3');
  jobTitle.classList.add('job-title');
  jobTitle.textContent = job.title;

  const jobCompany = document.createElement('p');
  jobCompany.classList.add('job-company');
  jobCompany.textContent = job.company;

  const jobLocation = document.createElement('p');
  jobLocation.classList.add('job-location');
  jobLocation.textContent = job.location;

  jobListing.appendChild(jobTitle);
  jobListing.appendChild(jobCompany);
  jobListing.appendChild(jobLocation);

  return jobListing;
}
