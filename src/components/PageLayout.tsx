import { ReactNode } from "react";
import Header from "./Header";
import { styled } from "@mui/material";

const PageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to top,
    #ececec,
    #f1f1f1,
    #f5f5f5,
    #fafafa,
    #ffffff
  );
  color: ${(props) => props.theme.palette.text.primary};
`;

type Props = { children: ReactNode; disableHeader?: boolean };

const PageLayout = ({ children, disableHeader = false }: Props) => {
  return (
    <PageContainer>
      {!disableHeader && <Header />}
      <main style={{ padding: "30px 40px", flex: 1 }}>{children}</main>
    </PageContainer>
  );
};

export default PageLayout;
