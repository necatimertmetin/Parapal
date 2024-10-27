// src/components/TransactionList.tsx
import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";

// Define the type for transaction props
interface Transaction {
  id: number;
  avatar?: string;
  name: string;
  value: string; // Keep this as string for display purposes
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

// TransactionList component
export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  return (
    <List>
      {transactions.map((transaction) => {
        // Parse the value to a number and determine the color
        const transactionValue = parseFloat(
          transaction.value.replace(/[$,]/g, "")
        );
        const valueColor =
          transactionValue >= 0 ? "success.main" : "error.main";

        return (
          <React.Fragment key={transaction.id}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "5px 0px",
              }}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar
                    src={transaction.avatar || transaction.name}
                    alt={transaction.name}
                  />
                </ListItemAvatar>
                <Typography variant="h6">{transaction.name}</Typography>
              </Stack>

              <Stack alignItems={"flex-end"}>
                <Typography
                  component="span"
                  variant="h5"
                  color={valueColor} // Use the dynamic color here
                >
                  {transaction.value}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  {transaction.date}
                </Typography>
              </Stack>
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};
