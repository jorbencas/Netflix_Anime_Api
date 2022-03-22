CREATE TABLE cartlines(
    id SERIAL primary key not null,
    episode int4 NOT NULL,
    anime int4 NOT NULL,
    cant int4 NOT NULL,
    price
    descline
    cart int4 DEFAULT NULL
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) 
    