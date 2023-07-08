// document.onload = loadInitial_data()

// async function fetchData(){
//     let response= await fetch('./assets/db.json')
//     let data= await response.json()
//     return data;
// }

// function showJobs(data){
//     let jobContainer= document.querySelector('.job-tile-container')
//     let jobHTML= ""
//     data.forEach(function (job){
//         jobHTML += `
//         <div class="job-tile">
//                 <div class="job-tile-head">
//                     <div class="logo"><img src="${job.logo}"/></div>
//                     <div class="dots"><i class="fas fa-ellipsis-h"></i></div>
//                 </div>
//                 <div class="job-tile-title">${job.roleName}</div>
//                 <div class="job-tile-desc">${job.requirements.content}</div>
//                 <div class="btns">
//                     <div class="apply">Apply</div>
//                     <div class="message">Details</div>
//                 </div>
//             </div>
//         `
//     });
//     jobContainer.innerHTML = jobHTML
// }

// async function loadInitial_data(){
//     const data= await fetchData();
//     showJobs(data);
// }
// Sample job data
const jobs = [
    {
      "id": 1,
      "company": "TekStrea",
      "roleName": "Pega Developer - 100% Remote",
      "type": "Full Time",
      "location": "United States",
      "website": "https://linkedin.com/TekStrea",
      "applicationLink": "https://linkedin.com/TekStrea/apply",
      "requirements": {
        "intro": "A TekStrea client, a healthcare technology company, has an immediate need for a Pega Developer for a remote long term contract.  We're looking for an experienced developer to support defects, issues and development.",
        "content": "The ideal candidate is as passionate about solving challenges through technology.",
        "items": [
          "Needs to be experienced in the PEGA platform on at least 7.22 with PEGA 8.x preferred.",
          "Pega Marketing or Pega Customer Decision Hub certification (for developers).",
          "Blues experience highly preferred, Healthcare experience required.",
          "Must be USA based and open to work standard business hours of 8-5pm ET."
        ]
      }
    },
    {
      "id": 2,
      "company": "Facebook",
      "roleName": "3D Web Software Engineer",
      "type": "Part Time",
      "location": "United States",
      "website": "https://linkedin.com/Facebook",
      "applicationLink": "https://linkedin.com/Facebook/apply",
      "requirements": {
        "intro": "Facebook's mission is to give people the power to build community and bring the world closer together. ",
        "content": "Come work alongside expert software engineers and research scientists to create the technology that makes VR and AR pervasive and universal. Join the adventure of a lifetime as we make science fiction real and change the world.",
        "items": [
          "BS Computer Science or equivalent experience",
          "3+ years of experience developing 3D/XR web applications or frameworks",
          "5+ years of experience using JavaScript in a professional software development setting"
        ]
      }
    },
    {
        "id": 3,
        "company": "Jobot",
        "roleName": "SR. Software Engineer - Python Django",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/Jobot",
        "applicationLink": "https://linkedin.com/Jobot/apply",
        "requirements": {
          "intro": "Are you a fit? Easy Apply now by clicking the 'Apply' button and sending us your resume.",
          "content": "We're looking for Sr. level backend software engineers that have at least 7 years of writing code for web-based Python applications.",
          "items": [
            "You will need at least 3 years of writing Python Django applications and at least 10 years of software engineering experience.",
            "The frontend of this application is written in React.js - if you are comfortable in a full-stack role, then even better, but not a requirement.",
            "Ideally, you have tenure in all of the companies you've worked for, so you can show growth and technical challenges that you've overcome over time."
          ]
        }
      },
      {
        "id": 4,
        "company": "SpringbokIT",
        "roleName": "Frontend Content Developer",
        "postedTime": "2d ago",
        "type": "Full Time",
        "location": "United States",
        "website": "https://linkedin.com/SpringbokIT",
        "applicationLink": "https://linkedin.com/SpringbokIT/apply",
        "requirements": {
          "intro": "A global leader in the retail space has migrated to Salesforce and is looking to add to its content development team. ",
          "content": "The company holds a “Greater Together” mentality and the Content Production Manager, to which this role reports, embodies that mantra. ",
          "items": [
            "Experience with Salesforce Commerce Cloud (SFCC) Business Manager",
            "HTML, CSS, Javascript, and Bootstrap",
            "Experience working with a collaborative group in a process-oriented production environment."
          ]
        }
      },
      {
        "id": 5,
        "company": "Dice",
        "roleName": "Front End Developer",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/Dice",
        "applicationLink": "https://linkedin.com/Dice/apply",
        "requirements": {
          "intro": "Dice is the leading career destination for tech experts at every stage of their careers. Our client, TrustMinds, Inc., is seeking the following. Apply via Dice today!",
          "content": "Seeking front end developers to build and maintain websites, landing pages, and display ad banners using HTMLCSSJavaScript to build responsive designs from provided mockups ",
          "items": [
            "advanced HTML, CSS, and JavaScript",
            "build systems based on NPM, Gulp, Webpack, Sass",
            "should feel confident using GitGitflow branching strategies"
          ]
        }
      },
      {
        "id": 6,
        "company": "The Population Project",
        "roleName": "CTO / Co-founder",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/ThePopulationProject",
        "applicationLink": "https://linkedin.com/ThePopulationProject/apply",
        "requirements": {
          "intro": "The Population Project, a non-profit organization striving to list the name and date of birth of all humans alive, is looking for its CTO / technical co-founder.",
          "content": "This is a non- to low-paying position, requiring 10 to 40 hours a week depending on your involvement.",
          "items": [
            "Maintaining a large Postgres AWS-hosted database",
            "Building the next version of our website when we decide to publicly expose our data",
            "Monitoring the Wrike and Discord collaboration platforms with which we interact with our volunteers"
          ]
        }
      },
      {
        "id": 7,
        "company": "Georgia IT, Inc.",
        "logo": "https://media-exp1.licdn.com/dms/image/C510BAQHTI2pFWjn2UA/company-logo_200_200/0/1519897797698?e=1632960000&v=beta&t=5H-Vp8dCcXJ8fICwNGmB2YQzJYqyimjkZFYF-4j5fj0",
        "roleName": "Full Stack Engineer - REMOTE or Onsite",
        "postedTime": "2d ago",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/GeorgiaITInc",
        "applicationLink": "https://linkedin.com/GeorgiaITInc/apply",
        "requirements": {
          "intro": "This company hasn't provided an intro.",
          "content": "Able to interface with customer digital sales and lead generation tools and following the lead into their CRM (SalesForce) system for conversion by an agent.",
          "items": [
            "US Citizens and Green Card Only, No third party",
            "Engineers with solid JavaScript and AWS background.",
            "Experience in React.JS, Node.JS, and Angular is preferred"
          ]
        }
      },
      {
        "id": 8,
        "company": "Michael Page",
        "logo": "https://media-exp1.licdn.com/dms/image/C560BAQFWT_CW-6Hd2Q/company-logo_200_200/0/1623848489646?e=1632960000&v=beta&t=eyDm2mqsK9xeBZawTXTUsBYze8WRduxd3uukb4T26Ao",
        "roleName": "Frontend Software Engineer Remote Banking $130k/yr",
        "postedTime": "2d ago",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/MichaelPage",
        "applicationLink": "https://linkedin.com/MichaelPage/apply",
        "requirements": {
          "intro": "This company is a Boston based company that partners with hundreds of banks and credit unions. Voted one of the fastest growing FinTech companies in the world in 2020, our client strives to produce a product to help streamline the banking industry.",
          "content": "Tech Stack: Typescript, JavaScript, Angular, AWS, CSS",
          "items": [
            "4+ years of hands on development experience",
            "Experience in frontend development using Typescript, JavaScript and Angular",
            "Experience delivering applications using AWS"
          ]
        }
      },
      {
        "id": 9,
        "company": "GAOTek Inc.",
        
        "roleName": "Software Development Intern (Virtual)",
        "postedTime": "2d ago",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/GAOTekInc",
        "applicationLink": "https://linkedin.com/GAOTekInc/apply",
        "requirements": {
          "intro": "You shall be keen to learn, willing to work hard, maintaining productivity and committed to the job. ",
          "content": "This position is for those who are currently residing in the US and have the correct VISA to work in the country.",
          "items": [
            "Software development plans",
            "Software architecture",
            "White papers"
          ]
        }
      }, 
      {
        "id": 10,
        "company": "RemoteHub",
        "logo": "https://media-exp1.licdn.com/dms/image/C4E0BAQGQ_EPbBXR8Hg/company-logo_200_200/0/1604324330666?e=1632960000&v=beta&t=53alZNNXv3B7o_J5jHG4pe7plcWIMBB8kdgxS1ooMCQ",
        "roleName": "Work from Home Opportunities",
        "postedTime": "2d ago",
        "type": "Part Time",
        "location": "United States",
        "website": "https://linkedin.com/RemoteHub",
        "applicationLink": "https://linkedin.com/RemoteHub/apply",
        "requirements": {
          "intro": "Appen is a global leader in speech and search technology services and we have several part time work from home opportunities that you can apply for!",
          "content": "We are looking for applicants for an exciting work from home opportunity. Applicants must be self-motivated and internet savvy and there is no previous work experience or college degree required to apply for our jobs.",
          "items": [
            "Linguistic Specialties (Text to Speech, Computational, Phonetics, Pronunciation, Annotation, etc.)",
            "Social Media Evaluation (Help improve social media around the globe)",
            "Search Engine Evaluation (Work with the world’s top search engine companies)"
          ]
        }
      }
  ];
  
  // Function to display jobs
  function displayJobs(jobs) {
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";
    jobs.forEach(job => {
      const div = document.createElement("div");
      div.className = "job";
      const content = `
        <h3>${job.roleName}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.requirements.intro}</p>
        <p>${job.requirements.content}</p>
        <ul>${job.requirements.items.map(item => `<li>${item}</li>`).join("")}</ul>
        <p><a href="${job.website}" target="_blank">Company Website</a></p>
        <p><a href="${job.applicationLink}" target="_blank">Apply Now</a></p>
      `;
      div.innerHTML = content;
      jobList.appendChild(div);
    });
  }
  
  // Event listener for job search
  document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredJobs = jobs.filter(job => {
      return job.roleName.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm);
    });
    displayJobs(filteredJobs);
  });
  
  // Initial display of all jobs
  displayJobs(jobs);
  
  
  // Event listener for job search
  document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredJobs = jobs.filter(job => {
      return job.roleName.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm);
    });
    displayJobs(filteredJobs);
  });
  
  // Initial display of all jobs
  displayJobs(jobs);
  
  
  // Event listener for job search
  document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredJobs = jobs.filter(job => {
      return job.roleName.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm);
    });
    displayJobs(filteredJobs);
  });
  
  // Initial display of all jobs
  displayJobs(jobs);
  
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
  
  