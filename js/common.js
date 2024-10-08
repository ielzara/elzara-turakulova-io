// ===FOOTER===
function createFooter() {
  const footer = document.createElement('footer');
  document.body.appendChild(footer);

  const footerContent = document.createElement('div');
  footerContent.className = 'footer-content';
  footer.appendChild(footerContent);

  // Copyright in Footer
  const copyright = document.createElement('div');
  copyright.className = 'copyright';

  // create copyright year dynamically
  const today = new Date();
  const thisYear = today.getFullYear();
  copyright.textContent = `\u00A9 ${thisYear} Elzara Turakulova`;
  footerContent.appendChild(copyright);

  // Connect icons for social media inside the footer
  const connect = document.createElement('div');
  connect.className = 'connect';
  footerContent.appendChild(connect);

  //Unordered list with list item elements
  const footerList = document.createElement('ul');
  connect.appendChild(footerList);

  //social links in an array of objects
  const socialMediaLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ielzara',
      iconPath: 'images/instagram-icon.png',
    },
    {
      name: 'Email',
      url: 'mailto:endjik@gmail.com',
      iconPath: 'images/gmail-icon.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ielzara',
      iconPath: 'images/github-icon.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/elzara',
      iconPath: 'images/linkedin-icon.png',
    },
  ];

  // Social Media List generating function
  function createFooterItem(platform) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = platform.url;
    if (platform.name !== 'Email') {
      a.target = '_blank';
    }

    img.src = platform.iconPath;
    img.alt = platform.name;
    img.className = 'social-icon';

    a.appendChild(img);
    li.appendChild(a);

    return li;
  }

  // Add li to ul
  socialMediaLinks.forEach((platform) => {
    const footerItem = createFooterItem(platform);
    footerList.appendChild(footerItem);
  });
}

