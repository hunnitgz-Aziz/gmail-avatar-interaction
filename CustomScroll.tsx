import * as React from "react";
import { Frame, Page } from "framer";
import styled from "styled-components";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

const Avatar = styled.div`
  width: 128px;
  border-radius: 256px;
  height: 128px;
  background: gray;
  color: #000;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export function CustomScroll() {
  return (
    <Page>
      <Avatar>1</Avatar>
      <Avatar>2</Avatar>
      <Avatar>3</Avatar>
    </Page>
  );
}
