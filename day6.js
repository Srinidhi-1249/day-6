function groupSeats(seatingArrangement, n) {
    // Function to check if the window of size 'n' is available in the row
    function isWindowAvailable(row) {
      let consecutiveEmptySeats = 0;
      for (let seat of row) {
        if (seat === 0) {
          consecutiveEmptySeats++;
          if (consecutiveEmptySeats >= n) {
            return true;
          }
        } else {
          consecutiveEmptySeats = 0;
        }
      }
      return false;
    }
  
    let count = 0;
    for (let row of seatingArrangement) {
      if (isWindowAvailable(row)) {
        count++;
      }
    }
    return count;
  }
  
  // Test cases
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ], 2)); // Output: 3
  
  console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ], 4)); // Output: 2
  