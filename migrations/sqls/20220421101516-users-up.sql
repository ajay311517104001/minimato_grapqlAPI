/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS public.users
(
    id  BIGSERIAL NOT NULL ,
    user_id character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to ajay;