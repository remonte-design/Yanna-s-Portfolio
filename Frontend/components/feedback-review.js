const status = document.querySelector("#review-status");
const content = document.querySelector("#review-content");
const actions = document.querySelector("#review-actions");
const nameField = document.querySelector("#review-name");
const emailField = document.querySelector("#review-email");
const dateField = document.querySelector("#review-date");
const messageField = document.querySelector("#review-message");
const approveButton = document.querySelector("#approve-feedback");
const rejectButton = document.querySelector("#reject-feedback");

const token = new URLSearchParams(window.location.hash.slice(1)).get("token");
window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);

async function readJsonResponse(response) {
  const body = await response.text();
  let result;
  try {
    result = JSON.parse(body);
  } catch {
    throw new Error(response.ok ? "The review service returned an invalid response." : `Review request failed (HTTP ${response.status}).`);
  }
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    throw new Error("The review service returned an invalid response.");
  }
  if (!response.ok) {
    throw new Error(result.error || `Review request failed (HTTP ${response.status}).`);
  }
  return result;
}

function showError(error) {
  status.textContent = error instanceof Error ? error.message : "The review request failed. Please try again.";
}

async function decide(decision) {
  approveButton.disabled = true;
  rejectButton.disabled = true;
  status.textContent = "Saving your decision…";
  try {
    const response = await fetch("/api/feedback/review/decision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, decision }),
    });
    const result = await readJsonResponse(response);
    actions.hidden = true;
    status.textContent = result.message;
  } catch (error) {
    showError(error);
    approveButton.disabled = false;
    rejectButton.disabled = false;
  }
}

approveButton.addEventListener("click", () => decide("approve"));
rejectButton.addEventListener("click", () => decide("reject"));

if (!token || !/^[a-f0-9]{64}$/i.test(token)) {
  status.textContent = "This review link is missing or invalid. Open the private link from the feedback email.";
} else {
  fetch("/api/feedback/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  })
    .then(readJsonResponse)
    .then(({ feedback }) => {
      nameField.textContent = feedback.name;
      emailField.textContent = feedback.email;
      emailField.href = `mailto:${feedback.email}`;
      const received = new Date(feedback.createdAt);
      dateField.textContent = Number.isNaN(received.getTime())
        ? "Date unavailable"
        : received.toLocaleString();
      messageField.textContent = feedback.message;
      content.hidden = false;
      actions.hidden = false;
      status.textContent = "";
    })
    .catch(showError);
}
