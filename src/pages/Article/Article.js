import React, { Component } from 'react';
import axios from 'axios';
import { useParams, withRouter } from 'react-router-dom';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;

    axios
      .get('https://ajax-fdba16.appdrag.site/api/getApiId', {
        params: {
          id: params.id,
          AD_PageNbr: '1',
          AD_PageSize: '500'
        }
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.Table[0]);
        this.setState({
          data: response.data.Table[0]
        });
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 shadow rounded-3">
            {data && (
              <>
                <div className="col-10 bg-light shadow rounded-4 m-3 p-3"></div>
                <div>{data.id}</div>
                <div className="text-center">{data.Title}</div>
                <p className="p my-4">{data.Articles}</p>
                <img src={data.Image} alt="" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

