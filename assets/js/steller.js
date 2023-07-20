/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// $(document).ready(function(){
// 	$(".nav-link").on('click', function(event) {

//     	if (this.hash !== "") {

// 			event.preventDefault();

// 			var hash = this.hash;

// 			$('html, body').animate({
// 				scrollTop: $(hash).offset().top
// 			}, 100, function(){
// 				// window.location.hash = hash;
// 			});
//       	} 
//     });
// });

// Get the modal and close button elements
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];

// Get the button to trigger the modal
const sendMessageBtn = document.getElementById('sendMessageBtn');

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listeners
sendMessageBtn.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});


