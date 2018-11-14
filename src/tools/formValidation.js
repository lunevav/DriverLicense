function validateForm(name, date, category){

  let nameIsValid = false;
  let dateIsValid = true;
  let categoryIsValid = false;

  //-----------------------------------------
  // Category Validation
  //-----------------------------------------

  if (category.length > 0) {
    categoryIsValid = true;
  } else {
    categoryIsValid = false;
  }

  //-----------------------------------------
  //Date validation
  //-----------------------------------------

  const currentDate = new Date();
  date = new Date(date);
  if (date < currentDate) {
    dateIsValid = true;
  } else {
    dateIsValid = false;
  }

  //-----------------------------------------
  //Name Validation
  //-----------------------------------------

  if (/^[a-zA-Z ]{1,20}$/.test(name)) {
    nameIsValid = true;
  } else {
    nameIsValid = false;
  }

  //-----------------------------------------
  //Overall Validation
  //-----------------------------------------
  const isValid = nameIsValid && dateIsValid && categoryIsValid;
  //-----------------------------------------

  return isValid;
}

export default validateForm;