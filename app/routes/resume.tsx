import { MetaFunction, Outlet } from 'remix';

export const meta: MetaFunction = () => {
    return {
        title: 'Nahuel Chaves - Resume',
    };
};

export default function App() {
    return (
        <div className='flex flex-col items-center'>
            <section className='w-full px-10 mx-auto mt-10 prose prose-lg lg:w-1/2 md:px-0 ext-lg'>
                <div>
                    <h1>Nahuel Chaves</h1>
                    <p>A brief summary of my professional life.</p>

                    <p>
                        For the past 15 years, I have been a Full Stack
                        developer, and since mid-2014, I developed my DevOps
                        skills. I love traveling, rock music, and primarily
                        enjoy life with my fiance.
                    </p>
                    <p>
                        On a professional level, my experience goes from
                        learning the programming basics on Fox 2.6 with my
                        father to manage a physical data center on the local
                        government and handle multi-cloud environments with
                        Azure and Amazon AWS.
                    </p>
                    <p>
                        I've also been developing my Full Stack skills with many
                        languages such as{' '}
                        <ul>
                            <li>
                                <strong>Python</strong>
                            </li>
                            <li>
                                <strong>TypeScript</strong>
                            </li>
                            <li>
                                <strong>C#</strong>
                            </li>
                            <li>
                                <strong>Java</strong>
                            </li>
                            <li>
                                <strong>PHP</strong>
                            </li>
                            <li>
                                <strong>Elixir</strong>
                            </li>
                        </ul>
                        and a lot of well-known frameworks.
                    </p>
                    <p>
                        I can say I have experience with other aspects of
                        technology such as:
                    </p>

                    <ul>
                        <li>HTML and CSS for mocking UI's</li>
                        <li>
                            Data Storages such as{' '}
                            <strong>
                                SQL Server, DynamoDB, MongoDB, PostgreSQL, MySQL
                            </strong>
                            and its forks (mainly for querying, but I also did
                            some installations and essential management)
                        </li>
                        <li>
                            ETL Solutions like
                            <ul>
                                <li>AWS Glue</li>
                                <li>PySpark</li>
                                <li>Pandas</li>
                            </ul>
                        </li>
                        <li>
                            Analytics Solutions like
                            <ul>
                                <li>Rockset</li>
                                <li>Elasticsearch</li>
                            </ul>
                        </li>
                        <li>
                            Containers using{' '}
                            <strong>AWS ECS, Docker, and Kubernetes</strong> for
                            building Micro Services platforms.
                        </li>
                        <li>
                            Code Integration and Code Delivery using GitHub
                            Actions, or CircleCI and Jenkins.
                        </li>
                    </ul>
                    <p>
                        I am a constant and fast learner, always trying to
                        improve myself, personally and professionally. Also, I
                        can't see myself working without a Team, having one
                        pushes me to be better and to teach others what I've
                        learned, and that feels very rewarding. My native
                        language is Spanish, and I'm also fluent in English (to
                        read, write, and talk).
                    </p>
                </div>
            </section>
            <section className='flex w-full lg:w-1/2'>
                <div className='px-10 pt-5 mt-5 prose prose-lg border-t border-gray-200 max-w-none lg:px-0'>
                    <dl>
                        <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
                            <dt>
                                <strong>
                                    Stealth Company (Apr 2020 - Currently
                                    Working)
                                </strong>
                                <span className='block font-light'>
                                    Principal Engineer
                                </span>
                            </dt>
                            <dd className='mt-1 sm:mt-0 sm:col-span-2'>
                                <p>
                                    Relationship-driven startup for the VC
                                    industry
                                </p>

                                <h4 className='mt-0'>ETL:</h4>
                                <ul>
                                    <li>
                                        <strong className='block'>
                                            AWS Glue PySpark pipelines
                                        </strong>
                                        <span>
                                            Used Glue to do ETL processes from
                                            public datasources, with PII
                                            complaint data normalization and
                                            matching to provide a single
                                            datapoint that can be broken down
                                            and tracked to its origin.
                                        </span>
                                    </li>
                                    <li>
                                        <strong className='block'>Nylas</strong>
                                        <span>
                                            Used Nylas services to build ETL
                                            pipelines to ingest Email and
                                            Calendar data, and also match to
                                            internal entities.
                                        </span>
                                    </li>
                                </ul>

                                <h4 className='mt-0'>Backend Stack:</h4>
                                <ul>
                                    <li>DynamoDB</li>
                                    <li>Rockset (Analytics)</li>
                                    <li>Lambda</li>
                                    <li>AWS Glue</li>
                                </ul>

                                <h4>Web Stack</h4>
                                <ul>
                                    <li>NX.dev</li>
                                    <li>Next.js</li>
                                    <li>React (Typescript)</li>
                                </ul>
                            </dd>
                        </div>
                        <div className='pt-5 mt-8 border-t border-gray-200 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4'>
                            <dt>
                                <strong>Seats.io (Oct 2018 - Apr 2020)</strong>
                                <span className='block font-light'>
                                    FullStack
                                </span>
                            </dt>
                            <dd className='col-span-2 mt-1'>
                                Saas for building Seating Charts, its main focus
                                is Ticketing Platforms. I worked both in the
                                Java-based core and Typescript based frontend,
                                as well as all the integrations in a plethora of
                                stacks
                                <strong>
                                    (Java, JS, Node, PHP, Ruby, Python, React,
                                    Angular, IOS, Android)
                                </strong>
                            </dd>
                        </div>
                        <div className='pt-5 mt-8 border-t border-gray-200 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4'>
                            <dt>
                                <strong>Zentricx (Dec 2014 - Oct 2018)</strong>
                                <span className='block font-light'>
                                    DevOps - FullStack
                                </span>
                            </dt>
                            <dd className='col-span-2 mt-1'>
                                Here I managed Azure and AWS clouds for the
                                company's clients always focusing on Customer
                                Experience. Some environments include Docker
                                containers, Websites, Web Applications, Mobile
                                Backends, Databases. I'm working on projects
                                such as:
                                <ul>
                                    <li>
                                        Insurance company web application on
                                        Azure.
                                    </li>
                                    <li>
                                        Smart Cities platform with its
                                        infrastructure on AWS.
                                    </li>
                                    <li>
                                        Managing infrastructure for a
                                        multinational that needs web sites and
                                        applications deployment automation, and
                                        ensuring security with OWASP compliance.
                                    </li>
                                </ul>
                                My role also includes consulting for my
                                co-workers. Allows me to be involved in a number
                                of projects with different approaches and techs
                                like:
                                <ul>
                                    <li>
                                        .NET with Entity Framework for SQL
                                        Server
                                    </li>
                                    <li>Docker</li>
                                    <li>CRM's like Dynamics and SuiteCRM</li>
                                    <li>Windows and Linux servers</li>
                                </ul>
                            </dd>
                        </div>
                        <div className='pt-5 mt-8 border-t border-gray-200 sm:grid sm:mt-5 sm:grid-cols-3 sm:gap-4'>
                            <dt>
                                <strong>
                                    Valley Works (Dec 2014 - Oct 2018)
                                </strong>
                                <span className='block font-light'>
                                    DevOps - FullStack
                                </span>
                            </dt>
                            <dd className='col-span-2 mt-1'>
                                I've was involved in the majority of the
                                company's projects, for companies like:
                                <ul>
                                    <li>Quadrant</li>
                                    <li>FeeTrader</li>
                                    <li>Plantbid</li>
                                    <li>3D Data</li>
                                    <li>Parasail Health</li>
                                    <li>Data Guardian Pro's</li>
                                </ul>
                                My job is to adapt to the client's needs, can be
                                Full Stack, Backend, Frontend or DevOps, or a
                                mixture of them. I had the freedom to try new
                                technologies and was able to leave my mark by
                                improving the user experience in many cases, or
                                by teaching my co-workers to do a better job.
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
}
