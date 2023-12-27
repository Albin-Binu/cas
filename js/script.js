/*pager-error.html*/

document.addEventListener('DOMContentLoaded', function() {
    // description text
    const description = "Oops! The page you are looking for might be in another universe. Meanwhile, enjoy this intergalactic 404 experience!";
    document.getElementById('description').innerText = description;
  
    // Get device IP address using a third-party service (replace with your own)
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        document.getElementById('ip-address').innerText = `Your IP Address: ${ipAddress}`;
      })
      .catch(error => console.error('Error fetching IP address:', error));
  
    // Get web browser details
    const browserDetails = getBrowserDetails();
    document.getElementById('browser-details').innerText = `Browser: ${browserDetails}`;
  });
  
  // Function to get browser details
    function getBrowserDetails() {
  const userAgent = navigator.userAgent;
    let browserDetails = 'Unknown';
  
    if (userAgent.indexOf('Chrome') !== -1) browserDetails = 'Google Chrome';
    else if (userAgent.indexOf('Firefox') !== -1) browserDetails = 'Mozilla Firefox';
    else if (userAgent.indexOf('Safari') !== -1) browserDetails = 'Apple Safari';
    else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1) browserDetails = 'Internet Explorer';
    else if (userAgent.indexOf('Edge') !== -1) browserDetails = 'Microsoft Edge';
  
    return browserDetails;
  }
  
