import { Box, ThemeProvider, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";
import { CategoryList } from "./features/categories/CategoryList";
import { CategoryCreate } from "./features/categories/CategoryCreate";
import { CategoryEdit } from "./features/categories/CategoryEdit";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <h1>Welcome!</h1>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/categories/create" element={<CategoryCreate />} />
            <Route path="/categories/edit/:id" element={<CategoryEdit />} />

            <Route
              path="*"
              element={
                <Box>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not found</Typography>
                </Box>
              }
            />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
