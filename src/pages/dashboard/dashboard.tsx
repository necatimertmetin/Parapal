// src/pages/Dashboard.tsx
import React from "react";
import {
  Typography,
  Paper,
  Box,
  Stack,
  Button,
  Divider,
  Grid,
} from "@mui/material";

// Example component 1
const ExampleComponent: React.FC<{
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  onButtonClick?: () => void; // Prop for handling the Details button click
}> = ({ title, children, subTitle, onButtonClick }) => (
  <Paper sx={{ flex: "1", padding: 2, position: "relative" }}>
    {onButtonClick && (
      <Button
        variant="outlined"
        size="small"
        sx={{ position: "absolute", top: 16, right: 16 }}
        onClick={onButtonClick} // Call the function when the button is clicked
      >
        Details
      </Button>
    )}

    {subTitle && (
      <Typography variant="subtitle2" color="textSecondary">
        {subTitle}
      </Typography>
    )}

    <Typography variant="h5" mt={2} gutterBottom>
      {title}
    </Typography>

    {children && (
      <>
        <Divider sx={{ marginBottom: 1 }} />
        {children}
      </>
    )}
  </Paper>
);
export const Dashboard: React.FC = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        {[1, 2, 3].map((item) => (
          <ExampleComponent
            key={item}
            title="Example Component"
            subTitle="You can add any content here!"
          />
        ))}
      </Stack>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ExampleComponent
              title="Example Component"
              subTitle="You can add any content here!"
            />
          </Grid>
          <Grid item xs={4}>
            <ExampleComponent
              title="Maaş"
              subTitle="Aylık Geliriniz!"
              onButtonClick={() => {
                alert("hello");
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <ExampleComponent
              title="Maaş"
              subTitle="You can add any content here!"
            />
          </Grid>
          <Grid item xs={4}>
            <ExampleComponent
              title="Example Component"
              subTitle="You can add any content here!"
            />
          </Grid>
          <Grid item xs={4}>
            <ExampleComponent
              title="Example Component"
              subTitle="You can add any content here!"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
