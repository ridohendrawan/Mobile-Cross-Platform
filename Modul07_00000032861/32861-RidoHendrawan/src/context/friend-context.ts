import React from 'react'

export interface Friend {
	id: string,
	name: string,
	image: string
}

interface Context {
	friends: Friend[],
	addFriend: (friendName: string, friendImage: string) => void,
  updateFriend: (id: string, name: string) => void;
  deleteFriend: (id: string) => void;
}

const FriendsContext = React.createContext<Context>({
	friends: [],
	addFriend: ()=> {},
	updateFriend: ()=> {},
	deleteFriend: ()=> {},
})

export default FriendsContext