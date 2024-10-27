import React from "react";
import { Paper, Stack, Box, Typography } from "@mui/material";
import VerticalProgressLine from "../progress/verticalProgressLine";

interface PotCardProps {
  title: string;
  currentAmount: number;
  totalAmount: number;
  currencySymbol: string;
  color?: "green" | "blue" | "red" | "white" | "black" | "yellow" | "orange"; // Optional color options
  onClick?: () => void; // Optional click handler
}

// Define an array of default colors
const defaultColors: Array<PotCardProps["color"]> = [
  "green",
  "blue",
  "red",
  "yellow",
  "orange",
];

const PotCard: React.FC<PotCardProps> = ({
  title,
  currentAmount,
  totalAmount,
  currencySymbol,
  color,
  onClick, // Destructure onClick prop
}) => {
  // Select a random color from defaultColors if color prop is not provided
  const selectedColor =
    color ?? defaultColors[Math.floor(Math.random() * defaultColors.length)];

  let specifiedColor;
  switch (selectedColor) {
    case "red":
      specifiedColor = "#9e0c39"; // Red color
      break;
    case "blue":
      specifiedColor = "#007bff"; // Blue color
      break;
    case "yellow":
      specifiedColor = "#ffcc00"; // Yellow color
      break;
    case "green":
      specifiedColor = "#28a745"; // Green color
      break;
    case "orange":
      specifiedColor = "#ff7f50"; // Orange color
      break;
    case "black":
      specifiedColor = "#000000"; // Black color
      break;
    case "white":
      specifiedColor = "#ffffff"; // White color
      break;
    default:
      specifiedColor = "#ccc"; // Default color if none match
      break;
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: 1,
        display: "flex",
        height: "100%",
        cursor: onClick ? "pointer" : "default", // Change cursor to pointer if onClick is provided
        transition: "0.2s ease", // Transition effect
        "&:hover": {
          boxShadow: "inset 0px 0px 1px green", // Add shadow effect
          border: "1px solid green",
        },
      }}
      onClick={onClick} // Attach onClick event
    >
      <Stack direction={"row"} flex={1} gap={2} alignItems="center">
        <VerticalProgressLine
          progress={(currentAmount / totalAmount) * 100}
          color={specifiedColor} // Use specifiedColor here
        />
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            color={specifiedColor} // Use specifiedColor here
            sx={{
              lineHeight: 1.2,
            }}
          >
            {currentAmount}
            {currencySymbol}
          </Typography>

          <Typography variant="subtitle2" sx={{ lineHeight: 1 }}>
            {totalAmount}
            {currencySymbol}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default PotCard;
