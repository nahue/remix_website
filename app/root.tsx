import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './tailwind.css';
import Nav from './components/nav';
import { Footer } from './components/footer';

export const loader = () => {
    return {
        ENV: {
            VERCEL_URL: process.env.VERCEL_URL,
        },
    };
};

export const meta: MetaFunction = (appData) => {
    const description =
        'I create from small lambdas to full-blown web applications, always using well-tested cutting-edge technologies.';
    const title = 'Nahuel Chaves';
    const twitter = '@nchaves1986';

    return {
        robots: 'follow, index',
        title,
        description,
        'twitter:card': 'summary_large_image',
        'twitter:creator': twitter,
        'twitter:site': twitter,
        'twitter:title': title,
        'og:site_name': title,
        'og:title': title,
        'og:image': 'https://remix-website.vercel.app/images/avatar.jpeg',
        'og:url': appData.data.ENV.VERCEL_URL,
        'og:description': description,
    };
};

export function links() {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: './images/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: './images/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '96x96',
            href: './images/favicon-96x96.png',
        },
    ];
}

export default function Root() {
    const data = useLoaderData();
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
                        <Footer />
                    </div>
                </main>
                <ScrollRestoration />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
                    }}
                /> */}
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
