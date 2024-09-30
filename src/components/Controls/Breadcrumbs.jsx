import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Layout from '@Layout/Layout.jsx'

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className='my-8'>
            <Layout>
                <nav aria-label="breadcrumb" className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    {pathnames.length > 0 && <ChevronRightIcon className="h-4 w-4 text-gray-400" />}

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <span key={to} className="text-gray-700">
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </span>
                        ) : (
                            <React.Fragment key={to}>
                                <Link to={to} className="hover:text-blue-600">
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                            </React.Fragment>
                        );
                    })}
                </nav>
            </Layout>
        </div>
    );
}

export default Breadcrumbs;
