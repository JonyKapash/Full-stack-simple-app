CREATE SCHEMA IF NOT EXISTS "messaging" ;

CREATE TABLE IF NOT EXISTS "messaging"."message" (
    id SERIAL PRIMARY KEY,
    sender_name TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
