import * as React from "react";
import styled from "styled-components";
import { User } from "../types";
import { state, watch, local, dispatch, Period } from "../model";
import Loading from "../components/Loading";
import Center from "../components/Center";
import Tabs from "../components/Tabs";
import Albums from "../components/Albums";
import { EmptyLink } from "../components/Link";
import * as api from "../api";

const getUser = async (username: string) => {
  const user = await api.getUser(username);
  state.users[username] = user;
};

const getAlbums = async (username: string, period: string) => {
  const albums = await api.getUserAlbums(username, period);

  if (!state.albums[period]) {
    state.albums[period] = {};
  }

  state.albums[period][username] = albums;
};

const selectPeriod = (period: Period) => {
  local.selectedPeriod = period;
};

const ProfileImage = styled.img`
  border-radius: 150%;
`;

const ProfileName = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Desc = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.8rem;
`;

const StyledProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Profile: React.FC<{ username: string }> = ({ username }) => {
  const user = watch(state.users[username]);
  const period = watch(local.selectedPeriod)!;
  const albums = watch(state.albums[period][username]) || [];

  React.useEffect(() => {
    dispatch(getUser)(username);
    dispatch(getAlbums)(username, period);
  }, [period]);

  if (user == null) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  }

  const options: Array<{ value: string; id: Period }> = [
    { value: "7 days", id: "7day" },
    { value: "month", id: "1month" },
    { value: "year", id: "12month" },
    { value: "all time", id: "overall" },
  ];

  return (
    <StyledProfile>
      <EmptyLink href={user.url} target="_blank">
        <ProfileImage src={user.image} />
        <ProfileName>{user.name}</ProfileName>
      </EmptyLink>
      <Desc>Top albums in last</Desc>
      <Tabs
        options={options}
        selected={period}
        onChange={value => dispatch(selectPeriod)(value as Period)}
      />
      {albums && albums.length > 0 ? <Albums albums={albums} /> : <Loading />}
    </StyledProfile>
  );
};

export default Profile;
