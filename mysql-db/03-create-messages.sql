USE DOCKERIZED;
CREATE TABLE messages(
    id INT AUTO_INCREMENT,
    content VARCHAR(1000) NOT NULL,
    senderId INT NOT NULL,
    receiverId INT NOT NULL,
    roomId INT NOT NULL,
    createdAt timestamp NOT NULL,
    isDeleted BOOLEAN DEFAULT FALSE,ç
    PRIMARY KEY(id)
);