// src/pages/Dashboard.tsx
import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";

import { CardComponent } from "../../components/card/Card";
import { TransactionList } from "../../components/list/List";
import VerticalProgressLine from "../../components/progress/verticalProgressLine";
import PotCard from "../../components/card/potCard";
import { useTheme } from "@mui/material/styles";

import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export const Dashboard: React.FC = () => {
  const currencySymbol = "₺"; // Define your currency symbol here
  const currentBalance = `4,836.00${currencySymbol}`;
  const monthlyIncome = `2,500.00${currencySymbol}`;
  const monthlyExpenses = `1,750.00${currencySymbol}`;
  const theme = useTheme();
  // Transaction data with avatar URLs
  const transactions = [
    {
      id: 1,
      name: "John Doe",
      value: `$100.00${currencySymbol}`,
      date: "2024-10-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      value: `-${200.0}${currencySymbol}`,
      date: "2024-10-02",
    },
    // Add more transactions as needed
  ];

  const pots = [
    {
      title: "Bilgisayar",
      currentAmount: 20,
      totalAmount: 100,
    },
    {
      title: "Kitap",
      currentAmount: 50,
      totalAmount: 200,
    },
    {
      title: "Yemek",
      currentAmount: 30,
      totalAmount: 150,
    },
    {
      title: "Ulaşım",
      currentAmount: 10,
      totalAmount: 15,
    },
  ];

  return (
    <Box>
      {/*MARK: HEADER */}
      <Stack direction={"row"} spacing={2}>
        <CardComponent value="Current Balance" title="Available funds">
          <Typography variant="h4" color="primary">
            {currentBalance}
          </Typography>
        </CardComponent>

        <CardComponent value="Monthly Income" title="Income for this month">
          <Typography variant="h4" color="success.main">
            {monthlyIncome}
          </Typography>
        </CardComponent>

        <CardComponent value="Monthly Expenses" title="Expenses for this month">
          <Typography variant="h4" color="error.main">
            {monthlyExpenses}
          </Typography>
        </CardComponent>
      </Stack>

      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardComponent
              value="Kumbaralar"
              onButtonClick={() => {
                alert("hi");
                //!MARK: Pots
              }}
            >
              <Grid container spacing={2}>
                {pots.map((pot, index) => (
                  <Grid item xs={12} md={6} key={pot.title}>
                    <PotCard
                      title={pot.title}
                      currentAmount={pot.currentAmount}
                      totalAmount={pot.totalAmount}
                      currencySymbol={currencySymbol}
                      onClick={() => {
                        console.log("hi");
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardComponent>
          </Grid>

          <Grid item xs={8}>
            <CardComponent
              value="Transactions" //! MARK: Transactions
              title="Recent transaction history"
              onButtonClick={() => {
                alert("hello");
              }}
            >
              <TransactionList transactions={transactions} />
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
