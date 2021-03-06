import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';

export class GridDemo extends React.Component {
  static displayName = 'GridDemo';
  render() {
    return (
      <Grid>
        <GridItem span={8}>span = 8</GridItem>
        <GridItem span={4} rowSpan={2}>
          span = 4, rowSpan = 2
        </GridItem>
        <GridItem span={2} rowSpan={3}>
          span = 2, rowSpan = 3
        </GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={2}>span = 2</GridItem>
        <GridItem span={4}>span = 4</GridItem>
        <GridItem span={4}>span = 4</GridItem>
      </Grid>
    );
  }
}
