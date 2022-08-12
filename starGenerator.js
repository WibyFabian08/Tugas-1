const generateStart = (type, size) => {
  if (size < 3) {
    size = 3;
  }

  switch (type) {
    case 1:
      star1(size);
      break;
    case 2:
      star2(size);
      break;
    case 3:
      star3(size);
      break;
    case 4:
      star4(size);
      break;
    case 5:
      star5(size);
      break;
    case 6:
      star6(size);
      break;
    case 7:
      star7(size);
      break;
    case 8:
      star8(size);
      break;
    case 9:
      star9(size);
      break;
    default:
      break;
  }
};

const star1 = (size) => {
  let string = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
};

const star2 = (size) => {
  let string = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
};

const star3 = (size) => {
  let string = "";
  for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      string += "*";
    }
    string += "\n";
  }

  console.log(string);
};

const star4 = (size) => {
  let string = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (j % 2 != 0) {
        if (i % 2 == 0) {
          string += " ";
        } else {
          string += "*";
        }
      } else {
        if (i % 2 == 0) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }

    string += "\n";
  }

  console.log(string);
};

const star5 = (size) => {
  let string = "";
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * (size - i) - 1; j++) {
      string += "*";
    }

    string += "\n";
  }

  console.log(string);
};

const star6 = (size) => {
  let string = "";
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j < size - i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      string += "*";
    }

    string += "\n";
  }

  console.log(string);
};

const star7 = (size) => {
  let string = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * (size - i) - 1; j++) {
      string += "*";
    }

    string += "\n";
  }

  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size - i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      string += "*";
    }

    string += "\n";
  }

  console.log(string);
};

const star8 = (size) => {
  let string = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0) {
        string += "*";
      } else if (i == size - 1) {
        string += "*";
      } else {
        if (j == 0) {
          string += "*";
        } else if (j == size - 1) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }

  console.log(string);
};

const star9 = (size) => {
  let string = "";
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size - i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      if (i == 1 || i == size) {
        string += "*";
      } else {
        if (j === 0 || j === 2 * i - 2) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }

    string += "\n";
  }

  console.log(string);
};

generateStart(1, 2);
generateStart(2, 2);
generateStart(3, 2);
generateStart(4, 2);
generateStart(5, 2);
generateStart(6, 2);
generateStart(7, 2);
generateStart(8, 2);
generateStart(9, 2);
