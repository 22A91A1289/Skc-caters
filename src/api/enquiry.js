export const submitEnquiry = async (payload) => {
  const apiUrl = import.meta.env.VITE_ENQUIRY_API_URL;

  if (!apiUrl) {
    throw new Error("Enquiry API URL is not configured.");
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.error || "Enquiry submission failed");
  }

  return data;
};
