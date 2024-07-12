import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-sm py-4">
        <nav className="top-0 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <a className="flex-none text-xl font-semibold dark:text-white" href="#">Universe Profile</a>
          <div id="navbar-image-and-text-2" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-medium text-white" href="#" aria-current="page">Home</a>
              <a className="font-medium text-white hover:border-b-white hover:border-b-2" href="#">Account</a>
              <a className="font-medium text-white hover:border-b-white hover:border-b-2" href="#">Work</a>
              <a className="font-medium text-white hover:border-b-white hover:border-b-2" href="#">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-10">
        <section className="py-8">
          <div className="max-w-[85rem] w-full mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to Universe Profile</h1>
            <p className="mb-6">
              This is the main content of the page. You can include text, images, or any other components you need.
            </p>
            <Image 
              src="/path/to/your/image.jpg" 
              alt="Sample Image" 
              width={600} 
              height={400} 
              className="rounded-lg"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-[85rem] w-full mx-auto px-4">
          <p className="text-center">
            &copy; 2024 Universe Profile. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}