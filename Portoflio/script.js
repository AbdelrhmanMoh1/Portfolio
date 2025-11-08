document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');
    const button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the page from refreshing

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const message = form.elements['message'].value;

        // Simple client-side validation
        if (!name || !email || !message) {
            statusMessage.style.display = 'block';
            statusMessage.style.borderColor = '#ef4444'; /* Red for error */
            statusMessage.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            statusMessage.innerHTML = 'ERROR: All fields are required. Transmission failed.';
            return;
        }

        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:abodyjamal12@gmail.com?subject=${subject}&body=${body}`;

        // Attempt to open the user's email client
        window.location.href = mailtoLink;

        // Display success message and clear form after a short delay
        statusMessage.style.display = 'block';
        statusMessage.style.borderColor = 'var(--accent-color)';
        statusMessage.style.backgroundColor = 'rgba(0, 255, 102, 0.1)';
        statusMessage.innerHTML = 'SUCCESS: Transmission executed. Preparing email client...';
        
        // Clear the form fields for a clean look
        form.reset();
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    });
});