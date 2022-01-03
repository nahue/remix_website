import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './tailwind.css';
import Nav from './components/nav';

export const meta: MetaFunction = () => {
    const description =
        'I create from small lambdas to full-blown web applications, always using well-tested cutting-edge technologies.';
    return {
        title: 'Nahuel Chaves',
        robots: 'follow, index',
        description,
        'twitter:card': 'summary_large_image',
        'twitter:creator': '@nchaves1986',
        'twitter:site': '@nchaves1986',
        'twitter:title': 'Nahuel Chaves',
        'og:site_name': 'Nahuel Chaves',
        'og:description': description,
    };
};

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body>
                <main className='relative h-full overflow-auto bg-white'>
                    <div className='flex flex-col h-full'>
                        <div className='relative pt-6'>
                            <Nav />
                        </div>
                        <Outlet />
                    </div>
                </main>
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
