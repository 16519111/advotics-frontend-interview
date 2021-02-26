import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Avatar, Paper, Grid, Divider, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { HiOutlineCalendar, HiOutlineDotsVertical } from "react-icons/hi";
import 'react-day-picker/lib/style.css';

const styles = theme => ({
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
    greenButton: {
        backgroundColor: "#37B04C",
        color: "white",
        '&:hover': {
            backgroundColor: "#37B04C",
            color: "white"
        },
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
        alignItems: "flex-start",
        marginRight: theme.spacing(2)
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
    buttonText: {
        textAlign: "left",
        backgroundColor: "black"
    },
    calendarDivider: {
        marginTop: "3px",
        marginBottom: "3px",
        clear: "both",
        display: "block",
        width: "90%",
        marginLeft: "8px",
        marginRight: "8px"
    },
    spacingPaper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    spacingIcon: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        fontSize: 18
    }
  });

class FilterCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      resetDays: [],
      selectedDays: [],
      period: "",
      accordionExpanded: false,
    };
  }

  componentDidMount() {
    const yesterday = new Date();
    const lastSevenDays = new Date();
    const tempDate = new Date();
    let tempNewDate = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    lastSevenDays.setDate(yesterday.getDate() - 7)
    this.setState({ period: `${this.convertDate(lastSevenDays)} - ${this.convertDate(yesterday)}` })
    let selectedDays = this.state.selectedDays;
    for(let i=1;i<=7;i++) {
        tempNewDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() - i) 
        selectedDays.push(tempNewDate)  
    }
    this.setState({ selectedDays, resetDays: selectedDays });
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }

  handleFilter = (type) => {
    let selectedDays = this.state.selectedDays;
    let period = "";
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    const tempDate = new Date();
    let tempNewDate = new Date();
    if(type === "Yesterday") {
        selectedDays = [];
        selectedDays.push(yesterday)
        period = this.convertDate(yesterday);
    } else if (type === "Last 7 Days") {
        selectedDays = [];
        for(let i=1;i<=7;i++) {
            tempNewDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() - i) 
            selectedDays.push(tempNewDate)  
        }
        period = `${this.convertDate(tempNewDate)} - ${this.convertDate(yesterday)}`;
    } else if (type === "Last 30 Days") {
        selectedDays = [];
        for(let i=1;i<=30;i++) {
            tempNewDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() - i) 
            selectedDays.push(tempNewDate)  
        }
        period = `${this.convertDate(tempNewDate)} - ${this.convertDate(yesterday)}`;
    } else if (type === "This Month") {
        selectedDays = [];
        for(let i=1;i<tempDate.getDate();i++) {
            tempNewDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() - i) 
            selectedDays.push(tempNewDate)  
        }
        period = `${this.convertDate(tempNewDate)} - ${this.convertDate(yesterday)}`;
    }
    this.setState({ selectedDays, period });
  }

  convertDate = (d) => {
    let stringDate = d.toString()
    var parts = stringDate.split(" ");
    var months = {Jan: "January",Feb: "February",Mar: "March",Apr: "April",May: "May",Jun: "June",Jul: "July",Aug: "August",Sep: "September",Oct: "October",Nov: "November",Dec: "December"};
    return parts[2]+" "+months[parts[1]]+" "+parts[3];
   }

   handleAccordionChange = (event, expanded) => {
       if(!expanded) {
            this.setState({ accordionExpanded: false, selectedDays: this.state.resetDays })
       } else {
        this.setState({ accordionExpanded: true })
       }
   }

   handleApplyClicked = () => {
    this.setState({ accordionExpanded: false, resetDays: this.state.selectedDays })
   }

  render() {
      const { classes, children, className, ...other } = this.props;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1)
    return (
        <Accordion className={classes.spacing} onChange={this.handleAccordionChange} expanded={this.state.accordionExpanded}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className={classes.filterPaper}>
                    <HiOutlineCalendar className={classes.spacingIcon} />
                    <Typography className={classes.spacingPaper}>
                        Period
                    </Typography>
                    <Typography className={classes.spacingPaper}>
                        {this.state.period}
                    </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div className={classes.columnFlex}>
                        <Button>Today</Button>
                        <Divider className={classes.calendarDivider}/>
                        <Button onClick={() => this.handleFilter("Yesterday")}>Yesterday</Button>
                        <Divider className={classes.calendarDivider}/>
                        <Button onClick={() => this.handleFilter("Last 7 Days")}>Last 7 Days</Button>
                        <Divider className={classes.calendarDivider}/>
                        <Button onClick={() => this.handleFilter("Last 30 Days")}>Last 30 Days</Button>
                        <Divider className={classes.calendarDivider}/>
                        <Button onClick={() => this.handleFilter("This Month")}>This Month</Button>
                        <Divider className={classes.calendarDivider}/>
                        <Button>Custom</Button>
                        <Button className={classes.greenButton} onClick={() => this.handleApplyClicked()}>Apply</Button>
                    </div>
                    <Divider orientation="vertical" style={{height: "100%", backgroundColor: "#d3d3d3"}}/>
                    <DayPicker
                    selectedDays={this.state.selectedDays}
                    onDayClick={this.handleDayClick}
                    disabledDays={[
                        {
                        after: yesterday,
                        },
                    ]}
                    numberOfMonths={2}
                    />
                </div>
            </AccordionDetails>
        </Accordion>
    );
  }
}

FilterCalendar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(FilterCalendar);