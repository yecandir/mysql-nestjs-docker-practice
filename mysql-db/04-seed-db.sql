USE DOCKERIZED;
INSERT INTO users (id, fullname, photo)
values 
(1, 'YEC', 'test'),
(2, 'YC', 'test'),
(3, 'YE', 'test');


INSERT INTO rooms (createdAt)
values 
(now()),
(now() - interval 1 day),
(now() - interval 2 day);

INSERT INTO messages (content, senderId, receiverId, roomId, createdAt)
values
('this is first test message from 1 -> 2 in room 1', 1, 2, 1, now() - interval 5 hour),
('this is first test message from 2 -> 1 in room 1', 2, 1, 1, now() - interval 4 hour),
('this is second test message from 1 -> 2 in room 1', 1, 2, 1, now() - interval 3 hour),
('this is second test message from 2 -> 1 in room 1', 2, 1, 1, now() - interval 2 hour),
('this is third test message from 1 -> 2 in room 1', 1, 2, 1, now() - interval 1 hour),
('this is third test message from 2 -> 1 in room 1', 2, 1, 1, now()),
('this is first test message from 1 -> 3 in room 1', 1, 3, 2, now() - interval 5 hour),
('this is first test message from 3 -> 1 in room 1', 3, 1, 2, now() - interval 4 hour),
('this is second test message from 1 -> 3 in room 1', 1, 3, 2, now() - interval 3 hour),
('this is second test message from 3 -> 1 in room 1', 3, 1, 2, now() - interval 2 hour),
('this is third test message from 1 -> 3 in room 1', 1, 3, 2, now() - interval 1 hour),
('this is third test message from 3 -> 1 in room 1', 3, 1, 2, now());
