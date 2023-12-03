import React from "react";
import PageLayout from "../../components/PageLayout";
import { Grid, Typography, styled } from "@mui/material";

const DashboardGrid = styled(Grid)``;

const MainCol = styled(Grid)`
  border: 1px solid blue;
`;
const SideCol = styled(Grid)`
  border: 1px solid green;
`;

const QuickStat = styled(Grid)`
  border-radius: 20px;
  background-color: green;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px 25px 15px;
`;

const QuickStatsWrap = styled(Grid)`
  height: 120px;
  gap: 20px;
`;

type Props = {};

const Dashboard = (props: Props) => {
  const renderTitleRow = () => {
    return (
      <Grid item xs={12}>
        <Typography variant="h3" fontWeight={600}>
          👋 Hi Anthony, <span style={{ fontWeight: 300 }}>Welcome Back</span>
        </Typography>
        <Typography variant="h6" mt={1}>
          Invest your money with small risk!
        </Typography>
      </Grid>
    );
  };

  const renderQuickStatsRow = () => {
    const stats = [
      {
        title: `Today's Return`,
        bg: "linear-gradient(to left top, #ffd7d7, #ffd9c2, #ffdbae, #ffdd99, #ffdf84);        ",
        value: "34.32",
      },
      {
        title: `Total Return`,
        bg: "linear-gradient(to left top, #c7d5fd, #d1d4ff, #dcd2ff, #e7d1ff, #f3cffc);",
        value: "124.11",
      },
      {
        title: `Current Balance`,
        bg: "linear-gradient(to left top, #a6e7f6, #aceaf4, #b2ecf3, #b8eff1, #bff1f0);",
        value: "3334.29",
      },
    ];
    return (
      <QuickStatsWrap
        container
        item
        xs={12}
        sx={{ flexWrap: { sm: "nowrap" } }}
      >
        {stats.map(({ title, bg, value }) => {
          return (
            <QuickStat item xs={12} sm={4} sx={{ backgroundImage: bg }}>
              <Typography>{title}</Typography>
              <Typography variant="h4" fontWeight={600}>
                ${value}
              </Typography>
            </QuickStat>
          );
        })}
      </QuickStatsWrap>
    );
  };

  return (
    <PageLayout>
      <DashboardGrid
        container
        gap={2}
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
      >
        <MainCol container item xs={12} md={9} gap={2}>
          {renderTitleRow()}
          {renderQuickStatsRow()}
        </MainCol>
        <SideCol container xs={12} md={3} gap={2}></SideCol>
      </DashboardGrid>
    </PageLayout>
  );
};

export default Dashboard;
