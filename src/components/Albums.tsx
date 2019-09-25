import * as React from "react";
import styled from "styled-components";
import { Album as AlbumModel } from "../types";

const StyledAlbum = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const AlbumInfo = styled.div`
  padding-left: 2rem;
`;

const AlbumImage = styled.img`
  width: 10rem;
  height: 10rem;
`;

const AlbumName = styled.h2``;
const Artist = styled.span`
  font-weight: bold;
`;
const Playcount = styled.span``;

const EmptyLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Album: React.FC<{ album: AlbumModel }> = ({ album }) => (
  <EmptyLink href={album.url}>
    <StyledAlbum>
      <AlbumImage src={album.image} />
      <AlbumInfo>
        <AlbumName>{album.name}</AlbumName>
        <Artist>{album.artist}</Artist>
        {" - "}
        <Playcount>{album.playcount} plays</Playcount>
      </AlbumInfo>
    </StyledAlbum>
  </EmptyLink>
);

const StyledAlbums = styled.div``;

const Albums: React.FC<{ albums: AlbumModel[] }> = props => (
  <StyledAlbums>
    {props.albums.map(a => (
      <Album key={a.name} album={a} />
    ))}
  </StyledAlbums>
);

export default Albums;
