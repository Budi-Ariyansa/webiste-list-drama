create table list_kdrama (
    kdrama_id serial primary key,
    kdrama_name varchar(100) unique not null,
    kdrama_total_episode integer,
    kdrama_status varchar(100) not null,
    kdrama_publish_date date,
    kdrama_rating float,
    kdrama_where_to_watch varchar(500),
    kdrama_image_url varchar(1000),
    kdrama_guarantee integer,
    create_time timestamp,
    update_time timestamp,
    kdrama_duration varchar(50) null,
    kdrama_content_rating varchar(100) null
)

drop table list_kdrama

insert into list_kdrama (kdrama_name, kdrama_total_episode, kdrama_status, kdrama_publish_date, kdrama_rating, kdrama_where_to_watch, kdrama_image_url, kdrama_guarantee, create_time, update_time, kdrama_duration, kdrama_content_rating)
values 
    ('Business Proposal (2022)', 12, 'Complete', '2022-02-28', 10, 'Netflix & Wavve', 'https://i.pinimg.com/564x/0f/52/ab/0f52ab7afa119ac22a103244208e42d4.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Revenant (2023)', 12, 'Complete', '2023-07-23', 10, 'Disney+ Hotstar & Hulu', 'https://i.pinimg.com/564x/8a/a1/63/8aa1630c9075229ba400a4217a7eadd7.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Our Beloved Summer (2021)', 16, 'Complete', '2021-12-06', 10, 'Netflix & Wavve', 'https://i.pinimg.com/564x/76/3c/0c/763c0c6c03db7f74bfab0561d96b73d6.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('King the Land (2023)', 16, 'Complete', '2023-05-17', 10, 'Netflix & TVING', 'https://i.pinimg.com/564x/5a/41/a1/5a41a1a1e09a2f676e28d92881c2b8f3.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Daily Dose of Sunshine (2023)', 12, 'Complete', '2023-11-03', 9.5, 'Netflix', 'https://i.pinimg.com/564x/a1/c9/34/a1c93487fe4ee71f57a2f143acf62b37.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Moving (2023)', 16, 'Complete', '2023-08-09', 9, 'Disney+ Hotstar, Disney & Hulu', 'https://i.pinimg.com/564x/36/be/2f/36be2f357e390f12b06ddaf805b46973.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Suspicious Partner (2017)', 40, 'Complete', '2017-05-10', 9, 'Netflix, WeTv, SBS World, iQIYI, Apple TV, Viki', 'https://i.pinimg.com/564x/20/0c/f8/200cf8d84fbcee479ae04f200dd965cc.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Doom at Your Service (2021)', 16, 'Complete', '2021-05-10', 9, 'Netflix, Viki, Prime Video & TVING', 'https://i.pinimg.com/564x/51/88/0d/51880d559daeb50bfebfae5f97e47df3.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Love All Play (2022)', 16, 'Complete', '2022-04-20', 9.5, 'Disney+ Hotstar & Disney', 'https://i.pinimg.com/564x/72/c6/01/72c6019f810164ba32120e279a492961.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Strong Woman Do Bong Soon (2017)', 16, 'Complete', '2017-02-24', 9.5, 'Netflix, Viki, Prime Video, Disney+ Hotstar, WeTV, iQIYI, Prime Video & Apple TV', 'https://i.pinimg.com/564x/dc/e9/43/dce943d195602872e9453eee2fe011b5.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Extraordinary Attorney Woo (2022) S1', 16, 'Complete', '2022-06-29', 9, 'Netflix', 'https://i.pinimg.com/564x/e9/f3/f7/e9f3f76afe49c98a8eeefa7c1c40d7c5.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Happiness (2021)', 12, 'Complete', '2021-11-05', 9, 'Netflix, WeTV, TVING, iQIYI & Viki', 'https://i.pinimg.com/564x/49/ea/8f/49ea8fb3d75bdcaaa0265a6cc88cba08.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Love to Hate You (2023)', 10, 'Complete', '2023-02-10', 9.5, 'Netflix', 'https://i.pinimg.com/564x/e1/fa/89/e1fa8957a194bb965118dfb4c8088713.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Mr Queen (2020)', 20, 'Complete', '2020-12-12', 9.5, 'Netflix, Viki, Hulu & Prime Video', 'https://i.pinimg.com/564x/ba/a6/a5/baa6a5cf28d70dde75423e268863f3b7.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Zombie Detective (2020)', 24, 'Complete', '2020-09-21', 8.5, 'Netflix & Viki', 'https://i.pinimg.com/564x/c3/40/61/c34061b40dc06cd0dbb363f099cca6b8.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Little Women (2022)', 12, 'Complete', '2022-09-03', 9, 'Netflix', 'https://i.pinimg.com/564x/33/e3/07/33e307e9376a3bb7f44b7fac579f54d9.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('The King : Eternal Monarch (2020)', 16, 'Complete', '2020-04-17', 9, 'Netflix', 'https://i.pinimg.com/564x/9c/12/1a/9c121a2612707d672a2f98384fec9435.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('My Roommate Is a Gumiho (2021)', 16, 'Complete', '2021-05-26', 9, 'Netflix, Viki, Prime Video, Apple TV, TVING & iQIYI', 'https://i.pinimg.com/564x/9d/66/6c/9d666c760954013459710e1df7bb63e1.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Her Private Life (2019)', 16, 'Complete', '2019-04-10', 8.5, 'Netflix, Viki, Prime Video, Apple TV, WeTV & iQIYI', 'https://i.pinimg.com/564x/d9/11/02/d9110298f35e7c69a17b86263149ea3b.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Run On (2020)', 16, 'Complete', '2020-12-16', 9.5, 'Netflix', 'https://i.pinimg.com/564x/30/9c/b5/309cb5733b75afd2309cd02b7ee83e10.jpg', 0, current_timestamp, current_timestamp, NULL, NULL)
    ('Welcome to Samdalri (2023)', 16, 'Ongoing (Belum nonton)', '2022-12-02', 0.0, 'Netflix', 'https://i.pinimg.com/736x/8b/59/f6/8b59f61f52ca172b5858ba5447124d9b.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('My Demon (2023)', 16, 'Ongoing (Belum nonton)', '2023-11-24', 0.0, 'Netflix', 'https://i.pinimg.com/736x/7c/06/d4/7c06d41c080a405e317d1c5cfc02712e.jpg', 0, current_timestamp, current_timestamp, NULL, NULL),
    ('Healer (2014)', 20, 'Complete', '2014-12-08', 9.0, 'Netflix, Viki, Apple TV, Prime Video, iQIYI & Kocowa', 'https://i.pinimg.com/564x/ab/1e/c0/ab1ec07d6e91a65521224d981b01be38.jpg', 1, current_timestamp, current_timestamp, NULL, NULL),
    ('Hometown Cha-Cha-Cha (2021)', 16, 'Complete', '2021-08-28', 9.0, 'Netflix & TVING', 'https://i.pinimg.com/564x/85/c5/51/85c551e58a84fff0359b2e3b7359316b.jpg', 1, current_timestamp, current_timestamp, NULL, NULL)



