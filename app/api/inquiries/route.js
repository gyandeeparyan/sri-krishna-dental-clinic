const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d+()\-\s]{7,20}$/;

function normalizeText(value, maxLength) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function validateSubmission(payload) {
  const errors = {};

  if (!payload.fullName || payload.fullName.length < 2) {
    errors.fullName = "Please enter a valid full name.";
  }

  if (!payload.phone || !PHONE_PATTERN.test(payload.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (payload.email && !EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!payload.concern || payload.concern.length < 10) {
    errors.concern = "Please describe the dental concern in a little more detail.";
  }

  return errors;
}

export async function POST(request) {
  let data;

  try {
    data = await request.json();
  } catch {
    return Response.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (normalizeText(data.website, 200)) {
    return Response.json(
      { message: "Submission blocked." },
      { status: 400 }
    );
  }

  const submission = {
    fullName: normalizeText(data.fullName, 80),
    phone: normalizeText(data.phone, 30),
    email: normalizeText(data.email, 120),
    preferredDate: normalizeText(data.preferredDate, 20),
    concern: normalizeText(data.concern, 700),
    submittedAt: new Date().toISOString(),
  };

  const errors = validateSubmission(submission);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      {
        message: "Please correct the highlighted fields and try again.",
        errors,
      },
      { status: 400 }
    );
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const webhookResponse = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        console.error("Lead webhook returned a non-OK response.", {
          status: webhookResponse.status,
        });
      }
    } catch (error) {
      console.error("Lead webhook forwarding failed.", error);
    }
  }

  console.log("SrikRISHNA DENTAL CLINC inquiry received", submission);

  return Response.json({
    message:
      "Thank you. Your inquiry has been received and the clinic can contact you back shortly.",
  });
}