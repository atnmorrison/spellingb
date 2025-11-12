import AdSlot from "@/components/AdSlot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto space-y-6 leading-relaxed">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">Privacy Policy</h1>
          <p>
            This privacy policy applies to the Spelling Test Tutor website and
            the Google Play application. We do not collect or store personal
            data on our servers.
          </p>
        </div>

        <AdSlot adSlot="1357924680" className="pt-2" />

        <section className="space-y-3">
          <p>
            If you installed the mobile application through Google Play, please
            review the Google Play Services privacy policy here:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 underline"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>
          <p>
            Google may use cookies or other storage identifiers to serve
            personalized or non-personalized ads on this site in accordance with
            their{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-blue-600 underline"
            >
              advertising policies
            </a>
            .
          </p>
          <p>
            Direct any privacy questions to{" "}
            <a
              href="mailto:atnmorrison@gmail.com"
              className="text-blue-600 underline"
            >
              atnmorrison@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}