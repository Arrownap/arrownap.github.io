import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';
import Switch from '@mui/material/Switch';
export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Manage the notifications"
        title="Notifications"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notifications
            </Typography>
            
             <FormControlLabel control={<Switch defaultChecked />} 
             label="Email" />
               <FormControlLabel control={<Switch defaultChecked />} 
             label="Push Notifications" />
              <FormControlLabel control={<Switch defaultChecked />} 
             label="Text Messages" />
                <FormControlLabel control={<Switch defaultChecked />} 
             label="Phone calls" />
           
           
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Messages
            </Typography>
            <FormControlLabel control={<Switch defaultChecked />} 
             label="Email" />
              <FormControlLabel control={<Switch  />} 
             label="Push Notifications" />
              <FormControlLabel control={<Switch defaultChecked />} 
             label="Phone calls" />
            
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Card>
  </form>
);
