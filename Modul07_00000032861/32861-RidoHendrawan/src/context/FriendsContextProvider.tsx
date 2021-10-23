import React, { useState } from "react";
import FriendsContext, { Friend } from "./friend-context";

const FriendsContextProvider: React.FC = (props) => {
  const [friends, setFriends] = useState<Friend[]>([
    { id: 'f1', name: 'Lalisa Manoban', image: 'https://media.tabloidbintang.com/files/thumb/lisa-blackpink_dok-ig21.JPG/745'},
    { id: 'f2', name: 'Roseanne Park', image: 'https://awsimages.detik.net.id/community/media/visual/2021/06/06/rose-blackpink-1_43.jpeg?w=700&q=90' },
    { id: 'f3', name: 'Kim Jennie', image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/11/12/1523520390.jpg'},
    { id: 'f3', name: 'Kim Jisoo', image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/18/3439435064.jpg'}
  ]);

  const addFriend = (name: string, image: string) => {
    const newFriend: Friend = {
      id: Math.random().toString(),
      name: name,
      image: image,
    };

    setFriends((currFriends) => {
      return currFriends.concat(newFriend);
    });
  };

  const updateFriend = (id: string, name: string) => {
    const friendIdx = friends.findIndex((friend) => friend.id === id);
    const newFriends = [...friends];

    newFriends[friendIdx].name = name;
    setFriends(newFriends);
  };

  const deleteFriend = (id: string) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <FriendsContext.Provider
      value={{ friends, addFriend, updateFriend, deleteFriend }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsContextProvider;
