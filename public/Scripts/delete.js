function confirmDelete() {
    const result = confirm('Are you sure you want to delete your account?');
    if (result) {
        localStorage.removeItem('user')
        alert('Account deleted successfully.');
        window.location.href = 'index.html';
    } else {
        // User clicked Cancel or closed the dialog
        // Do nothing or any other action you want
    }
}
