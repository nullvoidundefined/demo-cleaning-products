import React, { ReactNode } from "react";
import styled from "styled-components/macro";

import { APPLICATION, COLOR } from "../constant";
import { Icon, IconType } from "./icon";

interface MessageCardProps {
  icon: IconType;
  text: string;
  title: string;

  height?: string;
  render?: () => ReactNode;
}

const MessageCardContainer = styled.div<{ height: string }>`
  align-items: center;
  background-color: #fafafa;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: ${({ height }) => (height ? height : "auto")};
  width: 100%;
`;

const MessageCardContent = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 240px;
`;

const MessageCardIconContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 100%;
  box-shadow: 0px 2px 3px rgba(201, 209, 215, 0.24);
  display: flex;
  max-height: 80px;
  min-height: 80px;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

const MessageCardHeader = styled.h5`
  font-weight: 700;
  padding: 20px 0 0 0;
`;

const MessageCardText = styled.p`
  max-width: 480px;
  text-align: center;
`;

const MessageCard = ({
  height = `calc(100vh - ${APPLICATION.HEADER_HEIGHT}px)`,
  icon,
  title,
  text,
}: MessageCardProps) => {
  return (
    <MessageCardContainer height={height}>
      <MessageCardContent>
        <MessageCardIconContainer>
          <Icon type={icon} color={COLOR.GRAYSCALE_MEDIUM} />
        </MessageCardIconContainer>
        <MessageCardHeader>{title}</MessageCardHeader>
        <MessageCardText>{text}</MessageCardText>
      </MessageCardContent>
    </MessageCardContainer>
  );
};

export { MessageCard };
