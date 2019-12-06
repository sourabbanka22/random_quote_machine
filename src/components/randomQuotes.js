import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchQuotes, newQuote } from "../actions/index";
import Connecting from "./connecting";

import { Grid, Card, Button, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  color: 'black',
  height: 100,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

class RandomQuotes extends Component {
  constructor() {
    super();
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuotes();
    this.getNewQuote();
    console.log(this.props);
  }

  getNewQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * 102);
    this.props.newQuote(randomQuoteIndex);
  }
  render() {
    if (this.props.loading) {
      return <Connecting />;
    }
    const { quote, author } = this.props.quotes[this.props.randomNumber];
    return (
          <Grid style={{display: 'flex', height: '100vh', alignItems: 'center'}} justify="center" container>
              <Grid xs={11} lg={8} item >
              {
                  <Card id="quote-box">
                      <CardContent style={styles}>
                          <Typography id="text" align="center">
                              {quote}
                          </Typography>
                          <Typography align="right">
                              <span id="author"> ~ {author}</span>
                          </Typography>
                      </CardContent>
                      <CardActions style={style}>
                        <Grid container sm={12}>
                          <Grid item sm={10} >
                          <IconButton
                            id="tweet-quote"
                            target="_blank"
                            href={encodeURI('https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' + quote + ' ~' + author + " ")}
                            >
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </IconButton>
                          </Grid>
                          <Grid item sm >
                          <Button id="new-quote" size="small" style={style} onClick={this.getNewQuote} color="secondary">Next Quote</Button>
                          </Grid>
                        </Grid>
                      </CardActions>
                  </Card>
              }
              </Grid>
          </Grid>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.data,
  randomNumber: state.quotes.randomNumber,
  loading: state.quotes.loading,
  randomColor: state.quotes.colors
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchQuotes,
      newQuote
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomQuotes);