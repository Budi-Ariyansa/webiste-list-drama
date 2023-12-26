create table list_kdrama (
    kdrama_id serial primary key,
    kdrama_name varchar(100) unique not null,
    kdrama_total_episode integer,
    kdrama_publish_date date,
    kdrama_rating float,
    kdrama_where_to_watch varchar(500),
    kdrama_image_url varchar(1000)
)

insert into list_kdrama (kdrama_name, kdrama_total_episode, kdrama_publish_date, kdrama_rating, kdrama_where_to_watch, kdrama_image_url)
values 
    -- ('Business Proposal (2022)', 12, '2022-02-28', 10, 'Netflix & Wavve', '/static/images/business_proposal.jpg'),
    -- ('Revenant', 12, '2023-07-23', 10, 'Disney+ Hotstar & Hulu', '/static/images/revenant.jpg'),
    -- ('Our Beloved Summer (2021)', 16, '2021-12-06', 10, 'Netflix & Wavve', '/static/images/our_beloved_summer.jpg'),
    ('King the Land (2023)', 16, '2023-05-17', 10, 'Netflix & TVING', '/static/images/king_the_land.jpg'),
    ('Daily Dose of Sunshine (2023)', 12, '2023-11-03', 9.5, 'Netflix', '/static/images/ddos.jpg'),
    ('Moving (2023)', 16, '2023-08-09', 9, 'Disney+ Hotstar, Disney & Hulu', '/static/images/moving.jpg'),
    ('Suspicious Partner (2017)', 40, '2017-05-10', 9, 'Netflix, WeTv, SBS World, iQIYI, Apple TV, Viki', '/static/images/suspicious_partner.jpg'),
    ('Doom at Your Service (2021)', 16, '2021-05-10', 9, 'Netflix, Viki, Prime Video & TVING', '/static/images/doom_at_service.jpg'),
    ('Love All Play (2022)', 16, '2022-04-20', 9.5, 'Disney+ Hotstar & Disney', '/static/images/love_all_play.jpg'),
    ('Strong Woman Do Bong Soon (2017)', 16, '2017-02-24', 9.5, 'Netflix, Viki, Prime Video, Disney+ Hotstar, WeTV, iQIYI, Prime Video & Apple TV', '/static/images/swdbs.jpg')