document.getElementById("processBtn").addEventListener("click", () => {
  const inputText = document.getElementById("jsonInput").value.trim();
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (!inputText) {
    output.innerHTML =
      '<div class="text-danger fw-semibold">Please paste the JSON data first.</div>';
    return;
  }

  let data;
  try {
    data = JSON.parse(inputText);
  } catch (e) {
    output.innerHTML =
      '<div class="text-danger fw-semibold">Invalid JSON format.</div>';
    return;
  }

  const { partnerId, entryId, manifestUrl } = data;
  if (!partnerId || !entryId || !manifestUrl) {
    output.innerHTML =
      '<div class="text-danger fw-semibold">Missing required fields (partnerId, entryId, or manifestUrl).</div>';
    return;
  }

  const flavorMatch = manifestUrl.match(/flavorIds\/([^\/\?]+)/);
  if (!flavorMatch) {
    output.innerHTML =
      '<div class="text-danger fw-semibold">Could not extract video flavors from URL.</div>';
    return;
  }

  const flavorIds = flavorMatch[1].split(",");
  const baseUrl = `https://cfvod.kaltura.com/p/${partnerId}/sp/${partnerId}00/serveFlavor/entryId/${entryId}/v/1/ev/3/flavorId/`;

  const header = document.createElement("div");
  header.className = "fw-bold text-dark mb-2";
  header.textContent = `Detected ${flavorIds.length} video quality option(s):`;
  output.appendChild(header);

  flavorIds.forEach((flavorId, index) => {
    const downloadUrl = `${baseUrl}${flavorId}/name/a.mp4`;

    const btn = document.createElement("button");
    btn.className = "btn btn-success btn-download";
    btn.innerHTML = `Download Video ${index + 1} (${flavorId})`;

    btn.addEventListener("click", async () => {
      btn.disabled = true;
      const spinner = document.createElement("span");
      spinner.className = "spinner-border spinner-border-sm";
      btn.innerHTML = "";
      btn.appendChild(spinner);
      btn.appendChild(document.createTextNode(" Downloading..."));

      try {
        const res = await fetch(downloadUrl);
        if (!res.ok) throw new Error("Failed to fetch video");

        const blob = await res.blob();
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${entryId}_${flavorId}.mp4`;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(a.href);
        a.remove();

        btn.classList.replace("btn-success", "btn-secondary");
        btn.textContent = "Download Complete";
      } catch (err) {
        btn.classList.replace("btn-success", "btn-danger");
        btn.textContent = "Error Downloading";
        console.error(err);
      }
    });

    output.appendChild(btn);
  });
});
