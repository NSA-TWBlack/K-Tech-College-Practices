document.getElementById('submitBtn').addEventListener('click', (e) => {
    const form = document.getElementById('registrationForm');


    e.preventDefault(); // Ngăn chặn gửi form mặc định

    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');

    // Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value || fullName.value.length < 3) {
        fullName.classList.add('error');
        fullName.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailRegex.test(email.value)) {
        email.classList.add('error');
        email.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Password
    const password = document.getElementById('password');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password.value || !passwordRegex.test(password.value)) {
        password.classList.add('error');
        password.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword');
    if (!confirmPassword.value || confirmPassword.value !== password.value) {
        confirmPassword.classList.add('error');
        confirmPassword.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Phone Number
    const phone = document.getElementById('phone');
    const phoneRegex = /^\d{10,}$/;
    if (!phone.value || !phoneRegex.test(phone.value)) {
        phone.classList.add('error');
        phone.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Gender
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const genderSelected = [...genderInputs].some(input => input.checked);
    const genderErrorMessage = genderInputs[0].closest('.mb-4').querySelector('.error-message');

    if (!genderSelected) {
        genderInputs.forEach(input => input.classList.add('error'));
        genderErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        genderInputs.forEach(input => input.classList.remove('error'));
        genderErrorMessage.style.display = 'none';
    }



    // Date of Birth
    const dob = document.getElementById('dob');
    const dobDate = new Date(dob.value);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) age--;
    if (!dob.value || age < 18) {
        dob.classList.add('error');
        dob.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Country
    const country = document.getElementById('country');
    if (!country.value) {
        country.classList.add('error');
        country.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    // Hobbies
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const hobbiesGroup = document.querySelector('input[name="hobbies"]').closest('.mb-4');
    const hobbiesErrorMessage = hobbiesGroup.querySelector('.error-message');

    if (hobbies.length === 0) {
        hobbiesErrorMessage.style.display = 'block';
        isValid = false;
    } else {
        hobbiesErrorMessage.style.display = 'none';
    }


    // Profile Picture
    const profilePic = document.getElementById('profilePic');
    if (profilePic.files.length > 0) {
        const file = profilePic.files[0];
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            profilePic.classList.add('error');
            profilePic.nextElementSibling.style.display = 'block';
            isValid = false;
        }
    }

    // Bio
    const bio = document.getElementById('bio');
    if (bio.value.length > 300) {
        bio.classList.add('error');
        bio.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
