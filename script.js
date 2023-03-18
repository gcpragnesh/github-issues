const issueList = document.getElementById("issue-list");
const pageNumberHeading = document.getElementById("pageNoHeading");
let currentPage = 1;



//fetching data from api


async function fetchIssues(pageNumberHere) {
  const response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
  const data = await response.json();
  const issueNames = data.map(issue => issue.title);
// clearing existing issues
   issueList.textContent = "";
  issueNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    issueList.appendChild(li);
  });
}




window.addEventListener("load", () => {
  fetchIssues(1);
});


// handling prev page

document.getElementById("load-prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchIssues(currentPage);
    pageNumberHeading.textContent = `Page No - ${currentPage}`;
  }
});



//handling next page
document.getElementById("load-next-page").addEventListener("click", () => {
  currentPage++;
  fetchIssues(currentPage);
  pageNumberHeading.textContent = `Page No - ${currentPage}`;
});
