// Sample candidate data
const candidates = [
    { name: "John Doe", location: "New York", jobRole: "Software Developer" },
    { name: "Jane Smith", location: "London", jobRole: "Data Analyst" },
    { name: "Alex Johnson", location: "San Francisco", jobRole: "Project Manager" },
    // Add more candidate data here...
  ];
  
  // Function to perform the search
  function searchCandidates() {
    const locationInput = document.getElementById("location");
    const jobRoleInput = document.getElementById("jobRole");
    const searchResults = document.getElementById("searchResults");
  
    // Get the user's search criteria
    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleInput.value.toLowerCase();
  
    // Filter the candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate =>
      candidate.location.toLowerCase().includes(location) &&
      candidate.jobRole.toLowerCase().includes(jobRole)
    );
  
    // Clear previous search results
    searchResults.innerHTML = "";
  
    // Display the search results
    if (filteredCandidates.length > 0) {
      filteredCandidates.forEach(candidate => {
        const candidateInfo = document.createElement("p");
        candidateInfo.textContent = `${candidate.name} - ${candidate.jobRole}, ${candidate.location}`;
        searchResults.appendChild(candidateInfo);
      });
    } else {
      const noResults = document.createElement("p");
      noResults.textContent = "No matching candidates found.";
      searchResults.appendChild(noResults);
    }
  }
  
  // Attach the search function to the search button
  const searchButton = document.getElementById("searchBtn");
  searchButton.addEventListener("click", searchCandidates);
  