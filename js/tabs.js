function switchToPage(pageName) {
    document.getElementById('contentFrame').src = `https://www.mysite.example/${pageName}`;
}

// Function to extract the current page name from the URL
function getCurrentPage() {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
}

// Dynamic page switch based on the current URL
switchToPage(getCurrentPage());