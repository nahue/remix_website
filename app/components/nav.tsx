import classnames from 'classnames';
import { useLocation } from 'remix';

{
    /* <script>
    export let segment;
    let isNavOpen = false;

    function handleClick(event) {
        isNavOpen = !isNavOpen;
    }
</script> */
}

const Nav = () => {
    let location = useLocation();
    return (
        <nav className='relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6'>
            <div className='flex items-center justify-center flex-1 md:justify-start'>
                <div className='grid grid-cols-2 gap-4'>
                    <a
                        href='/'
                        // class:text-gray-900={segment === 'home'}
                        // aria-current={segment === 'home' ? 'page' : undefined}
                        className={classnames([
                            {
                                'text-gray-900': location.pathname == '/',
                            },
                            'font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900',
                        ])}
                    >
                        Home
                    </a>
                    <a
                        href='resume'
                        // aria-current={segment === 'resume' ? 'page' : undefined}
                        className={classnames([
                            {
                                'text-gray-900': location.pathname == '/resume',
                            },
                            'font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900',
                        ])}
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

        </nav>
    );
};

export default Nav;
