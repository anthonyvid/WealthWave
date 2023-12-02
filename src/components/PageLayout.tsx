import { ReactNode } from "react";
import Header from "./Header";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  border: 1px solid red;
`;

type Props = { children: ReactNode };

const PageLayout = ({ children }: Props) => {
  return (
    <PageContainer>
      <Header />
      <main>{children}</main>
    </PageContainer>
  );
};

export default PageLayout;
