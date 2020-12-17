updateVisitorCount();

function updateVisitorCount() {
    fetch('https://vlf8o8njw0.execute-api.ap-southeast-2.amazonaws.com/VisitorCounter').then (response => response.json()).then (data => document.getElementById('visitorCount').textContent = data)
          
}