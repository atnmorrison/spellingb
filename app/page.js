import AdSlot from "@/components/AdSlot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Spelling Test Tutor</h1>
          <p className="text-gray-600">
            Build, practice, and master your personalized spelling lists from
            any device.
          </p>
        </div>

        <AdSlot adSlot="1234567890" />

        <section className="space-y-3 leading-relaxed">
          <p>
            Create a spelling test, add the words you want to study, and work
            through each list at your own pace. Every attempt is read aloud so
            students can focus on spelling, not typing.
          </p>
          <p>
            When a word is misspelled, the incorrect letters are highlighted for
            quick review. After three attempts, we reveal the correct spelling
            so learners can move on confidently.
          </p>
          <p>
            Advertising helps keep the site online while we continue improving
            the practice tools that families and classrooms rely on.
          </p>
        </section>

        <AdSlot adSlot="9876543210" className="pt-4" />
      </div>
    </main>
  );
}
