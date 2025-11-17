export default function Home() {
  const projects = [
    {
      name: "country-locale-map",
      description: "JavaScript library for mapping countries to locales. Available as an npm package.",
      link: "https://www.npmjs.com/package/country-locale-map",
      status: "active"
    },
    {
      name: "passport-sf-signed-post-request",
      description: "Passport.js strategy for Salesforce signed POST request authentication. Available as an npm package.",
      link: "https://www.npmjs.com/package/passport-sf-signed-post-request",
      status: "active"
    },
    // Add more projects here as needed
  ];

  const githubProjects = [
    {
      name: "country-locale-map",
      description: "JavaScript library for mapping countries to locales.",
      link: "https://github.com/atnmorrison/country-locale-map",
      language: "JavaScript",
      stars: 47,
      forks: 43
    },
    {
      name: "jsoptimizer",
      description: "AppEngine Application for minifying and combining javascript.",
      link: "https://github.com/atnmorrison/jsoptimizer",
      language: "Java"
    },
    {
      name: "webform_to_sf",
      description: "Web form integration with Salesforce.",
      link: "https://github.com/atnmorrison/webform_to_sf",
      language: "PHP"
    },
    {
      name: "aura",
      description: "Aura is a UI framework for developing dynamic web apps for mobile and desktop devices.",
      link: "https://github.com/atnmorrison/aura",
      language: "JavaScript",
      isFork: true
    },
    {
      name: "dataloader",
      description: "Apex data loader for Salesforce.",
      link: "https://github.com/atnmorrison/dataloader",
      language: "AutoIt",
      isFork: true
    },
    {
      name: "ApexDoc",
      description: "A tool to document your Salesforce Apex classes.",
      link: "https://github.com/atnmorrison/ApexDoc",
      language: "Java",
      isFork: true
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Scott Morrison
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light">
            Rocket Man Morrison
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            Developer building innovative solutions and personal projects.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/scott-morrison-932754b/?originalSubdomain=ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/atnmorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Personal Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.status === "active" && (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
          {projects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-8">
              More projects coming soon...
            </p>
          )}
        </section>

        {/* GitHub Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">GitHub Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  {project.isFork && (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                      Fork
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {project.language}
                    </span>
                    {project.stars && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {project.stars}
                      </span>
                    )}
                    {project.forks && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7.707 3.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 5.586V4a1 1 0 10-2 0v1.586L7.707 3.293zM11 15a1 1 0 102 0v-1.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L11 13.414V15z" />
                        </svg>
                        {project.forks}
                      </span>
                    )}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
