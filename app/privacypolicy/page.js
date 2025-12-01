import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Scott Morrison's portfolio and projects.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-6 leading-relaxed">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                This privacy policy applies to this portfolio website. We are committed to protecting your privacy 
                and do not collect or store personal data on our servers.
              </p>
            </div>

            <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <p>
              This website does not collect personal information from visitors. We do not use forms, 
              registration systems, or any other means to collect personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
            <p>
              This website uses Google AdSense to display advertisements. Google may use cookies or other 
              storage identifiers to serve personalized or non-personalized ads on this site in accordance 
              with their{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                advertising policies
              </a>
              . You can learn more about how Google uses data by visiting{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p>
              This website may use cookies through Google AdSense for advertising purposes. You can control 
              cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">External Links</h2>
            <p>
              This website contains links to external sites (such as GitHub, LinkedIn, npm, etc.). We are 
              not responsible for the privacy practices of these external sites. We encourage you to review 
              the privacy policies of any external sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a
                href="mailto:atnmorrison@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                atnmorrison@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
          </div>
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-20">
              <AdSlot adSlot="1357924680" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}