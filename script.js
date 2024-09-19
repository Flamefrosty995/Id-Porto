//Pake AI//

document.getElementById("backBtn").addEventListener("click", function() {
    // Simulate going back (replace with desired action)
    window.history.back(); // Or, you can add any other function here.
  });
  
  document.getElementById("toggleOptions").addEventListener("click", function() {
    const optionsList = document.getElementById("optionsList");
    if (optionsList.style.display === "block") {
      optionsList.style.display = "none";
    } else {
      optionsList.style.display = "block";
    }
  });
  
  // Close options when clicking outside
  document.addEventListener("click", function(event) {
    const options = document.getElementById("moreOptions");
    const optionsList = document.getElementById("optionsList");
    if (!options.contains(event.target)) {
      optionsList.style.display = "none";
    }
  });
  
  const subscribeBtn = document.getElementById('subscribe-btn');

  subscribeBtn.addEventListener('click', () => {
    subscribeBtn.style.backgroundColor = 'blue';
    subscribeBtn.style.color = 'white'; // assuming you want white text on blue background
    subscribeBtn.textContent = 'Subscribed';
  });

  const messageBtn = document.getElementById('message-btn');
const messageBox = document.getElementById('messageBox');

messageBtn.addEventListener('click', () => {
  messageBox.style.display = 'block'; /* show the message box */
});

// Add an event listener to close the message box when clicking outside
document.addEventListener('click', (e) => {
  if (!messageBox.contains(e.target) && e.target !== messageBtn) {
    messageBox.style.display = 'none'; /* hide the message box */
  }
});