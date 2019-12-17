import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  makeStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import Filter from "./Filter";
import { connect } from "react-redux";
import { setGamesVisibilityFilter } from "../../Redux/actions/gamesAction";
import { gamesVisibilityFilters } from "../../Redux/reducers/gamesReducer";

const useStyles = makeStyles({
  root: props => ({
    backgroundColor: props.palette.primary.dark,
    maxWidth: 270
  })
});

const VisibilityFilters = ({
  currentFilter,
  setGamesVisibilityFilter: setFilter
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...theme });

  return (
    <ExpansionPanel className={classes.root} defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore color="secondary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color="secondary">Filter Games</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <Filter
            text="All"
            filter={gamesVisibilityFilters.ALL}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="All without ignored"
            filter={gamesVisibilityFilters.ALL_NOT_IGNORED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="Whitelisted"
            filter={gamesVisibilityFilters.WHITELISTED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
          <Filter
            text="Ignored"
            filter={gamesVisibilityFilters.IGONRED}
            currentFilter={currentFilter}
            setFilter={setFilter}
          />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const mapStateToProps = state => ({
  currentFilter: state.games.visibilityFilter
});

export default connect(mapStateToProps, { setGamesVisibilityFilter })(
  VisibilityFilters
);
