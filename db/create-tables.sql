
--- (1) setup DB (via default admin user: postgres)

CREATE USER tic4303 with superuser;

create database tic4303;

grant all privileges on database tic4303 to tic4303;

alter role tic4303 with password 'X8zqNqa_!HS#';

--- (2) switch login to user tic4303

-- print current schema -> expected public
SHOW search_path;

--- (2) table schema

create table public.user_account(
	user_name varchar(32) not null primary key,
    enc_password varchar(64) not null
);

create table public.submission_form(
    form_id serial not null primary key,
    f_name varchar(50) not null,
    f_email_addr varchar(100) not null,
    f_country varchar(50) not null,
    f_phone_number int not null,
    f_gender varchar(1) not null,
    f_qualification varchar(100) not null,
    submitted_by varchar(32) not null, --- equivalent to user_name on user_account table
    created_dt timestamp not null default now()
);


-------------- credential for the hosted postgresql -----------------
-- DB access for TIC4303

-- db_host: 167.172.4.105
-- db_port: 5435
-- db_name: tic4303
-- db_user: tic4303
-- db_password: X8zqNqa_!HS#
