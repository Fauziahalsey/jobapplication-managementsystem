document.onload = loadInitial_data()

async function fetchData(){
    let response= await fetch('./assets/db.json')
    let data= await response.json()
    return data;
}

function showJobs(data){
    let jobContainer= document.querySelector('.job-tile-container')
    let jobHTML= ""
    data.forEach(function (job){
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
        `
    });
    jobContainer.innerHTML = jobHTML
}

async function loadInitial_data(){
    const data= await fetchData();
    showJobs(data);
}
// ===================================================
// ======== SEARCH FUNCTIONALITY =================
// --------------------------------------------------
let inpField_el= document.getElementById('filter-jobs') 

let find_btn= document.querySelector('.btn-container')
find_btn.addEventListener('click',Search_main);

async function searchDB(searchTxt, Jobs){ 
    let searched_Job= []
    for (let job of Jobs){
        let tmpJob= await searchJob(job,searchTxt) 
        console.log('job found is:',tmpJob);
        if (tmpJob){
            searched_Job.push(tmpJob)
        }        
    }
    if (searched_Job){
        return searched_Job;
    }else{
        return;
    }
}
async function searchJob(job,searchTxt){
    // logic for searching job
    console.log('searchJob: user asked for',searchTxt);
    if ((job.roleName.toLowerCase().includes(searchTxt))||(job.requirements.content.toLowerCase().includes(searchTxt))){
        console.log('searchJob: found this=> ',job);
        return job;
    }else{
        return;
    }
}
async function Search_main(){
    if (inpField_el.value){
        let all_jobs= await fetchData()
        let filtered_jobs= await searchDB(inpField_el.value, all_jobs)
        console.log(filtered_jobs);
        showJobs(filtered_jobs)
        console.log('jobs shown successfully');
    }
}
  
document.addEventListener('DOMContentLoaded', function() {
    // Login Form
    const loginForm = document.querySelector('.center form');
    const signInCount = localStorage.getItem('signInCount') || 0;
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.querySelector('input[name="username"]').value;
      const password = document.querySelector('input[name="password"]').value;
  
      // Replace this code with actual server-side authentication logic
      // Simulating a successful login for demonstration purposes
      if (username === 'admin' && password === 'password') {
        // Increment sign-in count
        localStorage.setItem('signInCount', parseInt(signInCount) + 1);
  
        // Display sign-in count and congratulation message
        alert(`Congratulations! You have signed in.\n\nTotal Sign-ins: ${parseInt(signInCount) + 1}`);
      } else {
        alert('Invalid username or password!');
      }
  
      loginForm.reset();
    });
  
    // Contact Form
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Replace this code with actual form submission logic
      // Simulating a successful form submission for demonstration purposes
      alert(`Your message has been sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
      contactForm.reset();
    });
  });
  
  