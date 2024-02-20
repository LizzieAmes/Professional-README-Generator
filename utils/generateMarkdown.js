// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL') {
    return '![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'Other') return '';
  
  const licenseUrls = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GPL': 'https://www.gnu.org/licenses/gpl-3.0'
  };
  return licenseUrls[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'Other') return '';
  return `## License
  This Project is licensed under ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me at [${data.email}](mailto:${data.email}).
  GitHub Profile: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
