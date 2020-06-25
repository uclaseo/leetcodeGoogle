/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let count = 0;
  const map = {};

  for (let i = 0; i < emails.length; i += 1) {
    const fullName = emails[i].split('@');
    const localName = fullName[0];
    const domainName = fullName[1];
    let uniqueLocalName = '';
    for (let j = 0; j < localName.length; j += 1) {
      if (localName[j] === '+') {
        break;
      }
      if (localName[j] === '.') {
        continue;
      }
      uniqueLocalName += localName[j];
    }
    const uniqueFullName = `${uniqueLocalName}@${domainName}`;
    if (!map[uniqueFullName]) {
      map[uniqueFullName] = true;
      count += 1;
    }
  }
  return count;
};

// time complexity: O(N) because email length is <= 100 and emails <= 100
// space complexity: O(N)

const array = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(array));