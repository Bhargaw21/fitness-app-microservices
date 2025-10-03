🏋️ Fitness App - Microservices Architecture

A cloud-native fitness tracking application built with Spring Boot, Spring Cloud, React, and Microservices architecture.

The project demonstrates how to design a scalable, modular, and distributed fitness app where different services (User, Activity, AI Recommendation, Gateway, Config, Eureka) work together to provide personalized fitness experiences.

📖 Table of Contents

Features

Architecture

Tech Stack

Repository Structure

Detailed Service Description

Setup & Installation

Running the Application

API Endpoints

Future Enhancements

Contributing

License

🚀 Features

✅ User Management – Signup, login, and profile management
✅ Activity Tracking – Record workouts, calories, steps, and progress
✅ AI Recommendation Service – Suggests personalized workouts & diet plans
✅ Service Discovery – Using Eureka Server for dynamic service registration
✅ Centralized Configuration – Managed by Spring Cloud Config Server
✅ API Gateway – Acts as a single entry point with load balancing & routing
✅ React Frontend – Intuitive UI for seamless user experience

🏗️ Architecture
flowchart TD
    A[React Frontend] --> B[API Gateway]
    B --> C[User Service]
    B --> D[Activity Service]
    B --> E[AI Service]
    C -->|Config| F[Config Server]
    D -->|Config| F
    E -->|Config| F
    B --> G[Eureka Server]
    C --> G
    D --> G
    E --> G


Frontend (React): User interface to interact with backend services

API Gateway: Routes client requests to appropriate microservices

User Service: Handles authentication & user data

Activity Service: Logs & retrieves workout activities

AI Service: Provides smart recommendations using user activity data

Config Server: Manages centralized configuration

Eureka Server: Service registry & discovery

⚙️ Tech Stack

Backend

Java 17+

Spring Boot

Spring Cloud (Eureka, Config, Gateway)

RESTful APIs

Frontend

React.js

Axios (API calls)

CSS / Bootstrap

Databases

MySQL/Postgres (configurable per service)

DevOps & Build Tools

Maven

Docker (future deployment)

📂 Repository Structure
fitness-app-microservices/
│── activityservice/        # Microservice for logging activities
│── aiservice/              # AI-based recommendation microservice
│── configserver/           # Centralized configuration
│── eureka/                 # Eureka discovery server
│── fitness-app-frontend/   # React frontend application
│── gateway/                # API Gateway for routing & security
│── userservice/            # User management & authentication
│── README.md               # Project documentation

🔎 Detailed Service Description
1. User Service
Registers new users
Handles login & authentication
Stores profile details

2. Activity Service
Logs workout activitie
Tracks calories burned, steps, time spent
Provides user progress reports

3. AI Recommendation Service
Suggests workouts & nutrition plans based on activity logs
Future: Machine Learning integration for adaptive recommendations

4. Eureka Server
Keeps track of available services
Enables load balancing & dynamic discovery

5. Config Server
Centralized externalized configuration
Supports versioning & environment profiles

6. API Gateway
Entry point for all external requests
Manages routing, security, and load balancing

7. Frontend (React)
Provides user-friendly interface
Communicates with Gateway using REST APIs

⚡ Setup & Installation
Prerequisites
Java 17+
Maven
Node.js + npm
MySQL/Postgres

Backend Setup
# Clone repository
git clone https://github.com/Bhargaw21/fitness-app-microservices.git
cd fitness-app-microservices

# Start Eureka Server
cd eureka && mvn spring-boot:run

# Start Config Server
cd configserver && mvn spring-boot:run

# Start User Service
cd userservice && mvn spring-boot:run

# Start Activity Service
cd activityservice && mvn spring-boot:run

# Start AI Service
cd aiservice && mvn spring-boot:run

# Start Gateway
cd gateway && mvn spring-boot:run

Frontend Setup
cd fitness-app-frontend
npm install
npm start

📡 API Endpoints
User Service
POST /users/register   → Register user
POST /users/login      → Authenticate user
GET  /users/{id}       → Get user details

Activity Service
POST /activities       → Log new activity
GET  /activities/{id}  → Fetch activity details
GET  /activities/user/{userId} → Fetch user’s activity history

AI Service
GET /recommendations/{userId} → Get workout & diet recommendations

Gateway
All requests go through /api/{service}

🔮 Future Enhancements

🔐 Implement JWT-based authentication & OAuth2

📊 Add analytics dashboard with Power BI / Grafana

🐳 Containerize using Docker & orchestrate with Kubernetes

☁️ Deploy to AWS/GCP/Azure for scalability

🤖 Integrate ML for smarter AI recommendations

🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

📜 License

This project is licensed under the MIT License.







<img width="2502" height="1504" alt="image" src="https://github.com/user-attachments/assets/d9d7ce45-2217-4a12-9876-1cb5be65e418" />

