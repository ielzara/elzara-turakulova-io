createFooter();

function fetchRepositories() {
  fetch('https://api.github.com/users/ielzara/repos')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    })
    .then((data) => {
      const repositories = data;
      const repoList = document.getElementById('repo-list');

      repositories.forEach((repo) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = repo.html_url;
        link.textContent = repo.name;
        link.target = '_blank';

        listItem.appendChild(link);
        repoList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error('An error occurred', error);
      const repoList = document.getElementById('repo-list');
      repoList.innerHTML =
        '<li>Error fetching repositories. Please try again later.</li>';
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchRepositories);