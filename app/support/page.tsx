export const metadata = {
  title: "Support — Nocta",
  description: "Get help with Nocta.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-white/90">
      <h1 className="text-3xl font-serif text-white">Support</h1>
      <p className="mt-4">Need help? Reach us at <a className="underline text-white" href="mailto:support@nocta.app">support@nocta.app</a>.</p>
      <ul className="mt-8 list-disc space-y-2 pl-5">
        <li>Report issues or bugs</li>
        <li>Request features or cities</li>
        <li>Account and privacy questions</li>
      </ul>
    </main>
  );
}




