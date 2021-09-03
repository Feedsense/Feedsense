\c feedsense

DROP TABLE public.users;

CREATE TABLE public.users (
  id serial NOT NULL PRIMARY KEY,
  given_name text,
  family_name text,
  oauth_id text,
  twitter_key text,
  youtube_key text
);

-- copy path, login to psql and =>  \i {path copied for schema}