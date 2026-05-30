"use server";

export type EnquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const service = formData.get("service") as string;
  const source = formData.get("source") as string;
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // In production: send via email/CRM. For now we log and return success.
  console.log("Enquiry received:", { name, email, phone, service, source, message });

  return { status: "success" };
}
