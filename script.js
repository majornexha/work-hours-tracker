let startTime;

function startWork() {
    startTime = new Date();
    alert("Work started at: " + startTime.toLocaleTimeString());
}

function endWork() {
    if (!startTime) {
        alert("You haven't started work yet!");
        return;
    }

    const endTime = new Date();
    const duration = ((endTime - startTime) / 1000 / 60).toFixed(2); // in minutes
    document.getElementById("hours").textContent = `${Math.floor(duration / 60)}h ${Math.round(duration % 60)}m`;
    alert("Work session ended. Duration: " + duration + " minutes.");
}
