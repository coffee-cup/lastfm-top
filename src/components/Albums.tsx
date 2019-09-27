import * as React from "react";
import styled from "styled-components";
import { Album as AlbumModel } from "../types";
import { EmptyLink } from "./Link";

const StyledAlbum = styled.div<{ gridMode: boolean }>`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;

  ${props => props.gridMode && "padding-bottom: 0;"};
`;

const AlbumInfo = styled.div`
  padding-left: 2rem;

  @media only screen and (max-width: 600px) {
    padding-left: 1rem;
  }
`;

const AlbumImage = styled.img`
  @media only screen and (max-width: 600px) {
    max-width: 8rem;
  }

  @media only screen and (max-width: 400px) {
    max-width: 7rem;
  }
`;

const AlbumName = styled.h2`
  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Artist = styled.span`
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const Playcount = styled.span``;

const Album: React.FC<{ album: AlbumModel; gridMode: boolean }> = ({
  album,
  gridMode,
}) => (
  <EmptyLink href={album.url} target="_blank">
    <StyledAlbum gridMode={gridMode}>
      <AlbumImage src={album.image} />
      {!gridMode && (
        <AlbumInfo>
          <AlbumName>{album.name}</AlbumName>
          <Artist>{album.artist}</Artist>
          {" - "}
          <Playcount>{album.playcount} plays</Playcount>
        </AlbumInfo>
      )}
    </StyledAlbum>
  </EmptyLink>
);

const StyledAlbums = styled.div<{ gridMode: boolean }>`
  margin-top: 2rem;

  ${props => props.gridMode && "box-shadow: 0px 0px 11px 4px #33333359"};
  ${props => props.gridMode && "display: grid"};
  ${props => props.gridMode && "grid-template-columns: repeat(3, 1fr);"};
`;

const Albums: React.FC<{ albums: AlbumModel[]; listMode: boolean }> = props => (
  <StyledAlbums gridMode={!props.listMode}>
    {props.albums.map(a => (
      <Album key={a.name} album={a} gridMode={!props.listMode} />
    ))}
  </StyledAlbums>
);

export default Albums;
