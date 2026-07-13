import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: "", text: "" });

    emailjs
      .sendForm(
        "service_yybn8dm",
        "template_ege8ei8",
        form.current,
        "CEEi8pH8xCiZTCDr3"
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage({ type: "success", text: "Message sent successfully! 🚀" });
          form.current.reset();
          setTimeout(() => setStatusMessage({ type: "", text: "" }), 5000);
        },
        () => {
          setIsSending(false);
          setStatusMessage({ type: "error", text: "Something went wrong. Please try again." });
        }
      );
  };

  return (
    <section
      id="Contact me"
      className="relative w-full overflow-hidden bg-slate-950 py-20 lg:py-28 text-white"
    >
      {/* Ambient Lighting Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px] animate-[contact-drift-1_25s_infinite_ease-in-out]" />
        <div className="absolute top-10 right-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-[contact-drift-2_20s_infinite_ease-in-out]" />
      </div>

      <style>{`
        @keyframes contact-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -20px) scale(1.1); }
        }
        @keyframes contact-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 40px) scale(0.95); }
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 z-10 flex flex-col gap-12 items-center">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight">
            CONTACT ME
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base md:text-lg font-medium">
            Let's build something amazing together. Drop me a message!
          </p>
        </div>

        {/* Modern Contact Card Form Container */}
        <div className="w-full max-w-xl p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/20 transition-all duration-300 hover:border-white/20">
          
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            {/* Input Row Grid for Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold tracking-wider text-gray-400 uppercase ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 p-3 rounded-xl outline-none text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold tracking-wider text-gray-400 uppercase ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 p-3 rounded-xl outline-none text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-semibold tracking-wider text-gray-400 uppercase ml-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Project Collaboration Opportunity"
                required
                className="w-full bg-white/[0.03] border border-white/10 p-3 rounded-xl outline-none text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold tracking-wider text-gray-400 uppercase ml-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Tell me about your project goals..."
                required
                className="w-full bg-white/[0.03] border border-white/10 p-3 rounded-xl outline-none text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Inline Status Alerts */}
            {statusMessage.text && (
              <div
                className={`p-3 rounded-xl text-center text-sm font-semibold tracking-wide border transition-all duration-300 ${
                  statusMessage.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            {/* Redesigned Premium CTA Button */}
            <button
              type="submit"
              disabled={isSending}
              className={`relative overflow-hidden w-full font-bold rounded-xl py-3.5 mt-2 transition-all duration-300 flex items-center justify-center text-sm sm:text-base tracking-wide ${
                isSending
                  ? "bg-purple-600/50 text-purple-200 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-95 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transform hover:-translate-y-0.5 cursor-pointer"
              }`}
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;