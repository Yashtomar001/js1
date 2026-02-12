const eventList = document.getElementById("eventList");
const noEvents = document.getElementById("noEvents");

// Add Event
function addEvent() {
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;

  if (!name || !date || !category) {
    alert("Please fill all fields");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${name} | ${date} | ${category}`;
  eventList.appendChild(li);

  noEvents.style.display = "none";

  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventCategory").value = "";
}

// Clear Events
function clearEvents() {
  eventList.innerHTML = "";
  noEvents.style.display = "block";
}

// Sample Events
function addSampleEvents() {
  const samples = [
    "AI Workshop | 2026-03-10 | Workshop",
    "Tech Seminar | 2026-03-15 | Seminar",
    "College Hackathon | 2026-04-01 | Hackathon"
  ];

  samples.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e;
    eventList.appendChild(li);
  });

  noEvents.style.display = "none";
}

// DOM Manipulation Demo
document.getElementById("domInput").addEventListener("input", function () {
  document.getElementById("domOutput").textContent = this.value;
});