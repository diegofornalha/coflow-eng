import * as React from 'react';

export default function ChevronDown({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 8.29299L12 13.586L6.707 8.29299C6.316 7.90199 5.683 7.90199 5.293 8.29299C4.903 8.68399 4.902 9.31699 5.293 9.70699L11.293 15.707C11.684 16.098 12.317 16.098 12.707 15.707L18.707 9.70699C19.098 9.31599 19.098 8.68299 18.707 8.29299C18.316 7.90299 17.683 7.90199 17.293 8.29299Z"></path>
        </svg>
    );
}
