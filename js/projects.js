createFooter();

fetch('https://api.github.com/users/ielzara/repos')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response.json();
    },
    )
    .then(data => {
        console.log(`Response data = ${data}`);
        repositories = [...data];
        console.log(`Repositories array = ${repositories}`);
        
        const projectSection = document.getElementById('portfolio');
        const projectList = projectSection.getElementsByTagName('ul');

        for (repository of repositories) {
            const project = document.createElement('li');
            project.innerText = repository.name;
            console.log(project);
            projectList[0].appendChild(project);
        }
    })
    .catch(error => {
        console.error('An error occured', error);
    }
    );