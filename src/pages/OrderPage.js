import React, { useState, useEffect } from "react";
import apiService from "../app/apiService";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { fCurrency } from "../utils";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const response = await apiService.get("/orders");
        setOrders(response.data);
        setError("");
        console.log(error);
        console.log(loading);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    getOrders();
  }, []);
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(({ id, user, totalPrice }) => (
              <TableRow key={id}>
                <TableCell>
                  <Typography variant="body2" nowrap>
                    {id}
                  </Typography>
                </TableCell>
                <TableCell>{user?.username}</TableCell>
                <TableCell>{fCurrency(totalPrice)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default OrderPage;
