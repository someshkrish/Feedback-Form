document.querySelector(".feed-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let Subject;
  if (document.forms["myform"][2].checked)
    Subject = document.forms["myform"][2].value;
  if (document.forms["myform"][3].checked)
    Subject = document.forms["myform"][3].value;
  else Subject = document.forms["myform"][4].value;

  const details = {
    Name: document.forms["myform"][0].value,
    Email_id: document.forms["myform"][1].value,
    Subject,
    Country: document.forms["myform"][5].value,
    Report_Date_And_Time: document.forms["myform"][6].value,
    Description: document.forms["myform"][7].value,
  };

  alert(
    `Name: ${details.Name}\nEmail_id: ${details.Email_id}\nSubject: ${details.Subject}\nCountry: ${details.Country}\nReport_Date_And_Time: ${details.Report_Date_And_Time}\nDescription: ${details.Description}\n`
  );

  location.reload();
});

function nameValidator() {
  const name_field = document.forms["myform"][0];
  if (name_field.value.length <= 2) {
    name_field.style.cssText = "border-bottom:2px solid red;";
  } else {
    name_field.style.cssText = "border-bottom:2px solid #31db42;";
  }
}

function emailValidator() {
  const email_field = document.forms["myform"][1];
  if (email_field.checkValidity()) {
    email_field.style.cssText = "border-bottom:2px solid #31db42;";
  } else {
    email_field.style.cssText = "border-bottom:2px solid red;";
  }
}

function descriptionValidator() {
  const description_field = document.forms["myform"][7];

  if (description_field.checkValidity()) {
    description_field.style.cssText = "border-bottom:2px solid #31db42;";
  } else {
    description_field.style.cssText = "border-bottom:2px solid red";
  }
}
