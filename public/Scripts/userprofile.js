function populateProfileDetails(profileData) {
    const profileDetailsDiv = document.getElementById('profileDetails');
    profileDetailsDiv.innerHTML = '<h2>Profile Details</h2>';
    for (const key in profileData) {
        if (Object.hasOwnProperty.call(profileData, key)) {
            const detail = document.createElement('div');
            detail.innerHTML = `<strong>${key}:</strong> ${profileData[key]}`;
            profileDetailsDiv.appendChild(detail);
        }
    }
}

// Event listener for profile link click
document.getElementById('profileLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const profileDetailsDiv = document.getElementById('profileDetails');
    profileDetailsDiv.style.display = 'block';
    var profileData = JSON.parse(localStorage.getItem('user'))
    const keysToRemove = ["Password"];
    // if (profileData.hasOwnProperty("Password")) removeUnnecessaryKeys(profileData, keysToRemove);
    populateProfileDetails(profileData);
});

function removeUnnecessaryKeys(data, keysToRemove) {
    data.forEach(obj => {
        keysToRemove.forEach(key => {
            delete obj[key];
        });
    });
}
