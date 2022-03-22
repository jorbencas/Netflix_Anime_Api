 $sql = "CREATE TABLE searches (
      id SERIAL NOT NULL PRIMARY KEY,
      search VARCHAR(255) NOT NULL,
      kind VARCHAR(255) NOT NULL,
      id_external int4 NOT NULL,
      username_searched VARCHAR(55) DEFAULT NULL,
      created timestamp DEFAULT CURRENT_TIMESTAMP,
      updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );"; 