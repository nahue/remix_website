import classnames from 'classnames'

{
  /* <script>
    export let segment;
    let isNavOpen = false;

    function handleClick(event) {
        isNavOpen = !isNavOpen;
    }
</script> */
}

const Nav = () => (
  <nav
    className="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6"
  >
    <div className="flex items-center flex-1">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center -mr-2 md:hidden">
          <button
            // on:click={e => handleClick(e)}
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <a
          href="/"
          // class:text-gray-900={segment === 'home'}
          // aria-current={segment === 'home' ? 'page' : undefined}
          className="font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          Home
        </a>
        <a
          href="resume"
          // aria-current={segment === 'resume' ? 'page' : undefined}
          className="ml-10 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
        >
          Resume
        </a>
        {/* <!--<a
                href="blog"
                aria-current={segment === 'blog' ? 'page' : undefined}
                className="ml-10 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
                Blog
            </a>--> */}
      </div>
    </div>
    {/* <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
    <div
      className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
      // class:opacity-0={!isNavOpen}
      // class:scale-75={!isNavOpen}
    >
      <div className="rounded-lg shadow-md">
        <div className="overflow-hidden bg-white rounded-lg shadow-xs">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <img
                className="w-auto h-8"
                src="/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <button
                // on:click={e => handleClick(e)}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/resume"
              className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
            >
              Resume
            </a>
            {/* <!--<a
                        rel=prefetch
                        href="/blog"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
                        Blog
                    </a>--> */}
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
