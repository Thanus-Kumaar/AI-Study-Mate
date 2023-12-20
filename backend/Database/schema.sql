/* Database Schema
Tables:
  User
    User_ID int auto increment
    Name varchar(255)
    Email varchar(255)
    Password varchar(30)
    Profession varchar(255)
    primary key(Name, Email)

  Lesson
    Lesson_ID int primary key
    Reference_Book varchar(255)
    Lesson_wiki varchar(255)

  Topic
    Topic_ID int
    Name varchar(255)
    Date date
    Content text
    Topic_wiki varchar(255)
    Topic_Link_1 varchar(255)
    Topic_Link_2 varchar(255)
    User_ID int
    Lesson_ID int
    primary key(Name, Date)
    foregin key User(User_ID)
    foregin key Lesson(Lesson_ID)
*/

create table if not exists User(
  User_ID int auto increment,
  Name varchar(255),
  Email varchar(255),
  Password varchar(30),
  Profession varchar(255),
  primary key(Name, Email)
  );

create table if not exists Lesson(
  Lesson_ID int primary key,
  Reference_Book varchar(255),
  Lesson_wiki varchar(255)
);

create table if not exists Topic(
  Topic_ID int,
  Name varchar(255),
  Date date,
  Content text,
  Topic_wiki varchar(255),
  Topic_Link_1 varchar(255),
  Topic_Link_2 varchar(255),
  User_ID int,
  Lesson_ID int,
  primary key(Name, Date),
  foregin key User(User_ID),
  foregin key Lesson(Lesson_ID)
);