import React from "react";
import { Typography, Paper, Stack, Button, Divider } from "@mui/material";
export const CardComponent: React.FC<{
  value?: string;
  title?: string;
  children?: React.ReactNode;
  onButtonClick?: () => void;
}> = ({ value, children, title, onButtonClick }) => (
  <Paper sx={{ flex: "1", padding: 2, position: "relative" }}>
    {(title || value || onButtonClick) && (
      <Stack direction={"row"} justifyContent={"space-between"}>
        {(title || value) && (
          <Stack direction={"column"} justifyContent={"space-between"}>
            {title && (
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            )}
            {value && (
              <Typography variant="h5" gutterBottom>
                {value}
              </Typography>
            )}
          </Stack>
        )}
        {onButtonClick && (
          <Stack direction={"column"} justifyContent={"space-between"}>
            <Button
              variant="text"
              size="small"
              sx={{ textTransform: "capitalize" }}
              onClick={onButtonClick}
            >
              Details
            </Button>
          </Stack>
        )}
      </Stack>
    )}

    {children}
  </Paper>
);
