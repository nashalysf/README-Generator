module.exports = answers => {
  console.log(answers);
  const Title = {
    name: answers.sectionTitle,
    info: answers.sectionInfo
  }
  //{name, description, languages, install, usage, license, contribution, link, contact, sectionTitle, sectionInfo}= answers;
    return `
  # ${answers.name} 
   - ${answers.license}
   - ${answers.description}
   
   ## Table of Contents
   - [Languages](#laguages)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Test](#test)
   - [Contribution](#contribution)
   - [Contact](#contact)
   - [${Title.name}](#${Title.name})

   ## Languages
   ${answers.languages.join(', ')}

   ## Installation
   ${answers.install}

   ## Usage
   ${answers.usage}

   ## Test
   ${answers.link}

   ## Contributions
   ${answers.contribution}

   ## Contact
   * Email: ${answers.contact}
   
   ## ${Title.name}
   ${Title.info}
    `
      };

      