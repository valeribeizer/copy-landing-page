const emptyError = "The field cannot be empty";
const phoneTextError = "At least 9 digits";

const phoneValidation = (value) => {
  const validation = new RegExp(/^\d{1}-\d{4}-\d{2}-\d{2}$/);
  return validation.test(value) && value.length <= 12;
};

export const validation = (inputs) => {
  const errors = {};
  for (const input in inputs) {
    const value = inputs[input];
    let error = "";

    switch (input) {
      case "phone":
        if (value === "") {
          error = emptyError;
        } else if (!phoneValidation(value)) {
          error = phoneTextError;
        }
        break;
      default:
        // if (value === "") {
        //   error = emptyError;
        // }
        break;
    }
    if (error !== "") {
      errors[input] = error;
    }
  }
  return errors;
};
