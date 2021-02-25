import { AppBar, Toolbar, Typography, Button, Avatar, Paper, Grid } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { HiOutlineCalendar, HiOutlineDotsVertical } from "react-icons/hi";
import ShoppingIcon from "../images/shopping-logo.JPG"
import Graph from "../components/Graph"

const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: "5%"
    },
    titleFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    filterPaper: {
        display: "flex",
        flexDirection: "row",
        padding: "10px"
    },
    insightSummaryPaper: {
        backgroundColor: "#37B04C",
        color: "white"
    },
    spacing: {
        marginTop: "1.7%"
    },
    rowFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    paperPadding: {
        padding: "15px"
    },
    shoppingIcon: {
        width: "60px"
    }
  }));
function DashboardContent() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.titleFlex}>
                <Typography variant="h4" color="textSecondary">
                    Dashboard
                </Typography>
                <Accordion>
                    <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <HiOutlineCalendar/>
                        <Typography>
                            Period
                        </Typography>
                        <Typography>
                            11 September 2018 - 14 September 2018
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Period
                        </Typography>
                        <Typography>
                            11 September 2018 - 14 September 2018
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Accordion className={classes.spacing}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.insightSummaryPaper}
                >
                    <Typography>
                        MARKET INSIGHTS
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Period
                    </Typography>
                    <Typography>
                        11 September 2018 - 14 September 2018
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Grid container className={classes.spacing}>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                        <div className={classes.rowFlex}>
                            <Typography>
                                Sales Turnover
                            </Typography>
                            <HiOutlineDotsVertical/>
                        </div>
                        <div className={classes.rowFlex}>
                            <div>
                                <Typography>
                                    Rp 3,600,000
                                </Typography>
                                <Typography variant="caption">
                                    13.8% last period in products sold
                                </Typography>
                            </div>
                            <img src={ShoppingIcon} alt="img-error" className={classes.shoppingIcon}/>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className={classes.spacing} spacing={2}>
                <Grid item xs={6}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                        <Graph/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardContent