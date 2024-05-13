function confirmDelete() {
    // Display confirmation dialog
    const result = confirm('Are you sure you want to delete your account?');

    // Check user's choice
    if (result) {
        // User clicked OK
        alert('Account deleted successfully.');
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        // User clicked Cancel or closed the dialog
        // Do nothing or any other action you want
    }
}
