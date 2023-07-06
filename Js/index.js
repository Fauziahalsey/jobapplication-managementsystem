// Fetch more job listings when "Browse Jobs" button is clicked
document.querySelector('.btn-primary').addEventListener('click', fetchMoreJobs);

function fetchMoreJobs() {
  // Perform an AJAX request to the API endpoint
  // Replace 'YOUR_API_KEY' with your actual API key
  fetch('https://arbeitnow.com/api/job-board-api?api_key=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      // Process the retrieved job listings data
      displayJobs(data);
    })
    .catch(error => {
      console.error('Error fetching job listings:', error);
    });
}

// Display the fetched job listings
function displayJobs(jobListings) {
  const jobListingsContainer = document.querySelector('.job-listings');

  // Clear the existing job listings
  jobListingsContainer.innerHTML = '';

  // Create HTML elements for each job listing
  jobListings.forEach(job => {
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

    const applyButton = document.createElement('a');
    applyButton.classList.add('btn-apply');
    applyButton.textContent = 'Apply';
    applyButton.href = job.applyUrl;

    jobListing.appendChild(jobTitle);
    jobListing.appendChild(jobCompany);
    jobListing.appendChild(jobLocation);
    jobListing.appendChild(applyButton);

    jobListingsContainer.appendChild(jobListing);
  });
}

// Submit email form
document.querySelector('.contact-form').addEventListener('submit', submitEmail);

function submitEmail(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Perform an AJAX request to the API endpoint for submitting emails
  // Replace 'YOUR_API_KEY' with your actual API key
  fetch('https://arbeitnow.com/api/job-board-api/submit-email?api_key=YOUR_API_KEY', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      if (data.success) {
        alert('Email sent successfully!');
        form.reset();
      } else {
        alert('Failed to send email. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error submitting email:', error);
    });
}

// Apply for job
document.querySelectorAll('.btn-apply').forEach(button => {
  button.addEventListener('click', applyForJob);
});

// function applyForJob(event) {
//   event.preventDefault();

//   const jobTitle = event.target.parentElement.querySelector('.job-title').textContent;

//   // Perform an AJAX request to the API endpoint for applying to jobs
//   // Replace 'YOUR_API_KEY' with your actual API key
//   fetch('https://arbeitnow.com/api/job-board-api/apply-job?api_key=YOUR_API_KEY', {
//     method: 'POST',
//     headers: {
//     //   'Content-Type': 'application/json'
//     },