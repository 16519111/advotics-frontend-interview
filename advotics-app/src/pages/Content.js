import React from "react"
import { Typography, Button, Paper, Grid, Menu, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { HiOutlineDotsVertical } from "react-icons/hi";
import ShoppingIcon from "../images/shopping-logo.JPG"
import Graph from "../components/Graph"
import { dummySKUItem } from "../consts/SKUItem"
import Calendar from "../components/Calendar"
import { BiChevronDown } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";

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
        alignItems: "center",
    },
    insightSummaryPaper: {
        backgroundColor: "#37B04C",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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
    columnFlex: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
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
        width: "80px",
        marginRight: theme.spacing(1)
    },
    mkuPaper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    spacingPaper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    buttonText: {
        textAlign: "left"
    },
    calendarDivider: {
        marginTop: "3px",
        marginBottom: "3px",
        clear: "both",
        display: "block",
        width: "90%",
        marginLeft: "8px",
        marginRight: "8px"
    }
  }));
function DashboardContent() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [graphMenu, setGraphMenu] = React.useState("Last 6 Months");

    const handleChangeMenu = (option) => {
        setGraphMenu(option);
        handleClose();
    }

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
                    <Typography variant="body2" color="textSecondary">Rp {price} - {quantity_sold}</Typography>
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
                <Calendar />
            </div>
            <Accordion className={classes.spacing}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.insightSummaryPaper}
                    expandIcon={<BiChevronDown style={{color: "white"}}/>}
                >
                    <Typography>
                        MARKET INSIGHTS
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        Not Available
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Grid container className={classes.spacing}>
                <Grid item xs={3}>
                    <Paper variant="outlined" className={classes.paperPadding}>
                        <div className={classes.rowFlex}>
                            <Typography color="textSecondary">
                                Sales Turnover
                            </Typography>
                            <HiOutlineDotsVertical/>
                        </div>
                        <div className={classes.rowFlex}>
                            <div>
                                <Typography variant="h6" style={{fontWeight: "bold"}}>
                                    Rp 3,600,000
                                </Typography>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <FiArrowDown style={{color: "red", fontWeight: "bold"}}/>
                                    <Typography variant="caption">
                                        <span style={{color: "red", fontWeight: "bold"}}>13.8%</span> last period in products sold
                                    </Typography>
                                </div>
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
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} endIcon={<BiChevronDown/>} variant="outlined" style={{marginRight: "10px"}}>
                                    <Typography variant="caption">{graphMenu}</Typography>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleChangeMenu("Last 2 Months")}>Last 2 Months</MenuItem>
                                    <MenuItem onClick={() => handleChangeMenu("Last 4 Months")}>Last 4 Months</MenuItem>
                                    <MenuItem onClick={() => handleChangeMenu("Last 6 Months")}>Last 6 Months</MenuItem>
                                </Menu>
                                <HiOutlineDotsVertical/>
                            </div>
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