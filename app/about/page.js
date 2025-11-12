import AdSlot from "@/components/AdSlot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">About Spelling Test Tutor</h1>
          <p className="leading-relaxed">
            Spelling Test Tutor started as a weekend project to help students
            practice their weekly word lists without needing a second person to
            read each word aloud. Today it powers classrooms, homeschool
            schedules, and at-home study routines around the world.
          </p>
        </div>

        <AdSlot adSlot="2468135790" className="pt-2" />

        <section className="space-y-3 leading-relaxed">
          <p>
            Feedback from educators and parents drives our roadmap. Every new
            feature is designed to make practice more engaging while keeping the
            workflow simple for teachers and caregivers.
          </p>
          <p>
            Sponsored placements help us cover hosting costs and invest in new
            learning tools. We aim to keep advertising unobtrusive while
            maintaining a sustainable platform.
          </p>
        </section>
      </div>
    </main>
  );
}
