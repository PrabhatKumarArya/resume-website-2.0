import dotenv from "dotenv";

dotenv.config();

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function verifyBrevo() {
  try {
    const response = await fetch("https://api.brevo.com/v3/account", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const account = await response.json();

    console.log("✅ Brevo API Connected");
    console.log(`📧 Account: ${account.email}`);

    return true;
  } catch (err) {
    console.error("❌ Brevo Connection Failed");
    console.error(err.message);
    return false;
  }
}

export async function sendBrevoEmail(emailData) {
  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = { raw: text };
    }

    if (!response.ok) {
      console.error("❌ Brevo API Error:", result);
      throw new Error(result.message || "Brevo API request failed");
    }

    console.log("✅ Brevo Response:", result);

    return result;
  } catch (error) {
    console.error("❌ sendBrevoEmail Error:", error.message);
    throw error;
  }
}