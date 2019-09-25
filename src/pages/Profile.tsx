import * as React from "react";
import styled from "styled-components";
import { User } from "../types";
import { state, watch, dispatch } from "../model";
import Loading from "../components/Loading";
import Center from "../components/Center";
import Albums from "../components/Albums";
import * as api from "../api";

const getUser = async (username: string) => {
  const user = await api.getUser(username);
  state.users[username] = user;
};

const getAlbums = async (username: string) => {
  const albums = await api.getUserAlbums(username);
  state.albums[username] = albums;
};

const ProfileImage = styled.img`
  border-radius: 150%;
`;

const ProfileName = styled.h1`
  margin-bottom: 0;
`;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Profile: React.FC<{ username: string }> = ({ username }) => {
  const user = watch(state.users[username]);
  const albums = watch(state.albums[username]);

  React.useEffect(() => {
    dispatch(getUser)(username);
    dispatch(getAlbums)(username);
  }, []);

  if (user == null) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  }

  return (
    <StyledProfile>
      <ProfileImage src={user.image} />
      <ProfileName>{user.name}</ProfileName>
      <p>Top albums in last 7 days</p>
      {albums && <Albums albums={albums} />}
    </StyledProfile>
  );
};

export default Profile;
