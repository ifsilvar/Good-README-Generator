// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Username](#username)
  - [Email](#email)

  ## Description:
    ${data.description}
  ## Installation:
    ${data.install}
  ## Usage:
    ${data.usage}
  ## License:
    ${data.license}
  ## Contributors
    ${data.contribute}
  ## Testing
    ${data.test}
  ## Username
    ${data.username}
  ## Email
    ${data.email}
  ## Questions:
    Got any questions or comments? Visit my GitHub Page
    - [GitHub](https://github.com/${data.username})

    For direct contact send me a message at: ${data.email}.
`;
}

module.exports = generateMarkdown;
