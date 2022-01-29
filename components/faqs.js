import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DeleteOutlined } from '@mui/icons-material';
import StyledButton from '../styledComponents/styledButton';
function FAQs(props) {
    const [faqs , setFAQs] = useState([])
    const [answer , setAnswer] = useState('')
    const [question , setQuestion] = useState('')
    function removeQuestion(question){
            setFAQs(faqs.filter((el) => {return question != el.faq_question}))
    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid container item>
                    <Grid item xs={12}>
                    {faqs.map((el) =>  (<Accordion sx={{'& .MuiAccordionSummary-root':{backgroundColor:'table.tableRow2' , '& .MuiAccordionSummary-content':{alignItems:'center' , wordWrap:'break-word'}} , '& .MuiAccordionDetails-root':{backgroundColor:'table.tableRow1'} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            {el.faq_question}
          </Typography>
          <Button onClick={() => removeQuestion(el.faq_question)}><DeleteOutlined/></Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {el.faq_answer}
          </Typography>
        </AccordionDetails>
      </Accordion>))}
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                    <Grid item xs={12}>
                        <StyledTextField onChange={(e) => {setQuestion(e.target.value)}} fullWidth placeholder='Write Question'/>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField onChange={(e) => {setAnswer(e.target.value)}} fullWidth multiline minRows={5} placeholder='Write Answer'/>
                    </Grid>
                    <Grid container item xs={12} justifyContent='flex-end'>
                        <StyledButton onClick={() => {setFAQs(faqs =>[...faqs , {faq_question: question, faq_answer:answer}])}}>Add Question</StyledButton>
                    </Grid>
                </Grid>


            </Grid>
        </Box>
    );
}

export default FAQs;