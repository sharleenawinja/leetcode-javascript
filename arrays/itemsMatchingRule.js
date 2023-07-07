// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"].
// Note that the item ["computer","silver","phone"] does not match.

const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0;
  let index = 0;
  switch (ruleKey) {
    case "type":
      index = 0;
      break;
    case "color":
      index = 1;
      break;
    case "name":
      index = 2;
      break;
    default:
      index = 0;
  }
  for (const item of items) {
    if (item[index] === ruleValue) {
      count++;
    }
  }
  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);

// second approach using indexof instead of switch case
const itemsMatchingRule = (items, ruleKey, ruleValue) => {
  let count = 0;
  let index = ["type", "color", "name"].indexOf(ruleKey);
  items.forEach((item) => {
    item[index] === ruleValue ? count++ : count;
  });
  return count;
};

console.log(
  itemsMatchingRule(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  itemsMatchingRule(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);

// third approach using filter
const itemsMatching = (items, ruleKey, ruleValue) => {
  let index = ["type", "color", "name"].indexOf(ruleKey);
  return items.filter((item) => item[index] === ruleValue).length;
};
console.log(
  itemsMatching(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  itemsMatching(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);

// fourth approach
function countingMatches(items, ruleKey, ruleValue) {
  let index = 0;
  if (ruleKey == "color") index++;
  if (ruleKey == "name") index = 2;
  let count = 0;
  for (let i of items) {
    if (i[index] == ruleValue) count++;
  }
  return count;
}

console.log(
  countingMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
console.log(
  countingMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
