CREATE TABLE newsposts (
    id SERIAL primary key not null,
    post VARCHAR(255) NOT NULL,
    username VARCHAR(55)  NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );