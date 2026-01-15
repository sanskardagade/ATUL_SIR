import { useState } from "react";
import type {
  ChangeEvent,
  FormEvent
} from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "919960889772"; // 🔴 Replace with your number

    const text = `
New Contact Form Submission 👇

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full bg-[#0e0f14]">

      {/* ================= HERO ================= */}
      <section className="w-full pt-20 md:pt-16">
        <div className="relative max-w-7xl mx-auto px-4 md:px-14 min-h-[80vh] overflow-hidden">

          {/* DESKTOP BACKGROUND */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-[55%] bg-[#1c1f2b]" />

          {/* IMAGE */}
          <div className="relative md:absolute inset-y-0 right-0 w-full md:w-[45%] h-64 md:h-full">
            <img
              src="/atulsir-contact.jpeg"
              alt="Dr. Atul Kathole"
              className="h-full w-full object-cover"
            />
          </div>

          {/* CARD */}
          <div className="relative z-10 flex items-center min-h-[80vh]">
            <div className="bg-white p-8 md:p-12 max-w-lg shadow-xl mx-auto md:ml-20 mt-8 md:mt-0">

              <p className="text-xs tracking-widest text-gray-500 mb-4">
                KEEP IN TOUCH
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
                Contact Me
              </h1>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Please use the contact form below for academic, research,
                or professional correspondence.
              </p>

              <a
                href="#form"
                className="text-sm font-medium text-[#FFBF00] hover:underline"
              >
                Sign up to my mailing list →
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section
        id="form"
        className="max-w-6xl mx-auto px-4 md:px-6 py-20 bg-white"
      >

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
        >

          <div>
            <label className="text-sm font-medium block mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="invisible block mb-1">Last</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-1">
              Subject
            </label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium block mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-[#FFBF00] hover:bg-[#e6ac00] text-black px-6 py-2 text-sm transition w-full md:w-auto"
            >
              Send 
            </button>
          </div>

        </form>
      </section>

    </div>
  );
};

export default Contact;
