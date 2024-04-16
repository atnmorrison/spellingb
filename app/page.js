export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
  
        <div className="container mx-auto">
          <h1>Spelling Test Tutor</h1>

          <div>
            This a free and ad-free app that allows users to create a spelling test and practice it. A test is created giving the test and adding the words that will 
            be in the test. Once the test is saved you can start the test. The words are read out and the user has to enter the correct spelling. Incorrectly spelled 
            words will highlight where the errors are and the user can attempt to spell the word again. If the word is spelled incorrectly 3 times the correct spelling 
            will be shown to the user and the user can move on to the next word. The goal is to get 100% on the test.
          </div>

        </div>
      </main>
    );
  }
