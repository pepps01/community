# Community Application
A simplified web-based community platform where users can register, create groups, and share posts within those groups.   Public users can browse all posts, while only authenticated users can contribute content or form groups.

## Objective

Build a community application with:

- Token-based authentication
- Group creation tied to users
- Posting inside groups
- A public feed for viewing all posts


## Features

### 1. User Authentication
- Register and log in securely
- Token-based authentication using Django REST Framework tokens
- Stores name, email, and password
- Passwords are hashed (no plain-text storage)

### 2. Groups
- Authenticated users can create groups (name, description)
- Each group is tied to the creator (`user` field)

### 3. Posts
- Authenticated users can post within groups they created
- Each post is linked to a group and its author

### 4. Public Feed
- All users (even unauthenticated) can view posts
- Only authenticated users can create or post


## Tech Stack

| Layer     | Technology                   |
|-----------|------------------------------|
| Backend   | Django, Django REST Framework |
| Database  | MySQL                        |
| Frontend  | Next JS, Tailwind CSS          |
| Auth      | Token Authentication         |
| DevOps    | Docker & Docker Compose      |



## 🛠️ Local Setup Instructions

### 🔽 Backend (Django + DRF)

1. Clone the repo:
   ```bash
   git clone https://github.com/pepps01/community-app.git
   cd community/backend

2. Create a Virtual Environment and Run
   ```bash
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

3. Create .env (or use settings.py directly) and set MySQL DB credentials.
   ```bash
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver


### 🔽 Frontend (NextJS + Tailwind CSS)
1. Open another terminal and navigate to frontend:
   ```bash
   cd ../frontend
   npm install
   npm run dev


### 🔽 Docker Build & Run
1. Build and run the various dependencies:
    ```bash
    docker build -f Dockerfile.dev -t cty:latest .
    docker-compose up


### Folder Structure
.
├── backend/              # Django + DRF
│   └── groups/, posts/, users/
├── frontend/             # React + Tailwind
├── docker-compose.yml
└── README.md


### Known Limitations & Assumptions
    1. Auth uses simple token-based auth — no refresh tokens (e.g. JWT)
    2. Users cannot join groups created by others
    3. Posts are only created in groups owned by the user
    4. No admin panel for managing users/groups via frontend
    5. CORS must be enabled to connect frontend → backend


### Future Improvements
    1. Mobile responsiveness
    2. More Fouc on the FRONTEND and enhancing the experience
    3. Group membership & invitations
    4. Comments and likes on posts
