const writeToFile = (fileName, data) => {
    return `
    # ${fileName} 
   ${data}
   ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Contribution](#contribution)
   - [Test](#test)
   - [Contact](#contact)
   ### Installation
   ${data}
   ### Usage
   ${data}
   ### License
   ${data}
   ### Contributions
   ${data}
   ### Test
   ${data}
   ### Contact
   ${data}
    `
      };

      module.exports = writeToFile;