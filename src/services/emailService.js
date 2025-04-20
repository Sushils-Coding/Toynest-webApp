import emailjs from "emailjs-com";

// Initialize EmailJS with your user ID
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const sendEmails = async (data) => {
  try {
    // Send email to admin
    const adminResult = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "template_0buew36",
      {
        to_email: "anirud.programming@gmail.com",
        business_name: data.businessName,
        business_type: data.businessType,
        contact_name: data.contactName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        categories: data.categories.join(", "),
        message: data.message,
      }
    );

    // Send confirmation email to seller
    const sellerResult = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "template_tgqrhsk",
      {
        to_email: data.email,
        business_name: data.businessName,
        contact_name: data.contactName,
      }
    );

    if (adminResult.status !== 200 || sellerResult.status !== 200) {
      throw new Error("Email failed to send");
    }

    return { adminResult, sellerResult };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
