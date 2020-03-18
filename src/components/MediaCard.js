import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img``;

const Title = styled.p``;

export default function MediaCard(props) {
  let title = props.media.title.english;
  if (title === null) {
    title = props.media.title.romaji;
  }

  return (
    <Card className={props.className}>
      <Image src={props.media.coverImage.medium} />
      <Title>{title}</Title>
    </Card>
  );
}
