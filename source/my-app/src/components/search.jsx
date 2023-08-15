import React, { useState } from "react";
import { Form, Grid, Input } from "semantic-ui-react";

const Search = ({ setSearchQuery}) => {
  const [value, setValue] = useState("");

  const onFormSubmit = () => {
    setSearchQuery(value)
  }

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search"> Search recipes wwith our recipe</h2>
        <h4> Input recipes seperated by coma</h4>
        <Form onSubmit={onFormSubmit}>
          <Input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            placeholder="tomota,potato,pizza"
            action={{ icon: "search", color: "blue" }}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Search;
