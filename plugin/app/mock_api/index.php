<?php

$results = [
    'result' => [
        'input' => 'AAMACwAJAAgaNw1IKQMDPgcAABIGAAALEC4RWQ4cBIwdVzi8UDMbqU8FBoQVAAcSBqQ9KBWRHok7PU+5Rk8zkKEWIK+HAQJ5AKYULhCSGzhCHUgwPyJuLCMwQSi+BQwxAYhXBxfNVR6OFlEiHCihJhxbYC3bDykhCD4jARTjngjCDLIOOyN/Ah6azQqkDKcC',
        'match' => 1,
        'confidence' => 'high',
        'score' => 33,
        'details' => [
            [
                'vendor' => 'google',
                'severity' => 'A1',
            ],
            [
                'vendor' => 'microsoft',
                'severity' => 'A2',
            ],
        ]
    ]
];

echo json_encode($results, true);

