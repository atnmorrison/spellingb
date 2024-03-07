import Image from "next/image";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
  
        <div className="container mx-auto">
          <h1>Privacy Policy</h1>
  
          <div>
              This privacy policy applies to the Spelling B android google play app. The app does not collect or store personal data.
          </div>
          <div>
              If you installed this application from Google Play, then Google Play does collect some personal data. Please see the privacy policy for Google Play Services here: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>          
          </div>
          <div>
            Please send any questions or comments to <a href="mailto:scott@morrisonlive.ca">scott@morrisonlive.ca</a>
          </div>
        </div>
      </main>
    );
}