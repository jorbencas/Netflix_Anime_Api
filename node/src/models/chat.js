CREATE TABLE chat(
    id SERIAL NOT NULL PRIMARY KEY,
    msg_VARCHAR(255) VARCHAR(255) NOT NULL,
    emiitter VARCHAR(50) NOT NULL,
    receptor VARCHAR(50) NOT NULL,
    date VARCHAR(200) NOT NULL,
    hour VARCHAR(55) NOT NULL,
    state VARCHAR(55) NOT NULL,
    secure bool NULL DEFAULT false
    );
  