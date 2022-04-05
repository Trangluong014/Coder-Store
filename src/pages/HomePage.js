import { StackedBarChart } from "@mui/icons-material";
import { Alert, Container, Stack, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";
import LoadingScreen from "../components/LoadingScreen";
import Logo from "../components/Logo";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import ProductSort from "../components/ProductSort";
import MainHeader from "../layouts/MainHeader";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await apiService.get("/products");
        setProducts(response.data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      {/* <h1>HomePage</h1>
      <Logo sx={{ width: 200, height: 200 }} disableLink={true} /> */}
      <Stack>
        <ProductFilter />
      </Stack>
      <Stack sx={{ flexGrow: 1 }}>
        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          mb={2}
        >
          <ProductSearch />
          <ProductSort />
        </Stack>
        <Box sx={{ position: "relative", height: 1 }}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <ProductList products={products} />
              )}
            </>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default HomePage;
