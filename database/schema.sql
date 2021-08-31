--
-- PostgreSQL database dump
--
​
-- Dumped from database version 13.4 (Ubuntu 13.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 13.4 (Ubuntu 13.4-1.pgdg20.04+1)
​
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
​
SET default_tablespace = '';
​
SET default_table_access_method = heap;
​
--
-- Name: users; Type: TABLE; Schema: public; Owner: feedsense
--
​
CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(30),
    oauth_id text,
    twitter_key text,
    youtube_key text
);
​
​
ALTER TABLE public.users OWNER TO feedsense;
​
--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: feedsense
--
​
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
​
​
ALTER TABLE public.users_id_seq OWNER TO feedsense;
​
--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: feedsense
--
​
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
​
​
--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: feedsense
--
​
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
​
​
--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: feedsense
--
​
COPY public.users (id, username, oauth_id, twitter_key, youtube_key) FROM stdin;
\.
​
​
--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: feedsense
--
​
SELECT pg_catalog.setval('public.users_id_seq', 1, false);
​
​
--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: feedsense
--
​
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
​
​
--
-- PostgreSQL database dump complete
--