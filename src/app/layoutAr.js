// layouts/NoHeaderFooterLayout.js
import React from 'react';

export default function NoHeaderFooterLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
