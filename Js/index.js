document.onload = loadInitial_data();

async function fetchData() {
  let response = await fetch('./assets/json/data.json');
  let data = await response.json();
  return data;
}

function showJobs(data) {
  let jobContainer = document.querySelector('.job-tile-container');
  let jobHTML = "";
  data.forEach(function(job) {
    jobHTML += `
      <div class="job-tile">
        <div class="job-tile-head">
          <div class="logo"><img src="${job.logo}"/></div>
          <div class="dots"><i class="fas fa-ellipsis-h"></i></div>
        </div>
        <div class="job-tile-title">${job.roleName}</div>
        <div class="job-tile-desc">${job.requirements.content}</div>
        <div class="btns">
          <div class="apply">Apply</div>
          <div class="message">Details</div>
        </div>
      </div>
    `;
  });
  jobContainer.innerHTML = jobHTML;
}

async function loadInitial_data() {
  const data = await fetchData();
  showJobs(data);
}

// Search Functionality

let inpField_el = document.getElementById('filter-jobs');

let find_btn = document.querySelector('.btn-container');
find_btn.addEventListener('click', Search_main);

async function searchDB(searchTxt, Jobs) {
  let searched_Job = [];
  for (let job of Jobs) {
    let tmpJob = await searchJob(job, searchTxt);
    console.log('job found is:', tmpJob);
    if (tmpJob) {
      searched_Job.push(tmpJob);
    }
  }
  if (searched_Job.length > 0) {
    return searched_Job;
  } else {
    return [];
  }
}

async function searchJob(job, searchTxt) {
  // Logic for searching job
  console.log('searchJob: user searched for', searchTxt);
  if (
    job.roleName.toLowerCase().includes(searchTxt.toLowerCase()) ||
    job.requirements.content.toLowerCase().includes(searchTxt.toLowerCase())
  ) {
    console.log('searchJob: found this => ', job);
    return job;
  } else {
    return null;
  }
}

async function Search_main() {
  if (inpField_el.value) {
    let all_jobs = await fetchData();
    let filtered_jobs = await searchDB(inpField_el.value, all_jobs);
    console.log(filtered_jobs);
    showJobs(filtered_jobs);
    console.log('jobs shown successfully');
  }
}
