export default function Newsletter() {
  return (
    <section className="container px-4 py-12 lg:py-20 flex-auto flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
        <h2 className="text-4xl lg:text-5xl font-serif mb-5 text-center">Stay in the loop</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Occasional updates on AI product engineering, experiments, and building things worth shipping.
          <br />
          Good vibes. No spam.
        </p>

        <form
          action="https://buttondown.com/api/emails/embed-subscribe/mttwhlly"
          method="post"
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4FC52] focus:border-transparent text-lg"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#D4FC52] rounded-lg cursor-pointer font-mono text-lg font-medium shadow-sm shadow-[#D4FC52]/20 hover:shadow-lg hover:shadow-[#D4FC52]/40 transition-all duration-700 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          <a
            href="https://buttondown.com/refer/mttwhlly"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            Powered by Buttondown
          </a>
        </p>
      </div>
    </section>
  );
}
