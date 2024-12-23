// Toggle between venue and online location
function toggleLocation() {
    const locationField = document.getElementById('location');
    const locationLabel = document.getElementById('locationLabel');
    const isOnline = document.getElementById('online').checked;
  
    if (isOnline) {
      locationField.style.display = 'none';
      locationLabel.style.display = 'none';
    } else {
      locationField.style.display = 'block';
      locationLabel.style.display = 'block';
    }
  }
  
  // Form validation
  function validateForm() {
    let isValid = true;
  
    // Fetching all form fields
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const eventType = document.getElementById('eventType');
    const confirmDetails = document.getElementById('confirmDetails');
    const startDate = document.getElementById('startDate').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const errors = document.querySelectorAll('.error-message');
  
    // Clear all error messages
    errors.forEach(error => error.style.display = 'none');
  
    // Simple validation
    if (!fullName.value) {
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    }
    if (!email.value) {
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
    if (!phone.value) {
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }
    if (!eventType.value) {
      document.getElementById('eventTypeError').style.display = 'block';
      isValid = false;
    }
    if (!confirmDetails.checked) {
      alert('Please confirm that the event details are correct.');
      isValid = false;
    }
  
    // Ensure that start time is before end time
    if (startTime >= endTime) {
      alert("End time must be after the start time.");
      isValid = false;
    }
  
    // If form is valid, show the confirmation modal
    if (isValid) {
      showModal();
    }
  }
  
  // Modal handling
  const modal = document.getElementById('confirmationModal');
  const span = document.getElementsByClassName('close')[0];
  
  function showModal() {
    modal.style.display = 'block';
  }
  
  span.onclick = function () {
    modal.style.display = 'none';
  }
  
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  