let fab1 = document.getElementById('fab1');
let innerFabs = document.getElementsByClassName('inner-fabs')[0];

fab1.addEventListener('click', function () {
  innerFabs.classList.toggle('show');
});

document.addEventListener('click', function (e) {
  switch (e.target.id) {
    case "fab1":
    case "fab2":
    case "fab3":
    case "fab4":
    case "fab5":
    case "fab6":
    case "fab7":
    case "fab8":
    case "fabIcon":
      break;
    default:
      innerFabs.classList.remove('show');
      break;}
});
