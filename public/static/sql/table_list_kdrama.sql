create table list_kdrama (
    kdrama_id serial primary key,
    kdrama_name varchar(100) unique not null,
    kdrama_total_episode integer,
    kdrama_status varchar(20) not null,
    kdrama_publish_date date,
    kdrama_rating float,
    kdrama_where_to_watch varchar(500),
    kdrama_image_url varchar(1000)
)

drop table list_kdrama

insert into list_kdrama (kdrama_name, kdrama_total_episode, kdrama_status, kdrama_publish_date, kdrama_rating, kdrama_where_to_watch, kdrama_image_url)
values 
    -- ('Business Proposal (2022)', 12, 'Complete', '2022-02-28', 10, 'Netflix & Wavve', '/static/images/business_proposal.jpg'),
    -- ('Revenant (2023)', 12, 'Complete', '2023-07-23', 10, 'Disney+ Hotstar & Hulu', '/static/images/revenant.jpg'),
    -- ('Our Beloved Summer (2021)', 16, 'Complete', '2021-12-06', 10, 'Netflix & Wavve', '/static/images/our_beloved_summer.jpg'),
    -- ('King the Land (2023)', 16, 'Complete', '2023-05-17', 10, 'Netflix & TVING', '/static/images/king_the_land.jpg'),
    -- ('Daily Dose of Sunshine (2023)', 12, 'Complete', '2023-11-03', 9.5, 'Netflix', '/static/images/ddos.jpg'),
    -- ('Moving (2023)', 16, 'Complete', '2023-08-09', 9, 'Disney+ Hotstar, Disney & Hulu', '/static/images/moving.jpg'),
    -- ('Suspicious Partner (2017)', 40, 'Complete', '2017-05-10', 9, 'Netflix, WeTv, SBS World, iQIYI, Apple TV, Viki', '/static/images/suspicious_partner.jpg'),
    -- ('Doom at Your Service (2021)', 16, 'Complete', '2021-05-10', 9, 'Netflix, Viki, Prime Video & TVING', '/static/images/doom_at_service.jpg'),
    -- ('Love All Play (2022)', 16, 'Complete', '2022-04-20', 9.5, 'Disney+ Hotstar & Disney', '/static/images/love_all_play.jpg'),
    -- ('Strong Woman Do Bong Soon (2017)', 16, 'Complete', '2017-02-24', 9.5, 'Netflix, Viki, Prime Video, Disney+ Hotstar, WeTV, iQIYI, Prime Video & Apple TV', '/static/images/swdbs.jpg'),
    -- ('Extraordinary Attorney Woo (2022) S1', 16, 'Complete', '2022-06-29', 9, 'Netflix', '/static/images/extraordinary_attor_woo.jpg'),
    -- ('Happiness (2021)', 12, 'Complete', '2021-11-05', 9, 'Netflix, WeTV, TVING, iQIYI & Viki', '/static/images/happiness.jpg'),
    -- ('Love to Hate You (2023)', 10, 'Complete', '2023-02-10', 9.5, 'Netflix', '/static/images/love_to_hate_you.jpg'),
    -- ('Mr Queen (2020)', 20, 'Complete', '2020-12-12', 9.5, 'Netflix, Viki, Hulu & Prime Video', '/static/images/mr_queen.jpg')
    ('Zombie Detective (2020)', 24, 'Complete', '2020-09-21', 8.5, 'Netflix & Viki', '/static/images/zombie_detective.jpg'),
    ('Little Women (2022)', 12, 'Complete', '2022-09-03', 9, 'Netflix', '/static/images/little_women.jpg'),
    ('The King : Eternal Monarch (2020)', 16, 'Complete', '2020-04-17', 9, 'Netflix', '/static/images/king_eternal_monarch.jpg'),
    ('My Roommate Is a Gumiho (2021)', 16, 'Complete', '2021-05-26', 9, 'Netflix, Viki, Prime Video, Apple TV, TVING & iQIYI', '/static/images/roommate_is_gumiho.jpg'),
    ('Her Private Life (2019)', 16, 'Complete', '2019-04-10', 8.5, 'Netflix, Viki, Prime Video, Apple TV, WeTV & iQIYI', '/static/images/her_private_life.jpg'),
    ('Run On (2020)', 16, 'Complete', '2020-12-16', 9.5, 'Netflix', '/static/images/runon.jpg')


