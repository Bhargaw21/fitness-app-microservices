

<h1>🏋️ Fitness App - Microservices Architecture</h1>

<p>
A <b>cloud-native fitness tracking application</b> built with <b>Spring Boot</b>, <b>Spring Cloud</b>, <b>React</b>, and <b>Microservices architecture</b>.
</p>

<p>
This project demonstrates how to design a <b>scalable, modular, and distributed fitness app</b> where different services 
(User, Activity, AI Recommendation, Gateway, Config, Eureka) work together to provide personalized fitness experiences.
</p>

<div class="box toc">
  <h2>📖 Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#repository-structure">Repository Structure</a></li>
    <li><a href="#detailed-service-description">Detailed Service Description</a></li>
    <li><a href="#setup-installation">Setup & Installation</a></li>
    <li><a href="#running-application">Running the Application</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#future-enhancements">Future Enhancements</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</div>

<div class="box" id="features">
  <h2>🚀 Features</h2>
  <ul>
    <li>User Management – Signup, login, and profile management</li>
    <li>Activity Tracking – Record workouts, calories, steps, and progress</li>
    <li>AI Recommendation Service – Personalized workouts & diet plans</li>
    <li>Service Discovery – Eureka Server for dynamic service registration</li>
    <li>Centralized Configuration – Spring Cloud Config Server</li>
    <li>API Gateway – Single entry point with load balancing & routing</li>
    <li>React Frontend – Intuitive UI for seamless user experience</li>
  </ul>
</div>

<div class="box" id="architecture">
  <h2>🏗️ Architecture</h2>
  <div class="flowchart">
  Flowchart (Mermaid style):<br><br>
  TD<br>
  A[React Frontend] --> B[API Gateway]<br>
  B --> C[User Service]<br>
  B --> D[Activity Service]<br>
  B --> E[AI Service]<br>
  C -->|Config| F[Config Server]<br>
  D -->|Config| F<br>
  E -->|Config| F<br>
  B --> G[Eureka Server]<br>
  C --> G<br>
  D --> G<br>
  E --> G
  </div>

  <h3>Components</h3>
  <ul>
    <li><b>Frontend (React):</b> User interface</li>
    <li><b>API Gateway:</b> Routes requests to microservices</li>
    <li><b>User Service:</b> Authentication & user data</li>
    <li><b>Activity Service:</b> Logs & retrieves workouts</li>
    <li><b>AI Service:</b> Smart recommendations</li>
    <li><b>Config Server:</b> Centralized config</li>
    <li><b>Eureka Server:</b> Service registry & discovery</li>
  </ul>
</div>

<div class="box" id="tech-stack">
  <h2>⚙️ Tech Stack</h2>
  <h3>Backend</h3>
  <ul>
    <li>Java 17+</li>
    <li>Spring Boot</li>
    <li>Spring Cloud (Eureka, Config, Gateway)</li>
    <li>RESTful APIs</li>
  </ul>

  <h3>Frontend</h3>
  <ul>
    <li>React.js</li>
    <li>Axios</li>
    <li>CSS / Bootstrap</li>
  </ul>

  <h3>Databases</h3>
  <ul>
    <li>MySQL / PostgreSQL</li>
  </ul>

  <h3>DevOps</h3>
  <ul>
    <li>Maven</li>
    <li>Docker (future deployment)</li>
  </ul>
</div>

<div class="box" id="repository-structure">
  <h2>📂 Repository Structure</h2>
  <pre>
fitness-app-microservices/
│── activityservice/       # Activity microservice
│── aiservice/             # AI recommendation microservice
│── configserver/          # Centralized config
│── eureka/                # Eureka discovery server
│── fitness-app-frontend/  # React frontend
│── gateway/               # API Gateway
│── userservice/           # User service
│── README.md              # Documentation
  </pre>
</div>

<div class="box" id="detailed-service-description">
  <h2>🔎 Detailed Service Description</h2>
  <ul>
    <li><b>User Service:</b> Registers users, login, profile details</li>
    <li><b>Activity Service:</b> Logs activities, tracks calories & steps</li>
    <li><b>AI Service:</b> Recommends workouts & nutrition plans</li>
    <li><b>Eureka Server:</b> Tracks available services</li>
    <li><b>Config Server:</b> Externalized configuration management</li>
    <li><b>API Gateway:</b> Routes, load balancing, and security</li>
    <li><b>Frontend:</b> React-based UI</li>
  </ul>
</div>

<div class="box" id="setup-installation">
  <h2>⚡ Setup & Installation</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Java 17+</li>
    <li>Maven</li>
    <li>Node.js + npm</li>
    <li>MySQL/Postgres</li>
  </ul>

  <h3>Backend Setup</h3>
  <pre>
git clone https://github.com/Bhargaw21/fitness-app-microservices.git
cd fitness-app-microservices

# Start Eureka
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
  </pre>

  <h3>Frontend Setup</h3>
  <pre>
cd fitness-app-frontend
npm install
npm start
  </pre>
</div>

<div class="box" id="api-endpoints">
  <h2>📡 API Endpoints</h2>
  <h3>User Service</h3>
  <pre>
POST /users/register    → Register user
POST /users/login       → Authenticate user
GET  /users/{id}        → Get user details
  </pre>

  <h3>Activity Service</h3>
  <pre>
POST /activities             → Log new activity
GET  /activities/{id}        → Fetch activity details
GET  /activities/user/{uid}  → Fetch user’s activity history
  </pre>

  <h3>AI Service</h3>
  <pre>
GET /recommendations/{uid} → Get workout & diet recommendations
  </pre>

  <h3>Gateway</h3>
  <pre>
All requests go through → /api/{service}
  </pre>
</div>

<div class="box" id="future-enhancements">
  <h2>🔮 Future Enhancements</h2>
  <ul>
    <li>JWT-based authentication & OAuth2</li>
    <li>Analytics dashboard with Power BI / Grafana</li>
    <li>Containerization with Docker & Kubernetes</li>
    <li>Cloud deployment (AWS/GCP/Azure)</li>
    <li>ML-based smarter recommendations</li>
  </ul>
</div>

<div class="box" id="contributing">
  <h2>🤝 Contributing</h2>
  <p>Contributions are welcome! Please fork this repository and submit a pull request.</p>
</div>

<div class="box" id="license">
  <h2>📜 License</h2>
  <p>This project is licensed under the <b>MIT License</b>.</p>
</div>

</body>
</html>


<img width="2272" height="1186" alt="image" src="https://github.com/user-attachments/assets/a464f4f8-b544-405b-8649-f46554021e53" />

<img width="2940" height="1422" alt="image" src="https://github.com/user-attachments/assets/94be5490-78d9-45f4-94e2-67896024b085" />

<img width="2932" height="1580" alt="image" src="https://github.com/user-attachments/assets/af39ba85-d7bb-4fec-a566-05285d92a25c" />



