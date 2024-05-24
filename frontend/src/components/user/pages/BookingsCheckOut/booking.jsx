import React, { useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import './StepForm.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const BookingCheckOut = () => {
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [lineBgColor, setLineBgColor] = useState('#ccc');

  const nextStep = () => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step]);
    }
    setStep(step + 1);
    setLineBgColor('#007bff');
  };

  const prevStep = () => {
    if (completedSteps.includes(step - 1)) {
      setCompletedSteps(completedSteps.filter(s => s !== step - 1));
    }
    setStep(step - 1);
    setLineBgColor('#ccc');
  };

  const ProgressBar = () => {
    const icons = [<PersonIcon />, <HomeIcon />, <CreditCardIcon /> ,<CalendarMonthIcon />];
    return (
      <div className="progress-bar">
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <div className={`icon ${completedSteps.includes(index + 1) ? 'completed' : ''}`}>
              {completedSteps.includes(index + 1) ? <CheckIcon /> : icon}
            </div>
            {index !== icons.length - 1 && (
              <div
                className="line"
                style={{ backgroundColor: index + 1 === step ? lineBgColor : '#ccc' }}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const StepOne = () => (
    <div className="step" style={{ textAlign: 'center' }}>
      <form>
        <div style={{ margin: '20px' }}>
          <PersonIcon style={{ fontSize: 30 }} />
          <Typography style={{ fontSize: '25px' }}>
          Let's start with the  persnol details
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "30px" }} >
          <Button
            onClick={nextStep}
            variant="contained"
            style={{
              padding: '14px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );

  const StepTwo = () => (
    <div className="step" style={{ textAlign: 'center' }}>
      <form>
        <div style={{ margin: '20px' }}>
          <HomeIcon style={{ fontSize: 30 }} />
          <Typography style={{ fontSize: '25px' }}>
            Address
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Flat House No"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Land Mark"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="city"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="zip code"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "30px" }}>
          <Button
            onClick={prevStep}
            variant="contained"
            style={{
              padding: '14px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            variant="contained"
            style={{
              padding: '10px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );

  const StepThree = () => (
    <div className="step" style={{ textAlign: 'center' }}>
      <form>
        <div style={{ margin: '20px' }}>
          <CalendarMonthIcon style={{ fontSize: 30 }} />
          <Typography style={{ fontSize: '25px' }}>
           Appointment
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <Button
            onClick={prevStep}
            variant="contained"
            style={{
              padding: '14px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            variant="contained"
            style={{
              padding: '10px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
  const StepFour = () => (
    <div className="step" style={{ textAlign: 'center' }}>
      <form>
        <div style={{ margin: '20px' }}>
          <CreditCardIcon style={{ fontSize: 30 }} />
          <Typography style={{ fontSize: '25px' }}>
           Payment
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile No"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'inherit',
                },
                '& .MuiInputLabel-root.MuiFormLabel-filled': {
                  color: 'inherit',
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <Button
            onClick={prevStep}
            variant="contained"
            style={{
              padding: '14px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Previous
          </Button>
          <Button
            onClick={nextStep}
            variant="contained"
            style={{
              padding: '10px 30px',
              fontSize: '11px',
              borderRadius: '1px',
              color: '#fff',
              background: "black"
            }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );

 


  return (
    <Grid container spacing={2}
      style={{
        marginTop: "50px",
        marginBottom: "40px",

      }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Card elevation={0} style={{
   padding:"40px",
   borderRadius:"20px",
   boxShadow:" rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }
       
        }>
        <div className="step-form">
          <ProgressBar />
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step===4 && <StepFour/>}
  
        </div>
        </Card>
       
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default BookingCheckOut;
