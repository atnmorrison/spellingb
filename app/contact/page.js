import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Contact",
  description: "Contact information for Scott Morrison (Rocket Man Morrison).",
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto max-w-2xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            Get in touch with us for questions, feedback, or support.
          </p>
        </div>

        <AdSlot adSlot="2468135790" className="pt-2" />

        <section className="space-y-4 leading-relaxed">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Email</h2>
            <p className="mb-2">
              For general inquiries, support, or business matters, please contact us at:
            </p>
            <a
              href="mailto:atnmorrison@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              atnmorrison@gmail.com
            </a>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Response Time</h2>
            <p>
              We aim to respond to all inquiries within 2-3 business days. For urgent matters, please indicate "URGENT" in your subject line.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Other Ways to Connect</h2>
            <div className="space-y-2">
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/scott-morrison-932754b/?originalSubdomain=ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/atnmorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
              </p>
              <p>
                <strong>Trailblazer:</strong>{" "}
                <a
                  href="https://salesforce.com/trailblazer/qlikmorrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Trailblazer Profile
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

