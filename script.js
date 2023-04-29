function changeCard(){
  if (rated == true){
    const ratingState = document.getElementById('rating-state');
  const endState = document.getElementById('thank-you-state');
  endState.style.display = 'block';
  ratingState.style.display = 'none';
  }
}

function toggleButtonColor(event) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    if (button === event.target) {
      button.style.backgroundColor = 'hsl(216, 12%, 54%)';
      button.style.color = 'white';
      let number = button.value;
      let result = document.getElementById('result');
      result.innerHTML = 'You selected '+ number +' out of 5';
    } else {
      button.style.backgroundColor = 'rgba(39, 46, 56, 255)';
      button.style.color = ' ';
    }
  });
  rated = true;
}

const rating = document.getElementById('rating');
var rated = false;

rating.addEventListener('click', (event) => {
  if (rated === false) {
    toggleButtonColor(event);
  }
});



