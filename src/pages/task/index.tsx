import {Container, Paper, Typography, useMediaQuery, useTheme,} from "@mui/material";
import mars from "../../assets/mars.svg";
import saturn from "../../assets/saturn.svg";
import {Cloud} from "../../library/Cloud";
import {Planet} from "../../library/Planet";
import {Planets} from "../../library/Planets";
import {Stage} from "../../library/Stage";
import {StarRating} from "../../library/StarRating";
import {useState} from "react";

/**
 * TaskPage
 * A page containing components and a Rating component
 * that we would like you to customize.
 * @returns React JSX.Element
 */
export default function TaskPage() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [rating, setRating] = useState(0);
    const onChange = (value: number) => {
        setRating(value);
    }

    return (
        <Stage background="#023047">
            <Cloud/>
            <Planets>
                <Planet
                    size={isDesktop ? "large" : "small"}
                    img={saturn}
                    position="left"
                />
                <Planet
                    size={isDesktop ? "large" : "small"}
                    img={mars}
                    position="right"
                />
            </Planets>
            <Container maxWidth="sm" sx={{textAlign: "center", zIndex: 10}}>
                <Paper
                    sx={{
                        textAlign: "center",
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(5px)",
                        mb: 10,
                        py: 3,
                    }}
                >
                    <Typography variant="body1" color="#fff" gutterBottom>
                        Star Rating
                    </Typography>
                    <StarRating value={rating} onChange={onChange}/>
                </Paper>
            </Container>
        </Stage>
    );
}
