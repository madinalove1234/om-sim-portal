// Phone validation function
function validatePhoneNumber(phone) {
  // Remove spaces
  phone = phone.replace(/\s+/g, '');

  // Rule 1: Must start with +968 (Omantel Oman)
  if (!phone.startsWith("+968")) {
    return false;
  }

  // Rule 2: Must be exactly 12 characters (+968 + 8 digits)
  if (phone.length !== 12) {
    return false;
  }

  // Rule 3: First digit after +968 must be 8 or 9
  const secondDigit = phone[4];

  if (secondDigit !== "8" && secondDigit !== "9") {
    return false;
  }

  return true;
}

// Test Suite
console.log("=== Testing Phone Validation ===\n");

// VALID test cases
console.log("VALID CASES:");
console.log("Test 1:", validatePhoneNumber("+968 9123 4567")); // true
console.log("Test 2:", validatePhoneNumber("+968 8765 4321")); // true
console.log("Test 3:", validatePhoneNumber("+968 91234567"));  // true

// INVALID test cases
console.log("\nINVALID CASES:");
console.log("Test 4:", validatePhoneNumber("+971 5123 4567")); // false (UAE number)
console.log("Test 5:", validatePhoneNumber("+968 123 4567"));  // false (too short)
console.log("Test 6:", validatePhoneNumber("9123 4567"));      // false (no country code)
console.log("Test 7:", validatePhoneNumber("+968 7123 4567")); // false (starts with 7)
console.log("Test 8:", validatePhoneNumber("+968 91234567890")); // false (too long)

console.log("\n=== Tests Complete ===");