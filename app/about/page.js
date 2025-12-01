import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "About",
  description: "About Scott Morrison (Rocket Man Morrison) and his projects.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">About Scott Morrison</h1>
          <p className="leading-relaxed">
            I&apos;m a developer based in Edmonton, Alberta, building innovative solutions and personal projects. 
            I&apos;m passionate about creating useful tools and libraries that solve real-world problems.
          </p>
        </div>

        <AdSlot adSlot="2468135790" className="pt-2" />

        <section className="space-y-3 leading-relaxed">
          <p>
            My work spans multiple technologies and platforms, with a focus on JavaScript, Node.js, and Salesforce development. 
            I&apos;ve created and contributed to various open-source projects, including npm packages and GitHub repositories that 
            are used by developers worldwide.
          </p>
          <p>
            I&apos;m an active member of the Salesforce Trailblazer community and enjoy sharing knowledge and collaborating 
            with other developers. When I&apos;m not coding, I&apos;m exploring new technologies and working on side projects 
            that push the boundaries of what&apos;s possible.
          </p>
          <p>
            Feel free to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/scott-morrison-932754b/?originalSubdomain=ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            , check out my code on{" "}
            <a
              href="https://github.com/atnmorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            , or view my{" "}
            <a
              href="https://salesforce.com/trailblazer/qlikmorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Trailblazer profile
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
