export const metadata = {
  title: "How we use cookies — OPIC",
  description: "Cookies policy for OPIC.",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-7 text-white/90">
      <h1 className="text-3xl font-serif text-white">How we use cookies</h1>
      <p className="mt-4 text-white/80">Last updated: {new Date().toLocaleDateString()}</p>
      <section className="mt-8 space-y-6">
        <p>
          Cookies are small text files stored on your device. We use cookies
          and similar technologies to make OPIC work, to remember your
          preferences, and to understand how the site is used.
        </p>
        <h2 className="text-xl font-semibold text-white">Types of cookies we use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold text-white">Essential:</span>
            Required for core functionality such as security and page
            navigation. The website cannot function properly without these.
          </li>
          <li>
            <span className="font-semibold text-white">Preferences:</span>
            Remember choices such as language or city so we can personalize
            your experience.
          </li>
          <li>
            <span className="font-semibold text-white">Analytics:</span>
            Help us understand how visitors use OPIC so we can improve the
            product. Data is aggregated and not used to identify you.
          </li>
        </ul>
        <h2 className="text-xl font-semibold text-white">Managing cookies</h2>
        <p>
          Most browsers allow you to block or delete cookies in settings. If
          you disable essential cookies, some parts of OPIC may not work
          properly.
        </p>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p>
          Questions about cookies? Contact support@opic-app.com.
        </p>
      </section>
    </main>
  );
}




