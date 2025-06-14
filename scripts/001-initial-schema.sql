-- DevPact 37 Database Schema

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    github_url VARCHAR(255),
    portfolio_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Applications table
CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    github_url VARCHAR(255),
    portfolio_url VARCHAR(255),
    interests TEXT[], -- Array of interest tags
    goal TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, accepted, rejected
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP,
    reviewed_by INTEGER REFERENCES users(id)
);

-- Pacts table
CREATE TABLE pacts (
    id SERIAL PRIMARY KEY,
    number INTEGER UNIQUE NOT NULL, -- 1-37
    name VARCHAR(255) NOT NULL,
    goal TEXT NOT NULL,
    schedule VARCHAR(255) NOT NULL, -- e.g., "Mon/Wed/Fri at 7:00 PM GMT"
    discord_link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pact memberships
CREATE TABLE pact_memberships (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    pact_id INTEGER REFERENCES pacts(id),
    role VARCHAR(50) NOT NULL, -- Admin, Supporter, Learner
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, pact_id)
);

-- Sessions table (scheduled check-in sessions)
CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    pact_id INTEGER REFERENCES pacts(id),
    scheduled_date DATE NOT NULL,
    scheduled_time TIME NOT NULL,
    session_number INTEGER NOT NULL, -- 1-16 for the 37-day period
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Check-ins table
CREATE TABLE checkins (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    session_id INTEGER REFERENCES sessions(id),
    checked_in_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, session_id)
);

-- Indexes for performance
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_submitted_at ON applications(submitted_at);
CREATE INDEX idx_pact_memberships_pact_id ON pact_memberships(pact_id);
CREATE INDEX idx_pact_memberships_user_id ON pact_memberships(user_id);
CREATE INDEX idx_sessions_pact_id ON sessions(pact_id);
CREATE INDEX idx_sessions_scheduled_date ON sessions(scheduled_date);
CREATE INDEX idx_checkins_user_id ON checkins(user_id);
CREATE INDEX idx_checkins_session_id ON checkins(session_id);
