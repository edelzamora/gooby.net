import React from "react";
import CheckoutCard from "../components/CheckoutCard";
import data from "../checkoutData";
import { Container, Grid } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function SinglePet() {
  const { pet } = useParams();
  return (
    <Container
      size="xl"
      style={{
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Select from a variety of {pet}!</h1>
      <Grid>
        <Grid.Col md={6} lg={3}>
          <CheckoutCard data={data} />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <CheckoutCard data={data} />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <CheckoutCard data={data} />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <CheckoutCard data={data} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
