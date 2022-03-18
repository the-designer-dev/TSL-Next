import React, { useState } from "react";
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import image1 from '../assets/hotelimage2.jpeg'
import { borderRadius } from "@mui/system";
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 250) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const ReviewDiv = () => {
    return (
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} spacing={2} alignItems='center'>
                <Grid item xs={2} >
                    <Image src={image1} layout='responsive' sx={{ objectFit: "cover" }} />
                </Grid>
                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='p' fontWeight={600}>John Doe </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={"primary.main"} variant='p' fontWeight={300} fontSize={14}>January 12, 2022 </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography color={"primary.main"} variant='p' >
                    <ReadMore>
                        GeeksforGeeks: A Computer Science portal for geeks.
                        It contains well written, well thought and well explained
                        computer science, programming articles and quizzes.
                        It provides a variety of services for you to learn, so thrive
                        and also have fun! Free Tutorials, Millions of Articles, Live,
                        Online and Classroom Courses ,Frequent Coding Competitions,
                        Webinars by Industry Experts, Internship opportunities, and Job
                        Opportunities. Knowledge is power!
                    </ReadMore>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ReviewDiv;