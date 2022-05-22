CREATE TABLE comments (
    id SERIAL NOT NULL PRIMARY KEY,
    comment VARCHAR(250) NOT NULL,
    fecha VARCHAR(200) NOT NULL,
    hora VARCHAR(55) NULL,
    username VARCHAR(55) DEFAULT NULL,
    kind VARCHAR(255) NOT NULL,
    id_external VARCHAR(250) NOT NULL,
    response_comment_id int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE metadata (
    id SERIAL NOT NULL PRIMARY KEY,
    visiteds int4 DEFAULT 1,
    num_users int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users (
    username VARCHAR(55) PRIMARY KEY NOT NULL,
    nombre VARCHAR(255) NULL,
    apellidos VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    date_birthday VARCHAR(255) NULL,
    tipo VARCHAR(50) NULL,
    dni VARCHAR(255) NULL,
    acess_token VARCHAR(255) NULL,
    admin_token VARCHAR(255) NULL,
    activado bool NULL,
    genere VARCHAR(25) NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE groups (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NULL,  
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE usergroups (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(55) DEFAULT NULL,
    group_id int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE collections (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    profile int4 DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE animes (
    siglas VARCHAR(250) NOT NULL PRIMARY KEY,
    idiomas VARCHAR(255) DEFAULT NULL,
    date_publication VARCHAR(250) DEFAULT NULL,
    date_finalization VARCHAR(250) DEFAULT NULL,
    state VARCHAR(250) DEFAULT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    valorations int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    temporada VARCHAR(25) DEFAULT NULL
);

CREATE TABLE media_animes (
    id SERIAL NOT NULL PRIMARY KEY
    type VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    extension VARCHAR(250) NOT NULL,
    anime VARCHAR(250) NOT NULL
);

CREATE TABLE translation_animes (
    id SERIAL NOT NULL PRIMARY KEY
    translation VARCHAR(250) NOT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    lang int4,
    anime VARCHAR(250) NOT NULL
);

CREATE TABLE anime_generes (
    id SERIAL NOT NULL PRIMARY KEY,
    genere int4,
    anime VARCHAR(250) NOT NULL
);

CREATE TABLE anime_favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    favorite bool DEFAULT false,
    anime VARCHAR(250) NOT NULL
);

CREATE TABLE episodes (
    id VARCHAR(250)  NOT NULL PRIMARY KEY,
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL,
);

CREATE TABLE translation_episodes (
    id SERIAL NOT NULL PRIMARY KEY
    translation VARCHAR(250) NOT NULL,
    lang int4,
    episodes VARCHAR(250) NOT NULL
);

CREATE TABLE clips (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    episode int4 NOT NULL,
    profile int4 DEFAULT NULL,
    time VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE episode_collections (
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250),
    collection VARCHAR(250) NOT NULL
);

CREATE TABLE openings (
    id VARCHAR(250) PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(255) NOT NULL,
    anime int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL
);

CREATE TABLE endings (
    id VARCHAR(250) PRIMARY KEY,
    nombre VARCHAR(150),
    descripcion VARCHAR(255) NOT NULL,
    anime int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    seasion VARCHAR(250) DEFAULT null,
    madia_type VARCHAR(250) NOT NULL,
    madia_name VARCHAR(250) NOT NULL,
    madia_extension VARCHAR(250) NOT NULL
);

CREATE TABLE config_user (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(55) DEFAULT NULL,
    limit_num_profiles int4 DEFAULT 5,
    see_video_profiles_time bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE filters (
    id SERIAL NOT NULL PRIMARY KEY,
    code VARCHAR(255) DEFAULT NULL,
    kind VARCHAR(255) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE translation_filters (
    id SERIAL NOT NULL PRIMARY KEY
    translation VARCHAR(250) NOT NULL,
    lang int4,
    id_external int4
);

CREATE TABLE langs (
    id SERIAL NOT NULL PRIMARY KEY,
    code VARCHAR(5) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO langs(id, code) VALUES(1, 'es');
INSERT INTO langs(id, code) VALUES(2, 'en');
INSERT INTO langs(id, code) VALUES(3, 'va');
INSERT INTO langs(id, code) VALUES(4, 'ca');

CREATE TABLE seasons (
    id VARCHAR(250) NOT NULL PRIMARY KEY,
    title VARCHAR(50) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE config_profile (
    id SERIAL NOT NULL PRIMARY KEY,
    profile int4 DEFAULT NULL,
    theme VARCHAR(150) DEFAULT 'dark',
    autoplay bool DEFAULT false,
    columns int4 DEFAULT 2,
    orden VARCHAR(150) DEFAULT 'asc',
    lang VARCHAR(255) DEFAULT 1,
    volume Float DEFAULT 0.5,
    video_velocity_default VARCHAR(150) NOT NULL,
    default_view VARCHAR(150) DEFAULT 'grid',
    avable_chat bool DEFAULT false,
    avable_secret_chat bool DEFAULT false,
    avable_history bool DEFAULT true,
    limit_elem_collection int4 DEFAULT 100,
    offline_mode bool DEFAULT false,
    avable_response_comment bool DEFAULT false,
    option_paginator VARCHAR(150) DEFAULT 'new',
    avable_notifications bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    avaible int4 NOT NULL,
    config int4 NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE config_notification_profile(
    id int4 NOT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    profile int4 DEFAULT NULL,
    sound bool DEFAULT true,
);

CREATE TABLE anime_avaible_notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    avaible bool DEFAULT false,
    anime VARCHAR(250) NOT NULL
);

CREATE TABLE history(
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250) NOT NULL,
    profile int4 DEFAULT NULL,
    time VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(150),
    username VARCHAR(55) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);