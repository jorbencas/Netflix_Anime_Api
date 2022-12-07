-- CREATE SCHEMA IF NOT EXISTS `cosasdeanime` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
-- USE `cosasdeanime`;

CREATE ROLE IF NOT EXISTS cosasdeanime WITH PASSWORD 'cosasdeanime' VALID UNTIL 'infinity' LOGIN;
CREATE DATABASE IF NOT EXISTS cosasdeanime WITH OWNER cosasdeanime ENCODING='UTF8' TEMPLATE=postgres LC_COLLATE='es_ES.UTF-8' LC_CTYPE='es_ES.UTF-8' CONNECTION LIMIT=-1 TABLESPACE=pg_default;
GRANT SELECT, INSERT ON DATABASE cosasdeanime TO cosasdeanime;

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS metadata;
DROP TABLE IF EXISTS media_animes;
DROP TABLE IF EXISTS anime_temporadas;
DROP TABLE IF EXISTS anime_generes;
DROP TABLE IF EXISTS anime_favorites;
DROP TABLE IF EXISTS seasions_episodes;
DROP TABLE IF EXISTS media_episodes;
DROP TABLE IF EXISTS clips;
DROP TABLE IF EXISTS episode_collections;
DROP TABLE IF EXISTS seasions_openings;
DROP TABLE IF EXISTS media_openings;
DROP TABLE IF EXISTS seasions_endings;
DROP TABLE IF EXISTS media_endings;
DROP TABLE IF EXISTS config_user;
DROP TABLE IF EXISTS filters;
DROP TABLE IF EXISTS config_profile;
DROP TABLE IF EXISTS anime_avaible_notifications;
DROP TABLE IF EXISTS history;
DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS seasions;
DROP TABLE IF EXISTS episodes;
DROP TABLE IF EXISTS openings;
DROP TABLE IF EXISTS endings;
DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS animes;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS filters (
    code VARCHAR(255) NOT NULL PRIMARY KEY,
    tittle VARCHAR(250) NOT NULL,
    kind VARCHAR(255) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS metadata (
    id INT GENERATED ALWAYS AS IDENTITY  PRIMARY KEY,
    visiteds int4 DEFAULT 1,
    num_users int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
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
    updated timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS animes (
    siglas VARCHAR(250) NOT NULL PRIMARY KEY,
    tittle VARCHAR(250) NOT NULL,
    sinopsis VARCHAR(250) NOT NULL,
    idiomas VARCHAR(255) DEFAULT NULL,
    date_publication DATE default(CURRENT_DATE),
    date_finalization DATE default(CURRENT_DATE),
    state VARCHAR(250) DEFAULT NULL,
    kind VARCHAR(25) DEFAULT NULL,
    valorations int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(150),
    username VARCHAR(55) DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(username) 
    REFERENCES users(username)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    comment VARCHAR(250) NOT NULL,
    date DATE default(CURRENT_DATE),
    hora TIME default(CURRENT_TIME),
    username VARCHAR(55) DEFAULT NULL,
    kind VARCHAR(255) NOT NULL,
    id_external VARCHAR(250) NOT NULL,
    response_comment_id int4 DEFAULT 0,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(username) 
    REFERENCES users(username)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS collections (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    profile int4 DEFAULT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(profile) 
    REFERENCES profiles(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media_animes (
    id SERIAL NOT NULL PRIMARY KEY,
    type VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    ext VARCHAR(250) NOT NULL,
    anime VARCHAR(250) NOT NULL,
    FOREIGN KEY(anime)
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS anime_temporadas ( 
    id SERIAL NOT NULL PRIMARY KEY,
    temporada VARCHAR(255) NOT NULL,
    anime VARCHAR(250) NOT NULL,
    FOREIGN KEY(temporada) 
    REFERENCES filters(code)
    ON DELETE CASCADE,
    FOREIGN KEY(anime)
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS anime_generes (
    id SERIAL NOT NULL PRIMARY KEY,
    genere VARCHAR(255) NOT NULL,
    anime VARCHAR(250) NOT NULL,
    FOREIGN KEY(genere) 
    REFERENCES filters(code)
    ON DELETE CASCADE,
    FOREIGN KEY(anime)
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS anime_favorites (
    id SERIAL NOT NULL PRIMARY KEY,
    favorite bool DEFAULT false,
    anime VARCHAR(250) NOT NULL,
    FOREIGN KEY(anime)
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS seasions (
    id VARCHAR(250) NOT NULL PRIMARY KEY,
    tittle VARCHAR(50) DEFAULT NULL,
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(anime) 
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS episodes (
    id VARCHAR(250) NOT NULL PRIMARY KEY,
    tittle VARCHAR(250) NOT NULL,
    sinopsis VARCHAR(250) NOT NULL,
    date_publication DATE default(CURRENT_DATE),
    date_finalization DATE default(CURRENT_DATE),
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    FOREIGN KEY(anime)
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS seasions_episodes (
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250) NOT NULL,
    seasion VARCHAR(250) DEFAULT null,
    FOREIGN KEY(episode)
    REFERENCES episodes(id)
    ON DELETE CASCADE,
    FOREIGN KEY(seasion) 
    REFERENCES seasions(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media_episodes (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    ext VARCHAR(250) NOT NULL,
    episode VARCHAR(250) NOT NULL,
    FOREIGN KEY(episode)
    REFERENCES episodes(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS clips (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    episode VARCHAR(250) NOT NULL,
    profile int4 DEFAULT NULL,
    time_start VARCHAR(25) NOT NULL,
    time_end VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(episode)
    REFERENCES episodes(id)
    ON DELETE CASCADE,
    FOREIGN KEY(profile)
    REFERENCES profiles(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS episode_collections (
    id SERIAL NOT NULL PRIMARY KEY,
    episode VARCHAR(250) NOT NULL,
    collection int4 NOT NULL,
    FOREIGN KEY(episode) 
    REFERENCES episodes(id)
    ON DELETE CASCADE,
    FOREIGN KEY(collection) 
    REFERENCES collections(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS openings (
    id VARCHAR(250) PRIMARY KEY,
    tittle VARCHAR(250) NOT NULL,
    sinopsis VARCHAR(250) NOT NULL,
    date_publication DATE default(CURRENT_DATE),
    date_finalization DATE default(CURRENT_DATE),
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    FOREIGN KEY(anime) 
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS seasions_openings (
    id SERIAL NOT NULL PRIMARY KEY,
    opening VARCHAR(250) NOT NULL,
    seasion VARCHAR(250) DEFAULT null,
    FOREIGN KEY(opening)
    REFERENCES openings(id)
    ON DELETE CASCADE,
    FOREIGN KEY(seasion)
    REFERENCES seasions(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media_openings (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    ext VARCHAR(250) NOT NULL,
    opening VARCHAR(250) NOT NULL,
    FOREIGN KEY(opening) 
    REFERENCES openings(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS endings (
    id VARCHAR(250) PRIMARY KEY,
    tittle VARCHAR(250) NOT NULL,
    sinopsis VARCHAR(250) NOT NULL,
    date_publication DATE default(CURRENT_DATE),
    date_finalization DATE default(CURRENT_DATE),
    anime VARCHAR(250) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    num int4 DEFAULT 1,
    FOREIGN KEY(anime) 
    REFERENCES animes(siglas)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS seasions_endings (
    id SERIAL NOT NULL PRIMARY KEY,
    ending VARCHAR(250) NOT NULL,
    seasion VARCHAR(250) DEFAULT null,
    FOREIGN KEY(ending) 
    REFERENCES endings(id)
    ON DELETE CASCADE,
    FOREIGN KEY(seasion) 
    REFERENCES seasions(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS media_endings (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    ext VARCHAR(250) NOT NULL,
    ending VARCHAR(250) NOT NULL,
    FOREIGN KEY(ending) 
    REFERENCES endings(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS config_user (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(55) DEFAULT NULL,
    limit_num_profiles int4 DEFAULT 5,
    see_video_profiles_time bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(username) 
    REFERENCES users(username)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS config_profile (
    id SERIAL NOT NULL PRIMARY KEY,
    profile int4 DEFAULT NULL,
    theme VARCHAR(150) DEFAULT 'dark',
    autoplay bool DEFAULT false,
    columns int4 DEFAULT 2,
    orden VARCHAR(150) DEFAULT 'asc',
    volume Float DEFAULT 0.5,
    video_velocity_default VARCHAR(150) NOT NULL,
    default_view VARCHAR(150) DEFAULT 'grid',
    avable_history bool DEFAULT true,
    limit_elem_collection int4 DEFAULT 100,
    offline_mode bool DEFAULT false,
    avable_response_comment bool DEFAULT false,
    option_paginator VARCHAR(150) DEFAULT 'new',
    avable_notifications bool DEFAULT false,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(profile)
    REFERENCES profiles(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    kind VARCHAR(25) DEFAULT NULL,
    profile int4 DEFAULT NULL,
    sound bool DEFAULT true,
    FOREIGN KEY(profile) 
    REFERENCES profiles(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS anime_avaible_notifications (
    id SERIAL NOT NULL PRIMARY KEY,
    avaible bool DEFAULT false,
    anime VARCHAR(250) NOT NULL,
    notification int4 NOT NULL,
    FOREIGN KEY(anime) 
    REFERENCES animes(siglas)
    ON DELETE CASCADE,
    FOREIGN KEY(notification) 
    REFERENCES notifications(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS history (
    id INT GENERATED ALWAYS AS IDENTITY  PRIMARY KEY,
    episode VARCHAR(250) NOT NULL,
    profile int4 DEFAULT NULL,
    time VARCHAR(25) NOT NULL,
    created timestamp DEFAULT CURRENT_TIMESTAMP,
    updated timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(profile) 
    REFERENCES profiles(id)
    ON DELETE CASCADE,
    FOREIGN KEY(episode) 
    REFERENCES episodes(id)
    ON DELETE CASCADE
);