fetch('https://jsonplaceholder.typicode.com/users/1').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  var pas = data[];
  console.log(pas[i]);
}).catch(err => {
  // Do something for an error here
});
