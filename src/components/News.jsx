import React,{useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import {useStyles} from '../styles/NewsCSS';

// api data
import {fortniteAr} from '../config/configAPI';

const Fortnite = fortniteAr[0];

const newsAPI = (news , setNews) => {
    Fortnite.NewsBR("fr")
  .then(res => {
    setNews(res.data.motds);
  }).catch(err => {
    console.log(err);
  })
}
// fin


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const News = () => {
    // ajout useState
    const [news, setNews] = useState([])
    // ajout donnée api
    if(news.length === 0){
        newsAPI(news, setNews); 
    }

    const maxSteps = news.length;
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    //console.log(news);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
        {news.length === 0 ? (
          null  
        ) : (
            <div>
            <Paper square elevation={0} className={classes.header}>
        <Typography>{news[activeStep].title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {news.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.image} alt={step.id} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      </div>
        )}

    </div>
  );
}

export default News;
