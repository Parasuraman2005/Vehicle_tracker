// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addReminderBtn = document.querySelector('.add-reminder-btn');
    if (addReminderBtn) {
        addReminderBtn.addEventListener('click', function() {
            alert('Add Reminder functionality will be implemented here.');
        });
    }
    // You can add more JavaScript for interactivity here
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addNewGroupBtn = document.querySelector('.add-new-group-btn');
    if (addNewGroupBtn) {
        addNewGroupBtn.addEventListener('click', function() {
            alert('Add New Group functionality will be implemented here.');
            // In a real application, you would show a modal or navigate to a form.
        });
    }

    const dashboardLink = document.querySelector('.main-nav .nav-item a[href="dashboard.html"]');
    if (dashboardLink) {
        dashboardLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        });
    }

    const previousBtn = document.querySelector('.pagination .previous-btn');
    if (previousBtn) {
        previousBtn.addEventListener('click', function() {
            alert('Previous page functionality will be implemented here.');
        });
    }

    const nextBtn = document.querySelector('.pagination .next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            alert('Next page functionality will be implemented here.');
        });
    }

    // You can add more JavaScript for table interactions or other dynamic features
});
