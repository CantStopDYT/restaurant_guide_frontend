export function validateName(value) {
  let error;
  if (!value) {
    error = "The name of the business is required";
  } else if (value.length <= 3) {
    error = "The name should be more than 3 character long";
  }
  return error;
}

export function validateUrl(value) {
  let error;
  let validUrl = require("valid-url");

  if (!value) {
    error = "The link to the website is required";
  } else if (!validUrl.isWebUri(value)) {
    error = "This is not a valid website";
  }
  return error;
}

export function validateRequired(value) {
  let error;
  if (!value) {
    error = "This field is required";
  }
  return error;
}
