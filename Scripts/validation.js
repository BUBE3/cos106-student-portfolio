document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Grab input field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // 1. Validate that no field is empty
    if(!name || !email || !phone || !message) {
        e.preventDefault(); // Stop form submission
        alert('Validation Exception: All input parameter fields are required.');
        return;
    }

    // 2. Validate standard email string format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        e.preventDefault(); // Stop form submission
        alert('Validation Exception: Invalid structure format detected on email string.');
        return;
    }

    // 3. Validate that phone number contains digits only
    const phoneRegex = /^[0-9]+$/;
    if(!phoneRegex.test(phone)) {
        e.preventDefault(); // Stop form submission
        alert('Validation Exception: Numeric phone input payload must contain digits only.');
        return;
    }

    // System clearance validation passed; form transmits naturally to endpoint email trigger
    alert('System Confirmation: Input metrics successfully verified! Transmitting payload to inbox...');
});
