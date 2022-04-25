/* Replace with your SQL commands */


CREATE TABLE IF NOT EXISTS public.admins
(
    id  BIGSERIAL NOT NULL ,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT admins_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.admins
    OWNER to ajay;