import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="??"
      >
        <Tab
          value="one"
          label="Today's Steps"
          wrapped
        />
        <Tab value="two" label="This Month's Carbon Steps" />
        <Tab value="three" label="Yearly Carbon Steps" />
      </Tabs>
    </Box>
  );
}
