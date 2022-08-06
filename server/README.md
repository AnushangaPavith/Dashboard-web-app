## Setting up mysql-server on linux

### mysql server

- sudo apt install mysql-server
- sudo mysql_secure_installation

If unable to run the command try
 sudo mysql
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword';

then run mysql_secure_installation to setup password and mysql configurations
accordingly.

### Running mysql script file

- Enter mysql
- source /home/user/path_to_sql_file

### Setting up API

- create .env file
- include DB_USER , DB_PASSWORD and SERVER_PORT
- npm install
- nodemon start (starts running on 'localhost:3001')

---

## Setting up mysql-server on windows

### XAMPP MySQL server

- Download and install XAMPP
- Start MySQL server from XAMPP control panel

### Running mysql script file

- Open Shell from XAMPP control panel
- Enter "mysql -u root -p" (Enter default password null) or login with any other user

### Running mysql script file

- source full/path/to/file/analysis_tool.sql

(No need to create .env file if you didn't change root user's password)

---

### Setting up webapp

- npm install
- npm start (starts running on 'localhost:3000')

---

## API Endpoints

### Machine

API endpoints accessed by machines.

#### POST

- for initial
    POST
    /api/init

    ```json
    {
        "machineID"         : "D003",
        "moldID"            : "m003",
        "moldShots"         : 0,
        "failedShots"       : 0,
        "prodRate"          : 0,
        "prod_start_date"   : "2022-04-12",
        "prod_end_date"     : "2022-06-20",
        "monaNumber"        : "mon222",
        "material"          : "metal",
        "moldMaker"         : "china"
    }
    ```

- for updates
    POST
    /api/machines/{machineID}

    ```json
    {
        "machineID"         : "D003",
        "failedShots"       : 0, // 1 for positive 0 for negative
    }
    ```

### Web app

API endpoints accessed by webapp.


- Get all details 

    GET

    /api/machines
    
    /api/molds

- for machine specific

    GET

    /api/machines/{machine_id}
    
    /api/molds/{mold_id}

- for delete

    DELETE

    /api/machines/{machineID}

    /api/molds/{moldID}

## Database

### <b>machines</b>

| Field          | TYPE           | Example       |
|----------------|----------------|---------------|
| machineID      |VARCHAR(10)     | D02           |
| moldID         |VARCHAR(10)     | m002          |
| moldShots      |INT             | 50            |
| failedShots    |INT             | 3             |
| prodRate       |INT             | 1             |
| prod_start_date|DATE            | 2022-09-12    |
| prod_end_date  |DATE            | 2022-09-12    |

<br></br>

### <b> molds </b>

| Field          | TYPE           | Example       |
|----------------|----------------|---------------|
| moldID         |VARCHAR(10)     | m002          |
| monaNumber     |VARCHAR(255)    | mon121        |
| material       |VARCHAR(255)    | m_alloy       |
| moldMaker      |VARCHAR(255)    | china         |
