export default function ContactForm() {
  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-surface border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:border-purple-500 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-surface border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:border-purple-500 w-full"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="bg-surface border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:border-purple-500 w-full"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="bg-surface border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:border-purple-500 w-full resize-none"
      />
      <button
        type="submit"
        className="w-full bg-gradient-primary text-white font-bold py-3 rounded-md hover:opacity-90 transition flex justify-center items-center gap-2"
      >
        Send Message ↗
      </button>
    </form>
  );
}
