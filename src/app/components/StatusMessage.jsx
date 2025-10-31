'use client';

import React from 'react';

export default function StatusMessage({ status }) {
    let message;

    if (status==='loading') {
        message = <p>Loading...</p>;
    } else if (status==='error') {
        message = <p>Error...</p>; 
    } else if (status==='empty') {
        message = <p>Empty...</p>;
    }
    return <div>{message}</div>;
} 