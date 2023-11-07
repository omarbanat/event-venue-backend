const connection = require('./connection');

const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users (
                            ID INT PRIMARY KEY,
                            fullName VARCHAR(100),
                            email VARCHAR(255),
                            password VARCHAR(255),
                            role varchar(10)); `;

const CREATE_VENUES_TABLE = `CREATE TABLE IF NOT EXISTS venues (
                            ID INT PRIMARY KEY,
                            name VARCHAR(255),
                            description VARCHAR(255),
                            capacity INT,
                            image VARCHAR(255),
                            address varchar(255)); `;

const CREATE_EVENTS_TABLE = `CREATE TABLE IF NOT EXISTS events (
                            ID INT PRIMARY KEY,
                            title VARCHAR(255),
                            date DATE,
                            ticketPrice INT,
                            description VARCHAR(255),
                            venueID INT,
                            FOREIGN KEY (venueID)
                            REFERENCES venues(ID)
                            ON DELETE CASCADE); `;

const CREATE_RESERVATIONS_TABLE = `CREATE TABLE IF NOT EXISTS reservations (
                                    ID INT PRIMARY KEY,
                                    userID INT,
                                    venueID INT,
                                    FOREIGN KEY (venueID)
                                    REFERENCES venues(ID)
                                    ON DELETE CASCADE,
                                    FOREIGN KEY (userID)
                                    REFERENCES users(ID)
                                    ON DELETE CASCADE); `;
const createTables = async () => {
  try {
    const [usersTableCreation] = await connection.query(CREATE_USERS_TABLE);
    const [venuesTableCreation] = await connection.query(CREATE_VENUES_TABLE);
    const [eventsTableCreation] = await connection.query(CREATE_EVENTS_TABLE);
    const [reservationsTableCreation] = await connection.query(
      CREATE_RESERVATIONS_TABLE
    );

    console.log({
      usersTableCreation,
      venuesTableCreation,
      eventsTableCreation,
      reservationsTableCreation,
    });
  } catch (error) {
    console.error(error);
  }
};

createTables();
