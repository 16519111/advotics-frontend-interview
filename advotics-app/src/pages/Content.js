import React from "react"
import { AppBar, Toolbar, Typography, Button, Avatar, Paper, Grid, Menu, MenuItem } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { HiOutlineCalendar, HiOutlineDotsVertical } from "react-icons/hi";
import ShoppingIcon from "../images/shopping-logo.JPG";
import Graph from "../components/Graph";
import { dummySKUItem } from "../consts/SKUItem";
import Calendar from "../components/Calendar";

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
    },
    graphMarginBottom: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "3%"
    },
    skuImage: {
        width: "100px",
        marginRight: theme.spacing(1)
    },
    mkuPaper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },
    spacingPaper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
  }));
function DashboardContent() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const generateSKUItem = (product_name, image, price, quantity_sold) => {
        return (
            <Paper className={classes.mkuPaper}>
                <img src={image} alt="img-error" className={classes.skuImage}/>
                <div>
                    <Typography style={{ fontWeight: "bold" }}>{product_name}</Typography>
                    <div className={classes.rowFlex}>
                        <Typography variant="body2" color="textSecondary">Rp {price}</Typography>
                        <Typography>{quantity_sold}</Typography>
                    </div>
                </div>
            </Paper>
        )
    }
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
                        <div className={classes.mkuPaper}>
                            <HiOutlineCalendar className={classes.spacingPaper}/>
                            <Typography className={classes.spacingPaper}>
                                Period
                            </Typography>
                            <Typography className={classes.spacingPaper}>
                                11 September 2018 - 14 September 2018
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Calendar />
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
                        <div className={classes.graphMarginBottom}>
                            <Typography>
                                AVERAGE PURCHASE VALUE
                            </Typography>
                            <HiOutlineDotsVertical/>
                        </div>
                        <Graph/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                        <div className={classes.graphMarginBottom}>
                            <Typography>
                                BEST SELLING SKU
                            </Typography>
                            <HiOutlineDotsVertical/>
                        </div>
                        {dummySKUItem.map((item) => {
                            return (
                                generateSKUItem(item.product_name, item.image, item.price, item.quantity_sold)
                            )
                        })}
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                        <div className={classes.graphMarginBottom}>
                            <Typography>
                                TOP COMPETITOR SKU
                            </Typography>
                            <HiOutlineDotsVertical/>
                        </div>
                        {dummySKUItem.map((item) => {
                            return (
                                generateSKUItem(item.product_name, item.image, item.price, item.quantity_sold)
                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardContent