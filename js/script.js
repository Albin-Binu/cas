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

  //last update (index.html)
  document.addEventListener('DOMContentLoaded', function () {
    var lastUpdatedElement = document.getElementById('last-updated');
    var lastUpdatedDate = new Date(document.lastModified);

    lastUpdatedElement.textContent = 'Last updated: ' + formatDate(lastUpdatedDate);
  });

  function formatDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  // clock (index.html)
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Ensure two-digit format
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial call to display the clock immediately
  updateClock();


  //popup
  
  function showPopup() {
    // Get the user's IP address from the ipify API
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            var ipAddress = data.ip || 'Not available';
            var browser = navigator.userAgent;
            var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var os = navigator.platform;

            // Display information in the popup
            document.getElementById('ipAddress').innerText = ipAddress;
            document.getElementById('browser').innerText = browser;
            document.getElementById('timezone').innerText = timezone;
            document.getElementById('os').innerText = os;

            // Show the popup
            document.getElementById('popup').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
}

function hidePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
}
